import { reactive } from "vue";

class Wait {
  constructor() {
    this.list = reactive({});
  }
  is(name) {
    return !!this.list[name];
  }
  start(name) {
    return !this.list[name] && (this.list[name] = Date.now());
  }
  end(name) {
    const start = this.list[name];
    delete this.list[name];
    return Date.now() - start;
  }
  any() {
    return Object.keys(this.list).length;
  }
  clear() {
    let clearList = {};
    Object.keys(this.list).forEach((item) => {
      clearList[item] = this.end(item);
    });
    return clearList;
  }
}

export const $wait = new Wait();

export default {
  install: (app) => {
    app.config.globalProperties.$wait = $wait;
  },
};
