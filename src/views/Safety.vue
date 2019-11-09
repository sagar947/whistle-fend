<template>
    <div id="safety">
        <header>
            <div class="bg-white">
                <div class="container">
                    <div class="row mb100 mt50">
                        <div class="col-md-5 pl20 mb30 dp50" data-aos="fade-right">
                            <div class="bannerText hero-text-css" id="banner-top">
                                <h1 class="titlepro">
                                    <span class="middle" id="banner-text">We Value You &amp; Your Journey</span>   
                                    <h1 class="mt20"><span id="safety-tag" class="hero-img-sub">With the help of technology, we ensure your safety at all levels of your journey with WhistleDrive</span></h1>                                 
                                </h1>
                                <router-link :to="{name: 'contact'}" class="btn btn-transparent contactBtn dmt20">Contact Us</router-link>
                            </div>
                        </div>
                        <div class="col-md-7 pr20 dp50" data-aos="fade-left">
                            <div id="bgVideo" class="">
                                <img class="hero-img hero-img-css" src="../assets/img/w-safety.png" alt="We Value Your Journey" >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="bg-white">
            <div class="container">
                <div class="row title-r">
                    <h2 class="titleMain pb50">Safety Features in our Applications</h2> 
                    <div class="col-sm-6 col-md-4 text-center home-icons gray-text">
                        <i class="fa wow fadeInUp" data-aos="fade-up">
							<img src="../assets/img/icon_number_masking.png" class="blue_icon">
							<img src="../assets/img/icon_number_masking_white.png" class="white_icon">
						</i>
                        <div>
                            <h4>Number Masking</h4>
                            <p>To ensure employee privacy, all the calls between employees and drivers are connected with a bridge number and are connected only via application during the ride.</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 text-center home-icons">
                        <i class="fa wow fadeInUp" data-aos="fade-up">
							<img src="../assets/img/icon_sos.png" class="blue_icon">
							<img src="../assets/img/icon_sos_white.png" class="white_icon">
						</i>
                        <div>
                            <h4>SOS alert</h4>
                            <p>In case of any emergencies, the employees can use the SOS feature to alert the admins with your location details and also your live location will be shared with all the emergency contacts simultaneously. i.e friends/family</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 text-center home-icons">
                        <i class="fa wow fadeInUp" data-aos="fade-up">
							<img src="../assets/img/icon_location_share.png" class="blue_icon">
							<img src="../assets/img/icon_location_share_white.png" class="white_icon">
						</i>
                        <div>
                            <h4>Location Sharing with Friends & Family</h4>
                            <p>The in-app location sharing option will help the employees to share their live location with their friends and family.</p>
                        </div>
                    </div>
					</div>
					<div class="row pt50">
					<div class="col-sm-6 col-md-4 text-center home-icons">
                        <i class="fa wow fadeInUp" data-aos="fade-up">
							<img src="../assets/img/icon_24_7.png" class="blue_icon">
							<img src="../assets/img/icon_24_7_white.png" class="white_icon">
						</i>
                        <div>
                            <h4>24/7 Helpline (Chat, Call, Email)</h4>
                            <p>We have a dedicated support team who will be available at all times to support and guide the employees in their journey.</p>
                        </div>
                    </div>
					<div class="col-sm-6 col-md-4 text-center home-icons">
                        <i class="fa wow fadeInUp" data-aos="fade-up">
							<img src="../assets/img/speed-limit.png" class="blue_icon">
							<img src="../assets/img/speed-limit_white.png" class="white_icon">
						</i>
                        <div>
                            <h4>Speed limit</h4>
                            <p id="safety-text">With the help of technology, we monitor the vehicle speed and make sure everything is under guidelines.</p>
                        </div>
                    </div>
					<div class="col-sm-6 col-md-4 text-center home-icons">
                        <i class="fa wow fadeInUp" data-aos="fade-up">
							<img src="../assets/img/route-deviation.png" class="blue_icon">
							<img src="../assets/img/route-deviation_white.png" class="white_icon">
						</i>
                        <div>
                            <h4>Route Deviation</h4>
                            <p>Our Application alerts all the stakeholders, if the driver has deviated from the scheduled route during the pickup and drop off the employees.</p>
                        </div>
                    </div>
                </div>				
            </div>
        </section>
        <div class="fleetCnt">
            <section class="bg-white bg-white2">
                <div class="container">
                    <div class="row">
                        <h2 class="titleMain">We abide by the Industry Rules</h2>
                        <div class="col-sm-12 col-md-6 pb20">
                            <div class="our_services_img_blog">
                                <img src="../assets/img/no_female_img.png" class="img-responsive" alt="We abide by industry rules">
                            </div>
                            <div class="visible-xs-block visible-sm-block pt20"></div>
                        </div>
                        <div class="col-sm-12 col-md-6 pt30 left-align">
                            <div class="title">
                                <h4>No Female first pickup/last drop</h4>
                            </div>
                            <p>For female employee safety, we follow the strict Industry guidelines that No Women Employee will not be picked first and dropped last during the trips between 8PM and 6AM</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-gray bg-white2">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 pt100 pb80 text-right">
                            <div class="title">
                                <h4 class="text-right">Escort for the Last drop during Night shifts</h4>
                            </div>
                            <p>Our routing algorithm raises a flag automatically and alerts the supervisors to allot an escort, if any female employee drop is scheduled between 8pm to 6am.</p>
                        </div>
                        <div class="col-sm-12 col-md-6 pt30 pb80">
                            <div class="our_services_img_blog">
                                <img src="../assets/img/escort_img.png" class="img-responsive" alt="Escort for last drop during night shifts">
                            </div>
                            <div class="visible-xs-block visible-sm-block pt20"></div>
                        </div>                        
                    </div>
                </div>
            </section>
            <section class="bg-white bg-white2">
                <div class="container mb50">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <div class="our_services_img_blog">
                                <img src="../assets/img/cab_driver_verification_img.png" class="img-responsive" alt="Cab and Driver Verification">
                            </div>
                            <div class="visible-xs-block visible-sm-block pt20"></div>
                        </div>
                        <div class="col-sm-12 col-md-6 pt20 pb80">
                            <div class="title">
                                <h4>Cab & Driver Verification</h4>
                            </div>
                            <p>All the Drivers & Cabs undergo a 3-layer verification process before on-boarding WhistleDrive. From Documents to the behaviour we screen every detail. And also we perform a document check at regular intervals to ensure all the licenses/certificates are up to date.</p>
                        </div>                        
                    </div>
                </div>
            </section>
            <section class="quote-safety text-center mb30 mt20">
                <div id="quote">
                    <p class="quote">“Employee Transportation is an everyday activity and we move thousands of them. Hence we want to make it more safe with the help of technology. Abiding by the industry safety standards, our efforts on compliance and background checks, safety features in the application, we ensure that we create a safer environment for employees and partners.
                    We will go that extra mile for safety”</p>
                    <strong>— Rakesh Munnanooru, Founder & CEO</strong>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    export default {
        metaInfo: {
			title: 'Whistle Safety | Features in our Employee & Driver Apps',
			meta: [
				{'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
				{name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: 'We Value You & Your Journey. Learn more about the saftey features in our appliactions which makes your jouney a great experience.'},
                {property: 'og:title', content: 'Whistle Safety | Features in our Employee & Driver Apps'},
                {property: 'og:image', content: '../assets/img/logo.png'},
				{property: 'og:description', content: 'We Value You & Your Journey. Learn more about the saftey features in our appliactions which makes your jouney a great experience.'}
			],
			link: [
				{rel: 'canonical', href: 'https://www.whistledrive.com/safety'}
			]
		}
    }
</script>
