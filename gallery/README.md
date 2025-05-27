# Demo Gallery

该目录是用于集中展示各个功能示例的 Vue 应用，左侧为示例目录，右侧上方展示效果，下方展示对应该示例的文档。

## 初始化与启动

```bash
cd gallery
npm install
npm run dev
```

启动后访问 `http://localhost:5173`，即可在浏览器中浏览所有 demo。

## 查看 Demo

点击左侧菜单中需要查看的功能名称，对应的示例组件会在右侧上方渲染，其下方会展示 `demos` 目录中 `README.md` 的内容。

## 新增 Demo 的步骤

1. 在 `demos` 目录下按照 `XX-功能名称` 的格式新建文件夹，序号保持两位数字递增。
2. 在新文件夹中编写 Vue 组件示例和中文 `README.md`，文档中若需要展示时序图或流程图，请使用 Mermaid，并用双引号转义括号。
3. 在 `gallery/src/demos.js` 中引入新的组件和文档，并在导出的数组中添加相应对象即可在应用中看到新示例。

