<template>
  <div class="home">
    <!-- Hero 超大视觉区域 -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-left" data-animate="fade-up">
          <div class="hero-logo">
            <img src="/logo.png" alt="S3 For XunRuiCMS" width="80" height="80">
          </div>
          <div class="tag-line">
            <span class="tag-dot"></span>
            <span class="tag-text">{{ t.tagLine }}</span>
          </div>
          <h1 class="hero-title">
            S3 <span>FOR XUNRUICMS</span>
          </h1>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">{{ t.stats.s3Compat }}</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">∞</span>
              <span class="stat-label">{{ t.stats.scalable }}</span>
            </div>
          </div>
        </div>
        <div class="hero-right" data-animate="fade-up" data-delay="200">
          <div class="line-graphic hero-line-graphic">
            <div class="bar-outline"></div>
            <div class="bar"></div>
            <div class="bar-outline"></div>
            <div class="bar"></div>
            <div class="bar-outline-small"></div>
          </div>
        </div>
      </div>
      <div class="hero-extra-line red-trans-block">
        <div class="hero-stats-grid">
          <div class="stat-box">
            <span class="stat-big">99.9%</span>
            <span class="stat-desc">{{ t.statsGrid.availability }}</span>
          </div>
          <div class="stat-box">
            <span class="stat-big">&lt; 1ms</span>
            <span class="stat-desc">{{ t.statsGrid.latency }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 功能卡片区域 -->
    <section class="features-section" data-animate="stagger">
      <div class="section-header">
        <span class="section-tag">{{ t.featuresTag }}</span>
      </div>
      <div class="grid-3">
        <div class="card-modern">
          <div class="card-icon">
            <i class="fas fa-boxes"></i>
          </div>
          <h3 class="card-title">{{ t.features[0].title }}</h3>
          <p class="card-desc">{{ t.features[0].desc }}</p>
          <div class="card-footer">
            <span class="platform-tag aws-logo">AWS</span>
            <div class="mini-line-graphic">
              <div class="bar mini-bar"></div>
              <div class="bar-outline mini-bar-outline"></div>
            </div>
          </div>
        </div>
        <div class="card-modern">
          <div class="card-icon">
            <i class="fas fa-shield-alt"></i>
          </div>
          <h3 class="card-title">{{ t.features[1].title }}</h3>
          <p class="card-desc">{{ t.features[1].desc }}</p>
          <div class="card-footer security-footer">
            <span class="security-tag">AES-256</span>
            <span class="security-label">{{ t.features[1].footer.label }}</span>
          </div>
        </div>
        <div class="card-modern">
          <div class="card-icon">
            <i class="fas fa-bolt"></i>
          </div>
          <h3 class="card-title">{{ t.features[2].title }}</h3>
          <p class="card-desc">{{ t.features[2].desc }}</p>
          <div class="card-footer">
            <span class="version-tag">{{ version }}+</span>
            <span class="free-tag">{{ t.features[2].footer.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 兼容性与生态 -->
    <section class="compatibility-section" data-animate="fade-up">
      <div class="section-header">
        <span class="section-tag">{{ t.compatTag }}</span>
      </div>
      <!-- 存储服务卡片 -->
      <div class="storage-grid">
        <div 
          v-for="(name, index) in t.storage" 
          :key="index"
          class="storage-card" 
          :style="{ '--card-accent': storageColors[index] }"
        >
          <div class="storage-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <span>{{ name }}</span>
        </div>
      </div>
      <!-- CMS 集成横幅 -->
      <div class="cms-banner">
        <div class="cms-banner-content">
          <div class="cms-banner-logo">
            <img src="/logo.png" alt="XunRuiCMS" width="60" height="60">
          </div>
          <div class="cms-banner-text">
            <div class="cms-banner-title">
              <span class="cms-name">XunRuiCMS</span>
              <span class="cms-version">{{ t.cms.version }}</span>
            </div>
            <p class="cms-banner-desc">{{ t.cms.desc }}</p>
          </div>
          <div class="cms-banner-actions">
            <div class="license-info">
              <i class="fas fa-code-branch"></i>
              <span>{{ t.license }}</span>
            </div>
            <a href="https://www.xunruicms.com/shop/1783.html" class="cta-hint" target="_blank" rel="noopener noreferrer">
              {{ t.cms.cta }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 发布/行动号召 -->
    <section class="cta-section" data-animate="fade-up">
      <div class="cta-content">
        <div class="cta-header">
          <span class="section-tag">{{ t.cta.tag }}</span>
          <h2 class="cta-title">{{ t.cta.title }}</h2>
          <p class="cta-subtitle">{{ t.cta.subtitle }}</p>
        </div>
        <a href="https://www.xunruicms.com/shop/1783.html" class="release-btn" target="_blank" rel="noopener noreferrer">
          <i class="fas fa-download"></i>
          <span>{{ t.cta.btn }}</span>
        </a>
      </div>
      <div class="cta-decoration">
        <div class="deco-bar"></div>
        <div class="deco-bar"></div>
        <div class="deco-bar"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
// VitePress Home Component - S3 For XunRuiCMS
import { computed, ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { homeLocales, storageColors } from './i18n/home.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkg = JSON.parse(readFileSync(resolve(__dirname, '../../../package.json'), 'utf-8'))

const { frontmatter, page } = useData()

const currentLang = computed(() => {
  // 1. 首先看 frontmatter
  if (frontmatter.value && frontmatter.value.lang) {
    return frontmatter.value.lang
  }
  // 2. 其次看 relativePath
  if (page.value && page.value.relativePath) {
    const path = page.value.relativePath
    if (path.startsWith('en/')) return 'en'
    if (path.startsWith('ja/')) return 'ja'
    if (path.startsWith('zh-Hant/')) return 'zh-Hant'
  }
  // 3. 默认中文
  return 'zh-CN'
})

const version = computed(() => `V${pkg.version}`)

const t = computed(() => {
  return homeLocales[currentLang.value] || homeLocales['zh-CN']
})

onMounted(() => {
  // 浏览器端确保语言正确
  // 不过现在已经用 computed 自动判断了，不需要额外赋值了！
  
  // 入场动画
  const animatedElements = document.querySelectorAll('[data-animate]')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0
        setTimeout(() => {
          entry.target.classList.add('animate-in')
        }, parseInt(delay))
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  animatedElements.forEach(el => observer.observe(el))
})
</script>

<style>
:root {
  --red-primary: #dc5945;
  --red-light: rgba(220, 89, 69, 0.15);
  --red-glow: rgba(220, 89, 69, 0.4);

  /* 暗色主题 */
  --dark-text: #ffffff;
  --dark-text-secondary: #cfa9a9;
  --dark-card-bg: rgba(30, 15, 15, 0.85);
  --dark-card-shadow: 0 25px 40px -15px rgba(0,0,0,0.8);

  /* 亮色主题 */
  --light-text: #2d2d2d;
  --light-text-secondary: #666666;
  --light-card-bg: rgba(255, 255, 255, 0.85);
  --light-card-shadow: 0 25px 40px -15px rgba(0,0,0,0.08);
}

html.dark {
  --text-primary: var(--dark-text);
  --text-secondary: var(--dark-text-secondary);
  --card-bg: var(--dark-card-bg);
  --card-shadow: var(--dark-card-shadow);
}

html:not(.dark) {
  --text-primary: var(--light-text);
  --text-secondary: var(--light-text-secondary);
  --card-bg: var(--light-card-bg);
  --card-shadow: var(--light-card-shadow);
}
</style>

<style scoped>
.home {
  max-width: 1360px;
  margin: 0 auto;
  padding: 3rem 2rem 4rem;
  color: var(--text-primary);
}

/* ========== 动画基础 ========== */
[data-animate] {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

[data-animate].animate-in {
  opacity: 1;
  transform: translateY(0);
}

[data-animate="stagger"] {
  transition-delay: 0.1s;
}

.grid-3 > [data-animate] {
  transform: translateY(40px);
}

.grid-3 > [data-animate].animate-in {
  transform: translateY(0);
  transition-delay: calc(var(--index, 0) * 0.15s);
}

/* ========== Hero 区域 ========== */
.hero {
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  position: relative;
}

.hero-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 5;
  position: relative;
}

.hero-left {
  max-width: 900px;
}

.hero-logo {
  margin-bottom: 1.5rem;
}

.hero-logo img {
  display: block;
  border-radius: 16px;
  transition: transform 0.3s ease;
}

.hero-logo img:hover {
  transform: scale(1.05);
}

.tag-line {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1.25rem;
  background: var(--red-light);
  border-radius: 30px;
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.tag-dot {
  width: 8px;
  height: 8px;
  background: var(--red-primary);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.8); }
}

.hero-title {
  font-size: clamp(3.5rem, 14vw, 7.5rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2.5px var(--red-primary);
  text-stroke: 2.5px var(--red-primary);
  margin-bottom: 0;
  position: relative;
  z-index: 3;
}

.hero-title span {
  -webkit-text-stroke: 0;
  color: var(--text-primary);
  font-size: 0.4em;
  display: block;
  font-weight: 700;
  letter-spacing: 3px;
  margin-top: 0.5rem;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-top: 2.5rem;
  padding: 1.5rem 0;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-number {
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 0.9;
  color: var(--red-primary);
  letter-spacing: -2px;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-divider {
  width: 3px;
  height: 60px;
  background: linear-gradient(180deg, var(--red-primary), transparent);
  opacity: 0.5;
}

.hero-right {
  margin-bottom: 1rem;
}

/* ========== 线形图表 ========== */
.line-graphic {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 200px;
}

.hero-line-graphic {
  justify-content: flex-end;
}

.hero-line-graphic .bar-outline {
  height: 140px;
  width: 20px;
  background: transparent;
  border: 2px solid var(--red-primary);
  border-radius: 6px;
  opacity: 0.4;
}

.hero-line-graphic .bar {
  height: 200px;
  width: 20px;
  background: var(--red-primary);
  border-radius: 6px 6px 0 0;
  opacity: 0.85;
  box-shadow: 0 0 30px var(--red-glow);
}

.hero-line-graphic .bar-outline-small {
  height: 100px;
  width: 14px;
  background: transparent;
  border: 2px solid var(--red-primary);
  border-radius: 4px;
  opacity: 0.3;
}

/* ========== 统计数据区块 ========== */
.hero-extra-line {
  margin-top: 3rem;
  padding: 2.5rem;
  border-radius: 24px;
}

.red-trans-block {
  background: linear-gradient(135deg, rgba(220, 89, 69, 0.25) 0%, rgba(220, 89, 69, 0.05) 70%);
  border: 1px solid rgba(220, 89, 69, 0.2);
}

.hero-stats-grid {
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
}

.stat-box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-big {
  font-size: 3rem;
  font-weight: 800;
  color: var(--red-primary);
  line-height: 1;
}

.stat-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* ========== 功能卡片 ========== */
.features-section {
  margin-bottom: 5rem;
}

.section-header {
  margin-bottom: 2rem;
}

.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 0.75rem 1.25rem;
  background: var(--card-bg);
  border-radius: 30px;
  border: 1px solid rgba(220, 89, 69, 0.15);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.card-modern {
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  -moz-backdrop-filter: blur(12px);
  border: 1px solid rgba(220, 89, 69, 0.2);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  box-shadow: var(--card-shadow);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

@supports not (backdrop-filter: blur(12px)) {
  .card-modern {
    background: rgba(255, 255, 255, 0.9);
  }
  html.dark .card-modern {
    background: rgba(30, 15, 15, 0.95);
  }
}

.card-modern::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--red-primary), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-modern:hover {
  border-color: var(--red-primary);
  transform: translateY(-8px);
  box-shadow: 0 30px 60px -15px rgba(220, 89, 69, 0.25);
}

.card-modern:hover::before {
  opacity: 1;
}

.card-icon {
  font-size: 2.5rem;
  color: var(--red-primary);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.card-modern:hover .card-icon {
  transform: scale(1.1);
}

.card-title {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.3;
  color: var(--text-primary);
}

.card-desc {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(220, 89, 69, 0.1);
}

.platform-tag {
  font-size: 2rem;
  font-weight: 900;
  color: var(--red-primary);
}

.mini-line-graphic {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 40px;
}

.mini-bar {
  width: 10px;
  background: var(--red-primary);
  height: 30px;
  border-radius: 2px;
}

.mini-bar-outline {
  width: 10px;
  height: 40px;
  background: transparent;
  border: 2px solid var(--red-primary);
  border-radius: 3px;
  opacity: 0.5;
}

.security-footer {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.security-tag {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--red-primary);
}

.security-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.version-tag {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--red-primary);
  padding: 0.5rem 1rem;
  background: var(--red-light);
  border-radius: 20px;
}

.free-tag {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* ========== 兼容性区域 ========== */
.compatibility-section {
  margin-bottom: 5rem;
}

.storage-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.25rem;
}

.storage-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-height: 72px;
  padding: 1rem 1.25rem;
  background: var(--card-bg);
  border: 1px solid rgba(220, 89, 69, 0.15);
  border-radius: 16px;
  box-shadow: var(--card-shadow);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-primary);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.storage-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--card-accent, var(--red-primary));
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.storage-card:hover {
  border-color: var(--card-accent, var(--red-primary));
  transform: translateY(-6px);
  box-shadow: 0 20px 40px -12px color-mix(in srgb, var(--card-accent, var(--red-primary)) 35%, transparent);
}

.storage-card:hover::before {
  transform: scaleY(1);
}

.storage-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--card-accent, var(--red-primary)) 15%, transparent);
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.storage-icon i {
  color: var(--card-accent, var(--red-primary));
  font-size: 1.2rem;
}

.storage-card:hover .storage-icon {
  transform: scale(1.1) rotate(-5deg);
  background: color-mix(in srgb, var(--card-accent, var(--red-primary)) 25%, transparent);
}

.cms-banner {
  margin-top: 2rem;
}

.cms-banner-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 2.5rem;
  background: var(--card-bg);
  border: 1px solid rgba(220, 89, 69, 0.2);
  border-radius: 24px;
  box-shadow: var(--card-shadow);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cms-banner-content:hover {
  border-color: var(--red-primary);
  transform: translateY(-4px);
  box-shadow: 0 30px 60px -15px rgba(220, 89, 69, 0.25);
}

.cms-banner-logo {
  flex-shrink: 0;
}

.cms-banner-logo img {
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(220, 89, 69, 0.2);
}

.cms-banner-text {
  flex: 1;
}

.cms-banner-title {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.cms-name {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--text-primary);
}

.cms-version {
  color: var(--red-primary);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  background: var(--red-light);
  border-radius: 15px;
}

.cms-banner-desc {
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}

.cms-banner-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
}

.license-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.license-info i {
  color: var(--red-primary);
}

.cta-hint {
  font-size: 0.85rem;
  color: var(--red-primary);
  font-weight: 600;
  text-decoration: none;
}

.cta-hint:hover {
  text-decoration: underline;
}

/* ========== CTA 区域 ========== */
.cta-section {
  position: relative;
  padding: 4rem 3rem;
  background: var(--card-bg);
  border-radius: 32px;
  border: 1px solid rgba(220, 89, 69, 0.15);
  overflow: hidden;
}

.cta-content {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
}

.cta-header {
  max-width: 600px;
}

.cta-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--text-primary);
  margin: 1rem 0;
  line-height: 1.2;
  word-break: break-word;
  hyphens: auto;
}

