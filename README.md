# nuxt-schema-org i18n `no_prefix` reproduction

Minimal reproduction for self-referential `workTranslation` / `translationOfWork` in `nuxt-schema-org` when `@nuxtjs/i18n` uses `strategy: "no_prefix"`.

## Run

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000/` and inspect the `application/ld+json` script. The `WebSite` node contains a `workTranslation` array whose entries all point to `https://example.com/#website` — the current `WebSite` itself.

## Expected

Under `no_prefix`, every locale shares the same URL, so no `workTranslation` (or `translationOfWork` on a non-default locale) should be emitted.
