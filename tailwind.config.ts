import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        colors: {
            'rose': '#FF3366',
            'rose-light': '#FF6699',
            'rose-dark': '#CC0033',

            'green': '#00CC66',
            'green-light': '#00FF99',
            'green-dark': '#00994D',

            'blue': '#0066FF',
            'blue-light': '#3399FF',
            'blue-dark': '#0033CC',

            'yellow': '#FFCC00',
            'yellow-light': '#FFFF33',
            'yellow-dark': '#CC9900',

            'orange': '#FF9900',
            'orange-light': '#FFCC33',
            'orange-dark': '#CC6600',

            'purple': '#9933FF',
            'purple-light': '#CC66FF',
            'purple-dark': '#6600CC',

            'black': '#000000',
            'white': '#F2F2F2',
            'gray-light': '#E5E5E5',
            'gray': '#BFBFBF',
            'gray-dark': '#808080',
            'transparent': 'transparent',
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)']
            },
        },
    }
}
export default config
