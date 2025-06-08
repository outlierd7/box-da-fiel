import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // Equivalente a .container do Bootstrap (com margens)
        sm: "1rem",
        md: "1.5rem", // Ajustar conforme o .container do site original
        lg: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        // Cores extraídas das variáveis CSS no body do HTML original
        // Ex: --60550923: #df8301; (laranja/dourado principal)
        // Ex: --dc093e14: #0d0d0d; (preto para fundo)
        // Ex: --60ccd65c: #ffffff; (branco para texto)
        brand: {
          primary: "#df8301", // --60550923, --c5ea9880, etc. (cor principal laranja/dourado)
          background: "#0d0d0d", // --dc093e14 (fundo principal escuro)
          backgroundLight: "#171a1b", // --26f21c10 (fundo um pouco mais claro)
          text: "#ffffff", // --60ccd65c (texto principal branco)
          textDark: "#000000", // --2d3033ba (texto preto em botões claros)
          textMuted: "#7d7878", // --1bd6154e, --0d69558e (cinza para textos secundários)
          cardBg: "#242323", // --1779e248 (fundo de cards/elementos)
          borderMuted: "#4f4f4f", // --902074da (bordas sutis)
        },
        // Cores padrão do shadcn/ui (podem ser mantidas ou ajustadas se necessário)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", // shadcn background
        foreground: "hsl(var(--foreground))", // shadcn foreground
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)", // shadcn
        md: "calc(var(--radius) - 2px)", // shadcn
        sm: "calc(var(--radius) - 4px)", // shadcn
        // Adicionar border-radius customizados se o site original usar valores específicos
        // ex: '5px' como visto em .swal-button
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Adicionar keyframes das animações do HTML original (fadeIn, zoomIn, etc.)
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        fadeOut: { from: { opacity: "1" }, to: { opacity: "0" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-in-out", // Exemplo de uso
        fadeOut: "fadeOut 0.5s ease-in-out", // Exemplo de uso
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
