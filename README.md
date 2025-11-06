# Mebot

个人网站项目 - 使用React前端和Python后端构建的现代化个人展示网站，集成AI聊天功能。

## 项目特性

- 🎨 **现代化设计**: 使用React和Vite构建的响应式前端
- 🐍 **强大后端**: 基于Python FastAPI的高性能后端API
- 🤖 **AI聊天**: 集成MeBot聊天机器人，提供智能交互
- 🧭 **页面导航**: 包含多个展示页面 - Intro, Projects, Experience, Education, Certifications, Blog
- 📱 **响应式设计**: 完美适配移动端和桌面端

## 技术栈

### 前端
- React 18
- React Router DOM (页面路由)
- Vite (构建工具)
- Axios (HTTP客户端)

### 后端
- Python 3.12+
- FastAPI (Web框架)
- Uvicorn (ASGI服务器)
- Pydantic (数据验证)

## 项目结构

```
Mebot/
├── frontend/                # React前端应用
│   ├── src/
│   │   ├── components/     # React组件
│   │   │   ├── NavigationBar.jsx
│   │   │   └── MeBot.jsx
│   │   ├── pages/          # 页面组件
│   │   │   ├── Intro.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Certifications.jsx
│   │   │   └── Blog.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── backend/                 # Python后端应用
│   ├── main.py             # FastAPI应用主文件
│   ├── requirements.txt    # Python依赖
│   └── .env.example        # 环境变量示例
└── README.md
```

## 快速开始

### 前端设置

1. 进入frontend目录：
```bash
cd frontend
```

2. 安装依赖：
```bash
npm install
```

3. 启动开发服务器：
```bash
npm run dev
```

前端将在 http://localhost:5173 运行

### 后端设置

1. 进入backend目录：
```bash
cd backend
```

2. 创建虚拟环境（推荐）：
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

3. 安装依赖：
```bash
pip install -r requirements.txt
```

4. 配置环境变量：
```bash
cp .env.example .env
# 编辑.env文件，配置你的MeBot API密钥
```

5. 启动服务器：
```bash
python main.py
```

或使用uvicorn：
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

后端将在 http://localhost:8000 运行

## API文档

启动后端后，访问以下地址查看自动生成的API文档：
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## 主要功能

### 导航栏
- 响应式导航菜单
- 页面跳转功能
- 当前页面高亮显示

### MeBot聊天
- 浮动聊天按钮
- 实时消息交互
- 与后端API集成
- 加载状态指示器

### 展示页面
- **Intro**: 个人介绍和网站概览
- **Projects**: 项目展示
- **Experience**: 工作经验时间线
- **Education**: 教育背景
- **Certifications**: 专业认证
- **Blog**: 博客文章列表

## 配置

### 前端配置
在 `frontend/.env` 中配置后端API地址：
```
VITE_API_URL=http://localhost:8000
```

### 后端配置
在 `backend/.env` 中配置：
```
MEBOT_API_URL=你的MeBot API地址
MEBOT_API_KEY=你的API密钥
HOST=0.0.0.0
PORT=8000
```

## 开发说明

- 前端使用Vite的热模块替换(HMR)实现快速开发
- 后端使用FastAPI的自动重载功能
- 所有组件都有对应的CSS样式文件
- 遵循React函数组件和Hooks最佳实践

## 部署

### 前端部署
```bash
cd frontend
npm run build
```
构建产物在 `frontend/dist` 目录

### 后端部署
使用生产级ASGI服务器如Gunicorn：
```bash
pip install gunicorn
gunicorn main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
```

## 贡献

欢迎提交问题和拉取请求！

## 许可证

MIT License
