# diegonava150.github.io

My portfolio → **https://diegonava150.github.io**

A single page of plain HTML, CSS and JavaScript. No build step, no framework, no
dependencies — `index.html` is the whole site, and GitHub Pages serves it directly from
`main`. That is a deliberate choice for a page this size: nothing here needs a toolchain,
and a portfolio that cannot rot is worth more than one that demonstrates a bundler.

## What's in the repo

| | |
| --- | --- |
| `index.html` | The site. Styles and scripts are inline, in that one file. |
| `og-image.png` | The 1200×630 social card LinkedIn and Slack render when the link is shared. |
| `Diego-Navarro-CV.pdf` | Linked from the "Download CV" button. |

## Notes for future me

**The social card carries text.** `og-image.png` has the name, the role line and the
availability pill drawn into the pixels, so changing a title in `index.html` does not
change what a share preview shows. Both have to move together — this was already missed
once, and the old role label kept appearing on LinkedIn after the page itself had been
corrected.

**The avatar is a monogram, not a placeholder.** `DN` in `index.html` and on the social
card are the same mark and are meant to match. Replacing it with a photo means changing
both, not just the page.

**Theme is dark-first** and stored in `localStorage`, with the initial value applied by a
small inline script in `<head>` so the page never flashes the wrong theme before CSS
loads. Keep that script inline and first if the head is reordered.
