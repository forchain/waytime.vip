<script lang="ts">
	import { t } from '$lib/i18n';
	import { goto } from '$app/navigation';

	// Handle contact button click
	const handleContactUs = () => {
		goto('/contact');
	};
</script>

<svelte:head>
	<title>{$t.about.title} - {$t.hero.title}</title>
	<meta name="description" content="{$t.about.description}" />
</svelte:head>

<!-- Hero Section -->
<section class="relative pt-32 pb-16 luxury-gradient">
	<div class="container-custom text-center">
		<h1 class="text-5xl md:text-6xl font-serif font-bold mb-6 text-luxury-900">
			{$t.about.title}
		</h1>
		<p class="text-xl md:text-2xl text-luxury-600 max-w-4xl mx-auto leading-relaxed">
			{$t.about.description}
		</p>
	</div>
</section>

<!-- Our Story Section -->
<section class="section-padding bg-white">
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-4xl font-serif font-bold mb-6 text-luxury-900">
					Our Story
				</h2>
				<p class="text-lg text-luxury-600 mb-6 leading-relaxed">
					Founded with a vision to transform luxury travel, {$t.hero.title} has established itself as a premier travel service provider, 
					catering to discerning clients who demand excellence in every aspect of their journey.
				</p>
				<p class="text-lg text-luxury-600 mb-6 leading-relaxed">
					Our commitment to personalized service, attention to detail, and unwavering dedication to client satisfaction 
					has made us the trusted choice for luxury travelers worldwide.
				</p>
				<p class="text-lg text-luxury-600 leading-relaxed">
					From our headquarters in Guangzhou, we serve clients globally, bringing world-class travel experiences 
					to those who appreciate the finest things in life.
				</p>
			</div>
			<div>
				<div class="bg-gradient-to-br from-primary-500 to-gold-600 rounded-2xl p-8 text-white">
					<div class="text-center">
						<div class="text-6xl mb-4">🌟</div>
						<h3 class="text-2xl font-serif font-semibold mb-4">Excellence in Every Journey</h3>
						<p class="text-lg leading-relaxed">
							We believe that every journey should be extraordinary, every experience should be memorable, 
							and every detail should be perfect.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Mission & Values Section -->
<section class="section-padding luxury-gradient">
	<div class="container-custom">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-serif font-bold mb-6 text-luxury-900">
				Our Mission & Values
			</h2>
			<p class="text-xl text-luxury-600 max-w-3xl mx-auto">
				Guided by our core values, we strive to deliver exceptional travel experiences that exceed expectations.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- Professionalism -->
			<div class="card p-8 text-center">
				<div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
				</div>
				<h3 class="text-xl font-serif font-semibold mb-4 text-luxury-900">Professionalism</h3>
				<p class="text-luxury-600 leading-relaxed">
					Maintaining the highest standards of professional service and ethical business practices in all our interactions.
				</p>
			</div>

			<!-- Attention to Detail -->
			<div class="card p-8 text-center">
				<div class="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
					</svg>
				</div>
				<h3 class="text-xl font-serif font-semibold mb-4 text-luxury-900">Attention to Detail</h3>
				<p class="text-luxury-600 leading-relaxed">
					Ensuring every aspect of your journey is meticulously planned and executed to perfection.
				</p>
			</div>

			<!-- Client Service -->
			<div class="card p-8 text-center">
				<div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
					</svg>
				</div>
				<h3 class="text-xl font-serif font-semibold mb-4 text-luxury-900">Unparalleled Service</h3>
				<p class="text-luxury-600 leading-relaxed">
					Providing exceptional customer service that goes beyond expectations to create lasting relationships.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Company Information Section -->
<section class="section-padding bg-white">
	<div class="container-custom">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-serif font-bold mb-6 text-luxury-900">
				Company Information
			</h2>
			<p class="text-xl text-luxury-600 max-w-3xl mx-auto">
				Established and licensed travel service provider committed to excellence.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<!-- Company Details -->
			<div class="space-y-6">
				<div class="bg-luxury-50 rounded-xl p-6">
					<h3 class="text-xl font-serif font-semibold mb-4 text-luxury-900">Company Details</h3>
					<div class="space-y-3 text-luxury-700">
						<div class="flex items-start space-x-3">
							<div class="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
							<div>
								<span class="font-medium">Chinese Name:</span> {$t.about.companyName}
							</div>
						</div>
						<div class="flex items-start space-x-3">
							<div class="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
							<div>
								<span class="font-medium">English Name:</span> {$t.hero.title}
							</div>
						</div>
						<div class="flex items-start space-x-3">
							<div class="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
							<div>
								<span class="font-medium">Business License:</span> {$t.about.license}
							</div>
						</div>
						<div class="flex items-start space-x-3">
							<div class="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
							<div>
								<span class="font-medium">Representative:</span> {$t.about.representative}
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Address -->
			<div>
				<div class="bg-gradient-to-br from-primary-500 to-gold-600 rounded-xl p-8 text-white h-full">
					<h3 class="text-2xl font-serif font-semibold mb-6">Office Address</h3>
					<div class="space-y-4">
						<div class="flex items-start space-x-3">
							<svg class="w-6 h-6 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
							</svg>
							<p class="text-lg leading-relaxed">{$t.about.address}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Statistics Section -->
<section class="section-padding luxury-gradient">
	<div class="container-custom">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-serif font-bold mb-6 text-luxury-900">
				Why Choose {$t.hero.title}?
			</h2>
			<p class="text-xl text-luxury-600 max-w-3xl mx-auto">
				Experience the difference that comes with choosing a dedicated luxury travel partner.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div class="text-center">
				<div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
					<span class="text-3xl font-bold text-white">15+</span>
				</div>
				<h3 class="text-xl font-serif font-semibold mb-3 text-luxury-900">Years Experience</h3>
				<p class="text-luxury-600">Decades of expertise in luxury travel planning and execution.</p>
			</div>

			<div class="text-center">
				<div class="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
					<span class="text-3xl font-bold text-white">1000+</span>
				</div>
				<h3 class="text-xl font-serif font-semibold mb-3 text-luxury-900">Happy Clients</h3>
				<p class="text-luxury-600">Satisfied customers who trust us with their luxury travel needs.</p>
			</div>

			<div class="text-center">
				<div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
					<span class="text-3xl font-bold text-white">50+</span>
				</div>
				<h3 class="text-xl font-serif font-semibold mb-3 text-luxury-900">Countries</h3>
				<p class="text-luxury-600">Global network covering destinations worldwide.</p>
			</div>

			<div class="text-center">
				<div class="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
					<span class="text-3xl font-bold text-white">24/7</span>
				</div>
				<h3 class="text-xl font-serif font-semibold mb-3 text-luxury-900">Support</h3>
				<p class="text-luxury-600">Round-the-clock assistance for all your travel needs.</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section-padding bg-luxury-900 text-white">
	<div class="container-custom text-center">
		<h2 class="text-4xl md:text-5xl font-serif font-bold mb-6">
			Ready to Start Your Journey?
		</h2>
		<p class="text-xl text-luxury-300 mb-8 max-w-3xl mx-auto">
			Let us help you create the perfect luxury travel experience tailored to your preferences and desires.
		</p>
		<button
			on:click={handleContactUs}
			class="btn-luxury"
			aria-label="Contact us to start planning"
		>
			{$t.nav.contact}
		</button>
	</div>
</section> 