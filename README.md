# EF McCambridge & Co. website

A static website for EF McCambridge & Co., Chartered Accountants & Registered Auditors. It is plain HTML, CSS and a little JavaScript, with no build step, so it can be hosted on any static host.

## Pages

- `index.html`: home, with the nearest-office finder
- `services.html`: services; ticked services carry over to the enquiry form
- `team.html`: the directors and offices
- `contact.html`: enquiry form, phone numbers and offices
- `thanks.html`: shown after an enquiry is sent
- `404.html`: page not found

## Preview locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. Opening the files directly from disk also works, but the self-hosted font will not load.

## Hosting and deploys

The site is hosted on Firebase Hosting and deployed by GitHub Actions (`.github/workflows/firebase-hosting.yml`):

- A push or merge to `main` deploys to the live site.
- A pull request gets a temporary preview site (kept for 7 days), and the link is posted on the PR.

The Firebase project ID is set in `.firebaserc`. The workflow signs in with a Google Cloud service account key stored as the `FIREBASE_SERVICE_ACCOUNT` repository secret. `firebase.json` keeps the repo's tooling and notes (`.claude/`, `.impeccable/`, the Markdown files) off the public site.

## Enquiry form

The form is set up for [Netlify Forms](https://docs.netlify.com/forms/setup/) (`data-netlify="true"` plus a honeypot field). On Netlify, submissions appear in the site dashboard and can be emailed on. On another host, point the form's `action` at a form service such as Formspree and keep `thanks.html` as the redirect.

## Fonts

Jost is self-hosted from `assets/fonts/` under the SIL Open Font License 1.1.
