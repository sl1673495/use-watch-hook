export default {
  entry: 'src/index.ts',
  doc: {
    title: 'use-watch使用文档',
    base: process.env.NODE_ENV === 'production' ? '/use-watch/' : '',
    dest: 'docs',
    typescript: true
  },
  cjs: {
    type:'babel',
    minify: true
  },
}