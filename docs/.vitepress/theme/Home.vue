<template>
  <div class="home">
    <!-- HERO 超大视觉 -->
    <div class="hero">
      <div class="hero-inner">
        <div class="hero-left">
          <div class="en-dot"># 原生 S3 集成</div>
          <div class="hero-title">
            S3 <span>FOR XUNRUICMS</span>
          </div>
          <div class="contrast-group">
            <span class="big">100%</span>
            <span class="small">兼容 S3 协议</span>
            <span style="width: 2rem"></span>
            <span class="big">∞</span>
            <span class="small">可扩展存储</span>
          </div>
        </div>
        <div class="hero-right">
          <div class="line-graphic hero-line-graphic">
            <div class="bar-outline"></div>
            <div class="bar"></div>
            <div class="bar-outline"></div>
            <div class="bar"></div>
            <div class="bar-outline-small"></div>
          </div>
        </div>
      </div>
      <!-- 红色单色透明渐变区块 新色#dc5945 -->
      <div class="hero-extra-line red-trans-block">
        <div class="hero-stats">
          <div><span class="stat-big">99.9%</span> <span class="en-micro">可用性</span></div>
          <div><span class="stat-big">< 1ms</span> <span class="en-micro">插件处理延迟</span></div>
        </div>
      </div>
    </div>

    <!-- 3大功能卡片 (完整内容) -->
    <div class="grid-3">
      <div class="card-modern">
        <div class="feature-icon"><i class="fas fa-boxes"></i></div>
        <div class="feature-title">原生S3兼容</div>
        <div class="feature-desc">无缝对接阿里云、腾讯云、MinIO等主流对象存储，配置即用。同时支持Path-Style和Virtual-Hosted风格。</div>
        <div class="mini-line-group">
          <span class="stat-number aws-logo">AWS</span>
          <div class="line-graphic mini-line-graphic">
            <div class="bar mini-bar"></div>
            <div class="bar-outline mini-bar-outline"></div>
          </div>
        </div>
      </div>
      <div class="card-modern">
        <div class="feature-icon"><i class="fas fa-chart-line"></i></div>
        <div class="feature-title">性能可视化</div>
        <div class="feature-desc">内置实时监控面板，传输速率、请求次数、错误率一目了然。勾线风格图表实时反馈。</div>
        <div class="chart-container">
          <div class="chart-bars">
            <div class="chart-bar chart-bar-1"></div>
            <div class="chart-bar chart-bar-2"></div>
            <div class="chart-bar chart-bar-3"></div>
            <div class="chart-bar chart-bar-4"></div>
            <div class="chart-bar chart-bar-5"></div>
          </div>
        </div>
        <span class="en-micro chart-label">实时吞吐量 (MB/s)</span>
      </div>
      <div class="card-modern">
        <div class="feature-icon"><i class="fas fa-shield-alt"></i></div>
        <div class="feature-title">企业级安全</div>
        <div class="feature-desc">IAM 角色集成，临时凭证，签名v4 完全支持。传输中加密 + 静态加密，满足等保合规。</div>
        <div class="contrast-group security-contrast">
          <span class="big aes-label">AES-256</span>
          <span class="small">加密标准</span>
        </div>
      </div>
    </div>

    <!-- 兼容性与生态 (完整要点) -->
    <div class="compatibility-section">
      <div class="en-dot">🔌 全生态兼容 · 即插即用</div>
      <div class="grid-2 compatibility-grid">
        <div class="card-modern">
          <ul class="compatibility-list">
            <li><i class="fas fa-check-circle"></i> 阿里云OSS (北京/上海/深圳等)</li>
            <li><i class="fas fa-check-circle"></i> 腾讯云COS (金融云/公有云)</li>
            <li><i class="fas fa-check-circle"></i> 华为云OBS、百度云BOS</li>
            <li><i class="fas fa-check-circle"></i> MinIO / Ceph RADOS (自建私有云)</li>
            <li><i class="fas fa-check-circle"></i> 亚马逊S3、Backblaze B2</li>
            <li><i class="fas fa-check-circle"></i> 七牛云Kodo、又拍云</li>
          </ul>
        </div>
        <div class="card-modern">
          <div class="cms-info">
            <span class="cms-name">XunRuiCMS</span>
            <span class="cms-version">v6.x / v7.x 全系</span>
          </div>
          <p class="cms-description">原生字段集成，无需修改模板，后台直接选择S3桶。支持附件、图片、视频分发。</p>
          <div class="license-info">
            <i class="fas fa-code-branch"></i> 开源协议: Apache 2.0 / MIT <br>
            <span class="en-micro">立即体验 · 完全免费</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 发布/行动号召 -->
    <hr>
    <div class="cta-section">
      <div>
        <div class="en-dot">🚀 正式发布</div>
        <span class="hero-title">S3 FOR XUNRUICMS</span>
        <span class="cta-subtitle">现已开放下载 · 生产就绪</span>
      </div>
      <div class="release-tag">
        <i class="fas fa-download"></i> 立即获取
      </div>
    </div>
  </div>
