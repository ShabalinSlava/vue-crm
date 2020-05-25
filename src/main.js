
import Vue from "vue";
import Vuelidate from 'vuelidate';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from '@/filters/date.filter';
import currencyFilter from '@/filters/currency.filter';
import messagePlugin from '@/utils/message.plugin';
import Loader from '@/components/app/Loader'
import "./registerServiceWorker";
import 'materialize-css/dist/js/materialize.min';

import  firebase  from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false;
Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter)
Vue.component('Loader', Loader)
Vue.filter('currency', currencyFilter)


firebase.initializeApp({
  apiKey: "AIzaSyC0YLUxz2Mju4N_0CCIniqwt4u1JkUYKIw",
  authDomain: "vue-crm-d8b51.firebaseapp.com",
  databaseURL: "https://vue-crm-d8b51.firebaseio.com",
  projectId: "vue-crm-d8b51",
  storageBucket: "vue-crm-d8b51.appspot.com",
  messagingSenderId: "1035453332732",
  appId: "1:1035453332732:web:6ac67d08adf3cdd0176b79"
});

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

