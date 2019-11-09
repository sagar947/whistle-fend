<template>
	<div id="app">
		<navbar fixed-top :fluid="false">
			<router-link class="navbar-brand" slot="brand" :to="{name: 'home'}" id="foo" v-if="routeServices">
				<img src="./assets/img/360-logo.png" style="width: 230px" alt="Whistle 360" v-if="routeName == 'corporateTransportation'">
				<img src="./assets/img/fleet-logo.png" style="width: 230px" alt="Whistle 360" v-if="routeName == 'fleetServices'">
				<img src="./assets/img/shuttle-logo.png" style="width: 230px" alt="Whistle 360" v-if="routeName == 'shuttleServices'">
				<img alt="Brand" style="width: 230px" src="./assets/img/logo.png">
			</router-link>
			<router-link v-else class="navbar-brand" slot="brand" :to="{name: 'home'}">
				<img alt="Brand" style="width: 230px" src="./assets/img/logo.png">
			</router-link>
			<template slot="collapse" id="my-navbar">
				<navbar-nav right>
					<dropdown tag="li">
						<a class="dropdown-toggle" role="button">Solutions <span class="caret"></span></a>
						<template slot="dropdown">
							<li><router-link :to="{name: 'fleetServices'}">Whistle Fleet</router-link></li>
							<li><router-link :to="{name: 'shuttleServices'}">Whistle Shuttle</router-link></li>
							<li><router-link :to="{name: 'corporateTransportation'}">Whistle 360<sup>0</sup></router-link></li>
						</template>
					</dropdown>
					<li><router-link :to="{name: 'safety'}">Safety</router-link></li>
					<dropdown tag="li">
						<a class="dropdown-toggle" role="button">Company <span class="caret"></span></a>
						<template slot="dropdown">
							<li>
								<router-link :to="{name: 'about'}">About Us</router-link>
							</li>
							<li>
								<router-link :to="{name: 'careers'}">Careers</router-link>
							</li>
							<li>
								<router-link :to="{name: 'newsRoom'}">News Room</router-link>
							</li>
						</template>
					</dropdown>
					<li><router-link :to="{name: 'blog'}">Blog</router-link></li>
					<li class="active"><router-link :to="{name: 'contact'}">Contact</router-link></li>
				</navbar-nav>
			</template>
		</navbar>
		<router-view/>
		<footer>
			<div class="footer-top">
				<div class="container">
					<div class="row">
						<div class="footer-widget col-sm-12 col-md-4">
							<div class="col-sm-12">
								<div class="row">
									<router-link class="navbar-brand" :to="{name: 'home'}"><img src="./assets/img/logo.png" alt="Logo" width="250"></router-link>
								</div>
							</div>
							<p>WhistleDrive provides Transportation As A Service (TaaS) to Corporates. We provide Fleet of Cabs & Bus Shuttles, End to End Technology and Ground Operations to make Office Commute safe and fully efficient.</p>
							<ul class="list-unstyled">								
								<li><i class="fa fa-envelope"></i><a href="mailto:hello@whistledrive.com" target="_blank">hello@whistledrive.com</a></li>
							</ul>
							<div class="visible-xs-block visible-sm-block pt20"></div>
						</div>
						<div class="footer-widget col-sm-12 col-md-3 footerMenu">
							<div class="row">
								<h4>Services</h4>
								<ul class="list-unstyled">
									<li><router-link :to="{name: 'fleetServices'}">Whistle Fleet</router-link></li>
									<li><router-link :to="{name: 'shuttleServices'}">Whistle Shuttle</router-link></li>
									<li><router-link :to="{name: 'corporateTransportation'}">Whistle 360<sup>0</sup></router-link></li>
								</ul>
								<div class="visible-xs-block visible-sm-block pt20"></div>
							</div>
							<div class="row">
								<router-link :to="{name: 'safety'}"><h4>Safety</h4></router-link>
								<div class="visible-xs-block visible-sm-block pt20"></div>
							</div>
						</div>
						<div class="footer-widget col-sm-12 col-md-2 footerMenu">
							<div class="row">
								<h4>Company</h4>
								<ul class="list-unstyled">
									<li>
										<router-link :to="{name: 'about'}">About Us</router-link>
									</li>
									<li>
										<router-link :to="{name: 'newsRoom'}">News Room</router-link>
									</li>
									<li>
										<router-link :to="{name: 'careers'}">Careers</router-link>
									</li>
									<li>
										<router-link :to="{name: 'blog'}">Blog</router-link>
									</li>
									<li>
										<router-link :to="{name: 'contact'}">Contact Us</router-link>
									</li>
									<li>
										<router-link :to="{name: 'privacyPolicy'}">Privacy Policy</router-link>
									</li>
									<li>
										<router-link :to="{name: 'termsOfUse'}">Terms &amp; Conditions</router-link>
									</li>
								</ul>
								<div class="visible-xs-block visible-sm-block pt20"></div>
							</div>
							<div class="visible-xs-block visible-sm-block pt20"></div>
						</div>
						
						<div class="footer-widget col-sm-6 col-md-3">
							<h3>Subscribe to Our Newsletter</h3>
							<form @submit.prevent="handleNewsletterSubscribe">
								<div class="input-group newsletter mb20">
									<label class="sr-only" for="subscribe-email">Your Email Address...</label>
									<input type="email" v-model="subscribeEmail" required class="form-control" id="subscribe-email" placeholder="Enter your email..." name="EMAIL">
									<span class="input-group-btn">
										<button type="submit" id="submit-subscribe" class="btn" v-html="status.submitBtnContent"></button>
									</span>
								</div>
							</form>
							<!-- <div id="mc_embed_signup">
								<form action="https://whistledrive.us20.list-manage.com/subscribe/post?u=69f48da1e97228e3ccbb1c6de&amp;id=83f03e262b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
									<div id="mc_embed_signup_scroll">
										<div class="indicates-required">
											<span class="asterisk">*</span> indicates required
										</div>
										<div class="mc-field-group">
											<label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
											<input type="email" class="required email" id="mce-EMAIL">
										</div>
										<div id="mce-responses" class="clear">
											<div class="response" id="mce-error-response" style="display: none"></div>
											<div class="response" id="mce-success-response" style="display: none"></div>
										</div>
										<div style="position: absolute; left: -5000px;" aria-hidden="true">
											<input type="text" name="b_69f48da1e97228e3ccbb1c6de_83f03e262b" tabindex="-1" value="">
											<input type="submit" value="Subscribe" class="button">
										</div>
									</div>
								</form>
								<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
								<script type="text/javascript">
									(function($) {
										window.fnames = new Aray();
										window.ftypes = new Array();
										fnames[0] = 'EMAIL';
										ftypes[0] = 'email';
									})(jQuery);
									var $mcj = jQuery.noConflict(true);
								</script>
							</div> -->
							<h3>Employee App</h3>
							<ul class="list-unstyled">
								<li><a href="https://apps.apple.com/in/app/whistledrive-employee-app/id1475468821" target="_blank"><img src="./assets/img/app_store.png" alt="Logo"></a></li>
								<li><a href="https://play.google.com/store/apps/details?id=wd.emp.app&hl=en" target="_blank"><img src="./assets/img/goog_play.png" alt="Logo"></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="footer-bottom">
				<div class="container">
					<div class="row">
						
						<div class="col-sm-6 credits">
							<p>&copy; WhistleDrive 2019. All Rights Reserved.</p>
						</div>
						<div class="col-sm-6 social">
							<ul class="list-inline social">
								<li>
									<a href="https://www.linkedin.com/company/whistle-drive" target="_blank">
										<i class="fa fa-linkedin"></i>
									</a>
								</li>
								<li>
									<a href="https://twitter.com/WhistleDrive" target="_blank">
										<i class="fa fa-twitter"></i>
									</a>
								</li>
								
								<li>
									<a href="https://www.facebook.com/whistledrive/" target="_blank">
										<i class="fa fa-facebook"></i>
									</a>
								</li>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--back to top-->
			<a href="#" class="scrollToTop"><i class="fa fa-angle-up"></i></a>
		</footer>
	</div>
