/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://www.penguinpapa.life/',
  avatar: '/avatar.jpg',
  title: ' 小企鹅爸爸的生活',
  description: 'Pure thoughts, simple stories.',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025  小企鹅爸爸',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/somebear'
    },
]
});