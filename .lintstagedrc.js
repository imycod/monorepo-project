export default {
  '*.{js,ts,mjs,cjs,json,tsx,jsx,css,less,scss,vue,html}': ['cspell lint'],
  '*.{js,ts,vue}': ['prettier --write', 'eslint']
};
