module.exports = {
    base: '/myblog/',
    dest: 'blog',
    theme: 'reco',
    title: 'No pains, no gains',
    description: '温绍杰的博客',
    port: '7777',
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    head: [
        ['link', {rel: 'icon', href: 'https://s2.loli.net/2023/03/05/KJsdhVAZbUXPeT5.jpg'}],
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#FF66CC'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: '/icons/LatteAndCat.png'}],
        ['link', {rel: 'mask-icon', href: '/icons/LatteAndCat.svg', color: '#FF66CC'}],
        ['meta', {name: 'msapplication-TileImage', content: '/icons/LatteAndCat.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
    ],
    themeConfig: {
        type: 'blog',
        huawei: false,
        nav: [
            {text: '主页', link: '/', icon: 'reco-home'},
            {text: '笔记', link: '/notes/', icon: 'reco-document'},
            // {text: '开发日志', link: '/log/', icon: 'reco-blog'},
            // {text: '成绩单', link: '/gpa/', icon: 'reco-account'},
            // {text: '时间线', link: '/timeline/', icon: 'reco-date'},
            // {text: '调整呼吸', link: '/have-fun/111', icon: ''},
            {text: '空调房', link: '/have-fun/222', icon: ''},
            // { text: 'About', link: '/about/', icon: 'reco-account' },
            { text: 'GitHub', link: 'https://github.com/Charon-33', icon: 'reco-github' }
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
        // blogConfig: {
            // category: {
            //   location: 2, // 在导航栏菜单中所占的位置，默认2
            //   text: '分类' // 默认 “分类”
            // },
            // tag: {
            //     location: 2, // 在导航栏菜单中所占的位置，默认3
            //     text: '标签' // 默认 “标签”
            // }
        // },
        logo: 'https://s2.loli.net/2023/03/05/KJsdhVAZbUXPeT5.jpg',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 自动形成侧边导航
        subSidebar: 'auto',
        sidebarDepth: 1,
        displayAllHeaders: true,
        sidebar: {
            '/notes/': [
                '',
/*                {
                    title: '😶‍🌫️vue全解',
                    collapsable: true,
                    children: ['vue/1', 'vue/2', 'vue/3', 'vue/4', 'vue/5']
                },
                {
                    title: '🫡Java',
                    collapsable: false,
                    children: ['java/10.md']
                },
                {
                    title: '🤓mysql基础篇',
                    collapsable: false,
                    children: ['mysql/1.md','mysql/2.md','mysql/3.md','mysql/4.md','mysql/5.md','mysql/6.md',
                        'mysql/7.md']
                },*/
                {
                    title: '重学JavaSE',
                    collapsable: false,
                    children: ['java-itheima/javase/day07.md']
                },
/*                {
                    title: '软件测试',
                    collapsable: false,
                    children: ['software_testing/1.md','software_testing/2.md']
                }*/
            ],
            '/gpa/': [
                '',
            ],
            '/log/': [
                '',
                // {
                //     title: '寻友-伙伴匹配系统',
                //     collapsable: false,
                //     children: ['xunyou/xunyou01.md']
                // },
                {
                    title: '博客优化',
                    collapsable: false,
                    children: ['vuepress-update']
                },
            ],
        },
        // 最后更新时间
        lastUpdated: '最后更新时间',
        // 作者
        author: '温绍杰',
        authorAvatar: 'https://s2.loli.net/2023/03/05/KJsdhVAZbUXPeT5.jpg',
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
        ['reading-progress'],
        // ['vuepress-plugin-awesome-musicplayer'],
        [
          //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
          "@vuepress-reco/vuepress-plugin-kan-ban-niang",
          {
            theme: ['blackCat','z16'],
            clean: false,
            messages: {
              welcome: '欢迎您的关注！',
              home: '心里的花，我想要带你回家。',
              theme: '好吧，希望你能喜欢我的其他小伙伴。',
              close: '再见哦！'
            }
          }
        ],
        // ["@snippetors/vuepress-plugin-code-copy"],//yarn add -D @snippetors/vuepress-plugin-code-copy

        ['vuepress-plugin-code-copy', true],//yarn add vuepress-plugin-code-copy

        ['@vuepress-reco/vuepress-plugin-screenfull', true],

        ['@vuepress-reco/vuepress-plugin-loading-page', true],

        // vuepress复制粘贴提示插件P 先安装在配置 yarn add vuepress-plugin-nuggets-style-copy --save
        // ["vuepress-plugin-nuggets-style-copy", {
        //     copyText: "复制代码",
        //     tip: {
        //         content: "复制成功"
        //     }
        // }],
        ["cursor-effects"],
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