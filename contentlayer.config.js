// import { defineDocumentType, makeSource } from 'contentlayer/source-files'

// import readingTime from 'reading-time'
// import remarkGfm from 'remark-gfm'
// import rehypeSlug from 'rehype-slug'
// import rehypeCodeTitles from 'rehype-code-titles'
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// import rehypePrism from 'rehype-prism-plus'

// const computedFields = {
//   readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
//   wordCount: {
//     type: 'number',
//     resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
//   },
//   url: {
//     type: 'string',
//     resolve: (post) => `/posts/${post._raw.flattenedPath}`,
//   },
// };

// const Post = defineDocumentType(() => ({
//   name: 'Post',
//   filePathPattern: '**/*.mdx',
//   contentType: 'mdx',
//   fields: {
//     title: { type: 'string', required: true },
//     publishedAt: { type: 'date', required: true },
//     description: { type: 'string', required: true },
//     category: { type: 'string', required: true },
//   },
//   computedFields
// }))

// const contentLayerConfig = makeSource({
//   contentDirPath: 'posts',
//   documentTypes: [Post],
//   mdx: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [
//       rehypeSlug,
//       rehypeCodeTitles,
//       rehypePrism,
//       [
//         rehypeAutolinkHeadings,
//         {
//           properties: {
//             className: ['Anchor'],
//           }
//         }
//       ]
//     ]
//   }
// })

// export default contentLayerConfig;

import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
})
