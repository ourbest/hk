# 健行维港新程 - 香港员工健步走活动小程序

本项目是为庆祝香港回归28周年暨喜迎第十五届全国运动会而开发的员工在线健步走活动小程序。基于 **uni-app** 框架，使用 **Vue 3 + JavaScript + Vite** 技术栈开发，支持多端部署（微信小程序、H5、App等）。

## 功能特性
- **每日健步**：同步微信/手机健康数据，将步数转换为积分。
- **地标打卡**：实地拍照上传，审核通过获得积分并解锁勋章。
- **运动任务**：每周/每月完成指定任务获取奖励。
- **积分排行**：实时查看个人及部门排名。
- **个人中心**：勋章收集、数据统计、活动信息等。

## 项目结构

```text
hk-walking-app/
├── src/
│   ├── api/                 # API 接口封装
│   ├── components/          # 公共组件
│   ├── pages/               # 页面文件
│   ├── static/              # 静态资源
│   ├── store/               # 状态管理
│   ├── utils/               # 工具函数
│   ├── App.vue              # 根组件
│   ├── main.ts              # 入口文件
│   ├── manifest.json        # 应用配置
│   ├── pages.json           # 页面配置
│   └── uni.scss             # 全局样式
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 安装和运行

```bash
# 安装依赖
npm install

# 微信小程序
npm run dev:mp-weixin

# H5
npm run dev:h5

# App
npm run dev:app
```

更多使用方式请参考源码内说明。
