import Vue from 'vue'
import * as uiv from 'uiv'
import VueMeta from 'vue-meta'
import { extend, localize } from 'vee-validate'
import { min, max, required, numeric, email } from 'vee-validate/dist/rules'
import en from "vee-validate/dist/locale/en.json";
import options from 'vue-countup-directive'

Vue.directive('countUp', options)

extend('required', required)
extend('numeric', numeric)
extend('min', min)
extend('max', max)
extend('email', email)

localize({
    en
})

Vue.use(uiv)
Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
})