/*
 * @Author: zhaozeyu zeyu.zhao@ninebot.com
 * @Date: 2025-11-05 18:39:16
 * @LastEditors: zhaozeyu zeyu.zhao@ninebot.com
 * @LastEditTime: 2025-11-06 14:19:46
 * @FilePath: /zyLibrary/example/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { Tree, type TreeNode } from '../packages'

export default function App() {
    const data = [
        {
            id: 1,
            name: '节点1',
            children: [
                {
                    id: 11,
                    name: '节点1-1'
                },
                {
                    id: 12,
                    name: '节点1-2',
                    children: [
                        {
                            id: 121,
                            name: '节点1-2-1'
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: '节点2'
        }
    ]
    return (
        <div>
            <Tree
                data={data}
                onChecked={(data: TreeNode) => {
                    console.log(data)
                }}></Tree>
        </div>
    )
}
// 笔记
