/*
 * @Author: zhaozeyu zeyu.zhao@ninebot.com
 * @Date: 2025-11-05 18:51:48
 * @LastEditors: zhaozeyu zeyu.zhao@ninebot.com
 * @LastEditTime: 2025-11-06 17:25:15
 * @FilePath: /zyLibrary/packages/Tree/tree.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { TreeNode, TreeProps } from './type'
import React, { useState } from 'react'
import './styles.css'

const Tree: React.FC<TreeProps> = ({ data, onChecked }) => {
    const [treeData, setTreeData] = useState<TreeNode[]>(data)
    const changeSelected = (e: React.ChangeEvent<HTMLInputElement>, node: TreeNode) => {
        setTreeData(treeData.map(item => (node.id === item.id ? { ...item, selected: e.target.checked } : item)))
        onChecked?.({ ...node, selected: e.target.checked })
    }

    return (
        <div>
            {treeData.map(item => {
                return (
                    <div key={item.id}>
                        <input onChange={e => changeSelected(e, item)} type="checkbox" checked={item.selected} />
                        <span>{item.name}</span>
                        <div className="tree-node">{item.children && <Tree data={item.children} onChecked={onChecked} />}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Tree

// 笔记
// React.FC类型：
// 1. React.FC是React提供的一个类型，用于定义函数组件的类型。
// 2. 使用React.FC可以自动推断组件的props类型，简化代码书写。
// 3. React.FC默认包含children属性，如果不需要children，可以使用React.FunctionComponent代替。
// 4. 使用React.FC可以为组件添加静态属性和方法。

// 总结：React.FC是定义函数组件类型的便捷方式，但要注意其默认包含children属性的特性，根据需求选择使用。
