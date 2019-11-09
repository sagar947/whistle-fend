import Vue from 'vue'
import Vuex from 'vuex'
import PostsModule from './modules/posts'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        posts: PostsModule
    }
})