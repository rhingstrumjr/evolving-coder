module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint",
    sourcetype: "module"
  },
  extends: [
    "@nuxtjs"
  ],
  plugins: [
    "vue"
  ],
  // add your custom rules here
  rules: {
    "semi": [2, "never"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/max-attributes-per-line": "off",
    "quotes": [2, "double"]
  }
}
