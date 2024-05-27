# No cache HTMX Extension

Will force an HTMX request to break cache and get a new request. Works automatically on client-side and provides a `hx-no-cache` header for implementation on the server.

## Usage

### Script tag

HTMX recommends you link from unpkg:

```html
<head>
    ...
    <script src="https://unpkg.com/htmx-ext-no-cache@^1/no-load.js" defer></script>
    ...
</head>
```

### NPM package

If you are using Vite as a package manager.

```bash
npm install @rollup/plugin-inject htmx-ext-no-cache
```

```ts
// vite.config.js
import inject from '@rollup/plugin-inject'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    inject({
       htmx: 'htmx.org'
    }),
  ],
})
```

```ts
// app.js
import 'htmx-ext-no-cache'
import htmx from 'htmx.org'
```

In your HTML:

```html
<body>
    <button hx-get="/your-endpoint" hx-ext="noCache">Click me</button>
</body>
```

Add the `hx-ext="noCache"` to any HTMX element you don't want to cache.
