import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-10 mb-5">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mt-4 mb-2">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-5 mb-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-5 mb-4">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="mb-2">{children}</li>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-blue-600 hover:underline">{children}</a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
    ),
    code: ({ children }) => (
      <code className="font-mono rounded px-1 py-0.5">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="rounded p-4 overflow-x-auto mb-4">{children}</pre>
    ),
    img: ({ src, alt }) => (
      <img src={src} alt={alt} className="max-w-full h-auto rounded-lg my-4" />
    ),
    table: ({ children }) => (
      <table className="w-full border-collapse mb-4">{children}</table>
    ),
    th: ({ children }) => (
      <th className="border border-gray-300 px-4 py-2 font-semibold">{children}</th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-300 px-4 py-2">{children}</td>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    ...components,
  }
}