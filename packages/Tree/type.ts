export interface TreeNode {
    id: string | number // 绑定key用
    name: string
    children?: TreeNode[] // 子节点
    selected?: boolean // 是否选中
}

export interface TreeProps {
    data: TreeNode[] // 数据源
    onChecked: (node: TreeNode) => void // 选中回调
}

// 笔记

// type类型和interface类型的区别：
// 1. interface可以被类实现(implements)，type不可以。
// 2. interface可以被扩展(extends)，type不可以，但是type可以通过交叉类型（&）实现interface的extends行为。
// 3. type可以使用联合类型和交叉类型，interface不可以。
// 4. interface可以声明合并（定义多次），type不可以。
// 5. type更适合定义简单类型别名，interface更适合定义复杂对象结构。

// 总结：如果需要定义复杂对象结构或需要类实现，使用interface；如果需要定义简单类型别名或使用联合/交叉类型，使用type。
