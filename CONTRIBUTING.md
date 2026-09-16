# Contributing
Thanks for helping improve AI Development Mode.
AIDM is intended to be easy to understand, vendor-neutral, and stable enough that projects can use its badge without constantly reclassifying themselves.

## Good contributions
Useful contributions include:

- clearer definitions that reduce ambiguity,
- real-world examples and edge cases,
- accessibility improvements to the website,
- schema/tooling fixes,
- translations,
- and evidence that a mode boundary is confusing in practice.

## Changing mode meanings
Changes to the meaning of a headline mode require special care because repositories may already rely on the definition.

A proposal SHOULD include:

1. the ambiguity/problem,
2. concrete workflow examples,
3. the proposed wording,
4. expected effect on existing declarations,
5. and whether the change is breaking.

During the 0.x draft period, maintainers may refine definitions, but the preference is to add clarifying examples rather than rename or reorder modes.

## Pull requests

- Keep the specification concise.
- Avoid vendor-specific language in normative definitions.
- Do not introduce numeric scoring or quality implications.
- Update `CHANGELOG.md` for normative changes.
- Update the JSON Schema and examples when relevant.

## Development
The website is plain HTML/CSS/JavaScript and has no build step. Open `docs/index.html` locally or serve the repository with any static HTTP server.

Validate example declarations with:

```bash
python tools/check-declaration.py examples/detailed.aidm.json
```

## Conduct
Participation is governed by [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).
