'use strict';

var Test1 = { template: '<div class="test">Test 1</div>' };
var Test2 = { template: '<div class="test">Test 2</div>' };
var Test3 = { template: '<div class="test">Test 3</div>' };
var Test5 = { template: '<div class="test">Insert some values into the path!</div>' };
var Test5one = { template: '<div class="test">One more to go!</div>' };
var Test5multiply = { template: '<div class="test">{{$route.params.id}} * {{$route.params.id2}} = {{ parseInt($route.params.id) * parseInt($route.params.id2) }} </div>' };

Vue.component('navbar', {
  template: '\n    <div id="navbar">\n      <h2 class="nav-item">Very Simple VueJS 2.0 Router</h2>\n       <router-link to="/test1" class="nav-item">Test 1</router-link>\n       <router-link to="/test2" class="nav-item">Test 2</router-link>\n       <router-link to="/test3" class="nav-item">Test 3</router-link>\n    </div>\n'
});

var routes = [
  { path: '/test1', component: Test1 },
  { path: '/test2', component: Test2 },
  { path: '/test3', component: Test3 },
  { path: '/test4', redirect: '/test1' },
  { path: '/test2/two', components: {a: Test1, b: Test2}},
  { path: '/test5/:id/:id2', component: Test5multiply },
  { path: '/test5/:id', component: Test5one },
  { path: '/test5', component: Test5 },
];

var router = new VueRouter({
  routes: routes
});

var app = new Vue({
  el: '#app',
  router: router,
});
