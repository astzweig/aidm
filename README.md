# AI Development Mode (AIDM)
[![AI Development: Collaborative](https://img.shields.io/badge/AI%20Development-Collaborative-f97316)](.aidm.json)

**A small, open specification for disclosing how humans and generative AI worked together to create software.**

AIDM gives repositories a simple README badge such as **AI Development: Collaborative**, backed by clear definitions and an optional machine-readable profile. It intentionally does **not** measure how many lines were “written by AI,” assign a quality score, or rank one workflow above another.

> **Social Contribution**  
> AI Development Mode is an open project created as part of **Astzweig's Social Contribution efforts**, with the goal of making AI-assisted software development easier to understand and discuss transparently.

**Specification version:** 0.1.0 (draft)  
**Status:** Open for early adoption and feedback

## The modes
| Mode | Short meaning |
| --- | --- |
| **Autonomous** | AI carries out substantially the whole development process after receiving the goal/specification. |
| **Supervised** | AI independently owns substantial multi-step work; humans review milestones and redirect as needed. |
| **Collaborative** | Human and AI shape decisions and implementation together in short, iterative loops. |
| **Directed** | Human defines requirements, architecture, and approach; AI executes bounded tasks. |
| **Assistive** | Human performs the core development work; AI supports with suggestions, debugging, tests, docs, etc. |
| **Incidental** | AI use is occasional and local, such as autocomplete, explanations, or small isolated edits. |
| **None** | No generative AI was intentionally used in the declared scope. |
| **Mixed** | Distinct, materially different workflows are common; the project supplies a profile or scoped declarations. |

The modes describe **workflow and agency**, not software quality, developer skill, trustworthiness, or the percentage of AI-generated code.

## Add a badge
Replace `Collaborative` with the mode that best describes your project:

```markdown
[![AI Development: Collaborative](https://img.shields.io/badge/AI%20Development-Collaborative-f97316)](https://aidevmode.org/)
```

You can also copy the bundled SVG badges from [`badges/`](badges/).

## Optional declaration file
For more detail, add `.aidm.json` to your repository:

```json
{
  "spec_version": "0.1.0",
  "mode": "collaborative",
  "scope": {
    "type": "repository"
  },
  "profile": {
    "planning": "shared",
    "architecture": "human-led",
    "implementation": "shared",
    "testing": "shared",
    "review": "human-led",
    "human_review_frequency": "continuous",
    "autonomous_scope": "task"
  },
  "last_reviewed": "2026-09-16"
}
```

See [`schema/aidm.schema.json`](schema/aidm.schema.json), [`ADOPTION.md`](ADOPTION.md), and the [`examples/`](examples/) directory.

## Which mode should I choose?
Classify the **typical workflow for substantive changes** in the declared scope. Do not classify based on an exceptional one-off task. If two adjacent modes fit equally well, choose the mode that reflects **greater AI autonomy** and explain the nuance in `.aidm.json`. If materially different workflows are common, use **Mixed** or separate scoped declarations instead of averaging them.

## What AIDM is not
AIDM is not an AI detector, authorship tracker, compliance certification, security guarantee, quality mark, or moral judgment. It does not attempt to infer provenance from source code. AIDM is a **self-declared transparency convention**.

## This project's own declaration
AIDM practices what it describes. This repository is declared **Collaborative**; see [`.aidm.json`](.aidm.json) for the profile.

## Project files

- [`SPECIFICATION.md`](SPECIFICATION.md) — normative specification
- [`ADOPTION.md`](ADOPTION.md) — copy/paste adoption guide
- [`FAQ.md`](FAQ.md) — common questions
- [`schema/aidm.schema.json`](schema/aidm.schema.json) — JSON Schema
- [`examples/`](examples/) — example declarations and badge snippets
- [`docs/`](docs/) — GitHub Pages static website
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — how to propose changes
- [`GOVERNANCE.md`](GOVERNANCE.md) — lightweight governance/versioning

## License
AIDM, including the specification, examples, badges, and website, is released under the [MIT License](LICENSE) so it can be reused widely.
