<template>
	<div class="fleet-services">
		<header>
			<div class="bg-gray">
				<div class="container">
					<div class="row mb30 mt50">
						<div class="col-md-5 col-sm-12 pl20 mb30" data-aos="fade-right">
							<div class="bannerText hero-text-css dp30">
								<h1 class="titlepro">                           
									<span class="middle" id="banner-text">Fleet that is fully Compliant, Efficient and Technology Ready!</span>								
								</h1>
								<router-link :to="{name: 'contact'}" class="btn btn-transparent contactBtn">Contact Us</router-link>
							</div>
						</div>
						<div class="col-md-7 pr20 " data-aos="fade-left">
							<div id="bgVideo" class="">
								<img class="hero-img hero-img-css" alt="Whistle Fleet" src="../assets/img/whistle_fleet_img.png" >
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<section class="bg-white">
			<div class="container">
				<div class="row title-r">
					<h2 class="titleMain">The Whistle Advantage</h2>
					<p class="text-center"><span class="titleMain_subtitle-normal mt20">With 700+ fleet spread across 3 cities(Hyderabad, Bengaluru and Chennai) backed by strong ground operations and advanced fleet management software (Whistle Tech), we ensure seamless transportation experience for your employees.</span></p>
				</div>
			</div>
		</section>
		<div class="fleetCnt">
			<section class="bg-white bg-white2">
				<div class="container">
					<div class="row">
						<div class="col-sm-12 col-md-6 pt10 " data-aos="fade-right">
							<div class="our_services_img_blog">
								<img alt="Full Compliance Check" src="../assets/img/compliance.png" class="img-responsive"  >
							</div>
							<div class="visible-xs-block visible-sm-block pt20"></div>
						</div>
						<div class="col-sm-12 col-md-6 pt40 " data-aos="fade-left">
							<div class="title dp50 ">
								<h4>Full Compliance Check</h4>
							</div>
							<p>With a 3 layer compliance check and verification process, we ensure that all our Fleet documents are valid and are up to date. The Stakeholders can view all the details from their dashboards. There are alerts in case of a nearing end date for any document.</p>
						</div>
					</div>
				</div>
			</section>
			<section class="bg-gray bg-white2">
				<div class="container">
					<div class="row">
						<div class="col-sm-12 col-md-6 pt100 text-right" data-aos="fade-right">
							<div class="title">
								<h4 class="text-right">On-ground Operations</h4>
							</div>
							<p>We are Experts! With a team of rich industry knowledge and experience of handling transport operations of various organizations, we make it effortless for you by taking care of your employee transportation daily in-person.</p>
						</div>
						<div class="col-sm-12 col-md-6 pt50 pb60" data-aos="fade-left">
							<div class="our_services_img_blog">
								<img src="../assets/img/On-groundOperations_img.png" alt="On-ground Operations" class="img-responsive"  >
							</div>
							<div class="visible-xs-block visible-sm-block pt20"></div>
						</div>
					</div>
				</div>
			</section>					
			<section class="bg-white bg-white2">
				<div class="container">
					<div class="row">
						<div class="col-sm-12 col-md-6 pt50" data-aos="fade-right">
							<div class="our_services_img_blog">
								<img src="../assets/img/technology_enabled_img.png" alt="Technology Ready" class="img-responsive"   style="max-width:85%;"> 
							</div>
							<div class="visible-xs-block visible-sm-block pt20"></div>
						</div>
						<div class="col-sm-12 col-md-6 pt30" data-aos="fade-left">
							<div class="title"><br>
								<h4>Technology Ready</h4>
							</div>                            
							<p>All our fleet is Smartphone enabled. Whether you use Whistle Tech or any Fleet Management Software, our fleet is fully capable of adopting it and extend 100% usage with zero resistance.</p>
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
			title: 'Whistle Fleet | Tech Enabled Fleet Services',
			meta: [
				{'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
				{name: 'viewport', content: 'width=device-width, initial-scale=1'},
				{name: 'description', content: 'The Industry Compliant Fleet Services powered with Whistle Tech Software for Office Commute, managed by expert team with rich industry experience.'},
				{property: 'og:title', content: 'Whistle Fleet | Tech Enabled Fleet Services'},
                {property: 'og:image', content: '../assets/img/logo.png'},
				{property: 'og:description', content: 'The Industry Compliant Fleet Services powered with Whistle Tech Software for Office Commute, managed by expert team with rich industry experience.'}
			],
			link: [
				{rel: 'canonical', href: 'https://www.whistledrive.com/fleet-services'}
			]
		}
	}
</script>