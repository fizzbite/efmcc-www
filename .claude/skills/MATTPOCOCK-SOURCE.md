# Source: Matt Pocock's skills

Vendored from [mattpocock/skills](https://github.com/mattpocock/skills) by Matt Pocock,
licensed under MIT (see `MATTPOCOCK-LICENSE` in this folder).

- Upstream commit: `5863806dd4e15c63174bee4e7515a4256792ecfa` (plugin `mattpocock-skills` v1.3.2, 2026-11-12)
- Copied: the 27 skills listed in upstream `.claude-plugin/plugin.json`, each folder copied verbatim
  from `skills/engineering/<name>/` or `skills/productivity/<name>/` into `.claude/skills/<name>/`.
- Not copied: `skills/in-progress/` (beta, upstream excludes them from the plugin) and `skills/misc/`
  (not promoted upstream; mostly TypeScript/Husky/git-hook setup that doesn't fit this site).

Skills copied:

- Engineering: ask-matt, code-review, codebase-design, diagnosing-bugs, domain-modeling, grill-with-docs,
  implement, implement-spec, improve-codebase-architecture, pr, prototype, research, retro,
  setup-matt-pocock-skills, tdd, to-spec, to-tickets, triage, wayfinder, wizard
- Productivity: grill-me, grilling, handoff, teach, to-questionnaire, wait-what, writing-for-agents

## Notes for reviewers

- The skills are prompt text only. No hooks, no telemetry, no install scripts, nothing that downloads or
  runs remote code.
- Two shell files are templates the agent copies and edits, never run as shipped:
  `diagnosing-bugs/scripts/hitl-loop.template.sh` (prompts a human for repro steps) and
  `wizard/template.sh` (a step-by-step terminal wizard; it can write values to `.env` and set GitHub
  Actions secrets with `gh secret set`, but only when a person runs a generated wizard).
- `improve-codebase-architecture/HTML-REPORT.md` tells the agent to build a local report page that loads
  Tailwind and Mermaid from public CDNs.
- `agents/openai.yaml` in each folder is Codex config, ignored by Claude Code. Kept so folders diff cleanly
  against upstream.
- Name overlaps: `code-review` shares its name with Claude Code's built-in `/code-review`, and `grill-me`
  duplicates the built-in grill-me skill (upstream's `grill-me` just calls `grilling`). `prototype` and
  `research` may also overlap with built-ins. Upstream won't rename them; rename a folder and its
  `name:` field here if a clash gets in the way.
- Several engineering skills assume an issue tracker and GLOSSARY.md / ADR layout; run
  `/setup-matt-pocock-skills` once before using to-spec, to-tickets, triage or wayfinder.

To update: copy the same folders from a newer upstream commit and update the hash above.
