/*
 * @Author: zhaozeyu zeyu.zhao@ninebot.com
 * @Date: 2025-11-05 18:21:01
 * @LastEditors: zhaozeyu zeyu.zhao@ninebot.com
 * @LastEditTime: 2025-11-05 18:48:26
 * @FilePath: /zyLibrary/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    root: path.resolve(__dirname, 'example'),
    server: {
        port: 3000,
        open: true
    }
})
