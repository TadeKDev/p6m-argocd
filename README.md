## Scripts
- dev: `npm run dev`
- deploy: `npm run build && firebase deploy` (this is not automated yet)

## New blog post

1. New mdx file in `/content/blog/articles/<slug>`
    - You can import tsx components into mdx files [Next docs](https://nextjs.org/docs/pages/building-your-application/configuring/mdx#getting-started)
    - All blog post must have the following frontmatter:
      ```
      ---
      title: "<title>"
      description: "<description>
      categorySlugs: ["<category1>", "<category2>"]
      authorSlug: "<slug of author from app/blog/content.tsx authors object>"
      publishedAt: "YYYY-MM-DD"
      imagePath: "/blog/articles/<slug>/<image-name>"
      imageAlt: "<alt-text>"
      ---
      ```
2. Add any images to `/public/blog/articles/<slug>/<image-name>`

## New agent page

1. New mdx file in `/content/agents/<slug>`
    - You can import tsx components into mdx files [Next docs](https://nextjs.org/docs/pages/building-your-application/configuring/mdx#getting-started)
    - All agents must have the following frontmatter:
      ```
      ---
      title: "<title>"
      description: "<description>
      imagePath: "/blog/articles/<slug>/<image-name>"
      imageAlt: "<alt-text>"
      icon: "<icon-lib>/<icon-name>"
      includeOnHomePage: <True|False>
      ---
      ```
    - `includeOnHomePage` is used to determine which four agents we show on the home page. Only four should have this
    value set to True. They are secondarily sorted alphabetically by file name.
    
2. Add any images to `/public/agents/<slug>/<image-name>`

## Troubleshooting
If you see this error: "Error: Assertion failed: resolving hosting target of a site with no site name or target name. This should have caused an error earlier" run `firebase login --reauth`
