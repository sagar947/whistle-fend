<template>
	<div class="home">
		<header>
			<div class="bg-lgray">
				<div class="row mb30 mt50">
					<div class="col-md-5 col-sm-12">
						<div class="hero-text-css" id="hero-brute">
							<h2 class="titlepro">						   
								<h1 id="home-hero-text">We move you
									<span class="txt-rotate" data-period="500" data-rotate='["Forward", "Safe", "Everyday"]'></span>
								</h1>
								<span id="home-hero-sub" class="bottom hero-img-sub">India's Fastest Growing<br/> Employee Transportation Company</span>
							</h2>
							<router-link :to="{name: 'contact'}" id="home-hero-btn" class="btn btn-transparent contactBtn">Contact Us</router-link>
						</div>
					</div>
					<div class="col-md-7 col-sm-12">
						<div id="bgVideo" class="">
							<img class="hero-img hero-img-css mb20" id="home-hero-img" src="../assets/img/homepage.gif" >
						</div>
					</div>
					<!-- <div class="col-md-5 col-sm-12 pl40 mb30"  data-aos="fade-right">
						<div class="bannerText hero-text-css" id="hero-brute">
							<h2 class="titlepro">						   
								<h1 id="home-hero-text">We move you
									<span class="txt-rotate" data-period="500" data-rotate='["Forward", "Safe", "Everyday"]'></span>
								</h1>
								<span id="home-hero-sub" class="bottom hero-img-sub">India's Fastest Growing<br/> Employee Transportation Company</span>
							</h2>
							<router-link :to="{name: 'contact'}" id="home-hero-btn" class="btn btn-transparent contactBtn">Contact Us</router-link>
						</div>
					</div>
					<div class="col-md-7 col-sm-12" id="home-brute-img"  data-aos="fade-left">
						<div id="bgVideo" class="">
							<img class="hero-img hero-img-css mb20" id="home-hero-img" src="../assets/img/homepage.gif" >
						</div>
					</div> -->
				</div>
			</div>
		</header>
		<section class="bg-white">
			<div class="container">
				<div class="row title-r">
					<h2>TRANSPORTATION AS A SERVICE (TaaS) 
						<span class="titleMain_subtitle-normal mt20">We provide Employee Transportation Services to Corporations like yours with Full Operational Compliance, Capable Fleet Management powered by Best In Class Technology. It's an End to End Integration of Operations and Technology to drive efficiency and thereby deliver a superior transportation experience.</span>
					</h2>
					<div class="col-sm-6 col-md-4 text-center home-icons">
						<i class="fa wow fadeInUp" data-aos="fade-up">
							<img src="../assets/img/ground-operations_img.png" class="blue_icon">
							<img src="../assets/img/ground-operations_white_img.png" class="white_icon">
						</i>
						<div>
							<h4>Strong Ground Operations</h4>
							<p>With 700+ fleet and an Expert team, we are highly responsive in handling your ground operations and helping your team to offload all the transportation challenges involved.</p>
						</div>
					</div>
					<div class="col-sm-6 col-md-4 text-center home-icons">
						<i class="fa wow fadeInUp" data-aos="fade-up">
							<img src="../assets/img/class-technology_img.png" class="blue_icon">
							<img src="../assets/img/class-technology_img_white.png" class="white_icon">
						</i>
						<div>
							<h4>Best in Class Technology</h4>
							<p>Our applications are built-in with Full Scale Automation. From Live Location Tracking to the advanced security and customized operational features, we have it all.</p>
						</div>
					</div>
					<div class="col-sm-6 col-md-4 text-center home-icons ">
						<i class="fa wow fadeInUp" data-aos="fade-up">
							<img src="../assets/img/fully-managed_img.png" class="blue_icon">
							<img src="../assets/img/fully-managed_img_white.png" class="white_icon">
						</i>
						<div>
							<h4>Powered by WhistleTech</h4>
							<p>We make it work for you! With our advanced technology, Ground operations team and a dedicated 24*7 support team, we handle everything on your behalf, right from Rostering to Billing and weekly or monthly reports. </p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-gray ">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 mb20">
						<div class="title-r">
							<h2>OUR SERVICES</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12 col-md-6 pt30 pb30" data-aos="fade-right">
							<div class="our_services_img_blog">
								<img src="../assets/img/whistle_fleet_img.png" class="img-responsive" alt="template">
							</div>
							<div class="visible-xs-block visible-sm-block pt20"></div>
						</div>
						<div class="col-sm-12 col-md-6 p20" data-aos="fade-left">
							<div class="title">
								<h4>Whistle Fleet</h4>
							</div>
							<p>With an Industry Compliant Fleet managed by a specialized team gives us an edge to handle the operational complexities, involved in your employee journey. Whether you use Whistle Tech or any Employee Transportation Software, our fleet is fully capable of adopting it and extend 100% usage with zero resistance.</p>
							<router-link :to="{name: 'fleetServices'}" class="know_more">Know More <i class="fa fa-long-arrow-right"></i></router-link>
						</div>
					</div>
					<div class="row pb100">
						<div class="col-sm-12 col-md-6 pt100 pb30 text-right" data-aos="fade-right">
							<div class="title">
								<h4 class="text-right">Whistle Shuttle</h4>
							</div>
							<p>It isn’t about moving people, it’s about connecting people on the way. We provide B2B Shuttle Services for both the Last-Mile Connectivity from Metros and also across the city through a Point Pickup Model.</p>
							<router-link :to="{name: 'shuttleServices'}" class="know_more">Know More <i class="fa fa-long-arrow-right"></i></router-link>
						</div>
						<div class="col-sm-12 col-md-6" data-aos="fade-left">
							<div class="our_services_img_blog">
								<img src="../assets/img/whistle_shuttle_img.png" class="img-responsive" alt="template">
							</div>
							<div class="visible-xs-block visible-sm-block pt20"></div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12 col-md-6" data-aos="fade-right">
							<div class="our_services_img_blog">
								<img src="../assets/img/whistle_360_img2.png" class="img-responsive" alt="template">
							</div>
							<div class="visible-xs-block visible-sm-block pt20"></div>
						</div>
						<div class="col-sm-12 col-md-6 p20" data-aos="fade-left">
							<div class="title">
								<h4>Whistle 360<sup>0</sup></h4>
							</div>
							<p>The Transportation service is not one-size-fits-all. With Whistle 360<sup>0</sup>, we provide a tailored & fully managed solution (Dedicated Fleet, Operations Team and a 24/7 Support Team) powered by Whistle Tech software.</p>
							<router-link :to="{name: 'corporateTransportation'}" class="know_more">Know More <i class="fa fa-long-arrow-right"></i></router-link>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-white">
			<div class="container">
				<div class="row" data-aos="fade"  data-aos-duration="3000">
					<div class="col-md-12">
						<div class="title-r">
							<h2>TRACKING &amp; MONITORING</h2>
						</div>
					</div>
					<div class="col-sm-12">
						<tabs pills justified id="trackingTabs">
							<tab title="Employee App">
								<div class="container">
									<div class="col-sm-12 col-md-3">
										<div class="tabs_cnt">
											<ul class="list-unstyled tabs_cnt_ul">
												<li>-&nbsp; Live Tracking with ETA</li>
												<li>-&nbsp; Weekly Schedule View</li>
												<li>-&nbsp; SOS Enabled</li>
												<li>-&nbsp; Number Masking for Privacy</li>
												<li>-&nbsp; Ad Hoc Request Feature</li>
											</ul>
										</div>
									</div>
									<div class="col-sm-12 col-md-9">
										<img src="../assets/img/mobile-dash.png" class="img-rounded pull-right employee_app_img">
									</div>
								</div>
							</tab>
							<tab title="End to End Control of Operations">
								<div class="container">
									<div class="col-sm-12 col-md-3">
										<div class="tabs_cnt">
											<ul class="list-unstyled tabs_cnt_ul">
												<li>-&nbsp; Eagle Eye View </li>
												<li>-&nbsp; Live Location Tracking</li>
												<li>-&nbsp; Trip Alerts</li>
											</ul>
										</div>
									</div>
									<div class="col-sm-12 col-md-9">
										<img src="../assets/img/employee_dashboard.png" class="img-rounded pull-right employee_dashboard_img">
									</div>
								</div>
							</tab>
						</tabs>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-gray">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="title-r">
							<h2 class="text-center">OUR SCALE</h2>
							<h4 class="text-center">Hyderabad | Chennai | Bengaluru</h4>
						</div>
					</div>
					<div class="col-md-3">
						<div id="countBlog">
							<img class="index-icons" src="../assets/img/clients.png" alt=""><br>
							<span class="count">30 </span>+
							<h3>Clients </h3>
						</div>
					</div> 
					<div class="col-md-3">
						<div id="countBlog">
							<img class="index-icons" src="../assets/img/fleet.png" alt=""><br>
							<span class="count" v-countUp:onWindowScroll.once="{watchedElId: 'countBlog', startValue: 0, endValue: 700, options: {duration: 1}}"> </span>+
							
							<h3>Fleet </h3>
						</div>
					</div>
					<div class="col-md-3">
						<div id="countBlog">
							<img class="index-icons" src="../assets/img/trips.png" alt=""><br>
							<span class="count">3000 </span>+
							<h3>Trips per day</h3>
						</div>
					</div>
					<div class="col-md-3">
						<div id="countBlog">
							<img class="index-icons" src="../assets/img/employees.png" alt=""><br>
							<span class="count">15000 </span>+
							<h3>Employees Transported Everyday</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-white">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="title-r">
							<h2>WE WORK WITH</h2>
						</div>
					</div>
					<div class="col-md-12 mt30">
						<slick-carousel :options="slickOptions">
							<img src="../assets/img/Dupont.png" alt="" width="100%">
							<img src="../assets/img/ADP.png" alt="" width="100%">
							<img src="../assets/img/broadway.png" alt="" width="100%">
							<img src="../assets/img/ford-smart.png" alt="" width="100%">
							<img src="../assets/img/Hitachi.png" alt="" width="100%">
							<img src="../assets/img/Aquity.png" alt="" width="100%">
							<img src="../assets/img/invesco.png" alt="" width="100%">
							<img src="../assets/img/ITC.png" alt="" width="100%">
							<img src="../assets/img/l-and-t.png" alt="" width="100%">
							<img src="../assets/img/teletext.png" alt="" width="100%">
						</slick-carousel>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-buy parallax process-rounded" data-stellar-background-ratio="0.5">
			<div class="container-fluid">
				<div class="row text-center">
					<div class="col-md-12">
						<h1 class="intro-text mt30 wow fadeInUp">
							Ready To Transform Your Employee Transportation?
						</h1>
						
						<p><router-link :to="{name: 'contact'}" class="btn btn-default btn-primary-corp-big"> Contact Us</router-link></p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Slick from 'vue-slick'
	import '../assets/css/slick.css'
	export default {
		metaInfo: {
			title: 'WhistleDrive | An End to End Employee Transportation Solution',
			meta: [
				{'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
				{name: 'viewport', content: 'width=device-width, initial-scale=1'},
				{name: 'description', content: 'WhistleDrive Provides Technology Enabled Employee Transportation Solution for corporates with fleet of cabs, software and on-ground logistics support.'},
				{property: 'og:title', content: 'WhistleDrive | An End to End Employee Transportation Solution'},
                {property: 'og:image', content: '../assets/img/logo.png'},
				{property: 'og:description', content: 'WhistleDrive Provides Technology Enabled Employee Transportation Solution for corporates with fleet of cabs, software and on-ground logistics support.'}
			],
			link: [
				{rel: 'canonical', href: 'https://www.whistledrive.com/'}
			]
		},
		components: {
			'slick-carousel': Slick
		},
		mounted() {
			var TxtRotate = function(el, toRotate, period) {
				this.toRotate = toRotate;
				this.el = el;
				this.loopNum = 0;
				this.period = parseInt(period, 10) || 2000;
				this.txt = '';
				this.tick();
				this.isDeleting = false
			}
			TxtRotate.prototype.tick = function () {
				var i = this.loopNum % this.toRotate.length;
				var fullTxt = this.toRotate[i];
				if(this.isDeleting) {
					this.txt = fullTxt.substring(0, this.txt.length - 1);
				} else {
					this.txt = fullTxt.substring(0, this.txt.length + 1);
				}
				this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
				var that = this;
				var delta = 300 - Math.random() * 100;

				if (this.isDeleting) { delta /= 2; }

				if (!this.isDeleting && this.txt === fullTxt) {
					delta = this.period;
					this.isDeleting = true;
				} else if (this.isDeleting && this.txt === '') {
					this.isDeleting = false;
					this.loopNum++;
					delta = 500;
				}

				setTimeout(function() {
					that.tick();
				}, delta);
			}
			var elements = document.getElementsByClassName('txt-rotate');
			for (var i=0; i<elements.length; i++) {
				var toRotate = elements[i].getAttribute('data-rotate');
				var period = elements[i].getAttribute('data-period');
				if (toRotate) {
					new TxtRotate(elements[i], JSON.parse(toRotate), period);
				}
			}
		},
		data() {
			return {
				slickOptions: {
					autoplay: true,
					slidesToShow: 4,
					responsive: [
						{
							breakpoint: 500,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}, {
							breakpoint: 768,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1
							}
						}, {
							breakpoint: 1024,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1
							}
						}
					]
				}
			}
		}
	}
</script>