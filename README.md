# 项目简介

基于Vue的移动端菜谱查询应用，独立设计和编码实现，尽可能实现组件化开发，适合学习Vue的同学练手项目。

## 技术栈

* Vue
* Vuex
* Vue-router
* Axios
* Vant-ui
* Mock

## 开发计划

### 项目需求功能计划

* 登录/注册页：限手机号
* 主页：菜品分类、轮播广告、活动tabs以及各tab对应的商品列表
* 发现页：横向滑动单行列表、横向滑动双行list、瀑布流
* 我的页：账号信息（头像和手机）、账号设置功能、我的收藏列表、帮助、关于、退出登录
* 菜品细节页：菜品成品图及介绍、菜品做菜步骤配图及描述

### 项目工程化计划

* Vue多环境配置：实现测试、开发、生产环境三个环境的运行及打包
* Mock测试配置：测试环境下进行完整的mock测试实现，保证前后端分离
* Travis-ci/Circle-ci配置：实现自动化构建工程（测试、打包等）
* 图片管理：暂时考虑用七牛云
* 权限管理：虽然该应用不涉及权限，但是为了学习可能会加上权限处理

### 项目进度（持续更新）

#### 已完成功能
* 登录页静态页面
* 主页静态页面
* 发现页静态页面
* 公共Axios资源获取工具

#### 待完成功能
* 我的页静态页面
* 菜品细节页静态页面
* 各个页面组件化
* Axios获取菜谱分类和具体菜谱
* 多环境配置
* Mock测试
* Travis-ci添加
* 图片管理
* 权限管理

## 构建步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 效果展示

![示例图片](./menu.gif)

## 关于

* [静静是小花博客](https://susan007.github.io)
* 项目示例图片从网络获取，非商业应用，如有侵权请联系邮箱`370317168@qq.com`删除
