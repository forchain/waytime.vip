<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { currentLanguage, changeLanguage, t, languages } from '$lib/i18n';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	// Mobile menu state
	let mobileMenuOpen = false;

	// Handle mobile menu toggle
	const handleMobileMenuToggle = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};

	// Handle language change
	const handleLanguageChange = (lang: 'zh' | 'en') => {
		changeLanguage(lang);
		mobileMenuOpen = false;
	};

	// Handle navigation
	const handleNavigation = (path: string) => {
		goto(path);
		mobileMenuOpen = false;
	};

	// Set initial language on mount
	onMount(() => {
		document.documentElement.lang = $currentLanguage;
	});
</script>

<svelte:head>
	<title>{$t.hero.title} - {$t.hero.subtitle}</title>
	<meta name="description" content="{$t.hero.description}" />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<!-- Header -->
	<header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-custom border-b border-luxury-100">
		<div class="container-custom">
			<div class="flex items-center justify-between h-16 md:h-20">
				<!-- Logo -->
				<div class="flex items-center space-x-2">
					<div class="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary-600 to-gold-600 rounded-lg flex items-center justify-center">
						<span class="text-white font-bold text-sm md:text-base">W</span>
					</div>
					<span class="text-xl md:text-2xl font-serif font-semibold gradient-text">
						{$t.hero.title}
					</span>
				</div>

				<!-- Desktop Navigation -->
				<nav class="hidden md:flex items-center space-x-8">
					<a
						href="/"
						class="text-luxury-700 hover:text-primary-600 font-medium transition-colors duration-200"
						class:active={$page.url.pathname === '/'}
					>
						{$t.nav.home}
					</a>
					<a
						href="/services"
						class="text-luxury-700 hover:text-primary-600 font-medium transition-colors duration-200"
						class:active={$page.url.pathname === '/services'}
					>
						{$t.nav.services}
					</a>
					<a
						href="/about"
						class="text-luxury-700 hover:text-primary-600 font-medium transition-colors duration-200"
						class:active={$page.url.pathname === '/about'}
					>
						{$t.nav.about}
					</a>
					<a
						href="/contact"
						class="text-luxury-700 hover:text-primary-600 font-medium transition-colors duration-200"
						class:active={$page.url.pathname === '/contact'}
					>
						{$t.nav.contact}
					</a>
				</nav>

				<!-- Language Switcher & Mobile Menu Button -->
				<div class="flex items-center space-x-4">
					<!-- Language Switcher -->
					<div class="hidden md:flex items-center space-x-2">
						{#each languages as language}
							<button
								on:click={() => handleLanguageChange(language.code)}
								class="flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-luxury-100"
								class:bg-primary-50={$currentLanguage === language.code}
								class:text-primary-600={$currentLanguage === language.code}
								aria-label="Switch to {language.name}"
							>
								<span class="text-lg">{language.flag}</span>
								<span class="text-sm font-medium">{language.name}</span>
							</button>
						{/each}
					</div>

					<!-- Mobile Menu Button -->
					<button
						on:click={handleMobileMenuToggle}
						class="md:hidden p-2 rounded-lg hover:bg-luxury-100 transition-colors duration-200"
						aria-label="Toggle mobile menu"
						aria-expanded={mobileMenuOpen}
					>
						<div class="w-6 h-6 flex flex-col justify-center items-center">
							<span
								class="block w-5 h-0.5 bg-luxury-700 transition-all duration-300"
								class:rotate-45={mobileMenuOpen}
								class:translate-y-0.5={mobileMenuOpen}
							></span>
							<span
								class="block w-5 h-0.5 bg-luxury-700 mt-1 transition-all duration-300"
								class:opacity-0={mobileMenuOpen}
							></span>
							<span
								class="block w-5 h-0.5 bg-luxury-700 mt-1 transition-all duration-300"
								class:-rotate-45={mobileMenuOpen}
								class:-translate-y-0.5={mobileMenuOpen}
							></span>
						</div>
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<div class="md:hidden bg-white border-t border-luxury-100">
				<div class="container-custom py-4">
					<nav class="flex flex-col space-y-4">
						<a
							href="/"
							on:click={() => handleNavigation('/')}
							class="text-luxury-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
							class:active={$page.url.pathname === '/'}
						>
							{$t.nav.home}
						</a>
						<a
							href="/services"
							on:click={() => handleNavigation('/services')}
							class="text-luxury-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
							class:active={$page.url.pathname === '/services'}
						>
							{$t.nav.services}
						</a>
						<a
							href="/about"
							on:click={() => handleNavigation('/about')}
							class="text-luxury-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
							class:active={$page.url.pathname === '/about'}
						>
							{$t.nav.about}
						</a>
						<a
							href="/contact"
							on:click={() => handleNavigation('/contact')}
							class="text-luxury-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
							class:active={$page.url.pathname === '/contact'}
						>
							{$t.nav.contact}
						</a>
						
						<!-- Mobile Language Switcher -->
						<div class="pt-4 border-t border-luxury-100">
							<div class="flex items-center space-x-2">
								{#each languages as language}
									<button
										on:click={() => handleLanguageChange(language.code)}
										class="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-luxury-100"
										class:bg-primary-50={$currentLanguage === language.code}
										class:text-primary-600={$currentLanguage === language.code}
									>
										<span class="text-lg">{language.flag}</span>
										<span class="font-medium">{language.name}</span>
									</button>
								{/each}
							</div>
						</div>
					</nav>
				</div>
			</div>
		{/if}
	</header>

	<!-- Main Content -->
	<main class="flex-1 pt-16 md:pt-20 overflow-x-hidden">
		<slot />
	</main>

	<!-- Footer -->
	<footer class="bg-luxury-900 text-white">
		<div class="container-custom section-padding">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<!-- Company Info -->
				<div class="md:col-span-2">
					<div class="flex items-center space-x-2 mb-4">
						<div class="w-8 h-8 bg-gradient-to-br from-primary-600 to-gold-600 rounded-lg flex items-center justify-center">
							<span class="text-white font-bold text-sm">W</span>
						</div>
						<span class="text-xl font-serif font-semibold">{$t.hero.title}</span>
					</div>
					<p class="text-luxury-300 mb-4 max-w-md">
						{$t.about.description}
					</p>
					<div class="text-luxury-300 text-sm space-y-1">
						<p>{$t.about.companyName}</p>
						<p>{$t.about.address}</p>
						<p>{$t.about.license}</p>
					</div>
				</div>

				<!-- Quick Links -->
				<div>
					<h3 class="text-lg font-semibold mb-4">{$t.nav.services}</h3>
					<ul class="space-y-2 text-luxury-300">
						<li><a href="/services" class="hover:text-white transition-colors duration-200">{$t.services.customTours.title}</a></li>
						<li><a href="/services" class="hover:text-white transition-colors duration-200">{$t.services.luxuryHotels.title}</a></li>
						<li><a href="/services" class="hover:text-white transition-colors duration-200">{$t.services.premiumFlights.title}</a></li>
						<li><a href="/services" class="hover:text-white transition-colors duration-200">{$t.services.privateJets.title}</a></li>
					</ul>
				</div>

				<!-- Contact Info -->
				<div>
					<h3 class="text-lg font-semibold mb-4">{$t.contact.title}</h3>
					<div class="space-y-2 text-luxury-300 text-sm">
						<p><span class="font-medium">{$t.contact.phone}:</span> +86 132 8444 4493</p>
						<p><span class="font-medium">{$t.contact.email}:</span> yolo20230214@gmail.com</p>
						<p><span class="font-medium">{$t.contact.website}:</span> waytime.vip</p>
						<p><span class="font-medium">{$t.contact.representative}:</span> {$t.about.representative}</p>
					</div>
				</div>
			</div>

			<!-- Bottom Bar -->
			<div class="border-t border-luxury-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
				<p class="text-luxury-400 text-sm">{$t.footer.copyright}</p>
				<div class="flex space-x-6 mt-4 md:mt-0">
					<a href="#" class="text-luxury-400 hover:text-white text-sm transition-colors duration-200">{$t.footer.privacy}</a>
					<a href="#" class="text-luxury-400 hover:text-white text-sm transition-colors duration-200">{$t.footer.terms}</a>
				</div>
			</div>
		</div>
	</footer>
</div>

<style>
	.active {
		@apply text-primary-600 font-semibold;
	}
</style> 