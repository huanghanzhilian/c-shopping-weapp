<p align="center">
	<img alt="logo" src="https://github.com/huanghanzhilian/huanghanzhilian/raw/main/projects/c-shopping-weapp.svg" width="300">
</p>
<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">c-shopping-weapp 微信小程序</h1>
<h4 align="center">这是一个基于react生态，使用taro框架下，开发的完整微信小程序应用，一个精美的电商购物应用。</h4>

## 使用技术

- Taro
- Redux Toolkit
- RTK Query
- TailWindCss

## 前言

`c-shopping-weapp`是一个精美的电商微信小程序，界面优雅，功能丰富，小巧迅速，包含一个电商平台MVP完整功能，具备良好的审美风格与编码设计。

项目数据接口来自于[c-shopping](https://github.com/huanghanzhilian/c-shopping) Next.js 开源项目

项目传送门: [https://github.com/huanghanzhilian/c-shopping](https://github.com/huanghanzhilian/c-shopping)

希望来的人，有所收获。故事不结束，青春不散场。

## 项目介绍

**背景：**

- 一直以来前端UI框架被固定形式占据（受限于传统的UI框架），导致视觉疲劳，在开发一些高度自定义的项目时，往往力不从心；
- 当项目复杂后，在组件需要调用多个 api 时会变得复杂起来，比如需要管理多个 loading 和 error 状态，这会导致产生非常多的 state 声明，还有请求取消、请求竞态等可能存在的问题也容易被忽略；
- 随着项目复杂，样式的开发与维护变得庞大且臃肿；

**意图：**

改进背景中提到的问题。

**目的：**

打造一个完整的，适合web端的良好生态。

## 项目演示

| Module | loading                                                                                        | skeleton                                                                                       | success                                                                                        | error or empty                                                                                 |
| ------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Feed   | ![](https://www.cheerspublishing.com/uploads/article/c85ef06a-695e-47fd-a570-9943eb545433.png) | ![](https://www.cheerspublishing.com/uploads/article/d10dbcbf-0f2c-4ab6-96f4-a24bd9f04363.png) | ![](https://www.cheerspublishing.com/uploads/article/2eb8c0c8-2328-4098-b6e0-3d09fd06bcf2.png) | ![](https://www.cheerspublishing.com/uploads/article/5b54561c-cc7e-4ea2-8c63-1e33a7ea0bfa.png) |

| Module   | loading                                                                                        | success                                                                                        | empty                                                                                          | error                                                                                          |
| -------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Category | ![](https://www.cheerspublishing.com/uploads/article/122b21a8-f5b2-49c1-83e1-4e69220976a3.png) | ![](https://www.cheerspublishing.com/uploads/article/b6d94c05-b1ea-48a7-88ae-38e72e0bfc0d.png) | ![](https://www.cheerspublishing.com/uploads/article/971b8a1b-2ce2-4e46-ac6c-8a9228b82bfa.png) | ![](https://www.cheerspublishing.com/uploads/article/4ea4f8e0-627b-4c34-8032-fa78277290a9.png) |

| Module | Not logged in                                                                                  | Data is empty                                                                                  |
| ------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Cart   | ![](https://www.cheerspublishing.com/uploads/article/3169aa2c-b834-4795-922f-342f78da5afa.png) | ![](https://www.cheerspublishing.com/uploads/article/9fbe4f2f-3c84-40b4-9b6f-417ad9b3f941.png) |

| Module | Initial                                                                                        | Verify                                                                                         | Submit                                                                                         | Response error                                                                                 |
| ------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Login  | ![](https://www.cheerspublishing.com/uploads/article/55e6d3c5-17cf-4756-9b0f-d69c1c961051.png) | ![](https://www.cheerspublishing.com/uploads/article/d243b09a-4bc3-46b9-80e0-f78dc4fa21c1.png) | ![](https://www.cheerspublishing.com/uploads/article/fca6ee11-eaef-4ba7-a8ab-de5f999ac64e.png) | ![](https://www.cheerspublishing.com/uploads/article/f4b052fb-d0e6-4bf1-b92f-eec671b86c34.png) |

## 运行使用

本地运行 c-shopping-weapp 微信小程序程序，请按照以下步骤操作：

1. 克隆存储库：

   ```
   git clone https://github.com/huanghanzhilian/c-shopping-weapp.git
   ```

2. 导航到项目目录：

   ```
   cd c-shopping-weapp
   ```

3. 安装依赖项：

   ```
   npm install
   ```

4. 查看`.env.example`内容，创建新的`env`的文件，在项目根目录，定义所需的环境变量。
   或者其他环境配置，mode有几种模式`development`、`test`、`production`
   ```
   .env.[mode]         # 只在指定的模式中被载入
   .env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
   ```
   ```
   TARO_APP_ID="Your WeChat mini program appid"
   TARO_APP_BASE_URL="Your api service base address"
   ```
5. 启动：

   ```
   npm run dev:weapp
   ```

6. 打开微信开发者工具，小程序模式，创建项目，选择该项目下dist目录，启动项目。
7. 构建生产小程序
   ```
   npm run build:weapp
   ```

## 公众号

关注公众号获得更多资讯，有任何意见或建议都欢迎提issue，或者到公众号。

![继小鹏公众号](https://www.cheerspublishing.com/uploads/article/4632461d-0d43-4378-bcf7-bb32bf0de950.jpeg)

## 贡献

欢迎贡献！ 请提出问题或提交拉取请求。

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
