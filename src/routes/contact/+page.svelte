<script lang="ts">
	import { t } from '$lib/i18n';

	// Form data
	let formData = {
		name: '',
		email: '',
		phone: '',
		service: '',
		message: ''
	};

	let isSubmitting = false;
	let submitMessage = '';

	// Service options
	const serviceOptions = [
		{ value: 'custom-tours', label: 'Custom Tours' },
		{ value: 'luxury-hotels', label: 'Luxury Hotels' },
		{ value: 'premium-flights', label: 'Premium Flights' },
		{ value: 'private-jets', label: 'Private Jets' },
		{ value: 'other', label: 'Other Services' }
	];

	// Handle form submission
	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		isSubmitting = true;
		
		// Simulate form submission
		try {
			await new Promise(resolve => setTimeout(resolve, 2000));
			submitMessage = 'Thank you for your message! We will get back to you soon.';
			
			// Reset form
			formData = {
				name: '',
				email: '',
				phone: '',
				service: '',
				message: ''
			};
		} catch (error) {
			submitMessage = 'Sorry, there was an error sending your message. Please try again.';
		} finally {
			isSubmitting = false;
			setTimeout(() => {
				submitMessage = '';
			}, 5000);
		}
	};
</script>

<svelte:head>
	<title>{$t.contact.title} - {$t.hero.title}</title>
	<meta name="description" content="Contact Waytime for luxury travel services" />
</svelte:head>

<!-- Hero Section -->
<section class="relative pt-32 pb-16 luxury-gradient">
	<div class="container-custom text-center">
		<h1 class="text-5xl md:text-6xl font-serif font-bold mb-6 text-luxury-900">
			{$t.contact.title}
		</h1>
		<p class="text-xl md:text-2xl text-luxury-600 max-w-4xl mx-auto leading-relaxed">
			Get in touch with our luxury travel experts to start planning your extraordinary journey.
		</p>
	</div>
</section>

