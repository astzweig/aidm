# AI Development Mode Specification

**Version 0.1.0 — Draft**  
**Date:** 2026-09-16

## 1. Purpose
AI Development Mode (AIDM) is a self-declared convention for communicating **how human developers and generative AI systems shared agency during software development**.

AIDM is designed to answer a project-level question:

> What role did generative AI typically play in deciding, planning, implementing, testing, and reviewing this software?

It deliberately avoids line-by-line authorship claims and numerical “AI percentages.”

The key words **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** are to be interpreted as normative requirements when written in uppercase.

## 2. Design principles
An AIDM declaration:

1. **Describes process, not quality.** No mode is inherently better, safer, more skilled, or more trustworthy.
2. **Describes agency, not line count.** Editing generated code does not produce a meaningful human/AI percentage.
3. **Is tool-neutral.** The classification does not depend on a specific model, vendor, editor, or agent framework.
4. **Is understandable at a glance.** A named mode SHOULD be useful without reading a detailed profile.
5. **Can be made precise when needed.** An optional profile and scope MAY accompany the headline mode.
6. **Is a declaration, not detection.** The specification does not claim to verify whether a declaration is true.

## 3. Scope
A declaration MUST describe a scope. The scope MAY be:

- the current repository,
- a release or version,
- a component or subdirectory,
- a branch,
- or a stated development period.

If no explicit scope is shown next to a badge, the badge is understood to describe the **current repository as a whole**.

A project SHOULD update its declaration when its development workflow materially changes.

## 4. Headline modes
### 4.1 Autonomous
**Definition:** After receiving an initial goal, prompt, or specification, AI performs substantially the complete development process with little or no intermediate human direction.

Typical characteristics:

- AI performs most planning and technical decomposition.
- AI implements substantial portions or the whole project independently.
- AI runs or creates tests and iterates on failures independently.
- Human participation is mainly initiation, environmental access, and final acceptance/rejection.

A workflow does not cease to be Autonomous merely because a human launches the agent, supplies credentials, or approves the final result.

### 4.2 Supervised
**Definition:** AI independently owns substantial multi-step development work, while a human reviews meaningful milestones and can redirect the work.

Typical characteristics:

- AI may plan and implement a feature or large task end-to-end.
- Human review occurs at milestones rather than after every small step.
- AI has meaningful freedom to choose implementation details and intermediate steps.
- Humans retain authority to accept, reject, or redirect outcomes.

### 4.3 Collaborative
**Definition:** Human and AI develop the software together through frequent, iterative interaction, with both materially influencing decisions and implementation.

Typical characteristics:

- Planning and implementation are discussed in relatively small loops.
- The human reviews work frequently and actively steers direction.
- AI proposes designs, alternatives, or implementations rather than merely filling pre-specified code.
- Neither party consistently owns the entire decision/implementation process.

### 4.4 Directed
**Definition:** The human determines requirements, architecture, and implementation direction; AI is delegated bounded development tasks inside that direction.

Typical characteristics:

- Humans define the approach before delegating implementation.
- AI may write substantial code for a bounded task.
- The human decides interfaces, constraints, integration, and acceptance.
- AI autonomy is normally limited to tasks rather than features or the project as a whole.

### 4.5 Assistive
**Definition:** The human performs the core development work, while AI provides supporting assistance.

Typical characteristics:

- Human authors and structures most substantive implementation work.
- AI assists with debugging, refactoring suggestions, tests, documentation, code review, explanations, or small snippets.
- AI does not routinely own complete substantive development tasks.

### 4.6 Incidental
**Definition:** Generative AI use is occasional, local, and not materially involved in the project's technical direction or substantive implementation workflow.

Examples include:

- occasional autocomplete,
- isolated syntax or API questions,
- one-off boilerplate,
- spelling/wording assistance,
- or small edits that do not materially shape the software.

### 4.7 None
**Definition:** No generative AI was intentionally used in the declared development scope.

Traditional non-generative tooling, compilers, static analyzers, formatters, deterministic code generators, and search engines do not by themselves make a project AI-assisted.

### 4.8 Mixed
**Definition:** Two or more materially different AIDM workflows are common within the declared scope and no single headline mode honestly characterizes the project.

A project declaring Mixed MUST provide at least one of:

- an AIDM profile explaining the mixture,
- a `notes` field describing which workflows apply where, or
- separate declarations for clearly identified scopes.

Mixed SHOULD NOT be used merely because a workflow occasionally crosses a neighboring mode.

## 5. Choosing a mode
A project SHOULD classify the **typical workflow for substantive changes** during the declared scope.

Use the following decision guidance:

