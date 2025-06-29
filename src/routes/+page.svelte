<script lang="ts">
	import { t } from '$lib/i18n';
	import { goto } from '$app/navigation';

	// Handle CTA button click
	const handleExploreServices = () => {
		goto('/services');
	};

	const handleContactUs = () => {
		goto('/contact');
	};
</script>

<svelte:head>
	<title>{$t.hero.title} - {$t.hero.subtitle}</title>
	<meta name="description" content="{$t.hero.description}" />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center luxury-gradient overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-5">
		<div class="absolute inset-0 bg-pattern"></div>
	</div>

	<div class="container-custom relative z-10 text-center">
		<div class="max-w-4xl mx-auto">
			<!-- Main Title -->
			<h1 class="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6">
				<span class="gradient-text">{$t.hero.title}</span>
			</h1>
			
			<!-- Subtitle -->
			<h2 class="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-luxury-700 mb-8">
				{$t.hero.subtitle}
			</h2>
			
			<!-- Description -->
			<p class="text-lg md:text-xl text-luxury-600 mb-12 max-w-3xl mx-auto leading-relaxed">
				{$t.hero.description}
			</p>
			
			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<button
					on:click={handleExploreServices}
					class="btn-luxury"
					aria-label="Explore our services"
				>
					{$t.hero.cta}
				</button>
				<button
					on:click={handleContactUs}
					class="btn-secondary"
					aria-label="Contact us"
				>
					{$t.nav.contact}
				</button>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
		<div class="w-6 h-10 border-2 border-luxury-400 rounded-full flex justify-center">
			<div class="w-1 h-3 bg-luxury-400 rounded-full mt-2 animate-pulse"></div>
		</div>
	</div>
</section>

<!-- Services Overview Section -->
<section class="section-padding bg-white">
	<div class="container-custom">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-serif font-bold mb-6">
				{$t.services.title}
			</h2>
			<p class="text-xl text-luxury-600 max-w-3xl mx-auto">
				{$t.services.subtitle}
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<!-- Custom Tours -->
			<div class="card p-8 text-center group">
				<div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"></path>
					</svg>
				</div>
				<h3 class="text-xl font-serif font-semibold mb-4 text-luxury-900">
					{$t.services.customTours.title}
				</h3>
				<p class="text-luxury-600 leading-relaxed">
					{$t.services.customTours.description}
				</p>
			</div>

			<!-- Luxury Hotels -->
			<div class="card p-8 text-center group">
				<div class="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
					</svg>
				</div>
				<h3 class="text-xl font-serif font-semibold mb-4 text-luxury-900">
					{$t.services.luxuryHotels.title}
				</h3>
				<p class="text-luxury-600 leading-relaxed">
					{$t.services.luxuryHotels.description}
				</p>
			</div>

			<!-- Premium Flights -->
			<div class="card p-8 text-center group">
				<div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
					</svg>
				</div>
				<h3 class="text-xl font-serif font-semibold mb-4 text-luxury-900">
					{$t.services.premiumFlights.title}
				</h3>
				<p class="text-luxury-600 leading-relaxed">
					{$t.services.premiumFlights.description}
				</p>
			</div>

			<!-- Private Jets -->
			<div class="card p-8 text-center group">
				<div class="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
					</svg>
				</div>
				<h3 class="text-xl font-serif font-semibold mb-4 text-luxury-900">
					{$t.services.privateJets.title}
				</h3>
				<p class="text-luxury-600 leading-relaxed">
					{$t.services.privateJets.description}
				</p>
			</div>
		</div>

		<!-- View All Services Button -->
		<div class="text-center mt-12">
			<button
				on:click={handleExploreServices}
				class="btn-primary"
				aria-label="View all services"
			>
				{$t.hero.cta}
			</button>
		</div>
	</div>
</section>

<!-- About Preview Section -->
<section class="section-padding luxury-gradient">
	<div class="container-custom">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-4xl md:text-5xl font-serif font-bold mb-6 text-luxury-900">
					{$t.about.title}
				</h2>
				<p class="text-xl text-luxury-600 mb-8 leading-relaxed">
					{$t.about.description}
				</p>
				<div class="grid grid-cols-2 gap-6">
					<div class="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
						<div class="text-3xl font-bold text-primary-600 mb-2">15+</div>
						<div class="text-sm text-luxury-700">Years Experience</div>
					</div>
					<div class="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
						<div class="text-3xl font-bold text-gold-600 mb-2">1000+</div>
						<div class="text-sm text-luxury-700">Happy Clients</div>
					</div>
				</div>
			</div>
			<div class="relative">
				<div class="bg-gradient-to-br from-primary-500 to-gold-600 rounded-2xl p-8 text-white text-center">
					<div class="text-6xl mb-4">🌟</div>
					<h3 class="text-2xl font-serif font-semibold mb-4">{$t.about.excellenceTitle}</h3>
					<p class="text-lg leading-relaxed">
						{$t.about.excellenceDesc}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section-padding bg-luxury-900 text-white">
	<div class="container-custom text-center">
		<h2 class="text-4xl md:text-5xl font-serif font-bold mb-6">
			{$t.hero.subtitle}
		</h2>
		<p class="text-xl text-luxury-300 mb-8 max-w-3xl mx-auto">
			{$t.hero.description}
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<button
				on:click={handleContactUs}
				class="btn-luxury"
				aria-label="Get started with luxury travel"
			>
				{$t.nav.contact}
			</button>
			<button
				on:click={handleExploreServices}
				class="btn-secondary border-white text-white hover:bg-white hover:text-luxury-900"
				aria-label="Learn more about our services"
			>
				{$t.hero.cta}
			</button>
		</div>
	</div>
</section>

<style>
	.bg-pattern {
		background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}

	:global(.card) {
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 1rem;
		transition: all 0.3s ease;
	}

	:global(.card:hover) {
		transform: translateY(-5px);
		box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
	}
</style> 