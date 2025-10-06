export default {
  '*.{js,ts,mjs,cjs,json,tsx,jsx,css,less,scss,vue,html,md}': ['cspell lint'],
  '*.{js,ts,vue,md}': ['prettier --write', 'eslint']
};
