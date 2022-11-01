---
title: 二、Vue构造选项
date: 2022-10-30
sidebar: auto
sidebarDepth: 2
tags:
- Vue笔记
---

## 1. 创建vue实例

![](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/392/20221030133610.png)

&emsp;&emsp;把Vue的实例命名为**vm**是尤雨溪的习惯，我们应该沿用。
vm对象**封装**了对视图的所有操作，包括**数据读写、事件绑定、DOM更新**。
vm的**构造函数**是vue,按照ES6的说法，vm所属的**类是vue**。
optioins是new Vue的参数，一般称之为**选项**或**构造选项**。
图中有**五个问号**，待一一了解。

## 2. new Vue 有哪些选项？

 [阅读文档](https://v2.cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE)
- 英文文档里搜options, 中文文档里搜选项。

### options的五类属性

![](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/392/20221030151755.png)

- 红色属性：好学，必学，几句话就能说明白
- 黄色属性：高级属性，稍微费点力，需要单独的课程讲解
- 蓝色属性：不常用，可学可不学
- 灰色属性：很不常用，用的时候自己看文档
- 紫色属性：比较特殊，重点讲一下

### Vue的生命周期

- Created：实例出现在内存中
- Mounted：实例出现在页面中
- updated：实例更新了
- destroyed：实例消亡了

生命周期钩子：类似于切入点

## 3. el 和 data 选项

- el-挂载点（与$mount有替换关系）
- data-内部数据：支持对象和函数，优先用函数
- methods-方法：事件处理函数或者是普通函数
- components：使用Vue组件，注意大小写
- props-外部属性

## 4. methods、components、四个钩子

（待续）

## 5. props：外部数据

- message="n" 传字符串
- :message="n" 传入this.n的数据
- :fn="add" 传入this.add函数

（待续）

## 拓展

-  function 在面向对象中称为`方法`，在数学中称为`函数`