// .vitepress/config.mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  // ========== 构建配置 ==========
  build: {
    outDir: '../../html'
  },
  
  // ========== 站点基础配置 ==========
  lang: 'zh-CN',                          // 网站语言
  title: 'S3 For XunRuiCMS',              // 站点标题
  titleTemplate: ':title - S3 For XunRuiCMS',  // 👈 将分隔符 | 改为 -
  description: '极速对象存储融合',         // 站点描述
  
  // 是否显示最后更新时间（需要 Git 支持）
  lastUpdated: true,
  
  // 清理 URL 中的 .html 后缀
  cleanUrls: true,
  
  // Markdown 配置
  markdown: {
    lineNumbers: true,      // 代码块显示行号
    theme: 'github-dark'    // 代码高亮主题
  },
  
  // ========== 主题配置 ==========
  themeConfig: {
    // 网站 Logo
    logo: '/logo.png',
    
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { 
        text: '更多', 
        items: [
          { text: '关于我们', link: '/about/' },
          //{ text: '更新日志', link: '/changelog' }
        ]
      }
    ],
    
    // 侧边栏配置 - 只在指南页面显示
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '开始', link: '/guide/' }
          ]
        },
        {
          text: '存储',
          items: [
            { text: '介绍', link: '/guide/storage/' },
            { text: '阿里云 OSS', link: '/guide/storage/oss' },
            { text: '腾讯云 COS', link: '/guide/storage/cos' },
            { text: '七牛云 Kodo', link: '/guide/storage/kodo' }
          ]
        }
      ]
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/moruteaven/S3-For-XunRuiCMS' },
      { 
        icon: { 
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>' 
        }, 
        link: 'https://www.xunruicms.com/shop/1783.html' 
      }
    ],
    
    // 搜索配置
    search: {
      provider: 'local'
    },
    
    // ========== 界面文案本地化 ==========
    // 大纲标题（On this page）
    outline: {
      label: '页面导航',
      //level: [2, 3]  // 只显示 h2 和 h3 标题
    },
    
    // 上一篇/下一篇文案
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    keyboardNavigation: {
      navigate: '导航',
      select: '选择',
      close: '关闭'
    },

    // 最后更新时间文案
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    
    // 导航栏/侧边栏相关
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    
    // 编辑链接（可选，填上你的仓库地址即可启用）
    // editLink: {
    //   pattern: 'https://github.com/moruteaven/S3-For-XunRuiCMS/edit/main/docs/:path',
    //   text: '在 GitHub 上编辑此页'
    // },
    
    // 404 页面配置
    notFound: {
      code: '404',
      title: '页面未找到',
      quote: '您访问的页面不存在',
      linkLabel: '返回首页',
      linkText: '点击这里返回主页'
    },
    
    // 页脚
    footer: {
      copyright: `Copyright © 2025 - ${new Date().getFullYear()} <a href="https://moruteaven.com" target="_blank" rel="noopener noreferrer">抹露茶柒</a>`,
      message: '<a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">鲁ICP备2026008616号-2</a>'
    }
  },
  
  // ========== 深色模式 ==========
  appearance: true,  // 启用深色模式支持
  
  // ========== 头部标签 ==========
  head: [
    // 网站图标
    ['link', { rel: 'icon', href: '/logo.png' }],
    // FontAwesome CDN
    ['link', { rel: 'stylesheet', href: 'https://cdn.chenyande.com/libs/font-awesome/4.7.0/css/font-awesome.css' }]
  ],
  
  // ========== Vite 配置 ==========
  // 注意：如果你使用 SCSS 变量，建议直接在 .vitepress/theme/index.js 中导入 CSS
  // 而不是在这里配置 scss additionalData，因为 vars.css 不是 SCSS 文件
  vite: {
    // 如果你确实需要 SCSS 支持，可以保留，但建议移除或改用正确的方式
    // 更推荐的做法：在 .vitepress/theme/index.js 中直接 import './theme/styles/vars.css'
  }
})