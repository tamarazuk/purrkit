# Contributing

Thanks for your interest in contributing to PurrKit! This document covers development details and monorepo conventions.

## Development Setup

```bash
pnpm install
pnpm dev
```

Common tasks:
```bash
pnpm lint
pnpm check-types
pnpm build
```

## General Contribution Notes

- Use shared ESLint and TypeScript configs (`@purrkit/eslint-config`, `@purrkit/typescript-config`).
- Prefer exact versions for internal packages (see [Dependency Versions](#dependency-versions)).
- Keep configs and scripts aligned with Turbo tasks (`build`, `dev`, `lint`, `check-types`).

## Version Notes

- The CMS app is pinned to Next.js 15.5.9 until Cloudflare fully supports Next 16 in `@opennextjs/cloudflare`. See https://github.com/opennextjs/opennextjs-cloudflare/issues/1049. This also satisfies the current Payload CMS peer dependency.

## Experiments

We keep experiments in a dedicated folder so they can still use monorepo tooling without polluting core apps.

- `experiments/active/*` is part of the workspace and uses standard scripts (`lint`, `check-types`).
- `experiments/scratch/*` is also in the workspace but ignored by git and uses non-standard script names so Turbo doesn't pick them up by default.
- `experiments/archived/*` is excluded from the workspace.

Create a new experiment:
```bash
pnpm experiment:new my-idea --scratch
pnpm experiment:new my-idea --active
pnpm experiment:new landing-page --active --template=next
```

## Dependency Versions

We pin exact dependency versions in the monorepo (`apps/`, `packages/`, `templates/`) for reproducibility and cache stability.  
When exporting templates for end users, caret ranges are acceptable so they receive patch/minor updates without requiring a new template release.  
Reference: [npm semantic versioning](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept)

## Pull Requests

- Keep changes focused and small where possible.
- Add/update tests when behavior changes.
- Note any manual testing performed.
- If you add a new package, align scripts to Turbo task names.

## Docs and References

- `README.md` has product overview and quick start.
- `AGENTS.md` contains agent and scaffolding guidance.
