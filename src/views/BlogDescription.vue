<template>
    <div>
        <div class="container">
            <div class="feat-background"></div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="namesake-div">
                        <div class="blog-header">
                            <div class="hero-article post-page">
                                <img v-if="postById && postById._embedded && postById._embedded['wp:featuredmedia']" :src="postById._embedded['wp:featuredmedia'][0].source_url">
                                <h1 class="post-title" v-if="postById && postById.title" v-html="postById.title.rendered"></h1>
                                <hr align="left" width="400px">
                                <div v-if="postById && postById.content" v-html="postById.content.rendered"></div>
                                <hr align="left">
                                <div class="social-div">
                                    <i>Share this article:</i>
                                    <i class="fa fa-linkedin social-sym"></i>
                                    <i class="fa fa-twitter social-sym"></i>
                                    <i class="fa fa-facebook social-sym"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="employee-blog blog-section mt40 mb40">
            <div class="container">
                <h1 class="text-center">RELATED ARTICLES</h1>
                <hr class="section-hr" align="center-block" width="250px">
                <div class="row mt30" v-if="relatedPosts.length > 0">
                    <div class="col-sm-12 col-md-4" v-for="post in relatedPosts" :key="post.id">
                        <div class="card">
                            <router-link :to="{name: 'blogDescription', params: {id: post.id, slug: post.slug}}">
                                <img v-if="post._embedded && post._embedded['wp:featuredmedia']" class="card-img-top" :src="post._embedded['wp:featuredmedia'][0].source_url" alt="Card image cap">
                            </router-link>
                            <div class="card-body">
                                <router-link :to="{name: 'blogDescription', params: {id: post.id, slug: post.slug}}">
                                    <h2 v-html="post.title.rendered"></h2>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn show-more center-block mt20" @click.prevent="handleRouteBlog">Show More</button>
            </div>           
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
function decodeHTML(text) {
    var txt = document.createElement('textarea')
    txt.innerHTML = text;
    return txt.value
}
function removeTags(text) {
    var div = document.createElement('div')
    div.innerHTML = text;
    var retText = div.textContent || div.innerText || ''
    return retText
}
export default {
    data() {
        return {

        }
    },
    created() {
        this.$store.dispatch('posts/getPostById', this.$route.params.id)
    },
    computed: {
        ...mapGetters('posts', ['postById', 'relatedPosts']),
    },
    watch: {
        '$route.params.id': function() {
            this.$store.dispatch('posts/getPostById', this.$route.params.id)
        },
        postById(post) {
            if(post.title) {
                document.title = decodeHTML(post.title.rendered)
                var ogTitleTag = document.querySelector('meta[property="og:title"]')
                if(ogTitleTag) {
                    ogTitleTag.setAttribute('content', decodeHTML(post.title.rendered))
                } else {
                    ogTitleTag = document.createElement('meta')
                    ogTitleTag.setAttribute('property', 'og:title')
                    ogTitleTag.setAttribute('content', decodeHTML(post.title.rendered))
                }
                document.head.appendChild(ogTitleTag)
            }
            if(post._embedded) {
                var ogImgTag = document.querySelector('meta[property="og:image"]')
                if(ogImgTag) {
                    ogImgTag.setAttribute('content', post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url)
                } else {
                    ogImgTag = document.createElement('meta')
                    ogImgTag.setAttribute('property', 'og:image')
                    ogImgTag.setAttribute('content', post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url)
                }
                document.head.appendChild(ogImgTag)
            }
            if(post.excerpt) {
                var descriptionMetaTag = document.querySelector('meta[name="description"]')
                if(descriptionMetaTag) {
                    descriptionMetaTag.setAttribute('content', removeTags(post.excerpt.rendered))
                } else {
                    descriptionMetaTag = document.createElement('meta')
                    descriptionMetaTag.setAttribute('name', 'description')
                    descriptionMetaTag.setAttribute('content', removeTags(post.excerpt.rendered))
                }
                document.head.appendChild(descriptionMetaTag)
                var ogDescriptionTag = document.querySelector('meta[property="og:description"]')
                if(ogDescriptionTag) {
                    ogDescriptionTag.setAttribute('content', removeTags(post.excerpt.rendered))
                } else {
                    ogDescriptionTag = document.createElement('meta')
                    ogDescriptionTag.setAttribute('property', 'og:description')
                    ogDescriptionTag.setAttribute('content', removeTags(post.excerpt.rendered))
                }
                document.head.appendChild(ogDescriptionTag)
            }
        }
    },
    methods: {
        handleRouteBlog() {
            this.$router.push({name: 'blog'})
        }
    }
}
</script>