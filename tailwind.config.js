/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // 科技蓝
        secondary: '#8B5CF6', // 霓虹紫
        dark: '#111827', // 深灰
        light: '#F3F4F6', // 浅灰
        success: '#10B981',
        error: '#EF4444',
        background: '#0F172A', // 暗色背景
        text: '#E5E7EB', // 主文字
        subtext: '#94A3B8', // 次文字
      },
      fontFamily: {
        sans: [
          'Inter',
          'Montserrat',
          'Fira Code',
          'PingFang SC',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        h1: ['36px', { lineHeight: '1.3', fontWeight: '700' }],
        h2: ['28px', { lineHeight: '1.4', fontWeight: '600' }],
        h3: ['20px', { lineHeight: '1.5', fontWeight: '600' }],
        base: ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        sm: ['14px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '16': '64px',
        'card': '24px',
        'container': '1200px',
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
        full: '9999px',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0,0,0,0.06)',
      },
      screens: {
        'xl': '1200px',
        'lg': '1024px',
        'md': '768px',
        'sm': '480px',
      },
    },
  },
  plugins: [],
}
