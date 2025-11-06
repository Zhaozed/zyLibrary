/*
 * @Author: zhaozeyu zeyu.zhao@ninebot.com
 * @Date: 2025-11-05 18:37:51
 * @LastEditors: zhaozeyu zeyu.zhao@ninebot.com
 * @LastEditTime: 2025-11-06 14:23:28
 * @FilePath: /zyLibrary/packages/index.ts
 * @Description: 模块的入口文件，集中导出模块中的所有功能和组件,目的是汇总所有组件的一个入口
 */
import { Tree } from './Tree'
export * from './Tree'
export { Tree }

// 笔记
// index.ts文件的作用：
// 1. 作为模块的入口文件，集中导出模块中的所有功能和组件。
// 2. 提供统一的接口，方便其他模块或应用程序导入和使用该模块的功能。
// 3. 隐藏模块的内部实现细节，只暴露必要的接口，增强模块的封装性和可维护性。
// 4. 通过index.ts文件，可以简化导入路径，提升代码的可读性和可维护性。

// 总结：index.ts文件在模块开发中起着重要作用，是模块对外提供服务的关键入口。
