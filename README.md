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

## Enquiry form

The contact form posts to [Formspree](https://formspree.io), so it works on any static host, including Firebase Hosting. To switch it on:

1. Create a free Formspree account and a new form, with the address that should receive enquiries.
2. Copy the form ID (the part after `/f/` in the endpoint URL).
3. In `contact.html`, replace `YOUR_FORM_ID` in the form's `action` with that ID.

Until then, submitting the form shows a message asking visitors to ring the Derry office. After a successful send, visitors land on `thanks.html`. The hidden `_gotcha` field is Formspree's spam honeypot.

## Fonts

Jost is self-hosted from `assets/fonts/` under the SIL Open Font License 1.1.
