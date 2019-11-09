let mutations = {
    SET_POST_CATEGORIES(state, categories) {
        state.categories = categories
    },
    SET_CURRENT_POST_CATEGORY(state, currentCategory) {
        state.currentCategory = currentCategory
    },
    SET_POSTS_BY_CATEGORY(state, posts) {
        state.postsByCategory = posts
    },
    SET_POST_BY_ID(state, post) {
        state.post = post
    },
    SET_LATEST_POST(state, post) {
        state.latestPost = post
    },
    SET_TOTAL_PAGES(state, headers) {
        state.total = parseInt(headers['x-wp-total'])
        state.totalPages = parseInt(headers['x-wp-totalpages'])
    },
    SET_RELATED_POSTS(state, posts) {
        state.relatedPosts = posts
    }
}

export default mutations