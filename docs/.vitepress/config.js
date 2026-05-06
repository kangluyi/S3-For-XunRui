// .vitepress/config.mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  build: {
    outDir: '../../html'
  },

  title: 'S3 For XunRuiCMS',
  titleTemplate: ':title - S3 For XunRuiCMS',
  description: '极速对象存储融合',

  locales: {
    root: {
      lang: 'zh-CN',
      label: '简体中文',
      link: '/',
      srcDir: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' },
          {
            text: '更多',
            items: [
              { text: '关于我们', link: '/about/' },
              { text: '更新日志', link: 'https://github.com/moruteaven/S3-For-XunRuiCMS/releases' }
            ]
          }
        ],
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
                { text: '七牛云 Kodo', link: '/guide/storage/kodo' },
                { text: '又拍云 USS', link: '/guide/storage/uss' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/moruteaven/S3-For-XunRuiCMS' },
          {
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>'
            },
            link: 'https://www.xunruicms.com/shop/1783.html'
          }
        ],
        outline: { label: '页面导航' },
        docFooter: { prev: '上一页', next: '下一页' },
        lastUpdated: { text: '最后更新于', formatOptions: { dateStyle: 'short', timeStyle: 'medium' } },
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        notFound: {
          code: '404',
          title: '页面未找到',
          quote: '您访问的页面不存在',
          linkLabel: '返回首页',
          linkText: '点击这里返回主页'
        },
        footer: {
          copyright: `Copyright © 2025 - ${new Date().getFullYear()} <a href="https://moruteaven.com" target="_blank" rel="noopener noreferrer">抹露茶柒</a>`,
          message: '<a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">鲁ICP备2026008616号-2</a>'
        }
      }
    },
    'zh-Hant': {
      lang: 'zh-Hant',
      label: '繁體中文',
      link: '/zh-Hant/',
      themeConfig: {
        nav: [
          { text: '首頁', link: '/zh-Hant/' },
          { text: '指南', link: '/zh-Hant/guide/' },
          {
            text: '更多',
            items: [
              { text: '關於我們', link: '/zh-Hant/about/' },
              { text: '更新日誌', link: 'https://github.com/moruteaven/S3-For-XunRuiCMS/releases' }
            ]
          }
        ],
        sidebar: {
          '/zh-Hant/guide/': [
            {
              text: '指南',
              items: [
                { text: '開始', link: '/zh-Hant/guide/' }
              ]
            },
            {
              text: '存儲',
              items: [
                { text: '介紹', link: '/zh-Hant/guide/storage/' },
                { text: '阿裡雲 OSS', link: '/zh-Hant/guide/storage/oss' },
                { text: '騰訊雲 COS', link: '/zh-Hant/guide/storage/cos' },
                { text: '七牛云 Kodo', link: '/zh-Hant/guide/storage/kodo' },
                { text: '又拍云 USS', link: '/zh-Hant/guide/storage/uss' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/moruteaven/S3-For-XunRuiCMS' },
          {
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>'
            },
            link: 'https://www.xunruicms.com/shop/1783.html'
          }
        ],
        outline: { label: '頁面導航' },
        docFooter: { prev: '上一頁', next: '下一頁' },
        lastUpdated: { text: '最後更新於', formatOptions: { dateStyle: 'short', timeStyle: 'medium' } },
        langMenuLabel: '多語言',
        returnToTopLabel: '回到頂部',
        sidebarMenuLabel: '選單',
        darkModeSwitchLabel: '主題',
        lightModeSwitchTitle: '切換到淺色模式',
        darkModeSwitchTitle: '切換到深色模式',
        notFound: {
          code: '404',
          title: '頁面未找到',
          quote: '您訪問的頁面不存在',
          linkLabel: '返回首頁',
          linkText: '點擊這裡返回主頁'
        },
        footer: {
          copyright: `Copyright © 2025 - ${new Date().getFullYear()} <a href="https://moruteaven.com" target="_blank" rel="noopener noreferrer">抹露茶柒</a>`,
          message: '<a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">魯ICP備2026008616號-2</a>'
        }
      }
    },
    en: {
      lang: 'en',
      label: 'English',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/' },
          {
            text: 'More',
            items: [
              { text: 'About Us', link: '/en/about/' },
              { text: 'Changelog', link: 'https://github.com/moruteaven/S3-For-XunRuiCMS/releases' }
            ]
          }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Getting Started', link: '/en/guide/' }
              ]
            },
            {
              text: 'Storage',
              items: [
                { text: 'Introduction', link: '/en/guide/storage/' },
                { text: 'Aliyun OSS', link: '/en/guide/storage/oss' },
                { text: 'Tencent COS', link: '/en/guide/storage/cos' },
                { text: 'Qiniu Kodo', link: '/en/guide/storage/kodo' },
                { text: 'UPyun USS', link: '/en/guide/storage/uss' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/moruteaven/S3-For-XunRuiCMS' },
          {
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>'
            },
            link: 'https://www.xunruicms.com/shop/1783.html'
          }
        ],
        outline: { label: 'On This Page' },
        docFooter: { prev: 'Previous Page', next: 'Next Page' },
        lastUpdated: { text: 'Last Updated', formatOptions: { dateStyle: 'short', timeStyle: 'medium' } },
        langMenuLabel: 'Language',
        returnToTopLabel: 'Back to Top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Switch to Light Mode',
        darkModeSwitchTitle: 'Switch to Dark Mode',
        notFound: {
          code: '404',
          title: 'Page Not Found',
          quote: 'The page you are looking for does not exist.',
          linkLabel: 'Go Home',
          linkText: 'Click here to return to the homepage'
        },
        footer: {
          copyright: `Copyright © 2025 - ${new Date().getFullYear()} <a href="https://moruteaven.com" target="_blank" rel="noopener noreferrer">Moruteaven</a>`,
          message: '<a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">Lu ICP Bei 2026008616-2</a>'
        }
      }
    },
    ja: {
      lang: 'ja',
      label: '日本語',
      link: '/ja/',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'ガイド', link: '/ja/guide/' },
          {
            text: 'その他',
            items: [
              { text: '会社概要', link: '/ja/about/' },
              { text: '更新履歴', link: 'https://github.com/moruteaven/S3-For-XunRuiCMS/releases' }
            ]
          }
        ],
        sidebar: {
          '/ja/guide/': [
            {
              text: 'ガイド',
              items: [
                { text: 'はじめに', link: '/ja/guide/' }
              ]
            },
            {
              text: 'ストレージ',
              items: [
                { text: '紹介', link: '/ja/guide/storage/' },
                { text: 'アリババ雲 OSS', link: '/ja/guide/storage/oss' },
                { text: 'テンセント COS', link: '/ja/guide/storage/cos' },
                { text: '七牛雲 Kodo', link: '/ja/guide/storage/kodo' },
                { text: '又拍雲 USS', link: '/ja/guide/storage/uss' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/moruteaven/S3-For-XunRuiCMS' },
          {
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>'
            },
            link: 'https://www.xunruicms.com/shop/1783.html'
          }
        ],
        outline: { label: 'ページ导航' },
        docFooter: { prev: '前のページ', next: '次のページ' },
        lastUpdated: { text: '最終更新', formatOptions: { dateStyle: 'short', timeStyle: 'medium' } },
        langMenuLabel: '言語',
        returnToTopLabel: 'トップへ戻る',
        sidebarMenuLabel: 'メニュー',
        darkModeSwitchLabel: 'テーマ',
        lightModeSwitchTitle: 'ライトモードに切り替え',
        darkModeSwitchTitle: 'ダークモードに切り替え',
        notFound: {
          code: '404',
          title: 'ページが見つかりません',
          quote: 'アクセスしたページは存在しません。',
          linkLabel: 'ホームへ',
          linkText: 'ここをクリックしてホームページに戻る'
        },
        footer: {
          copyright: `Copyright © 2025 - ${new Date().getFullYear()} <a href="https://moruteaven.com" target="_blank" rel="noopener noreferrer">Moruteaven</a>`,
          message: '<a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">魯ICP備2026008616-2</a>'
        }
      }
    }
  },

  cleanUrls: true,

  markdown: {
    lineNumbers: true,
    theme: 'github-dark'
  },

  appearance: true,

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.chenyande.com/libs/font-awesome/4.7.0/css/font-awesome.css' }]
  ],

  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local'
    }
  },

  vite: {}
})
