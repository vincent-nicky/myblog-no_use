module.exports = {
  base:'/myblog/',
  dest: 'blog',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'No pains, no gains',
      description: '温绍杰的博客',
    },
  },
  head: [
    ['link', { rel: 'icon', href: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/392/logo.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#FF66CC' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/LatteAndCat.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/LatteAndCat.svg', color: '#FF66CC' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/LatteAndCat.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    type: 'blog',
    huawei: false,
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
    },
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '学习笔记', link: '/note/', icon: 'reco-document' },
      { text: '日志', link: '/log/', icon: 'reco-blog' },
      { text: '生活', link: '/life/', icon: 'reco-account' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      // { text: 'PhotoAlbum', link: 'https://photo.smallsunnyfox.com/', icon: 'reco-blog' },
      // { text: 'About', link: '/about/', icon: 'reco-account' },
      // { text: 'GitHub', link: 'https://github.com/smallsunnyfox', icon: 'reco-github' }
    ],
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        logo: 'https://photo.smallsunnyfox.com/images/blog/friendlink/reco.png',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: 'https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: 'L1nSn0w’s Blog',
        desc: '一名热爱计算机与iOS的高中生',
        logo: 'https://photo.smallsunnyfox.com/images/blog/friendlink/lin_snow.png',
        link: 'https://blog.linsnow.cn'
      },
      {
        title: 'ImCao',
        desc: 'NUAA大佬',
        logo: 'https://www.imcao.cn/avatar.png',
        link: 'https://www.imcao.cn/'
      }
    ],
    // 博客设置
    blogConfig: {
      // category: {
      //   location: 2, // 在导航栏菜单中所占的位置，默认2
      //   text: '分类' // 默认 “分类”
      // },
      tag: {
        location: 2, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    logo: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/392/avatar.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    sidebarDepth: 1,
    displayAllHeaders: true,
    sidebar: {
      '/note/': [
        '',
        {
          title: 'Vue',
          collapsable: false,
          children: ['Vue/1-vue起手式','Vue/2-vue构造选项','Vue/3-vue数据响应式','Vue/4-computed和watch']
        },
        {
          title: 'CET-6',
          collapsable: false,
          children: ['CET-6/words']
        },
      ],
      '/log/': [
        '',
        {
          title: 'Bug日志',
          collapsable: false,
        },
        {
          title: '其他',
          collapsable: false,
          children: ['vuepress-update']
        },
      ],
      '/life/': [
        '',
        {
          title: '生活',
          collapsable: false,
        },
      ],

        // {
        //   title: 'HTML5',
        //   collapsable: true,
        //   children: ['html5/HTML5的语义元素', 'html5/HTML5多媒体标签', 'html5/HTML5表单元素', 'html5/HTML5中的API', 'html5/Canvas']
        // },
        // {
        //   title: 'CSS',
        //   collapsable: true,
        //   children: ['css/css3新特性', 'css/css3Flip']
        // },
        // {
        //   title: 'JS',
        //   collapsable: true,
        //   children: ['js/js数据类型', 'js/js对象', 'js/js继承', 'js/js原型链、闭包', 'js/js函数的四种调用方式']
        // },
        // {
        //   title: 'Vue.js',
        //   collapsable: true,
        //   children: ['Vue/Vue基础笔记', 'Vue/Vue组件']
        // },
        // {
        //   title: '前端单元测试',
        //   collapsable: true,
        //   children: ['fe-unit-test/chai', 'fe-unit-test/mocha', 'fe-unit-test/vueTestUtils']
        // },
        // {
        //   title: '微信小程序',
        //   collapsable: true,
        //   children: ['wechat-mini-program/初识微信小程序']
        // }
    },
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 作者
    author: '温绍杰',
    authorAvatar: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/392/avatar.jpg',
    // 项目开始时间
    startYear: '2022',
  },
  markdown: {
    lineNumbers: true
  },
  devServer: {
    progress: false,
  },

  plugins: [
    ["vuepress-plugin-boxx"],
    // [
    //   //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
    //   "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    //   {
    //     theme: ['z16','blackCat'],
    //     clean: false,
    //     messages: {
    //       welcome: '欢迎你的关注 ',
    //       home: '心里的花，我想要带你回家。',
    //       theme: '好吧，希望你能喜欢我的其他小伙伴。',
    //       close: '再见哦'
    //     },
    //     width: 150,
    //     height: 262
    //   }
    // ],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
      tip: {
        content: "复制成功!"
      }
    }],
    ["cursor-effects",],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    ],
    [
      'permalink-pinyin',
      {
        lowercase: true,
        separator: '-'
      }
    ]
  ]
}