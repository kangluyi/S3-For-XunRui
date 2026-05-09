// Theme entry point for VitePress
import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'
import Home from './Home.vue'
import PageView from './PageView.vue'
import 'viewerjs/dist/viewer.min.css'
import imageViewer from 'vitepress-plugin-image-viewer'
import { useRoute } from 'vitepress'
import { h } from 'vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Home', Home)
    app.component('PageView', PageView)
  },
  setup() {
    // Get route
    const route = useRoute();
    // Using image viewer
    imageViewer(route);
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(PageView)
    })
  }
}