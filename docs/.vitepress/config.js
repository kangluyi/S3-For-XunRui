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
            { text: '开始', link: '/guide/' },
          ]
        },
        {
          text: '存储',
          items: [
            { text: '介绍', link: '/guide/storage/' },
            { text: '阿里云 OSS', link: '/guide/storage/oss' },
            { text: '腾讯云 COS', link: '/guide/storage/cos' }
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
    // 网站图标
    ['link', { rel: 'icon', href: '/logo.png' }],
    // 国内主流CDN，协议MIT/Apache-2.0 (字节跳动/火山引擎)
    ['link', { rel: 'stylesheet', href: 'https://cdn.chenyande.com/libs/font-awesome/4.7.0/css/font-awesome.css' }]
  ]
}