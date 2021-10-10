import TextReveal from "./TextReveal";

const Plugin = {
  install(Vue) {
    Vue.component('TextReveal', TextReveal);
  }
};

export default Plugin;