</template>

<script setup>
// Home component for VitePress
</script>

<style>
:root {
  --red-primary: #dc5945;
}

html.dark {
  --text-primary: #ffffff;
  --text-secondary: #cfa9a9;
  --card-bg: rgba(30, 15, 15, 0.75);
  --card-shadow: 0 25px 40px -15px rgba(0,0,0,0.8);
}

html:not(.dark) {
  --text-primary: #333333;
  --text-secondary: #666666;
  --card-bg: rgba(255, 255, 255, 0.8);
  --card-shadow: 0 25px 40px -15px rgba(0,0,0,0.1);
}
</style>

<style scoped>
.home {
  max-width: 1360px;
  margin: 0 auto;
  padding: 3rem 2rem 4rem;
  color: var(--text-primary);
}

.hero-title {
  font-size: clamp(4rem, 15vw, 8rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px var(--red-primary);
  text-stroke: 2px var(--red-primary);
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 3;
}

.hero-title span {
  -webkit-text-stroke: 0;
  color: var(--text-primary);
  font-size: 0.45em;
  display: block;
  font-weight: 700;
  letter-spacing: 2px;
  margin-top: 0.3rem;
}

.en-dot {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 400;
  color: var(--text-secondary);
  display: inline-block;
  border-left: 3px solid var(--red-primary);
  padding-left: 1rem;
  margin: 2rem 0 1rem;
}

.en-micro {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 300;
  letter-spacing: 0.5px;
}

.card-modern {
  background: var(--card-bg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(220, 89, 69, 0.3);
  border-radius: 32px;
  padding: 2.5rem 2rem;
  box-shadow: var(--card-shadow);
  transition: transform 0.2s ease, border-color 0.2s;
  margin-bottom: 2rem;
}

.card-modern:hover {
  border-color: var(--red-primary);
  transform: translateY(-4px);
}

.line-graphic {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 80px;
  margin: 2rem 0;
}

.hero-line-graphic {
  justify-content: flex-end;
  height: 250px;
}

.hero-line-graphic .bar-outline {
  height: 120px;
}

.hero-line-graphic .bar {
  height: 180px;
}

.hero-line-graphic .bar-outline-small {
  height: 90px;
}

.line-graphic .bar {
  width: 16px;
  background: var(--red-primary);
  height: calc(100% - 20px);
  align-self: flex-end;
  opacity: 0.9;
  border-radius: 2px 2px 0 0;
}

.line-graphic .bar-outline {
  background: transparent;
  border: 2px solid var(--red-primary);
  height: 100%;
  width: 16px;
  border-radius: 4px;
  opacity: 0.5;
}

.line-graphic .bar-outline-small {
  background: transparent;
  border: 2px solid var(--red-primary);
  height: 45px;
  width: 10px;
}

.stat-number {
  font-size: 5.2rem;
  font-weight: 900;
  line-height: 0.9;
  color: var(--red-primary);
  letter-spacing: -2px;
  margin-bottom: 0.5rem;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin: 2rem 0;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 2rem 0;
}

.hero {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 6rem;
}

.hero-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 5;
  position: relative;
  margin-bottom: 3rem;
}

.hero-left {
  max-width: 900px;
  margin-bottom: 2rem;
}

.hero-right {
  text-align: right;
  margin-bottom: 2rem;
}

.hero-extra-line {
  margin-top: 3rem;
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  padding: 2rem;
}

.feature-icon {
  font-size: 2.6rem;
  color: var(--red-primary);
  margin-bottom: 2rem;
}

.feature-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
  color: var(--text-primary);
}

