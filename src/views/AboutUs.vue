<template>
    <div id="about-us">
        <header>
            <div class="bg-img-fixed-content img_slide">
                <div class="bg-img-fixed"></div>
                <section class="home-promo">                    
					<div class="innerPageSlide">
                        <img src="../assets/img/about.jpg">
                    </div>
                </section>
            </div>
        </header>
        <section class="bg-white">
            <div class="container">
                <div class="row title-r">
                    <h2 class="titleMain">About Us</h2>
                    <p class="text-center"><span class="titleMain_subtitle-normal pb20">WhistleDrive provides Transportation As A Service (TaaS) to Corporates. We provide Fleet of Cabs & Bus Shuttles, End to End Technology and Ground Operations to make Office Commute safe and fully efficient.</span></p>
                </div>
            </div>
		</section>
        <section class="bg-white">
            <div class="container">
                <div class="row title-r">
                    <h2 class="titleMain">OUR MISSION</h2>
                    <p class="text-center"><span class="titleMain_subtitle-normal pb20">To transport million people a day to work and places they love through technology driven, efficient and safe transportation.</span></p>
                </div>
            </div>
		</section>
        <div class="fleetCnt">
            <section class="bg-white bg-white2">
                <div class="container">
                    <div class="row">
                        <h2 class="titleMain">Our Partners</h2>
                        <div class="col-sm-12 col-md-3 pt50 pb20">
                            <div class="our_services_img_blog">
                                <img src="../assets/img/colosseum-logo.png" class="img-responsive" alt="template">
                            </div>
                            <div class="visible-xs-block visible-sm-block pt20"></div>
                        </div>
                        <div class="col-sm-12 col-md-9 pt20 dp30">
                            <div class="title"> 
                                <h4>Colosseum Group</h4>
                            </div>
                            <p class="left-align ">Colosseum Group is a Chicago based Investment firm that empowers Collaboration for startups. It is a diversified firm which has its footprints in Transportation, Education, Artificial Intelligence, Technology, Financial Solutions, Healthcare and E-Commerce. Colosseum Group has Colosseum Foundation, Colosseum Ventures, Colosseum partners, Colosseum Studios and more.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-gray bg-white2">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-9 pt100 text-right">
                            <div class="title">
                                <h4 class="text-right">t-hub</h4>
                            </div>
                            <p>T-Hub is a unique public/private partnership between the government of Telangana, 3 of India’s premier academic institutes (IIIT-H, ISB & NALSAR) and key private sector leaders. It stands at the intersection of the start-up, academic, corporate, research and government sectors. Platform for entrepreneurs, mentors, investors and academia to interact and collaborate.</p>
                        </div>
                        <div class="col-sm-12 col-md-3 pt50 pb20">
                            <div class="our_services_img_blog">
                                <img src="../assets/img/t-hub-logo.png" class="img-responsive" alt="template">
                            </div>
                            <div class="visible-xs-block visible-sm-block pt20"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-white bg-white2 ">
                <div class="container">
                    <div class="row pt50 pb100">
                        <div class="col-sm-4 text-center padding fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <router-link :to="{name: 'newsRoom'}">
                                <div class="aboutus-redictlinks">
                                    <span class="text-center col-sm-12">
                                        <img src="../assets/img/news-icon.png"></span>
                                    <span>
                                        <h2>News Room</h2>
                                            <p>Read WhistleDrive press releases, get updates &amp; watch videos.</p>
                                            <span class="clicktoview">
                                                <img src="../assets/img/right-arrow.png">
                                            </span>
                                    </span>
                                </div>
                            </router-link>
                            <div class="clearfix"></div>
                        </div>
                        <div class="col-sm-4 text-center padding fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <router-link :to="{name: 'blog'}">
                                <div class="aboutus-redictlinks">
                                    <span class="text-center col-sm-12">
                                        <img src="../assets/img/blog_img.png">
                                    </span>
                                    <span>
                                        <h2>Blog</h2>
                                        <p>Join us, Let's make the difference together!</p>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                    <span class="clicktoview">
                                        <img src="../assets/img/right-arrow.png">
                                    </span>
                                </div>
                            </router-link>
                            <div class="clearfix"></div>                            
                        </div>
                        <div class="col-sm-4 text-center padding fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <router-link :to="{name: 'careers'}">
                                <div class="aboutus-redictlinks">
                                    <span class="text-center col-sm-12">
                                        <img src="../assets/img/careers-icon.png">
                                    </span>
                                    <span>
                                        <h2>Careers</h2>
                                        <p>Join us, Let's make the difference together!</p>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                    <span class="clicktoview">
                                        <img src="../assets/img/right-arrow.png">
                                    </span>
                                </div>
                            </router-link>
                            <div class="clearfix"></div>
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
			title: 'About Us | WhistleDrive',
			meta: [
				{'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
				{name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: 'Learn more about who WhistleDrive is and what we do. Find all of the WhistleDrive company information, Mission, vision and meet the people who we work with.'}, 
                {property: 'og:title', content: 'About Us | WhistleDrive'},
                {property: 'og:image', content: '../assets/img/logo.png'},
				{property: 'og:description', content: 'Learn more about who WhistleDrive is and what we do. Find all of the WhistleDrive company information, Mission, vision and meet the people who we work with.'}
			],
			link: [
				{rel: 'canonical', href: 'https://www.whistledrive.com/about-us'}
			]
		}
    }
</script>
