<template>
    <div id="shuttle-services">
        <header>
            <div class="bg-white">
                <div class="container">
                    <div class="row mb100 mt50">
                        <div class="col-md-5 pl20 mb30" data-aos="fade-right">
                            <div class="bannerText hero-text-css dp30" id="shuttle-text">
                            <h1 class="titlepro">                           
                                <span class="middle" id="banner-text">Connecting the dots in your Employee journey<br></span>                                
                            </h1>
                                <router-link :to="{name: 'contact'}" class="btn btn-transparent mt10 contactBtn" >Contact Us</router-link><br>
                            </div>
                        </div>
                        <div class="col-md-7 mt30 pr20 " id="home-2"  data-aos="fade-left">
                            <div id="bgVideo mt50" class="">
                                <img class="hero-img hero-img-css" alt="Whistle Shuttle" src="../assets/img/whistle_shuttle_img.png" >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="bg-white">
            <div class="container">
                <div class="row title-r">
                    <h2 class="titleMain">SHUTTLE SERVICES</h2>
                    <p class="text-center"><span class="titleMain_subtitle-normal">With extended transportation services for your employee convenience and safety, we ensure your office is a high performing workplace by making their commute hassle-free. </span></p>
                </div>
            </div>
        </section>
        <div class="fleetCnt">
            <section class="bg-white bg-white2">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 pt50 pb10" data-aos="fade-right">
							<div class="our_services_img_blog">
								<img src="../assets/img/last_mile_img.png" alt="Last Mile Connectivity" class="img-responsive"  >
							</div>
							<div class="visible-xs-block visible-sm-block pt20"></div>
						</div>
                        <div class="col-sm-12 col-md-6 pt20" data-aos="fade-left">
							<div class="title">
								<h4>Last Mile Connecvity</h4>
							</div>
							<p>We connect your employees to work from the nearest metros through our bus shuttle services.</p>
						</div>
                    </div>
                </div>
            </section>
            <section class="bg-gray bg-white2">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 pt50 text-right" data-aos="fade-right">
                            <div class="title">
                                <h4 class="text-right">Point Pickup Model</h4>
                            </div>
                            <p>While the status of the trip being notified with SMS and live notifications in the app, employees can board the shuttle bus at their respective scheduled pickup locations effortlessly.</p>
                        </div>
                        <div class="col-sm-12 col-md-6 pt50 pb60" data-aos="fade-left">
                            <div class="our_services_img_blog">
                                <img src="../assets/img/point_point_img.png" alt="Point Pickup Model" class="img-responsive"  >
                            </div>
                            <div class="visible-xs-block visible-sm-block pt20"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-white bg-white2">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 pt50 " data-aos="fade-right">
							<div class="our_services_img_blog">
								<img src="../assets/img/OTP_img.png" alt="OTP Authentication" class="img-responsive"  >
							</div>
							<div class="visible-xs-block visible-sm-block pt20"></div>
						</div>
                        <div class="col-sm-12 col-md-6 pt50" data-aos="fade-left">
							<div class="title">
								<h4>OTP Authentication</h4>
							</div>
							<p>With OTP/QR code based Authentication for employees during onboarding the bus shuttlese ensures their safety and convenience. </p>
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
    </div>
</template>
<script>
    export default {
        metaInfo: {
			title: 'Whistle Shuttle | Corporate Shuttle Services',
			meta: [
				{'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
				{name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: 'Whistle Shuttle is an Technology powered bus shuttle services for last mile connectivity across the city.'},
                {property: 'og:title', content: 'Whistle Shuttle | Corporate Shuttle Services'},
                {property: 'og:image', content: '../assets/img/logo.png'},
				{property: 'og:description', content: 'Whistle Shuttle is an Technology powered bus shuttle services for last mile connectivity across the city.'}
			],
			link: [
				{rel: 'canonical', href: 'https://www.whistledrive.com/shuttle-services'}
			]
		}
    }
</script>