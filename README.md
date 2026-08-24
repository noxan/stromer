# stromer

Minimal static personal site built with HTML, CSS, TypeScript, and Vite.

## Development

```sh
bun install
bun run dev
```

## Checks

```sh
bun run check
bun run lint
bun run build
```

The production output is written to `build/`.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub or GitLab.
2. In the [Cloudflare dashboard](https://dash.cloudflare.com), open **Workers & Pages**.
3. Select **Create application → Pages → Connect to Git**.
4. Select this repository and use:

   | Setting                | Value                                       |
   | ---------------------- | ------------------------------------------- |
   | Production branch      | `main` (or the repository's default branch) |
   | Framework preset       | `Vite`                                      |
   | Build command          | `bun run build`                             |
   | Build output directory | `build`                                     |
   | Root directory         | `/`                                         |

5. Add the environment variable `BUN_VERSION` with a current Bun version if Cloudflare does not detect `bun.lock` automatically.
6. Select **Save and Deploy**.

No runtime environment variables, Functions, database, or server are required. Every push to the production branch triggers a deployment; pull requests receive preview URLs.

### Custom domain

After the first deployment, open the Pages project and select **Custom domains → Set up a custom domain**. If the domain already uses Cloudflare DNS, Cloudflare configures the DNS record and HTTPS automatically. Otherwise, follow the displayed CNAME instructions.

### Local production preview

```sh
bun run build
bun run preview
```
