/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('my-component', require('./components/MyComponent.vue').default);
Vue.component('conditional-component', require('./components/ConditionalRendering.vue').default);
Vue.component('user-dashboard', require('./components/UserDashboard.vue').default);
Vue.component('life-cycle', require('./components/LifeCycle.vue').default);
Vue.component('binding-html', require('./components/BindingHTMl.vue').default);
Vue.component('input-binding', require('./components/InputBinding.vue').default);
Vue.component('event-handling', require('./components/EventHandling.vue').default);
Vue.component('parent', require('./components/Parent.vue').default);
Vue.component('api-calling', require('./components/ApiCalling.vue').default);
Vue.component('User', require('./components/User.vue').default);
Vue.component('blog', require('./components/Blog.vue').default);

Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('articles', require('./components/Articles.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