.cta-subtitle {
  font-size: 1.25rem;
  font-weight: 300;
  color: var(--text-secondary);
}

.release-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: var(--red-primary);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 8px 30px var(--red-glow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.release-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.release-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px var(--red-glow);
}

.release-btn:hover::before {
  left: 100%;
}

.release-btn i {
  font-size: 1.2rem;
}

.cta-decoration {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 200px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 2rem;
  opacity: 0.15;
}

.deco-bar {
  width: 16px;
  background: var(--red-primary);
  border-radius: 4px;
}

.deco-bar:nth-child(1) { height: 100%; }
.deco-bar:nth-child(2) { height: 80%; }
.deco-bar:nth-child(3) { height: 60%; }

/* ========== 响应式设计 ========== */
@media (max-width: 1200px) {
  .home {
    padding: 2.5rem 1.5rem 3.5rem;
  }

  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }

  .storage-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .hero-title {
    font-size: clamp(3rem, 11vw, 5.5rem);
  }

  .stat-number {
    font-size: 3.5rem;
  }

  .hero-stats-grid {
    gap: 3rem;
  }
}

@media (max-width: 992px) {
  .hero-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-right {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .line-graphic {
    height: 150px;
  }

  .hero-stats {
    gap: 2rem;
  }

  .storage-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cms-banner-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .cms-banner-actions {
    align-items: flex-start;
    flex-direction: row;
  }

  .cta-content {
    flex-direction: column;
    text-align: center;
  }

  .cta-header {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .home {
    padding: 2rem 1rem 3rem;
  }

  .grid-3 {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .storage-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .hero-title {
    font-size: clamp(2.5rem, 10vw, 4rem);
  }

  .hero-logo img {
    width: 60px;
    height: 60px;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }

  .stat-divider {
    display: none;
  }

  .stat-number {
    font-size: 3rem;
  }

  .hero-stats-grid {
    gap: 2rem;
  }

  .stat-big {
    font-size: 2.5rem;
  }

  .card-modern {
    padding: 2rem 1.5rem;
    border-radius: 20px;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .cms-banner-content {
    padding: 1.5rem 1.5rem;
  }

  .cms-banner-logo img {
    width: 50px;
    height: 50px;
  }

  .cms-name {
    font-size: 1.8rem;
  }

  .cta-section {
    padding: 3rem 2rem;
  }

  .release-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .home {
    padding: 1.5rem 0.75rem 2rem;
  }

  .hero-title {
    font-size: clamp(2rem, 9vw, 3rem);
    -webkit-text-stroke-width: 2px;
  }

  .tag-line {
    font-size: 0.75rem;
    padding: 0.4rem 1rem;
  }

  .hero-stats {
    margin-top: 1.5rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .line-graphic {
    height: 120px;
    gap: 8px;
  }

  .hero-line-graphic .bar-outline,
  .hero-line-graphic .bar {
    width: 14px;
  }

  .hero-extra-line {
    padding: 1.5rem;
  }

  .stat-big {
    font-size: 2rem;
  }

  .stat-desc {
    font-size: 0.8rem;
  }

  .card-modern {
    padding: 1.5rem 1.2rem;
    border-radius: 16px;
  }

  .card-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .card-title {
    font-size: 1.3rem;
  }

  .card-desc {
    font-size: 0.9rem;
  }

  .section-tag {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    letter-spacing: 2px;
  }

  .storage-grid {
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }

  .storage-card {
    min-height: 60px;
    padding: 0.85rem 1rem;
    font-size: 0.9rem;
  }

  .storage-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
  }

  .storage-icon i {
    font-size: 1rem;
  }

  .cms-banner-content {
    padding: 1.25rem 1.25rem;
    gap: 1.5rem;
  }

  .cms-banner-logo img {
    width: 45px;
    height: 45px;
  }

  .cms-name {
    font-size: 1.6rem;
  }

  .cms-banner-actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .cta-section {
    padding: 2rem 1.5rem;
    border-radius: 24px;
  }

  .cta-title {
    font-size: 1.8rem;
  }

  .cta-subtitle {
    font-size: 1rem;
  }

  .release-btn {
    font-size: 1rem;
    padding: 0.9rem 2rem;
  }
}
</style>
