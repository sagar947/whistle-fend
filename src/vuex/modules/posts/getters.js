export default {
    postCategories: state => state.categories,
    currentCategory: state => state.currentCategory,
    postsByCategory: state => state.postsByCategory,
    postById: state => state.post,
    latestPost: state => state.latestPost,
    total: state => state.total,
    totalPages: state => state.totalPages,
    relatedPosts: state => state.relatedPosts
}