<!-- Contact Section -->
<section class="section-padding bg-white">
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Contact Information -->
			<div>
				<h2 class="text-3xl font-serif font-bold mb-8 text-luxury-900">Get in Touch</h2>
				<p class="text-lg text-luxury-600 mb-8 leading-relaxed">
					Our team of luxury travel specialists is ready to help you create unforgettable experiences. 
					Contact us today to discuss your travel dreams.
				</p>

				<div class="space-y-6">
					<!-- Phone -->
					<div class="flex items-center space-x-4 p-6 bg-luxury-50 rounded-xl hover:bg-luxury-100 transition-colors duration-200">
						<div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-lg font-semibold text-luxury-900 mb-1">{$t.contact.phone}</h3>
							<p class="text-luxury-600">+86 132 8444 4493</p>
						</div>
						<a
							href="tel:+8613284444493"
							class="btn-primary"
							aria-label="Call us"
						>
							Call Now
						</a>
					</div>

					<!-- Email -->
					<div class="flex items-center space-x-4 p-6 bg-luxury-50 rounded-xl hover:bg-luxury-100 transition-colors duration-200">
						<div class="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-lg font-semibold text-luxury-900 mb-1">{$t.contact.email}</h3>
							<p class="text-luxury-600">yolo20230214@gmail.com</p>
						</div>
						<a
							href="mailto:yolo20230214@gmail.com"
							class="btn-secondary"
							aria-label="Send email"
						>
							Send Email
						</a>
					</div>

					<!-- Address -->
					<div class="flex items-start space-x-4 p-6 bg-luxury-50 rounded-xl">
						<div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-lg font-semibold text-luxury-900 mb-1">{$t.contact.address}</h3>
							<p class="text-luxury-600">{$t.about.address}</p>
						</div>
					</div>

					<!-- Business Hours -->
					<div class="flex items-start space-x-4 p-6 bg-luxury-50 rounded-xl">
						<div class="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-lg font-semibold text-luxury-900 mb-1">Business Hours</h3>
							<p class="text-luxury-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
							<p class="text-luxury-600">Saturday: 10:00 AM - 4:00 PM</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div>
				<div class="bg-gradient-to-br from-primary-500 to-gold-600 rounded-2xl p-8 text-white">
					<h2 class="text-3xl font-serif font-bold mb-6">Send us a Message</h2>
					<p class="text-lg mb-8 opacity-90">
						Tell us about your travel dreams and we'll help make them a reality.
					</p>

					{#if submitMessage}
						<div class="bg-green-500/20 border border-green-400 rounded-lg p-4 mb-6">
							<p class="text-green-100">{submitMessage}</p>
						</div>
					{/if}

					<form on:submit={handleSubmit} class="space-y-6">
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label for="name" class="block text-sm font-medium mb-2">Full Name *</label>
								<input
									type="text"
									id="name"
									bind:value={formData.name}
									required
									class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
									placeholder="Your full name"
								/>
							</div>
							<div>
								<label for="email" class="block text-sm font-medium mb-2">Email Address *</label>
								<input
									type="email"
									id="email"
									bind:value={formData.email}
									required
									class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
									placeholder="your.email@example.com"
								/>
							</div>
						</div>

						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label for="phone" class="block text-sm font-medium mb-2">Phone Number</label>
								<input
									type="tel"
									id="phone"
									bind:value={formData.phone}
									class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
									placeholder="+1 (555) 123-4567"
								/>
							</div>
							<div>
								<label for="service" class="block text-sm font-medium mb-2">Service Interest</label>
								<select
									id="service"
									bind:value={formData.service}
									class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
								>
									<option value="">Select a service</option>
									{#each serviceOptions as option}
										<option value={option.value}>{option.label}</option>
									{/each}
								</select>
							</div>
						</div>

						<div>
							<label for="message" class="block text-sm font-medium mb-2">Message *</label>
							<textarea
								id="message"
								bind:value={formData.message}
								required
								rows="5"
								class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none"
								placeholder="Tell us about your travel plans, preferences, and any specific requirements..."
							></textarea>
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							class="w-full btn-secondary border-white text-white hover:bg-white hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
							aria-label="Send message"
						>
							{isSubmitting ? 'Sending...' : 'Send Message'}
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="section-padding luxury-gradient">
	<div class="container-custom">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-serif font-bold mb-6 text-luxury-900">
				Frequently Asked Questions
			</h2>
			<p class="text-xl text-luxury-600 max-w-3xl mx-auto">
				Find answers to common questions about our luxury travel services.
			</p>
		</div>

		<div class="max-w-4xl mx-auto space-y-6">
			<div class="card p-8">
				<h3 class="text-xl font-serif font-semibold mb-4 text-luxury-900">How far in advance should I book my luxury travel?</h3>
				<p class="text-luxury-600 leading-relaxed">
					We recommend booking at least 3-6 months in advance for luxury travel experiences, especially during peak seasons. 
					For private jet charters and exclusive experiences, 6-12 months notice is ideal to ensure availability.
				</p>
			</div>

			<div class="card p-8">
				<h3 class="text-xl font-serif font-semibold mb-4 text-luxury-900">Do you offer 24/7 support during travel?</h3>
				<p class="text-luxury-600 leading-relaxed">
					Yes, we provide round-the-clock support for all our clients. Our dedicated team is available 24/7 to assist with 
					any questions, changes, or emergencies during your journey.
				</p>
			</div>

			<div class="card p-8">
				<h3 class="text-xl font-serif font-semibold mb-4 text-luxury-900">Can you arrange custom experiences not listed on your website?</h3>
				<p class="text-luxury-600 leading-relaxed">
					Absolutely! We specialize in creating completely customized experiences. Our extensive network of partners and 
					insider knowledge allows us to arrange unique experiences tailored to your specific interests and preferences.
				</p>
			</div>

			<div class="card p-8">
				<h3 class="text-xl font-serif font-semibold mb-4 text-luxury-900">What payment methods do you accept?</h3>
				<p class="text-luxury-600 leading-relaxed">
					We accept various payment methods including bank transfers, major credit cards, and secure online payments. 
					For high-value bookings, we also accommodate alternative payment arrangements.
				</p>
			</div>
		</div>
	</div>
</section> 