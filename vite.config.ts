/*
 * @Author: zhaozeyu zeyu.zhao@ninebot.com
 * @Date: 2025-11-05 18:21:01
 * @LastEditors: zhaozeyu zeyu.zhao@ninebot.com
 * @LastEditTime: 2025-11-06 17:35:38
 * @FilePath: /zyLibrary/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import dts from 'vite-plugin-dts'
export default defineConfig(({ command }) => {
    const isDev = command === 'serve'
    return {
        plugins: [
            react(),
            dts({
                outDir: 'dist/types',
                insertTypesEntry: true,
                include: ['packages/**/*.ts', 'packages/**/*.tsx'],
                exclude: ['packages/**/*.test.ts', 'packages/**/*.stories.tsx'], // 排除测试文件
                rollupTypes: false,
                copyDtsFiles: true
            })
        ],
        root: isDev ? path.resolve(__dirname, 'example') : undefined,
        server: {
            port: 3000,
            open: true
        },
        build: {
            outDir: path.resolve(__dirname, 'dist'),
            lib: {
                entry: path.resolve(__dirname, 'packages/index.ts'),
                name: 'ui',
                formats: ['es', 'umd', 'cjs', 'iife'],
                fileName: format => `ui.${format}.js`
            },
            emptyOutDir: false,
            rollupOptions: {
                external: ['react', 'react-dom'],
                output: {
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM'
                    }
                }
            }
        }
    }
})
