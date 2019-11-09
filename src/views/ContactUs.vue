<template>
	<div id="contact-us">
		<section class="bg-white mt40">
            <div class="container">
                <div class="row">
                    <h5  class="titleMain  text-center"></h5>
					<div class="col-md-6">
						<h4>Let's get in touch!</h4>
						<p class="bottom_caption">A member of our team will reach out</p>
						<ValidationObserver v-slot="{ passes }">
							<form id="contactForm" @submit.prevent="passes(handleSubmit)">
								<div class="formCnt">                               
									<ValidationProvider name="Full Name" rules="required|min:3" v-slot="{ errors }">
										<div class="form-group">
											<label for="fullName">Full Name</label>
											<input type="text" class="form-control" id="fullName" v-model="fullName" placeholder="Your full name">
											<span id="error-msg">{{ errors[0] }}</span>
										</div>
									</ValidationProvider>
									<ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
										<div class="form-group">
											<label for="email">Email</label>
											<input type="text" class="form-control" id="email" v-model="email" placeholder="Your email address">
											<span id="error-msg">{{ errors[0] }}</span>
										</div>
									</ValidationProvider>
									<ValidationProvider name="Phone" rules="required|numeric|max:10" v-slot="{ errors }">
										<div class="form-group">
											<label for="phone">Phone</label>
											<input type="text" class="form-control" id="phone" v-model="phone" placeholder="Your phone number">
											<span id="error-msg">{{ errors[0] }}</span>
										</div>
									</ValidationProvider>
									<ValidationProvider name="Subject" rules="required" v-slot="{ errors }">
										<div class="form-group">
											<label for="subject">Subject</label>
											<input type="text" class="form-control" id="subject" v-model="subject" placeholder="Subject">
											<span id="error-msg">{{ errors[0] }}</span>
										</div>
									</ValidationProvider>
									<ValidationProvider name="Message" rules="required" v-slot="{ errors }">
										<div class="form-group">
											<label for="message">Message</label>
											<textarea class="form-control" id="message" v-model="message" placeholder="Message" rows="6"></textarea>
											<span id="error-msg">{{ errors[0] }}</span>
										</div>
									</ValidationProvider>
									<button type="submit" class="btn btn-primary" id="submit-button">{{status.submitTitle}}</button>
									<p class="alert mt20">Your form has been submitted. </p>
								</div>
							</form>
						</ValidationObserver>
					</div>
					<div class="col-md-6">
						<p class="sales-request">For enquiries related to sales, please reach us on <a href="mailto:sales@whistledrive.com">sales@whistledrive.com</a></p>
						<h4>Corporate Head Office  </h4>
						<div class="formCnt formCnt2">
							<p>Modern Profound Tech Park, 4th Floor, Plot No-5, Survey No-12, Kondapur, Hyderabad - 500 084</p>	
							<ul class="emailBlog">
								<li>E-mail : <a href="hello@whistledrive.com">hello@whistledrive.com</a></li>
								<li class="mb20"><a href="tel:8499040404">Tel :+91 8499 04 04 04</a></li>
							</ul>  
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0509989893735!2d78.36833671527121!3d17.457272988036802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93cf9a493281%3A0x92034ca5f4cdcb54!2sWhistleDrive+Pvt+Ltd!5e0!3m2!1sen!2sin!4v1530601160801" width="100%" height="300" frameborder="0" style="border:1px solid #ddd;" allowfullscreen=""></iframe>
						</div>
					</div>
                </div>
            </div> 
        </section>
	</div>
</template>
<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
	export default {
		metaInfo: {
			title: 'Contact Us | WhistleDrive',
			meta: [
				{'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
				{name: 'viewport', content: 'width=device-width, initial-scale=1'},
				{name: 'description', content: 'Contact us by phone or email for a demo and other queries regarding our employee transportation solutions.'},
				{property: 'og:title', content: 'Contact Us | WhistleDrive'},
                {property: 'og:image', content: '../assets/img/logo.png'},
				{property: 'og:description', content: 'Contact us by phone or email for a demo and other queries regarding our employee transportation solutions.'}
			],
			link: [
				{rel: 'canonical', href: 'https://www.whistledrive.com/contact'}
			]
		},
		components: {
			ValidationObserver,
			ValidationProvider
		},
		data() {
			return {
				fullName: '',
				email: '',
				phone: '',
				subject: '',
				message: '',
				status:{
					submitTitle: 'Send'
				}
			}
		},
		methods: {
			handleSubmit() {
				var btn = document.getElementById('submit-button')
				btn.setAttribute('disabled', 'disabled')
				this.status.submitTitle = 'Sending...'
				this.$store.dispatch('posts/submitContactForm', {
					contact_name: this.fullName,
					contact_email: this.email,
					contact_phone: this.phone,
					contact_subject: this.subject,
					contact_message: this.message
				}).then(() => {
					this.status = {
						submitTitle: 'Sent'
					}
					setTimeout(() => {
						btn.removeAttribute('disabled');
						this.fullName = '';
						this.email = '';
						this.phone = '';
						this.subject = '';
						this.message = '';
						this.status = {
							submitTitle: 'Send'
						}
					}, 2000)
				})
			}
		}
	}
</script>
<style scoped>
	textarea#message {
		resize: none;
	}
	#error-msg {
		font-size: 11px;
		font-style: italic;
		color: #f96f67;
	}
</style>