</template>

<style lang="less">
@import url('assets/css/main.css');
#app {
	font-family: 'Lato' !important;
}
</style>

<script>
	import axios from 'axios'
	export default {
		created() {
			this.$nextTick(() => {
				window.addEventListener('scroll', () => {
					var navbar = document.querySelector('.navbar')
					var nav_classes = navbar.classList
					if(document.documentElement.scrollTop > 150) {
						if(nav_classes.contains('tiny') === false) {
							nav_classes.toggle('tiny')
						}
					} else {
						if(nav_classes.contains('tiny') === true) {
							nav_classes.toggle('tiny')
						}
					}
				})
			})
		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll)
		},
		data() {
			return {
				subscribeEmail: '',
				status: {
					submitBtnContent: '<i class="fa fa-paper-plane-o"></i>'
				}
			}
		},
		methods: {
			async handleNewsletterSubscribe() {
				var email = this.subscribeEmail
				// await axios.get('https://whistledrive.us20.list-manage.com/subscribe/post?u=69f48da1e97228e3ccbb1c6de&id=83f03e262b', {}).then(response => {
				// 	console.log(response)
				// }).catch(error => {
				// 	console.log(error)
				// })
				await axios({
					url: 'https://whistledrive.us20.list-manage.com/subscribe/post?u=69f48da1e97228e3ccbb1c6de&id=83f03e262b',
					params: {
						EMAIL: email
					}
				}).then(response => {
					console.log(response)
				}).catch(error => {
					console.log(error)
				})
				// var btn = document.getElementById('submit-subscribe')
				// btn.setAttribute('disabled', 'disabled')
				// this.$store.dispatch('posts/subscribeNewsletter', {
				// 	email: this.subscribeEmail
				// }).then(() => {
				// 	this.status = {
				// 		submitBtnContent: '<i class="fa fa-check"></i>'
				// 	}
				// 	setTimeout(() => {
				// 		btn.removeAttribute('disabled')
				// 		this.subscribeEmail = ''
				// 		this.status = {
				// 			submitBtnContent: '<i class="fa fa-paper-plane-o"></i>'
				// 		}
				// 	}, 2000)
				// })
			}
		},
		computed: {
			routeName() {
				return this.$route.name
			},
			routeServices() {
				return this.$route.name == 'corporateTransportation' || this.$route.name == 'fleetServices' || this.$route.name == 'shuttleServices'
			}
		}
	}
</script>