1. If generative AI was not intentionally used, choose **None**.
2. If AI can take the initial goal and substantially complete the project without intermediate human steering, choose **Autonomous**.
3. If AI routinely owns substantial multi-step features/tasks with milestone review, choose **Supervised**.
4. If human and AI routinely shape the approach together through frequent feedback loops, choose **Collaborative**.
5. If the human establishes the approach and delegates bounded implementation tasks, choose **Directed**.
6. If the human performs core implementation and AI mainly supports it, choose **Assistive**.
7. If AI use is only occasional/local, choose **Incidental**.
8. If distinct workflows are both common and cannot be represented by one mode, choose **Mixed** or split the scope.

If two adjacent modes fit equally well, the project SHOULD choose the mode reflecting **greater AI autonomy** and use the optional profile/notes to provide nuance. This convention favors conservative transparency without turning the modes into a score.

## 6. Optional development profile
A project MAY publish a profile to explain its mode in more detail.

The standard dimensions are:

| Field | Allowed values |
| --- | --- |
| `planning` | `ai-led`, `shared`, `human-led`, `not-applicable` |
| `architecture` | `ai-led`, `shared`, `human-led`, `not-applicable` |
| `implementation` | `ai-led`, `shared`, `human-led`, `not-applicable` |
| `testing` | `ai-led`, `shared`, `human-led`, `not-applicable` |
| `review` | `ai-led`, `shared`, `human-led`, `not-applicable` |
| `human_review_frequency` | `final`, `milestone`, `frequent`, `continuous`, `not-applicable` |
| `autonomous_scope` | `project`, `feature`, `task`, `suggestion`, `none` |

The profile dimensions are descriptive, not scores. Implementations MUST NOT derive a numeric rating from these fields and present it as an AIDM level.

## 7. Machine-readable declaration
The conventional filename is:

```text
.aidm.json
```

Minimal declaration:

```json
{
  "spec_version": "0.1.0",
  "mode": "collaborative",
  "scope": {
    "type": "repository"
  }
}
```

Detailed declaration:

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
  "tools": [
    {
      "name": "Example AI assistant",
      "purposes": ["planning", "implementation", "testing"]
    }
  ],
  "last_reviewed": "2026-09-16",
  "notes": "Maintainers review and integrate changes in short iterations."
}
```

A conforming declaration MUST contain `spec_version`, `mode`, and `scope`. Other fields are optional.

A declaration MAY include a `$schema` field pointing to the AIDM JSON Schema (`https://aidevmode.org/schema/aidm.schema.json`) for editor support.

## 8. Badge presentation
The recommended human-readable badge label is:

```text
AI Development: <Mode>
```

Examples:

```text
AI Development: Collaborative
AI Development: Directed
AI Development: None
```

Badge colors MUST NOT be standardized as a green-to-red scale or otherwise imply that one mode is “better” than another. Projects SHOULD use neutral, consistent styling across modes.

A badge SHOULD link to one of:

1. the project's `.aidm.json` declaration,
2. a project-specific explanation,
3. or the canonical AIDM specification.

## 9. Tool disclosure
Listing AI tools/models is OPTIONAL. AIDM is primarily about the workflow, not product branding.

If tools are listed, projects SHOULD describe purposes rather than implying exact code provenance. Model/version information MAY be included when useful.

## 10. Changes over time
A project MAY scope declarations by release. For example, a project can state that versions 1.x were Assistive while versions 2.x are Collaborative.

Projects SHOULD NOT rewrite historical declarations merely because their present workflow changes.

## 11. Conformance
A project is **AIDM-declared** if it:

- uses one of the defined headline modes,
- uses the mode according to this specification,
- and makes the scope reasonably clear.

A project is **AIDM-profiled** if it additionally publishes a valid `.aidm.json` declaration conforming to the provided JSON Schema.

These terms indicate format/process conformance only. They are not certifications.

## 12. Non-goals
AIDM does not attempt to:

- determine copyright ownership,
- establish legal authorship,
- verify license compliance,
- measure software quality or security,
- certify that human review was effective,
- detect AI-generated code,
- quantify developer skill,
- prescribe whether AI should be used,
- or replace project-specific contribution policies.

## 13. Versioning
The specification uses semantic versioning:

- **Major:** incompatible changes to meanings or required declaration structure.
- **Minor:** backward-compatible additions such as optional fields or guidance.
- **Patch:** clarifications and editorial corrections that do not change classification meaning.

During the `0.x` draft period, maintainers SHOULD still avoid unnecessary changes to the meanings of established modes.

## 14. Attribution
AI Development Mode is an open specification created as part of **Astzweig's Social Contribution efforts** to encourage practical transparency around AI-assisted software development.
