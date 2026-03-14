export default {
  build: {
    outDir: '../../html'
  },
  
  // 基础配置
  title: 'S3 For XunRuiCMS',
  description: '极速对象存储融合',
  
  // 主题配置
  themeConfig: {
    // 网站Logo
    logo: '/logo.png',
    
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { 
        text: '更多', 
        items: [
          { text: '关于我们', link: '/about/' },
          { text: '更新日志', link: '/changelog' }
        ]
      }
    ],
    
    // 侧边栏配置 - 只在指南页面显示
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '核心功能', link: '/guide/features' },
            { text: '配置说明', link: '/guide/configuration' }
          ]
        },
        {
          text: '进阶',
          items: [
            { text: 'API集成', link: '/guide/integration' },
            { text: '最佳实践', link: '/guide/best-practices' }
          ]
        }
      ]
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/moruteaven/S3-For-XunRuiCMS' },
      { icon: 'download', link: 'https://www.xunruicms.com/shop/1783.html' }
    ],
    
    // 页脚
    footer: {
      message: '采用 Apache License 2.0 开源协议',
      copyright: `Copyright © 2025 - ${new Date().getFullYear()} S3 For XunRuiCMS`
    }
  },
  
  // 自定义主题颜色 - 红色主题
  appearance: true,  // 启用深色模式支持
  
  // 自定义CSS变量
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./.vitepress/theme/styles/vars.css";`
        }
      }
    }
  },
  
  // 头部配置
  head: [
    // 国内主流CDN，协议MIT/Apache-2.0 (字节跳动/火山引擎)
    ['link', { rel: 'stylesheet', href: 'https://cdn.chenyande.com/libs/font-awesome/4.7.0/css/font-awesome.css' }]
  ]
}