.feature-desc {
  color: var(--text-secondary);
  font-size: 1rem;
  border-left: 2px solid var(--red-primary);
  padding-left: 1rem;
  margin-bottom: 2rem;
}

.mini-line-group {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 2rem;
}

.contrast-group {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin: 2rem 0;
}

.contrast-group .big {
  font-size: 5rem;
  font-weight: 800;
  color: var(--red-primary);
}

.contrast-group .small {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-transform: uppercase;
}

.compatibility-list {
  list-style: none;
  margin-top: 1.5rem;
}

.compatibility-list li {
  margin-bottom: 1.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-primary);
}

.compatibility-list i {
  color: var(--red-primary);
  width: 28px;
  font-size: 1.3rem;
}

hr {
  border: 1px solid rgba(220, 89, 69, 0.2);
  margin: 4rem 0;
}

.release-tag {
  background: var(--red-primary);
  padding: 0.8rem 2rem;
  border-radius: 40px;
  font-weight: 700;
  font-size: 1.2rem;
  color: white;
  box-shadow: 0 0 20px rgba(220, 89, 69, 0.5);
  letter-spacing: 1px;
  margin-top: 1rem;
}

.red-trans-block {
  background: linear-gradient(120deg, rgba(220, 89, 69, 0.35) 0%, rgba(220, 89, 69, 0) 80%);
  padding: 2rem 2.5rem;
  border-radius: 60px 20px 20px 60px;
  margin-top: 2rem;
}

.hero-stats {
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
}

.stat-big {
  font-size: 3rem;
  font-weight: 800;
}

.aws-logo {
  font-size: 2.5rem;
}

.mini-line-graphic {
  height: 40px;
  margin: 0;
  gap: 4px;
}

.mini-bar {
  height: 30px;
  width: 8px;
}

.mini-bar-outline {
  height: 40px;
  width: 8px;
}

.chart-container {
  display: flex;
  gap: 12px;
  margin-top: 2rem;
}

.chart-container > div {
  width: 100%;
}

.chart-bars {
  display: flex;
  gap: 4px;
  align-items: flex-end;
  height: 70px;
}

.chart-bar {
  width: 100%;
  background: var(--red-primary);
}

.chart-bar-1 {
  height: 40px;
  opacity: 0.8;
}

.chart-bar-2 {
  height: 70px;
}

.chart-bar-3 {
  height: 25px;
  opacity: 0.5;
}

.chart-bar-4 {
  height: 55px;
  background: transparent;
  border: 2px solid var(--red-primary);
}

.chart-bar-5 {
  height: 65px;
}

.chart-label {
  display: block;
  margin-top: 0.5rem;
}

.security-contrast {
  margin-top: 2rem;
}

.aes-label {
  font-size: 2.8rem;
}

.compatibility-section {
  margin: 5rem 0;
}

.compatibility-grid {
  gap: 1.8rem;
}

.cms-info {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.cms-name {
  font-size: 2.5rem;
  font-weight: 800;
}

.cms-version {
  color: var(--red-primary);
  font-size: 1rem;
}

.cms-description {
  margin: 1.5rem 0;
  color: var(--text-secondary);
}

.license-info {
  border-left: 3px solid var(--red-primary);
  padding-left: 1rem;
  margin-top: 1.5rem;
}

.cta-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 3rem 0;
  gap: 2rem;
}

.cta-section > div {
  margin-bottom: 2rem;
}

.cta-subtitle {
  display: block;
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .grid-2,
  .grid-3 {
    grid-template-columns: 1fr;
  }
  
  .hero-inner {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .hero-right {
    margin-top: 2rem;
    text-align: left;
  }
}
</style>