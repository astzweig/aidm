# Adopting AI Development Mode
AIDM is intentionally lightweight. A project can adopt it in under a minute with only a README badge, or add a machine-readable profile for more detail.

## Option A — Badge only
Choose the mode that best describes your typical substantive development workflow, then add a badge.

### Autonomous
```markdown
[![AI Development: Autonomous](https://img.shields.io/badge/AI%20Development-Autonomous-f97316)](https://aidevmode.org/)
```

### Supervised
```markdown
[![AI Development: Supervised](https://img.shields.io/badge/AI%20Development-Supervised-f97316)](https://aidevmode.org/)
```

### Collaborative
```markdown
[![AI Development: Collaborative](https://img.shields.io/badge/AI%20Development-Collaborative-f97316)](https://aidevmode.org/)
```

### Directed
```markdown
[![AI Development: Directed](https://img.shields.io/badge/AI%20Development-Directed-f97316)](https://aidevmode.org/)
```

### Assistive
```markdown
[![AI Development: Assistive](https://img.shields.io/badge/AI%20Development-Assistive-f97316)](https://aidevmode.org/)
```

### Incidental
```markdown
[![AI Development: Incidental](https://img.shields.io/badge/AI%20Development-Incidental-f97316)](https://aidevmode.org/)
```

### None
```markdown
[![AI Development: None](https://img.shields.io/badge/AI%20Development-None-f97316)](https://aidevmode.org/)
```

### Mixed
```markdown
[![AI Development: Mixed](https://img.shields.io/badge/AI%20Development-Mixed-f97316)](https://aidevmode.org/)
```

## Option B — Badge + `.aidm.json`

Copy [`examples/detailed.aidm.json`](examples/detailed.aidm.json) into the root of your project as `.aidm.json` and edit it.

Recommended README text:

```markdown
## AI-assisted development
This project declares its AI development workflow using the
[AI Development Mode specification](https://aidevmode.org/).
See [.aidm.json](.aidm.json) for the detailed profile.
```

## Option C — Per-release or per-component declarations
If your workflow changes significantly over time, include scope information:

```json
{
  "spec_version": "0.1.1",
  "mode": "directed",
  "scope": {
    "type": "release",
    "value": "2.x"
  }
}
```

For a monorepo with materially different workflows, either:

- publish separate `.aidm.json` files inside components, or
- use `mixed` at repository level and describe component-specific modes in `notes`.

## How to classify yourself
Ask these questions in order:

1. Was generative AI intentionally used for substantive development? If **no**, choose **None**.
2. Could AI substantially build the project from the initial goal without intermediate steering? Choose **Autonomous**.
3. Does AI routinely own features or major multi-step tasks between human checkpoints? Choose **Supervised**.
4. Do human and AI routinely decide and build things together in short feedback loops? Choose **Collaborative**.
5. Does the human define the architecture/approach and delegate bounded tasks? Choose **Directed**.
6. Does the human perform core implementation while AI mainly assists? Choose **Assistive**.
7. Is AI use only occasional/local? Choose **Incidental**.
8. Are two materially different workflows both common? Choose **Mixed** or split the scope.

If you are truly between two neighboring modes, use the one with greater AI autonomy and add detail rather than inventing an intermediate numeric level.

## Validate a declaration
This package includes a dependency-free validator:

```bash
python tools/check-declaration.py .aidm.json
```

The formal JSON Schema is available at [`schema/aidm.schema.json`](schema/aidm.schema.json).

## Recommended maintenance
Review the declaration at releases or whenever your development process changes materially. The optional `last_reviewed` field helps readers see when the declaration was reconsidered.
