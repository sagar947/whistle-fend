import axios from 'axios'

export default {
    async getPostCategories({ commit }) {
        await axios.get('https://wpapi.whistledrive.com/wp-json/wp/v2/categories?filter[orderby]=id&order=asc')
            .then((response) => {
                commit('SET_POST_CATEGORIES', response.data.filter((category) => {
                    return category.slug != 'uncategorized'
                }))
                commit('SET_CURRENT_POST_CATEGORY', response.data[0].id)
            })
    },
    async getLatestPost({ commit }) {
        await axios.get('https://wpapi.whistledrive.com/wp-json/wp/v2/posts?filter[orderby]=date&order=desc&per_page=1&_embed')
            .then((response) => {
                commit('SET_LATEST_POST', response.data[0])
            })
    },
    async changeCategory({ commit }, id) {
        await commit('SET_CURRENT_POST_CATEGORY', id)
    },
    async getPostsByCategory({ commit, state }, limit) {
        state.postsByCategory = []
        state.total = 0
        state.totalPages = 0
        await axios.get('https://wpapi.whistledrive.com/wp-json/wp/v2/posts?per_page=' + limit + '&categories=' + state.currentCategory + '&_embed')
            .then((response) => {
                commit('SET_POSTS_BY_CATEGORY', response.data)
                commit('SET_TOTAL_PAGES', response.headers)
            })
    },
    async getPostByPage({ commit, state }, page) {
        state.postsByCategory = []
        await axios.get('https://wpapi.whistledrive.com/wp-json/wp/v2/posts?per_page=3&categories=' + state.currentCategory + '&page=' + page + '&_embed')
            .then((response) => {
                commit('SET_POSTS_BY_CATEGORY', response.data)
            })
    },
    async getPostById({ commit, state }, id) {
        state.post = {}
        state.relatedPosts = []
        await axios.get('https://wpapi.whistledrive.com/wp-json/wp/v2/posts/' + id + '?_embed')
            .then((response) => {
                commit('SET_POST_BY_ID', response.data)
            })
        state.currentCategory = state.post.categories[0]
        await axios.get(`https://wpapi.whistledrive.com/wp-json/wp/v2/posts?categories=${state.currentCategory}&per_page=3&_embed`)
            .then((response) => {
                commit('SET_RELATED_POSTS', response.data)
            })
    },
    async submitContactForm({ commit }, params) {
        await axios.post('https://wpapi.whistledrive.com/wp-json/contact/send', params).then((response) => {
            
        })
    },
    async subscribeNewsletter({ commit }, params) {
        await axios.post('https://wpapi.whistledrive.com/wp-json/newsletter/send', params).then((response) => {
            console.log(response)
        })
    }
}