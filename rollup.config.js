import VuePlugin from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import path from 'path'

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/app.js',
      format: 'esm',
      sourcemap: 'inline',
    },
    plugins: [
      VuePlugin(),
      typescript({
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      })
    ],
    external: ['vue'],
  }
]