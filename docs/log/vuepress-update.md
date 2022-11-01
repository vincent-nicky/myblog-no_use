---
title: vurpress优化日志
date: 2022-10-29
sidebar: auto
tags:
- vuepress优化
---

## 1. 解决部署后无法读取到样式的问题

```javascript
module.exports = {
    //要与github上的仓库名一致
    base: '/myblog/',
}
```

## 2. 添加看板娘

- 方式一

`npm i vuepress-plugin-cat -S`
```javascript
module.exports = {
    plugins: [
        "vuepress-plugin-cat",
    ]
}
```

- 方式二：

```js
plugins: [
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: false,
        messages: {
          welcome: '我是lookroot欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        },
        width: 240,
        height: 352
      }
    ],
]
```

## 3. 将build后的html文件的lang设置为 “zh-CN”

```javascript
module.exports = {
    base: '/myblog/',
    dest: 'blog',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '生活与猫',
            description: '学习并记录生活',
        },
    },
}
```

## 4. 插件boxx

<h3>安装</h3>

- 在文件package.json中的devDependencies下加入"vuepress-plugin-boxx": "0.0.7"：
```json
"devDependencies": {
    "vuepress-plugin-boxx": "0.0.7"
}
```
- 在 vuepress 的config.js中配置plugins：
```js
plugins: [
    ["vuepress-plugin-boxx"]
],
```
- 在package.json目录下执行命令：npm install

<h3>使用</h3>

<Boxx type="type" title="提示" content="自定义文本" /> 
<Boxx type="warning" title="警告" content="自定义文本" /> 
<Boxx type="danger" title="危险" content="自定义文本" /> 
<Boxx type="type" title="只有标题" /> 
<Boxx type="warning" content="只有文本" /> 

<h3>原配方法</h3>

:::tip
（待续）
:::

:::warning
（待续）
:::

:::danger
（待续）
:::

## 5. 允许一键复制代码

```js
plugins: [
    //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",  
      tip: {
        content: "复制成功!"
      }
    }],
]
```

## 6. 鼠标动效

<h3>安装</h3>

```shell
yarn add vuepress-plugin-cursor-effects -D
# or use npm
npm i vuepress-plugin-cursor-effects -D
```
<h3>使用</h3>

```js
module.exports = {
   plugins: ['cursor-effects'],
}
//或者：
module.exports = {
    plugins: [
        [
            'cursor-effects',
            {
                size: 2, // size of the particle, default: 2
                shape: ['star' | 'circle'], // shape of the particle, default: 'star'
                zIndex: 999999999, // z-index property of the canvas, default: 999999999
            },
        ],
    ],
}
```

## 7. 隐藏首页的标题和描述

- .vuepress/styles/palette.styl

```stylus
.hero h1, .description
  display none !important
```

## 8. 首页左上角的文字

```stylus
.navbar .site-name
  font-weight 800
  font-size 22px
  background -webkit-linear-gradient(45deg, #70f7fe, #fbd7c6, #fdefac, #bfb5dd, #bed5f5)
  color transparent
  -webkit-background-clip text
  -webkit-animation run 3s linear 0s infinite normal none running
  //animation run 3s linear 0s infinite normal none running
  @keyframes run {
    0% {
      background-position -100px 0
    }
    100% {
      background-position 100px 0
    }
  }
```

## 9. heroText的显示效果

```stylus
.home-blog .hero h1
  -webkit-transform matrix(1, 0, 0, 1, 0, 0)
  text-shadow 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0
  font-size 5rem
  font-weight 800
  margin 2rem auto
  color white

@media screen and (max-width: 480px)
  .home-blog .hero h1
    font-size: 3rem;
    margin: 7rem auto 1.8rem;

@media (max-width: 419px)
  .home-blog .hero h1
    margin: 6rem auto 1.8rem;
    font-size: 2rem;

@media (max-width: 719px)
  .home-blog .hero h1
    margin: 6rem auto 1.8rem;
    font-size: 2rem;


.home-blog .hero p
  margin 1.8rem auto
  font-size 1.6rem
  line-height 1.3
  color white
  font-weight 800
  text-shadow 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0
  //text-shadow 0 2px 2px #47456d
```