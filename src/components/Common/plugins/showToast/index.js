import toast from './src/toast.vue';

function install(Vue) {
  const ToastConstructor = Vue.extend(toast);
  const instance = new ToastConstructor();
  instance.$mount(document.createElement('div'));
  document.body.appendChild(instance.$el);

  Vue.prototype.$showToast = function (str) {
    instance.toastShow = false;
    Vue.nextTick(() => {
      instance.toastText = str;
      instance.toastShow = true;
    })
  }
}

export default install;