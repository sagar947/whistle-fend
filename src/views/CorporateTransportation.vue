<template>
    <div class="" id="corporate-transportation">
        <header>
            <div class="bg-pwhite">
                <div class="container">
                    <div class="row mt70 mb60">
                        <div class="col-md-5 pl20 mb30">
                            <div class="bannerText hero-text-css dp30">
                                <h1 class="titlepro mt30 pr10">                           
									<span class="middle" id="banner-text">A Comprehensive<br>
										Solution for
										Corporate<br>Transportation
										Management
                                    </span>									
								</h1>
                                <router-link :to="{name: 'contact'}" class="btn btn-transparent contactBtn" >Contact Us</router-link>
                            </div>
                        </div>
                        <div class="col-md-7 mt30 pr20 " id="home-2"  data-aos="fade-left">
                            <div id="bgVideo mt50" class="">
                                <img class="hero-img" alt="Whistle 360&#176;" id="img-360" src="../assets/img/Shuttle360_slide_img.png" >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="bg-white"> 
            <div class="container">
                <div class="row title-r">
                    <h2 class="titleMain">It’s more than just Cabs and Technology</h2>
					<p class="text-center"><span class="titleMain_subtitle-normal mt30">Whistle360<sup>0</sup> is a SPOC (Single Point of Contact) Model for your entire transportation operations where WhistleDrive handles it on your behalf. Our Whistle Tech automates most of the processes involved in the transportation management. It gives you complete control over cabs to billings at any given time.</span></p>
                </div>
            </div>
        </section>
        <div class="fleetCnt">
            <section class="bg-white bg-white2">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 pt50 pb60" data-aos="fade-right">
                            <div class="our_services_img_blog">
                                <img src="../assets/img/Self_Rostering_img_1.png" alt="Self Rostering" class="img-responsive" style="height: 450px;"  >
                            </div>
                            <div class="visible-xs-block visible-sm-block pt20"></div>
                        </div>
                        <div class="col-sm-12 col-md-6 pt30 pb30" data-aos="fade-left">
                            <div class="title">
                                <h4>Self Rostering</h4>
                            </div>
                            <p>Schedule your ride! With our application, the employees can schedule their ride based on their work shifts. They can raise on-demand requests from the application with just a few clicks.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-gray bg-white2">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 pt50 pb30 text-right" data-aos="fade-right">
                            <div class="title">
                                <h4 class="text-right">Route Planning</h4>
                            </div>
                            <p>We understand you! Our routing algorithms will create highly optimized routes considering the total trip distance, journey time and fleet/seat occupancy.</p>
                        </div>
                        <div class="col-sm-12 col-md-6 pt50 pb60" data-aos="fade-left">
                            <div class="our_services_img_blog">
                                <img src="../assets/img/Route_Planning_img.png" alt="Route Planning" class="img-responsive"  >
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
                                <img src="../assets/img/vender_allocation_img.png" alt="Vendor Allocation" class="img-responsive"  >
                            </div>
                            <div class="visible-xs-block visible-sm-block pt20"></div>
                        </div>
                        <div class="col-sm-12 col-md-6 pt30 dp50 " data-aos="fade-left">
                            <div class="title">
                                <h4>Vendor Allocation</h4>
                            </div>
                            <p>We assign it to the right ones! Our routing algorithms will assign the routes to each vendor based on their fleet capacity, vehicle types and location ensuring fair allocation.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-gray bg-white2">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 pt50 text-right" data-aos="fade-right">
                            <div class="title">
                                <h4 class="text-right">Cab Assignment</h4>
                            </div>
                            <p>We schedule the rides! Depending on the number of employees in the route, a cab (Hatchback, Sedan & SUV) is assigned for their trip. We make sure that the seat occupancy is maximum to minimize the costs.</p>
                        </div>
                        <div class="col-sm-12 col-md-6 pt50 pb60" data-aos="fade-left">
                            <div class="our_services_img_blog">
                                <img src="../assets/img/Cab_Assign_img.png" alt="Cab Assignment" class="img-responsive"  >
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
                                <img src="../assets/img/Command_Centre_img.png" alt="Command Center" class="img-responsive"  >
                            </div>
                            <div class="visible-xs-block visible-sm-block pt20"></div>
                        </div>
                        <div class="col-sm-12 col-md-6 pt20" data-aos="fade-left">
                            <div class="title">
                                <h4>Command Centre</h4>
                            </div>
                            <p>We see it all! Our Central vigilance team will monitor the entire activity of the transportation process and ensure the safety of the employees. The team is highly responsive and escalates or alerts the stakeholders in case of emergencies.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-gray bg-white2">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 pt50 text-right" data-aos="fade-right">
                            <div class="title">
                                <h4 class="text-right">Reports & Billing</h4>
                            </div>
                            <p>We report! From advanced reports to customized bills, The stakeholders can generate it all on a monthly or weekly basis from their dashboards, these can help the teams in making the process more efficient.</p>
                        </div>
                        <div class="col-sm-12 col-md-6 pt50 pb60" data-aos="fade-left">
                            <div class="our_services_img_blog">
                                <img src="../assets/img/Reports_Billing_img.png" alt="Reports and Billing" class="img-responsive"  >
                            </div>
                            <div class="visible-xs-block visible-sm-block pt20"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="quote-safety text-center mb30 mt20">
                <div id="quote">
                    <p class="quote">Whistle 360 is a Master Vendor Solution for your entire transportation management. Be it Managing Fleet, Vendors, driver-partners, scheduling, routing, detailed reports &amp; billings, we make it effortless for you.</p>
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
			title: 'Whistle 360 | A Master Vendor Solution for Employee Transport',
			meta: [
				{'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
				{name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: 'A Comprehensive Transportation management solution for Vendor Onboarding, Cab Compliance Check, Route Planning, Service Level Quality Check, Reports & Billing'},
                {property: 'og:title', content: 'Whistle 360 | A Master Vendor Solution for Employee Transport'},
                {property: 'og:image', content: '../assets/img/logo.png'},
				{property: 'og:description', content: 'A Comprehensive Transportation management solution for Vendor Onboarding, Cab Compliance Check, Route Planning, Service Level Quality Check, Reports & Billing'}
			],
			link: [
				{rel: 'canonical', href: 'https://www.whistledrive.com/corporate-transportation'}
			]
		}
    }
</script>