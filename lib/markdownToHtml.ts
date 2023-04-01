import { remark } from 'remark'
import html from 'remark-html'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import rehypeSanitize from 'rehype-sanitize'

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
  .use(remarkParse)
  .use(remarkRehype, {allowDangerousHtml: true})
  // .use(rehypeRaw) // *Parse* the raw HTML strings embedded in the tree
  // .use(rehypeSanitize)
  .use(rehypeStringify, {allowDangerousHtml: true})
  .process(markdown)  
  
  return result.toString()
  
/*   const result = await remark().use(html).process(markdown)
  return result.toString() */
}
