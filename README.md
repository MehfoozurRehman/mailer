# mailer

A small Node.js helper that sends Handlebars-templated emails through Gmail with Nodemailer.

**Status:** Stub. The repository has one source file (`src/index.js`), no tests, and no `views/` folder, which the code expects at runtime, so the templated send path cannot run from a fresh checkout.

## The problem

Sending an email from Node.js with a formatted template means wiring Nodemailer, a Handlebars view engine and the right sender settings together every time. This module packages that wiring into one function that a caller can reuse.

## What it does

- Exports one async function, `mailer(from, to, template, data, user, pass)` (`src/index.js`).
- Creates a Nodemailer transport for the `gmail` service using the `user` and `pass` the caller passes in.
- Renders the named `.handlebars` template through `nodemailer-express-handlebars`, with `data` as the template context and `data.subject` as the subject line.
- Logs the server response after a send.
- Builds a minified CommonJS bundle into `dist/` with Babel, copying any non-JS files.

## How it's built

- Node.js with `nodemailer` 6 and `nodemailer-express-handlebars` 6.
- Babel 7 (`@babel/cli`, `@babel/preset-env`, `babel-preset-minify`) compiles `src/` to `dist/`. The package points `main` at `dist/index.js`.
- Architecture decision: credentials are arguments to each call rather than read from environment variables, so the caller decides where secrets come from.

## Running it locally

```bash
npm install
npm run build   # babel src --out-dir dist --copy-files
```

There is no dev server or script that sends a test email.

## What's left

- The template engine is configured to read `views/` next to the module, but no `views/` folder exists in the repository.
- Error handling is wrong: `sendMail` rejects on failure instead of returning `{ error }`, so the `if (error)` branch never runs and failures surface as unhandled promise rejections.
- The transport is fixed to the `gmail` service.
- No tests and no test script.
- `dist/` is committed build output.
