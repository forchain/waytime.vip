<script lang="ts">
	import { t } from '$lib/i18n';
	import { goto } from '$app/navigation';

	// Handle contact button click
	const handleContactUs = () => {
		goto('/contact');
	};
</script>

<svelte:head>
	<title>{$t.services.title} - {$t.hero.title}</title>
	<meta name="description" content="{$t.services.subtitle}" />
</svelte:head>

<!-- Hero Section -->
<section class="relative pt-32 pb-16 luxury-gradient">
	<div class="container-custom text-center">
		<h1 class="text-5xl md:text-6xl font-serif font-bold mb-6">
			{$t.services.title}
		</h1>
		<p class="text-xl md:text-2xl text-luxury-600 max-w-4xl mx-auto leading-relaxed">
			{$t.services.subtitle}
		</p>
	</div>
</section>

<!-- Services Detail Section -->
<section class="section-padding bg-white">
	<div class="container-custom">
		<div class="space-y-24">
			<!-- Custom Tours -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div class="order-2 lg:order-1">
					<div class="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white mb-8">
						<svg class="w-16 h-16 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"></path>
						</svg>
						<h2 class="text-3xl font-serif font-bold mb-4">{$t.services.customTours.title}</h2>
						<p class="text-lg leading-relaxed">{$t.services.customTours.description}</p>
					</div>
					<div class="space-y-4">
						<div class="flex items-start space-x-4">
							<div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<div class="w-2 h-2 bg-primary-600 rounded-full"></div>
							</div>
							<div>
								<h3 class="font-semibold text-luxury-900 mb-2">{$t.services.customTours.details.personalizedItineraries}</h3>
								<p class="text-luxury-600">{$t.services.customTours.details.personalizedItinerariesDesc}</p>
							</div>
						</div>
						<div class="flex items-start space-x-4">
							<div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<div class="w-2 h-2 bg-primary-600 rounded-full"></div>
							</div>
							<div>
								<h3 class="font-semibold text-luxury-900 mb-2">{$t.services.customTours.details.culturalImmersion}</h3>
								<p class="text-luxury-600">{$t.services.customTours.details.culturalImmersionDesc}</p>
							</div>
						</div>
						<div class="flex items-start space-x-4">
							<div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<div class="w-2 h-2 bg-primary-600 rounded-full"></div>
							</div>
							<div>
								<h3 class="font-semibold text-luxury-900 mb-2">{$t.services.customTours.details.exclusiveActivities}</h3>
								<p class="text-luxury-600">{$t.services.customTours.details.exclusiveActivitiesDesc}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="order-1 lg:order-2">
					<div class="bg-gradient-to-br from-luxury-50 to-primary-50 rounded-2xl p-8 h-96 flex items-center justify-center">
						<div class="text-center">
							<div class="text-6xl mb-4">🗺️</div>
							<p class="text-luxury-600 font-medium">{$t.services.customTours.card}</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Luxury Hotels -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div>
					<div class="bg-gradient-to-br from-luxury-50 to-primary-50 rounded-2xl p-8 h-96 flex items-center justify-center">
						<div class="text-center">
							<div class="text-6xl mb-4">🏨</div>
							<p class="text-luxury-600 font-medium">{$t.services.luxuryHotels.card}</p>
						</div>
					</div>
				</div>
				<div>
					<div class="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-8 text-white mb-8">
						<svg class="w-16 h-16 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
						</svg>
						<h2 class="text-3xl font-serif font-bold mb-4">{$t.services.luxuryHotels.title}</h2>
						<p class="text-lg leading-relaxed">{$t.services.luxuryHotels.description}</p>
					</div>
					<div class="space-y-4">
						<div class="flex items-start space-x-4">
							<div class="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<div class="w-2 h-2 bg-gold-600 rounded-full"></div>
							</div>
							<div>
								<h3 class="font-semibold text-luxury-900 mb-2">{$t.services.luxuryHotels.details.premiumProperties}</h3>
								<p class="text-luxury-600">{$t.services.luxuryHotels.details.premiumPropertiesDesc}</p>
							</div>
						</div>
						<div class="flex items-start space-x-4">
							<div class="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<div class="w-2 h-2 bg-gold-600 rounded-full"></div>
							</div>
							<div>
								<h3 class="font-semibold text-luxury-900 mb-2">{$t.services.luxuryHotels.details.exclusiveBenefits}</h3>
								<p class="text-luxury-600">{$t.services.luxuryHotels.details.exclusiveBenefitsDesc}</p>
							</div>
						</div>
						<div class="flex items-start space-x-4">
							<div class="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<div class="w-2 h-2 bg-gold-600 rounded-full"></div>
							</div>
							<div>
								<h3 class="font-semibold text-luxury-900 mb-2">{$t.services.luxuryHotels.details.seamlessBooking}</h3>
								<p class="text-luxury-600">{$t.services.luxuryHotels.details.seamlessBookingDesc}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Premium Flights -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div class="order-2 lg:order-1">
					<div class="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white mb-8">
						<svg class="w-16 h-16 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
						</svg>
						<h2 class="text-3xl font-serif font-bold mb-4">{$t.services.premiumFlights.title}</h2>
						<p class="text-lg leading-relaxed">{$t.services.premiumFlights.description}</p>
					</div>
					<div class="space-y-4">
						<div class="flex items-start space-x-4">
							<div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<div class="w-2 h-2 bg-primary-600 rounded-full"></div>
							</div>
							<div>
								<h3 class="font-semibold text-luxury-900 mb-2">{$t.services.premiumFlights.details.businessFirstClass}</h3>
								<p class="text-luxury-600">{$t.services.premiumFlights.details.businessFirstClassDesc}</p>
							</div>
						</div>
						<div class="flex items-start space-x-4">
							<div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<div class="w-2 h-2 bg-primary-600 rounded-full"></div>
							</div>
							<div>
								<h3 class="font-semibold text-luxury-900 mb-2">{$t.services.premiumFlights.details.personalizedService}</h3>
								<p class="text-luxury-600">{$t.services.premiumFlights.details.personalizedServiceDesc}</p>
							</div>
						</div>
						<div class="flex items-start space-x-4">
							<div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<div class="w-2 h-2 bg-primary-600 rounded-full"></div>
							</div>
							<div>
								<h3 class="font-semibold text-luxury-900 mb-2">{$t.services.premiumFlights.details.priorityHandling}</h3>
								<p class="text-luxury-600">{$t.services.premiumFlights.details.priorityHandlingDesc}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="order-1 lg:order-2">
					<div class="bg-gradient-to-br from-luxury-50 to-primary-50 rounded-2xl p-8 h-96 flex items-center justify-center">
						<div class="text-center">
							<div class="text-6xl mb-4">✈️</div>
							<p class="text-luxury-600 font-medium">{$t.services.premiumFlights.card}</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Private Jets -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div>
					<div class="bg-gradient-to-br from-luxury-50 to-primary-50 rounded-2xl p-8 h-96 flex items-center justify-center">
						<div class="text-center">
							<div class="text-6xl mb-4">🛩️</div>
							<p class="text-luxury-600 font-medium">{$t.services.privateJets.card}</p>
						</div>
					</div>
				</div>
				<div>
					<div class="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-8 text-white mb-8">
						<svg class="w-16 h-16 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
						</svg>
						<h2 class="text-3xl font-serif font-bold mb-4">{$t.services.privateJets.title}</h2>
						<p class="text-lg leading-relaxed">{$t.services.privateJets.description}</p>
					</div>
					<div class="space-y-4">
						<div class="flex items-start space-x-4">
							<div class="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<div class="w-2 h-2 bg-gold-600 rounded-full"></div>
							</div>
							<div>
								<h3 class="font-semibold text-luxury-900 mb-2">{$t.services.privateJets.details.privateAviation}</h3>
								<p class="text-luxury-600">{$t.services.privateJets.details.privateAviationDesc}</p>
							</div>
						</div>
						<div class="flex items-start space-x-4">
							<div class="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<div class="w-2 h-2 bg-gold-600 rounded-full"></div>
							</div>
							<div>
								<h3 class="font-semibold text-luxury-900 mb-2">{$t.services.privateJets.details.bespokeJourneys}</h3>
								<p class="text-luxury-600">{$t.services.privateJets.details.bespokeJourneysDesc}</p>
							</div>
						</div>
						<div class="flex items-start space-x-4">
							<div class="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<div class="w-2 h-2 bg-gold-600 rounded-full"></div>
							</div>
							<div>
								<h3 class="font-semibold text-luxury-900 mb-2">{$t.services.privateJets.details.vipSupport}</h3>
								<p class="text-luxury-600">{$t.services.privateJets.details.vipSupportDesc}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section-padding bg-luxury-900 text-white">
	<div class="container-custom text-center">
		<h2 class="text-4xl md:text-5xl font-serif font-bold mb-6">
			Ready to Experience Luxury Travel?
		</h2>
		<p class="text-xl text-luxury-300 mb-8 max-w-3xl mx-auto">
			Contact us today to start planning your next extraordinary journey with personalized service and attention to every detail.
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

 