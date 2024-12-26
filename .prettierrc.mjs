// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  useTabs: false,
  tabWidth: 4,
  semi: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
