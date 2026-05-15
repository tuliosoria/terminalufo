# AGENTS.md — Terminal UFO

Working notes for AI coding agents on this repository.

## Skills to consult

Before non-trivial work in this repo, invoke the relevant skill from the libraries below using your platform's skill loader (Copilot CLI: `skill` tool · Claude Code: `Skill` tool · Gemini CLI: `activate_skill`).

### 1. obra/superpowers — process & engineering discipline
Source: https://github.com/obra/superpowers

Use these for *how* to work:

- `using-superpowers` — load first to learn skill discovery rules
- `brainstorming` — before any creative work or new feature
- `writing-plans` / `executing-plans` — for multi-step tasks
- `test-driven-development` — before writing implementation code
- `systematic-debugging` — for any bug or unexpected behavior
- `verification-before-completion` — before claiming work done
- `requesting-code-review` / `receiving-code-review`
- `using-git-worktrees` — for isolated feature work
- `dispatching-parallel-agents` / `subagent-driven-development`
- `finishing-a-development-branch`
- `writing-skills`

### 2. vercel-labs/agent-skills — React + Next.js performance
Source: https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices

Use this for *what* to build in this Next.js 16 codebase. The skill ships 70 rules across 8 categories:

| Priority | Category | Rule prefix |
|----------|----------|-------------|
| 1 | Eliminating Waterfalls | `async-` |
| 2 | Bundle Size Optimization | `bundle-` |
| 3 | Server-Side Performance | `server-` |
| 4 | Client-Side Data Fetching | `client-` |
| 5 | Re-render Optimization | `rerender-` |
| 6 | Rendering Performance | `rendering-` |
| 7 | JavaScript Performance | `js-` |
| 8 | Advanced Patterns | `advanced-` |

Invoke `vercel-react-best-practices` whenever you:

- Add or refactor a React component or Next.js route
- Touch data fetching (server or client)
- Adjust bundle composition, dynamic imports, or `next/image`
- Investigate a performance regression

## Project conventions

- **Stack**: Next.js 16 (App Router, Turbopack) · Tailwind CSS · static export to `out/`.
- **Tests**: `npm test` (Node's built-in test runner over `tests/*.test.mjs`). Add a contract test for any new content module.
- **Build**: `npm run build` must exit 0 before any deploy.
- **Audit**: `npm audit --omit=dev` must show 0 vulnerabilities.
- **Deploy**: AWS Amplify app `dv7guelina4o2`, branch `main`. After build, zip `out/`, `aws amplify create-deployment`, PUT zip to `zipUploadUrl`, `aws amplify start-deployment`, poll until `SUCCEED`.
- **Live verify** every deploy by fetching https://www.terminalufo.com and asserting the changed strings render.
- **Commits** include the trailer:
  `Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>`

## Content rules

- `/files` and `/varginha` may freely mix real declassified material (`realFiles`) with in-game fiction (`fictionFiles`). Fiction entries **must** carry a `fictionNotice` and never use real witness/investigator names. The contract tests in `tests/files-content.test.mjs` enforce this.
- Tone: cold, sparse, monospace. No exclamation marks. No marketing superlatives.
