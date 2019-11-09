import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as uiv from 'uiv'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import './registerServiceWorker'
import './filters'
import './plugins'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	created() {
		AOS.init()
	},
	render: h => h(App),
}).$mount('#app')