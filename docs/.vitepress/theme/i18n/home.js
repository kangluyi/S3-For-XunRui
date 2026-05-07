export const storageColors = [
  '#ff6a00', '#006eff', '#cf0a2c', '#2932e1', '#c72e49',
  '#ef5c09', '#ff9900', '#e50914', '#07a5ec', '#1e9fff'
]

export const homeLocales = {
  'zh-CN': {
    tagLine: '原生 S3 集成',
    stats: {
      s3Compat: '兼容 S3 协议',
      scalable: '可扩展存储'
    },
    statsGrid: {
      availability: '可用性',
      latency: '插件处理延迟'
    },
    featuresTag: '核心功能 · 强大可靠',
    features: [
      {
        title: '原生S3兼容',
        desc: '无缝对接阿里云、腾讯云、MinIO等主流对象存储，配置即用。同时支持Path-Style和Virtual-Hosted风格。',
        footer: { type: 'platform' }
      },
      {
        title: '企业级安全',
        desc: 'IAM 角色集成，临时凭证，签名v4 完全支持。传输中加密 + 静态加密，满足等保合规。',
        footer: { type: 'security', tag: 'AES-256', label: '加密标准' }
      },
      {
        title: '开箱即用',
        desc: '一键安装，零配置启动。XunRuiCMS V4.7.1+ 原生支持，无需修改模板。',
        footer: { type: 'version', tag: 'V4.7.1+', label: '完全免费' }
      }
    ],
    compatTag: '全生态兼容 · 即插即用',
    storage: [
      '阿里云OSS', '腾讯云COS', '华为云OBS', '百度云BOS', 'MinIO',
      'Ceph RADOS', '亚马逊S3', 'Backblaze B2', '七牛云Kodo', '又拍云'
    ],
    cms: {
      version: 'V4.7.1及以上版本',
      desc: '原生字段集成，无需修改模板，后台直接选择S3桶。支持附件、图片、视频分发。',
      cta: '立即体验'
    },
    cta: {
      tag: '🚀 正式发布',
      title: 'S3 FOR XUNRUICMS',
      subtitle: '现已开放下载 · 生产就绪',
      btn: '立即获取'
    },
    license: 'Apache License 2.0'
  },
  'en': {
    tagLine: 'Native S3 Integration',
    stats: {
      s3Compat: 'S3 Compatible',
      scalable: 'Scalable Storage'
    },
    statsGrid: {
      availability: 'Availability',
      latency: 'Plugin Latency'
    },
    featuresTag: 'Core Features · Powerful & Reliable',
    features: [
      {
        title: 'Native S3 Compatible',
        desc: 'Seamlessly connect to Alibaba Cloud, Tencent Cloud, MinIO, and other major object storage services. Supports both Path-Style and Virtual-Hosted styles.',
        footer: { type: 'platform' }
      },
      {
        title: 'Enterprise Security',
        desc: 'IAM role integration, temporary credentials, full Signature V4 support. Encryption in transit + at rest, compliant with security standards.',
        footer: { type: 'security', tag: 'AES-256', label: 'Encryption Standard' }
      },
      {
        title: 'Ready to Use',
        desc: 'One-click install, zero-config startup. Native support for XunRuiCMS V4.7.1+, no template modifications needed.',
        footer: { type: 'version', tag: 'V4.7.1+', label: 'Completely Free' }
      }
    ],
    compatTag: 'Full Ecosystem Compatible · Plug and Play',
    storage: [
      'Alibaba OSS', 'Tencent COS', 'Huawei OBS', 'Baidu BOS', 'MinIO',
      'Ceph RADOS', 'Amazon S3', 'Backblaze B2', 'Qiniu Kodo', 'UPyun'
    ],
    cms: {
      version: 'V4.7.1 and above',
      desc: 'Native field integration, no template modifications needed. Select S3 bucket directly from the admin panel. Supports attachments, images, and video distribution.',
      cta: 'Try Now'
    },
    cta: {
      tag: '🚀 Official Release',
      title: 'S3 FOR XUNRUICMS',
      subtitle: 'Now available for download · Production Ready',
      btn: 'Download Now'
    },
    license: 'Apache License 2.0'
  },
  'ja': {
    tagLine: 'ネイティブ S3 統合',
    stats: {
      s3Compat: 'S3 互換性',
      scalable: 'スケーラブルストレージ'
    },
    statsGrid: {
      availability: '可用性',
      latency: 'プラグイン遅延'
    },
    featuresTag: 'コア機能 · 高性能・高信頼',
    features: [
      {
        title: 'ネイティブS3互換',
        desc: 'アリババクラウド、テンセントクラウド、MinIOなどの主要オブジェクトストレージにシームレスに接続。Path-StyleとVirtual-Hostedスタイルをサポート。',
        footer: { type: 'platform' }
      },
      {
        title: 'エンタープライズセキュリティ',
        desc: 'IAMロール統合、一時認証情報、署名v4完全サポート。転送時暗号化 + 静的暗号化でコンプライアンスに対応。',
        footer: { type: 'security', tag: 'AES-256', label: '暗号化標準' }
      },
      {
        title: 'すぐに使える',
        desc: 'ワンクリックインストール、ゼロコンフィグで起動。XunRuiCMS V4.7.1+をネイティブサポート、テンプレート変更不要。',
        footer: { type: 'version', tag: 'V4.7.1+', label: '完全無料' }
      }
    ],
    compatTag: 'フルエコシステム互換 · プラグアンドプレイ',
    storage: [
      'アリババ雲OSS', 'テンセントCOS', '華為雲OBS', '百度雲BOS', 'MinIO',
      'Ceph RADOS', 'Amazon S3', 'Backblaze B2', '七牛雲Kodo', '又拍雲'
    ],
    cms: {
      version: 'V4.7.1以上',
      desc: 'ネイティブフィールド統合、テンプレート変更不要。管理画面から直接S3バケットを選択。添付ファイル、画像、動画配信に対応。',
      cta: '今すぐ試す'
    },
    cta: {
      tag: '🚀 正式リリース',
      title: 'S3 FOR XUNRUICMS',
      subtitle: 'ダウンロード公開中 · 本番環境対応',
      btn: '今すぐダウンロード'
    },
    license: 'Apache License 2.0'
  },
  'zh-Hant': {
    tagLine: '原生 S3 整合',
    stats: {
      s3Compat: '相容 S3 協議',
      scalable: '可擴展儲存'
    },
    statsGrid: {
      availability: '可用性',
      latency: '插件處理延遲'
    },
    featuresTag: '核心功能 · 強大可靠',
    features: [
      {
        title: '原生S3相容',
        desc: '無縫對接阿里雲、騰訊雲、MinIO等主流物件儲存，配置即用。同時支援Path-Style和Virtual-Hosted風格。',
        footer: { type: 'platform' }
      },
      {
        title: '企業級安全',
        desc: 'IAM 角色整合，臨時憑證，簽名v4 完全支援。傳輸中加密 + 靜態加密，滿足等保合規。',
        footer: { type: 'security', tag: 'AES-256', label: '加密標準' }
      },
      {
        title: '開箱即用',
        desc: '一鍵安裝，零配置啟動。XunRuiCMS V4.7.1+ 原生支援，無需修改範本。',
        footer: { type: 'version', tag: 'V4.7.1+', label: '完全免費' }
      }
    ],
    compatTag: '全市場相容 · 即插即用',
    storage: [
      '阿里雲OSS', '騰訊雲COS', '華為雲OBS', '百度雲BOS', 'MinIO',
      'Ceph RADOS', '亞馬遜S3', 'Backblaze B2', '七牛雲Kodo', '又拍雲'
    ],
    cms: {
      version: 'V4.7.1及以上版本',
      desc: '原生欄位整合，無需修改範本，後台直接選擇S3桶。支援附件、圖片、影片分發。',
      cta: '立即體驗'
    },
    cta: {
      tag: '🚀 正式發布',
      title: 'S3 FOR XUNRUICMS',
      subtitle: '現已開放下載 · 生產就緒',
      btn: '立即獲取'
    },
    license: 'Apache License 2.0'
  }
}
