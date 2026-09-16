#!/usr/bin/env python3
"""Dependency-free basic validator for AIDM .aidm.json declarations.

This checks the required fields and AIDM enums. For full JSON Schema validation,
use schema/aidm.schema.json with a Draft 2020-12 compatible validator.
"""
import json
import re
import sys
from datetime import date
from pathlib import Path

MODES = {"autonomous","supervised","collaborative","directed","assistive","incidental","none","mixed"}
SCOPE_TYPES = {"repository","release","component","branch","period","other"}
AGENCY = {"ai-led","shared","human-led","not-applicable"}
REVIEW_FREQ = {"final","milestone","frequent","continuous","not-applicable"}
AUTONOMY = {"project","feature","task","suggestion","none"}
PROFILE_AGENCY_FIELDS = {"planning","architecture","implementation","testing","review"}

def fail(msg):
    print(f"AIDM validation error: {msg}", file=sys.stderr)
    raise SystemExit(1)

def main(path):
    p = Path(path)
    try:
        data = json.loads(p.read_text(encoding="utf-8"))
    except Exception as exc:
        fail(f"could not read JSON: {exc}")

    if not isinstance(data, dict): fail("root must be an object")
    for key in ("spec_version","mode","scope"):
        if key not in data: fail(f"missing required field: {key}")
    if not re.fullmatch(r"0\.1(?:\.\d+)?", str(data["spec_version"])):
        fail("this validator supports AIDM 0.1.x")
    if data["mode"] not in MODES: fail(f"unknown mode: {data['mode']}")
    if not isinstance(data["scope"], dict) or data["scope"].get("type") not in SCOPE_TYPES:
        fail("scope.type is missing or invalid")

    profile = data.get("profile")
    if profile is not None:
        if not isinstance(profile, dict): fail("profile must be an object")
        for field in PROFILE_AGENCY_FIELDS:
            if field in profile and profile[field] not in AGENCY:
                fail(f"profile.{field} is invalid")
        if "human_review_frequency" in profile and profile["human_review_frequency"] not in REVIEW_FREQ:
            fail("profile.human_review_frequency is invalid")
        if "autonomous_scope" in profile and profile["autonomous_scope"] not in AUTONOMY:
            fail("profile.autonomous_scope is invalid")

    if data["mode"] == "mixed" and not (data.get("profile") or data.get("notes")):
        fail("mode 'mixed' requires profile or notes")

    if "last_reviewed" in data:
        try: date.fromisoformat(data["last_reviewed"])
        except Exception: fail("last_reviewed must be YYYY-MM-DD")

    print(f"Valid AIDM declaration: {p} ({data['mode']})")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: check-declaration.py PATH", file=sys.stderr)
        raise SystemExit(2)
    main(sys.argv[1])
