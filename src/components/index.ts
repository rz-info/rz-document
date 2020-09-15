import Vue from "vue"

const componentsList = ['zTitle', 'zExample'];

const componentsContext = require.context('@/components/documentComponents', true, /\.vue/);

componentsContext.keys().forEach(ele => {
  const fileName = ele.split('/')[1].split('.')[0];
  if (componentsList.includes(fileName)) Vue.component(fileName, (require('@/components/documentComponents/' + fileName)).default);
})
