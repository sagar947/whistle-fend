<template>
    <div id="blog">
        <div class="container">
            <div class="feat-background"></div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="namesake-div">
                        <div class="blog-header">
                            <div class="hero-article">
                                <router-link :to="{name: 'blogDescription', params: {id: latestPost.id, slug: latestPost.slug}}" v-if="latestPost">
                                    <img v-if="latestPost._embedded" :src="latestPost._embedded['wp:featuredmedia'][0].source_url" alt="">
                                </router-link>
                                <h2><router-link v-if="latestPost && latestPost.title" :to="{name: 'blogDescription', params: {id: latestPost.id, slug: latestPost.slug}}" v-html="latestPost.title.rendered"></router-link></h2>
                            </div>
                        </div>
                    </div>
                    <!-- <router-link :to="{name: 'blogDescription', params: {id: latestPost.id, slug: latestPost.slug}}" v-if="latestPost" class="namesake-div">
                        <div class="blog-header">
                            <div class="hero-article">
                                
                            </div>
                        </div>
                        <div class="feat-background"></div>
                    </router-link> -->
                </div>
            </div>
        </div>
        
        <section class="bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <ul class="nav nav-pills nav-justified">
                            <li v-for="category in postCategories" :key="category.id" @click.prevent="handleCategoryClick(category.id)" v-bind:class="{active: category.id == currentCategory}">
                                <a href="">{{category.name}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <hr>
                    </div>
                </div>
                <div v-if="postsByCategory.length == 0" class="row">
                    <div class="col-xs-1 col-xs-offset-6">
                        <div class="loading-container">
                            <gauge />
                        </div>
                    </div>
                </div>
                <div v-else class="row">
                    <div class="col-sm-12 col-md-4" v-for="post in postsByCategory" :key="post.id">
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
                <div class="row">
                    <div class="col-sm-12">
                        <hr>
                    </div>
                </div>
                <div class="row" v-if="postsByCategory.length > 0">
                    <div class="col-sm-12">
                        <pagination v-model="currentPage" :total-page="totalPages" align="center" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Gauge from 'vue-loading-spinner/src/components/Gauge'
export default {
    components: {
        Gauge
    },
    metaInfo: {
        title: 'Whistle Blog | Employee Transportation Ecosystem',
        meta: [
            {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {name: 'description', content: 'Get to know the latest technology & industry trends in the Employee Transportation Ecosystem. Stay updated!'},
            {property: 'og:title', content: 'Whistle Blog | Employee Transportaion Ecosystem'},
            {property: 'og:image', content: '../assets/img/logo.png'},
            {name: 'og:description', content: 'Get to know the latest technology & industry trends in the Employee Transportation Ecosystem. Stay updated!'}
        ],
        link: [
            {rel: 'canonical', href: 'https://www.whistledrive.com/blog'}
        ]
    },
    data() {
        return {
            currentPage: 1
        }
    },
    created() {
        this.$store.dispatch('posts/getPostCategories').then(() => {
            this.$store.dispatch('posts/getPostsByCategory', 3)
            this.$store.dispatch('posts/getLatestPost')
        })
    },
    computed: {
        ...mapGetters('posts', ['postCategories', 'currentCategory', 'postsByCategory', 'latestPost', 'total', 'totalPages'])
    },
    methods: {
        handleCategoryClick(id) {
            this.$store.dispatch('posts/changeCategory', id)
            this.$store.dispatch('posts/getPostsByCategory', 3)
        }
    },
    watch: {
        currentPage(num) {
            this.$store.dispatch('posts/getPostByPage', num)
        }
    }
}
</script>
