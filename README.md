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

The Firebase project ID is set in `.firebaserc`. The workflow signs in to Google Cloud with Workload Identity Federation (no stored key) as the `github-deploy` service account. Only workflows in this repository can use it. `firebase.json` keeps the repo's tooling and notes (`.claude/`, `.impeccable/`, the Markdown files) off the public site.

## Enquiry form

The contact form posts to [Formspree](https://formspree.io), so it works on any static host, including Firebase Hosting. To switch it on:

1. Create a free Formspree account and a new form, with the address that should receive enquiries.
2. Copy the form ID (the part after `/f/` in the endpoint URL).
3. In `contact.html`, replace `YOUR_FORM_ID` in the form's `action` with that ID.

Until then, submitting the form shows a message asking visitors to ring the Derry office. After a successful send, visitors land on `thanks.html`. The hidden `_gotcha` field is Formspree's spam honeypot.

## Office map

The offices section on the home, team and contact pages has a map with a pin for each office. Clicking or tapping a pin, or tabbing to it and pressing Enter, shows the office's address and phone number, with Call and Directions buttons. The map only loads when a visitor scrolls near it.

The map uses **Google Maps** once a key is set. Until then, or if Google rejects the key, it falls back to [OpenStreetMap](https://www.openstreetmap.org/copyright) using [Leaflet](https://leafletjs.com) 1.9.4. Leaflet is self-hosted in `assets/vendor/leaflet/` under the BSD-2-Clause licence.

To switch on Google Maps:

1. In Google Cloud, enable the **Maps JavaScript API** on a project with billing turned on.
2. Create an API key and restrict it to **Websites** (HTTP referrers), for example `https://efmcc-27ea5.web.app/*` and your own domain. Under API restrictions, allow only the Maps JavaScript API.
3. Create a **Map ID** (Google Maps Platform, Map management, type JavaScript). The pins need one.
4. In `js/site.js`, set `GOOGLE_MAPS.key` and `GOOGLE_MAPS.mapId`.

A browser map key is always visible in the page source, so restricting it in step 2 is what protects it.

Pin positions are the `lat`/`lng` values in each page's map data. Derry and Ballycastle use their postcode centres and Donegal Town uses The Diamond, so adjust them if a pin isn't on the door.

## Fonts

Jost is self-hosted from `assets/fonts/` under the SIL Open Font License 1.1.
