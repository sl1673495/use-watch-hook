export default {
  entry: 'src/index.ts',
  doc: {
    title: 'use-watch-hook使用文档',
    base: process.env.NODE_ENV === 'production' ? '/use-watch-hook/' : '',
    dest: 'docs',
    typescript: true
  },
  cjs: {
    type:'babel',
    minify: true
  },
}