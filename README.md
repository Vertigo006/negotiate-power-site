# Negotiate Power Website

Static public website for **Negotiate Power**.

> Intelligence for Consequential Decisions  
> Aviation intelligence powered by the proprietary Atlas Engine.

## Architecture

- Plain HTML and CSS
- No dependency-based framework
- No package installation or build command
- No custom GitHub Actions workflows
- No analytics, form processor, database, or payment integration in the initial release
- GitHub Pages publishes directly from the `main` branch and repository root
- GoDaddy is used only for domain registration, DNS, and potentially email

See [`SPEND_CONTROL.md`](SPEND_CONTROL.md) for controlling cost and architecture rules.

## Local review

From the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Public contact

`contact@negotiatepower.com`

## Legal status

The public name is currently **Negotiate Power**. Do not use “Negotiate Power LLC” until the entity has been formed and the website has been formally updated.

The current site does not accept payment or establish a customer engagement through website access alone.
