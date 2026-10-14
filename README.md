# DTA 2026 TA Review

Reviewer portal for the 2026 Distinguished Teaching Award (Teaching Assistants).
Reviewers score each of the 44 nominees against the award rubric; the coordinator
sees a live summary of all scores.

**Confidential.** This repo contains nominee names and departments. Keep it private.

## How it runs

The whole portal is one file, `index.html`. It is published as a Claude artifact
and only works fully there: saving scores, the live summary, the CSV export and the
discussion brief use the artifact's built-in capabilities (`window.claude.use(...)`),
which exist only when the page is opened on claude.ai.

Opened anywhere else (a browser, GitHub Pages) the page loads, but scores are kept
in that browser only and the live summary does not appear.

## Making changes

1. Edit `index.html` here in Cursor.
2. Commit and push.
3. Ask Claude to republish the portal from the updated file (or paste the file into
   the Claude conversation that manages it). Pushing to GitHub alone does not change
   the live portal.

## Access rules (set when the artifact is published)

| Data | Who can read | Who can write |
| --- | --- | --- |
| `scores/<reviewer id>` | that reviewer, plus Editors and the owner | that reviewer |
| `packets/links` | everyone with access | Editors and the owner |

Share the portal with reviewers as **Contributor**. Give **Editor** only to people
who should see everyone's scores and the live summary.

## What's in the data

- Nominee list, rubric wording and packet details: inside `index.html`.
- Scores and packet links: stored with the artifact on claude.ai, not in this repo.
