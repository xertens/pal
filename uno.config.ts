 
import {
    defineConfig,
    presetIcons,
    presetUno,
    presetWebFonts,
    presetAttributify,
    presetMini,
  } from "unocss";
  
  export default defineConfig({
    presets: [
      presetUno(),
      presetIcons(),
      presetMini(),
  
      presetAttributify(),
  
      presetWebFonts({
        provider: "google",
        fonts: {
          sans: [
            "Tajawal:200,300,400,500,600,700,800,900",
            // "Noto Sans Arabic:200,300,400,500,600,700,800,900",
            // "Raleway:200,300,400,500,600,700,800,900",
          ],
          // sans: ["Readex Pro:200,300,400,500,600,700"],
          // sans: ["Baloo Bhaijaan 2:200,300,400,500,600,700"],
  
        },
      }),
    ],
  
    preflights: [
      {
        getCSS: ({ theme }) => `
              * {
                font-family: ${theme["fontFamily"]["sans"]};
              }
            `,
      },
    ],
  
    theme: {
      colors: {
        primary: "#ff0000",
        success: "#00B993",
        warning: "#EFBB34",
        danger: "#E94B41",
      },
  
    },
  });