# Frequently Asked Questions

## Is Autonomous worse than Directed or Assistive?
No. AIDM modes are descriptive, not a quality ranking. They say how development work was organized, not whether the resulting software is good, safe, maintainable, original, or trustworthy.

## Why not use percentages?
“60% AI-written” sounds precise but usually is not. Generated code may be edited, reorganized, rewritten, reviewed, or prompted through many iterations. Planning, debugging, testing, and architectural decisions also matter even when they do not map to lines of code. AIDM therefore describes workflow and agency.

## Why not use numeric levels?
The modes *are* ordered, from Autonomous down to Incidental, by how much agency AI has. What AIDM avoids is attaching numbers to that order. Numbers imply meaningful distances, invite averaging, and drift into being read as scores. Named modes keep the order useful for classification while making it harder to misuse as a rating.

## Why would a project declare honestly?
Because an accurate declaration is useful to the project itself. It tells contributors what workflow and review to expect, lets adopters calibrate their own review, and replaces speculation about AI use with a statement the project controls. Since no mode is ranked or colored as better, there is nothing to gain by understating AI involvement, and misdeclaring risks credibility once contributors see the real workflow. See the specification's "Why declare honestly" section.

## How does AIDM relate to commit trailers, PR disclosure, or SPDX?
They describe different things. Commit trailers and pull-request disclosure describe AI involvement in one change. SPDX's AI profile describes AI models shipped inside the software. AIDM describes the typical workflow of the whole project. They complement each other, and AIDM requires none of them. See the specification's "Relationship to other conventions" section.

## Does using Copilot/autocomplete automatically mean Incidental?
Not necessarily. If autocomplete is the only AI use and it is occasional/local, Incidental is likely appropriate. If an AI assistant materially shapes design or implements bounded tasks, another mode may fit better.

## Does AI-generated documentation count?
It can, but classification should reflect the typical substantive software-development workflow. A repository whose code is entirely human-developed but whose README was polished by AI would generally remain Incidental.

## Does AI reviewing human code count as AI-assisted development?
Yes, if it is used materially and intentionally. The profile's `review` field can make this explicit. The headline mode still depends on the overall workflow.

## What if different contributors use AI differently?
Use the typical workflow for substantive changes if one clearly dominates. If materially different workflows are common, use Mixed or separate declarations by component/release/contribution policy.

## What if my workflow changes?
Update the current declaration and, when useful, retain historical declarations by release. AIDM is intended to describe the actual process, not permanently label a repository.

## Is AIDM a certification?
No. It is a self-declared transparency convention. It does not independently verify claims.

## Does AIDM establish legal authorship or copyright?
No. Those questions depend on jurisdiction and circumstances. AIDM is not legal advice and deliberately avoids making authorship determinations.

## Do I need to name the AI model or vendor?
No. Tool disclosure is optional. AIDM aims to remain useful even as tools and model names change quickly.

## Can organizations adopt AIDM in contribution guidelines?
Yes. A project may ask contributors to declare a mode in pull requests, require `.aidm.json` at repository level, or use AIDM alongside more detailed internal governance. AIDM itself does not prescribe a contribution policy.

## Why is there a Mixed mode?
Because averaging fundamentally different workflows hides information. Mixed is a signal to look at the profile or scoped declarations rather than pretending a single point on a spectrum captures the project.

## Who created this?
AI Development Mode is an open project created as part of **Astzweig's Social Contribution efforts** and is intended to be community-developed.
