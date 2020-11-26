import Vue from 'vue'
import App from './App'

import IconSvg from './pages/commen/icon-svg'
import discount from './pages/commen/discount'
import recommend from './pages/commen/recommend'
import messageTemp from './pages/commen/messageTemp'
import featureTemp from './pages/commen/featureTemp'
import "./iconfont.css"

Vue.component('icon-svg', IconSvg)
Vue.component('discount', discount)
Vue.component('recommend', recommend)
Vue.component('messageTemp', messageTemp)
Vue.component('featureTemp', featureTemp)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
