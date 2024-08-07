/** @type {import('tailwindcss').Config} */
const flowbite=require('flowbite-react/tailwind')
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",flowbite.content()],
  theme: {
    extend: {
      colors:{
        customeButtonColor:'#B118EF',
        textColor:'#B118EF'
      }
    },
  },
  plugins: [flowbite.plugin(),require('@tailwindcss/aspect-ratio'),],
}

