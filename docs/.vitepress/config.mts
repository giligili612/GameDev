import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GameDev",
  description: "A VitePress Site",
  base: "/GameDev/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'OpenGL', link: '/markdown-examples' },
      { text: '计算机图形学', link: '/markdown-examples' },
      { text: 'Vulkan', link: '/markdown-examples' },
      { text: '游戏引擎', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'OpenGL',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
