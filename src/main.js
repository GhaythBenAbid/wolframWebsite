import Vue from 'vue'
import App from './App.vue'
import Axios from "axios";
import router from './router'
import vuetify from './plugins/vuetify';

import AOS from "aos";
import "aos/dist/aos.css";

Vue.prototype.$http = Axios;





Vue.AOS = new AOS.init({

});


Vue.config.productionTip = false

new Vue({ 
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')