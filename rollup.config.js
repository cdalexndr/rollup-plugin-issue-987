import typescript from '@rollup/plugin-typescript'
import strip from '@rollup/plugin-strip';

export default {
    input: "src/index.ts",
    output: {
        file: "build/index.js",
        format: "iife",
    },
    plugins: [
        strip(),
        typescript(),
        strip(),
    ]
}