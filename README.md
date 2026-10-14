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
- Packets: in `packets/` (listed below). Scores: stored with the artifact on claude.ai, not in this repo.

## Nominee packets

Click a name to open that nominee's merged packet (one PDF with every document they
submitted, bookmarked by section). The same files are in the `packets/` folder.

| Nominee | Department | Division / School | Pages | Artifacts | LORs | Notes |
| --- | --- | --- | ---: | ---: | ---: | --- |
| [Arpit Gaind](packets/Arpit%20Gaind.pdf) | Undergraduate Education | Undergraduate Education | 27 | 5 | 3 |  |
| [Ashley Hannah](packets/Ashley%20Hannah.pdf) | Art | Arts and Architecture | 24 | 3 | 2 |  |
| [Brendan Russ](packets/Brendan%20Russ.pdf) | Chemical and Biomolecular Engineering | Engineering | 21 | 5 | 3 |  |
| [Charlotte Bryant](packets/Charlotte%20Bryant.pdf) | Nursing | Nursing | 26 | 4 | 2 |  |
| [Christian Gerard Capuno](packets/Christian%20Gerard%20Capuno.pdf) | Integrative Biology and Physiology | Life Sciences | 23 | 5 | 3 |  |
| [Christina Toma](packets/Christina%20Toma.pdf) | Education | Education & Information Studies | 10 | 0 | 3 | Packet incomplete: Nominee Statement, Teaching Philosophy and all Teaching Artifacts could not be retrieved. |
| [Daisy Mugodzeri](packets/Daisy%20Mugodzeri.pdf) | Civil and Environmental Engineering | Engineering | 24 | 5 | 3 |  |
| [Dominique Stumbaugh](packets/Dominique%20Stumbaugh.pdf) | Atmospheric and Oceanic Sciences | Physical Sciences | 20 | 5 | 3 |  |
| [Dzmitry Vaido](packets/Dzmitry%20Vaido.pdf) | Physics and Astronomy | Physical Sciences | 25 | 3 | 3 |  |
| [Eilam Morag](packets/Eilam%20Morag.pdf) | Electrical Engineering | Engineering | 23 | 5 | 3 |  |
| [Elayne Stecher](packets/Elayne%20Stecher.pdf) | Political Science | Social Sciences | 31 | 4 | 3 |  |
| [Gabriella Sigal](packets/Gabriella%20Sigal.pdf) | Integrative Biology and Physiology | Life Sciences | 23 | 4 | 3 |  |
| [Garret May](packets/Garret%20May.pdf) | Materials Science and Engineering | Engineering | 24 | 5 | 3 |  |
| [Gillian Haigh](packets/Gillian%20Haigh.pdf) | Art | Arts and Architecture | 21 | 4 | 3 |  |
| [Glenn Nurwono](packets/Glenn%20Nurwono.pdf) | Chemistry and Biochemistry | Physical Sciences | 24 | 4 | 3 | Teaching Artifact 1 (syllabus) is being added to the packet. |
| [Gloria Hyun](packets/Gloria%20Hyun.pdf) | Civil and Environmental Engineering | Engineering | 18 | 2 | 2 |  |
| [Hannah Widmaier](packets/Hannah%20Widmaier.pdf) | Philosophy | Humanities | 19 | 5 | 1 |  |
| [Isaias Roberson](packets/Isaias%20Roberson.pdf) | Molecular, Cell, and Developmental Biology | Life Sciences | 24 | 4 | 3 |  |
| [Joshua Goetz](packets/Joshua%20Goetz.pdf) | Political Science | Social Sciences | 19 | 5 | 2 |  |
| [Katarina Yuan](packets/Katarina%20Yuan.pdf) | English | Humanities | 24 | 1 | 2 |  |
| [Katherine Hernandez](packets/Katherine%20Hernandez.pdf) | Institute of the Environment and Sustainability | Life Sciences | 21 | 3 | 2 |  |
| [Katherine Smock](packets/Katherine%20Smock.pdf) | Sociology | Social Sciences | 19 | 5 | 3 |  |
| [Marianne Gutierrez](packets/Marianne%20Gutierrez.pdf) | Nursing | Nursing | 18 | 3 | 2 |  |
| [Maryam Ghamarchehreh](packets/Maryam%20Ghamarchehreh.pdf) | Civil and Environmental Engineering | Engineering | 56 | 4 | 2 |  |
| [Michelle De Luna](packets/Michelle%20De%20Luna.pdf) | Geography | Social Sciences | 23 | 5 | 3 |  |
| [Min Kyu Lee](packets/Min%20Kyu%20Lee.pdf) | Chemistry and Biochemistry | Physical Sciences | 23 | 3 | 2 |  |
| [Nallely Valenzuela](packets/Nallely%20Valenzuela.pdf) | Political Science | Social Sciences | 21 | 4 | 2 |  |
| [Narayan Gopinathan](packets/Narayan%20Gopinathan.pdf) | Institute of the Environment and Sustainability | Physical Sciences | 87 | 5 | 3 |  |
| [Nicholas Hu](packets/Nicholas%20Hu.pdf) | Mathematics | Physical Sciences | 20 | 3 | 3 |  |
| [Parnian Hemmati](packets/Parnian%20Hemmati.pdf) | Mechanical and Aerospace Engineering | Engineering | 21 | 5 | 3 |  |
| [Passion Lord](packets/Passion%20Lord.pdf) | Education | Education & Information Studies | 25 | 3 | 3 |  |
| [Raquel Zandomeneghi](packets/Raquel%20Zandomeneghi.pdf) | Spanish and Portuguese | Humanities | 23 | 5 | 3 |  |
| [Roshini Agarwal](packets/Roshini%20Agarwal.pdf) | Art | Arts and Architecture | 28 | 5 | 1 |  |
| [Salem Martinez](packets/Salem%20Martinez.pdf) | English | Humanities | 23 | 1 | 2 |  |
| [Samatha Arun](packets/Samatha%20Arun.pdf) | Civil and Environmental Engineering | Engineering | 20 | 5 | 2 |  |
| [Samuel Halim](packets/Samuel%20Halim.pdf) | Civil and Environmental Engineering | Engineering | 22 | 4 | 3 |  |
| [Sebastian Solarte-Caicedo](packets/Sebastian%20Solarte-Caicedo.pdf) | Institute of the Environment and Sustainability | Life Sciences | 26 | 4 | 3 |  |
| [Shervin Nia](packets/Shervin%20Nia.pdf) | Chemistry and Biochemistry | Physical Sciences | 20 | 3 | 3 |  |
| [Thomas Lee](packets/Thomas%20Lee.pdf) | Mechanical and Aerospace Engineering | Engineering | 20 | 3 | 3 |  |
| [Tucker Allen](packets/Tucker%20Allen.pdf) | Chemistry and Biochemistry | Physical Sciences | 22 | 5 | 3 |  |
| [Wesleigh Gates](packets/Wesleigh%20Gates.pdf) | World Arts and Cultures / Dance | Arts and Architecture | 23 | 5 | 3 |  |
| [Yasmine Krings](packets/Yasmine%20Krings.pdf) | Asian Languages and Cultures | Humanities | 23 | 5 | 2 |  |
| [Yesi Camacho Torres](packets/Yesi%20Camacho%20Torres.pdf) | Social Welfare | Public Affairs | 28 | 3 | 3 |  |
| [Zackary Kiebach](packets/Zackary%20Kiebach.pdf) | English | Humanities | 23 | 1 | 3 |  |

Packets were downloaded from the Qualtrics nomination form on October 14, 2026.
Christina Toma's packet is missing 7 documents that could not be retrieved, and
Glenn Nurwono's Teaching Artifact 1 is still to be added.
