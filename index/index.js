(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],2:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],3:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// 应用数据
window.yue = {
  // 配置数据
  config: {},
  // 接口数据
  api: {},
  // 帮助函数
  help: {},
  // 双向数据存储
  vuex: null,
  // 路由数组
  routes: [],
  // 路由实例
  router: null,
  // 混合
  mixin: null,
  // 本地数据存储
  storage: store.namespace('tenyearsasone'),
  // 请求实例
  request: null,
  // 布局
  layout: {},
  // 页面
  pages: {},
  // 组件
  components: {},
  // 工具方法
  lodash: _,
  // vue实例
  vm: null
}; // ----------------------------------------------------
// ---------- 以下注释，严禁修改  ------------------------
// ----------------------------------------------------
// ----------------------------------------
// ---------- 以下注释，严禁修改  ------------
// ----------------------------------------

yue.config.host = 'http://152.136.83.239:6802'; // 递归生成目录树

yue.help.recursionGenerateShopCategoryTree = function recursionGenerateShopCategoryTree(data) {
  // 目录树
  var tree = [];
  var hash = {};
  data.forEach(function (item) {
    hash[item.id] = item;
  });
  data.forEach(function (item) {
    var parent = hash[item.pid];

    if (parent) {
      parent.children.push(item);
    } else {
      tree.push(item);
    }
  });
  return tree;
}; // 数字字符串数字化


yue.help.string2Number = function (data) {
  var newData = {};

  for (var prop in data) {
    if (data.hasOwnProperty(prop)) {
      var value = data[prop];

      if (_.isNumber(value)) {
        newData[prop] = _.toNumber(value);
      } else {
        newData[prop] = value;
      }
    }
  }

  return newData;
};

yue.request = axios.create({
  method: 'post',
  baseURL: yue.config.host,
  params: {},
  data: {},
  timeout: 0,
  withCredentials: false,
  responseType: 'json',
  responseEncoding: 'utf8' // maxContentLength: 2000

}); // 添加请求拦截器

yue.request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // config.headers.Authorization = 'Bearer ' + yue.storage.get('token');
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
}); // 添加响应拦截器

yue.request.interceptors.response.use(function (res) {
  // 参数无效
  return Promise.resolve(res.data); // 请求失败
  // if (res.data.code === 'ko') {
  //     layui.use('layer', () => {
  //         layer.msg(res.data.msg);
  //     });
  //     return Promise.reject(res.data);
  // }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
}); // ----------------------------------------
// ----------------------------------------

yue.vuex = new Vuex.Store({
  state: {},
  mutations: {
    // 通用保存
    save: function save(state, params) {
      // 判断路径
      if (!params.path) return; // 判断数据

      if (!params.data) return; // 分割路径

      var keyPath = params.path.split('.'); // 路径长度

      var keyLength = keyPath.length; // 状态别名

      var keySave = state; // 默认通过

      var isPass = true; // 循环赋值

      for (var i = 0; i < keyLength - 1; i++) {
        keySave = keySave[keyPath[i]];

        if (!keySave) {
          isPass = false;
          break;
        }
      } // 提前返回


      if (!isPass) return;
      var keyLast = keyPath[keyLength - 1]; // 判断动作

      if (params.action) {
        if (params.action === '-') keySave[keyLast] = keySave[keyLast] - params.data;
        if (params.action === '+') keySave[keyLast] = keySave[keyLast] + params.data;
        if (params.action === '*') keySave[keyLast] = keySave[keyLast] * params.data;
        if (params.action === '/') keySave[keyLast] = keySave[keyLast] / params.data;
        return;
      }

      keySave[keyLast] = params.data;
    }
  }
}); //=include ./v-sticky.js

Vue.directive('focus', {
  inserted: function inserted(el) {
    el.focus();
  }
});
Vue.filter('capitalize', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
yue.mixin = {
  data: function data() {
    return {
      menuActive: false
    };
  },
  computed: _objectSpread({}, Vuex.mapState([])),
  methods: _objectSpread({}, Vuex.mapMutations(['save']))
}; //  管理登录接口

yue.api.adminLogin = function (data) {
  return yue.request({
    url: '/adminLogin',
    method: 'post',
    data: data
  });
}; // 查询管理


yue.api.selectAdmin = function (data) {
  return yue.request({
    url: '/selectAdmin',
    method: 'post',
    data: data
  });
}; // 查询管理


yue.api.insertAdmin = function (data) {
  return yue.request({
    url: '/insertAdmin',
    method: 'post',
    data: data
  });
}; // 删除管理


yue.api.deleteAdmin = function (data) {
  return yue.request({
    url: '/deleteAdmin',
    method: 'post',
    data: data
  });
};

yue.layout.layout_default = {
  data: function data() {
    return {};
  },
  template: document.getElementById('layout-default')
};
Vue.component('layout-default', yue.layout.layout_default);
yue.components.components_footer = {
  name: 'components-footer',
  mixins: [yue.mixin],
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  methods: {},
  template: document.getElementById('components-footer').innerHTML
};
Vue.component('components-footer', yue.components.components_footer);
yue.components.components_toper = {
  name: 'components-toper',
  mixins: [yue.mixin],
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  methods: {},
  template: document.getElementById('components-toper').innerHTML
};
Vue.component('components-toper', yue.components.components_toper);
yue.pages.pages_index = {
  name: 'pages-index',
  mixins: [yue.mixin],
  data: function data() {
    return {
      timer: null
    };
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {// 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  },
  created: function created() {// this.loop();
  },
  mounted: function mounted() {},
  methods: {
    loop: function loop() {
      var _this = this;

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        console.dir(yue.lodash.now());

        _this.loop();
      }, 1000);
    }
  },
  template: document.getElementById('pages-index').innerHTML
};
Vue.component('pages-index', yue.pages.pages_index);
yue.pages.pages_navigation = {
  name: 'pages-navigation',
  mixins: [yue.mixin],
  data: function data() {
    return {};
  },
  // beforeRouteLeave(to, from, next) {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {},
  template: document.getElementById('pages-navigation').innerHTML
};
Vue.component('pages-navigation', yue.pages.pages_navigation); // ----------------------------------------
// ---------- 以下注释，严禁修改  ------------
// ----------------------------------------
// 根路由

yue.routes.push({
  path: '/',
  redirect: '/index',
  component: yue.layout.layout_default,
  children: [{
    path: 'index',
    component: yue.pages.pages_index
  }]
}); // 根路由

yue.routes.push({
  path: '/navigation',
  component: yue.layout.layout_default,
  children: [{
    path: '/',
    component: yue.pages.pages_navigation
  }]
}); // ----------------------------------------
// ----------------------------------------
// 处理路由重复导航问题
// VueRouter.prototype.push = function push(location) {
//     return VueRouter.prototype.push.call(this, location).catch(err => err);
// };

yue.router = new VueRouter({
  mode: 'hash',
  base: '/',
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  routes: yue.routes,
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
  }
}); // yue.router.beforeEach((to, from, next) => {
//     // 全局导航守卫
//     if (to.path === '/login') {
//         next();
//         return;
//     }
//     if (yue.storage.get('token')) {
//         next();
//     } else {
//         next('/login');
//     }
// });
// ----------------------------------------------------
// ----------------------------------------------------

yue.vm = new Vue({
  store: yue.vuex,
  router: yue.router,
  created: function created() {}
}).$mount('#app');
},{"@babel/runtime/helpers/defineProperty":1,"@babel/runtime/helpers/interopRequireDefault":2}]},{},[3]);
