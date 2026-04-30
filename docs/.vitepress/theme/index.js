// Theme entry point for VitePress
import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'
import Home from './Home.vue'
import 'viewerjs/dist/viewer.min.css'
import imageViewer from 'vitepress-plugin-image-viewer'
import { useRoute } from 'vitepress'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Home', Home)
  },
  setup() {
    // Get route
    const route = useRoute();
    // Using image viewer
    imageViewer(route);
  }
}