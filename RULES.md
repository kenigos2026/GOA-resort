# Project Rules & Standards

## Mindset
- Write production-ready, complete code -- no TODOs, no placeholders, no "implement here"
- No conversational filler. No apologies.
- If a prompt is ambiguous or requires an architectural decision, stop and ask before writing code

## Code Quality
- Robust error handling and graceful fallbacks on all external API/LLM calls
- Separate business logic from presentation
- Optimize for reliability over speed of writing

## Session Start Protocol
- Identify the active repo from the workspace URI
- Read the repo's context file (RULES.md, STATUS.md, PROGRESS.md, or TASKS.md)
- Confirm last completed task and next step before writing any code

## Session End Protocol
- Before finishing a session, always update `STATUS.md` and `PROGRESS.md` with the exact achievements, newly created files, and the immediate next steps for the next session.

## Workflow
- Plan first, always -- show the plan and wait for approval before execution
- Never commit without asking
- Never change DB schema without a migration file

## Memory Retention & Save Triggers
- **The "Save Memory" Command**: If the user says "save memory" (or similar), immediately pause all work and write the current session's progress, state, and next steps into `STATUS.md` and `PROGRESS.md`.
- **Pre-Commit Update**: Whenever asked to commit code to Git, the agent MUST update `STATUS.md` and `PROGRESS.md` with the latest changes *before* executing the commit command.
- **New Project Initialization**: If starting a session in a new or uninitialized repository, the agent MUST automatically create `STATUS.md`, `PROGRESS.md`, and `TASKS.md` at the root to establish the memory architecture.
- **Emergency Memory Recovery**: If the user says "Recover raw logs" or "Check Gemini Brain", the agent will specifically search the `C:\Users\ravis\.gemini\antigravity-ide\brain` directory using `grep_search` to find past chat transcripts related to the workspace.

## Project Info
- **Name**: Nature's Harmony Resort Website
- **Live URL**: (not yet deployed)
- **GitHub**: https://github.com/kenigos2026/GOA-resort
- **Stack**: Next.js 14+, Tailwind CSS, Framer Motion, Three.js, Lenis, React Hook Form + Zod
- **Node Manager**: npm
