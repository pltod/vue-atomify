var Vue = require('vue');

new Vue({
  el: '#app',
  components: {
    a: require('./a'),
    b: require('./b')
  },
  template: require('./app.html'),
  data: {
    title: 'Hello Atomify & Vue.js!'
  }
});