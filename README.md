# ZJU Database Lab Homepage - Vue 3 + Vite 版本

## 项目说明

这是浙江大学数据库实验室官网的 Vue 3 + Vite 改造版本。

## 项目结构

```
zd-homepage/
├── src/                      # Vue 源代码目录
│   ├── main.js              # 应用入口文件
│   ├── App.vue              # 根组件
│   ├── components/          # 公共组件
│   │   ├── Header.vue       # 头部导航组件
│   │   └── Footer.vue       # 页脚组件
│   ├── views/               # 页面组件
│   │   ├── Home.vue         # 首页
│   │   ├── News.vue         # 新闻页
│   │   ├── Projects.vue     # 项目页
│   │   ├── Team.vue         # 团队页
│   │   ├── Publications.vue # 论文页
│   │   ├── OpenSource.vue   # 开源页
│   │   └── Contact.vue      # 联系页
│   └── composables/         # 组合式函数
│       └── useLanguage.js   # 语言切换逻辑
├── public/                  # 静态资源（需要软链接到assets目录）
├── assets/                  # 原始静态资源
├── index-vue.html           # Vue 版本的 HTML 模板
├── vite.config.js           # Vite 配置
└── package.json             # 项目依赖

```

## 技术栈

- **Vue 3**: 采用 Composition API
- **Vue Router 4**: 前端路由管理
- **Vite**: 现代化的构建工具
- **现有样式和插件**: 保留原有的 Bootstrap、jQuery 插件等

## 开发指南

### 安装依赖

```bash
npm install
```

### 配置静态资源

在开发之前，需要将原有的 `assets` 目录链接到 `public` 目录：

**Windows (PowerShell 管理员权限):**

```powershell
New-Item -ItemType SymbolicLink -Path "public\assets" -Target ".\assets"
New-Item -ItemType SymbolicLink -Path "public\component" -Target ".\component"
New-Item -ItemType SymbolicLink -Path "public\news" -Target ".\news"
```

**或者直接复制文件夹:**

```powershell
Copy-Item -Path "assets" -Destination "public\assets" -Recurse
Copy-Item -Path "component" -Destination "public\component" -Recurse
Copy-Item -Path "news" -Destination "public\news" -Recurse
```

### 启动开发服务器

```bash
npm run dev
```

浏览器将自动打开 `http://localhost:3000`

### 构建生产版本

```bash
npm run build
```

构建结果将输出到 `dist` 目录。

### 预览生产版本

```bash
npm run preview
```

## 主要特性

### 1. 语言切换

- 使用 Composition API 实现全局语言状态管理
- 语言设置保存在 localStorage
- 所有组件共享同一语言状态

### 2. 路由配置

- 使用 Vue Router 管理页面导航
- 支持浏览器历史模式
- 路由路径与原始 HTML 文件名保持一致

### 3. 组件化

- Header 和 Footer 作为全局组件
- 每个页面独立的 Vue 组件
- 可复用的逻辑提取为 composables

### 4. 静态资源处理

- CSS 和 JS 库通过 public 目录引用
- 图片和字体等资源路径保持不变
- jQuery 插件在 App.vue 中动态加载

## 开发注意事项

1. **路由链接**: 使用 `<router-link>` 替代 `<a>` 标签进行页面导航
2. **资源路径**: 静态资源使用 `/assets/...` 绝对路径
3. **语言切换**: 通过 `useLanguage` composable 获取和修改语言状态
4. **jQuery 插件**: 确保 jQuery 插件在组件挂载后加载

## 待完善功能

由于这是快速迁移版本，以下内容需要进一步完善：

- [ ] 将各页面的完整 HTML 内容迁移到对应的 Vue 组件
- [ ] 优化 jQuery 插件的加载方式
- [ ] 将部分 jQuery 逻辑改写为 Vue 原生实现
- [ ] 添加页面过渡动画
- [ ] 优化移动端适配
- [ ] 添加代码分割和懒加载

## 原始项目

原始的静态 HTML 版本文件仍然保留在项目根目录：

- `index.html`
- `news.html`
- `projects.html`
- 等等...

可以通过直接打开这些文件访问原始版本。

## 联系方式

如有问题，请联系：<xiezl@zju.edu.cn>
