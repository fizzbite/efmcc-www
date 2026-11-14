# Source

Vendored from [pbakaus/impeccable](https://github.com/pbakaus/impeccable) by Paul Bakaus,
licensed under Apache 2.0 (see `LICENSE` and `NOTICE.md` in this folder).

- Upstream commit: `1995764b4936f2bfbf4eb719cb37b384a45ceacb` (skill v4.9.1, engine 0.1.24)
- Copied from `plugin/skills/impeccable/` (the skill) and `plugin/agents/` (into `.claude/agents/`).
- Not copied: the plugin's `hooks/hooks.json` (SessionStart, PostToolUse on Edit/Write, and Stop hooks
  that run the engine automatically). Add them later with `/impeccable hooks on` if wanted.

## Notes for reviewers

`scripts/impeccable` is a launcher for a native engine binary that is not in this repo. On first
run it downloads `impeccable-<os>-<arch>` from the upstream GitHub releases (tag `engine-v0.1.24`)
into `~/.impeccable/bin/` and refuses to run it unless its SHA-256 matches `scripts/engine-checksums.txt`.
If the launcher fails, the skill falls back to reading PRODUCT.md / DESIGN.md directly.

The engine can contact impeccable.style (direction "roll" pings, optional sign-in features).
Opt out with `IMPECCABLE_NO_TELEMETRY=1`, `DO_NOT_TRACK=1`, or `"telemetry": false` in `.impeccable/config.json`.

To update: copy the same folders from a newer upstream commit and update the hash above.
