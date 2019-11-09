import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/fleet-services',
      name: 'fleetServices',
      component: () => import('./views/FleetServices.vue')
    },
    {
      path: '/shuttle-services',
      name: 'shuttleServices',
      component: () => import('./views/ShuttleServices.vue')
    },
    {
      path: '/corporate-transportation',
      name: 'corporateTransportation',
      component: () => import('./views/CorporateTransportation.vue')
    },
    {
      path: '/safety',
      name: 'safety',
      component: () => import('./views/Safety.vue')
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('./views/AboutUs.vue')
    },
    {
      path: '/careers',
      name: 'careers',
      component: () => import('./views/Careers.vue')
    },
    {
      path: '/news-room',
      name: 'newsRoom',
      component: () => import('./views/NewsRoom.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/ContactUs.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/Blog.vue')
    },
    {
      path: '/blog/:id/:slug',
      name: 'blogDescription',
      component: () => import('./views/BlogDescription.vue'),
      meta: {
        metaTags: [
          {
            name: 'description'
          },
          {
            name: 'og:description'
          }
        ]
      }
    },
    {
      path: '/privacy-policy',
      name: 'privacyPolicy',
      component: () => import('./views/PrivacyPolicy.vue')
    },
    {
      path: '/terms-of-use',
      name: 'termsOfUse',
      component: () => import('./views/TermsOfUse.vue')
    },
    {
      path: '*',
      name: 'notFound',
      component: () => import('./views/404.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  var ogTitle = document.querySelector('meta[property="og:title"]')
  if(ogTitle) {
    ogTitle.parentElement.removeChild(ogTitle)
  }
  var ogImage = document.querySelector('meta[property="og:image"]')
  if(ogImage) {
    ogImage.parentElement.removeChild(ogImage)
  }
  var ogDescription = document.querySelector('meta[property="og:description"]')
  if(ogDescription) {
    ogDescription.parentElement.removeChild(ogDescription)
  }
  var desc = document.querySelector('meta[name="description"]')
  if(desc) {
    desc.parentElement.removeChild(desc)
  }
  next()
})

export default router