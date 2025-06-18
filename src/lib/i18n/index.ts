import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

export type Language = 'zh' | 'en';

// Language detection logic
const getInitialLanguage = (): Language => {
	if (browser) {
		const userLang = navigator.language.toLowerCase();
		const isChinese = userLang.startsWith('zh') || userLang.includes('cn');
		return isChinese ? 'zh' : 'en';
	}
	return 'en';
};

// Language store
export const currentLanguage = writable<Language>(getInitialLanguage());

// Language change function
export const changeLanguage = (lang: Language) => {
	currentLanguage.set(lang);
	if (browser) {
		document.documentElement.lang = lang;
	}
};

// Translation data
const translations = {
	zh: {
		nav: {
			home: '首页',
			services: '服务',
			about: '关于我们',
			contact: '联系我们'
		},
		hero: {
			title: '途视光',
			subtitle: '重新定义奢华旅行',
			description: '作为领先的旅游服务提供商，我们致力于策划特别旅游体验，以满足有眼光客户的独特偏好。',
			cta: '探索我们的服务'
		},
		services: {
			title: '我们的服务',
			subtitle: '为您提供全方位的奢华旅行体验',
			customTours: {
				title: '私人定制旅行',
				description: '定制个性化的行程，将文化沉浸、风景探索与专属活动相结合，确保每次旅行都能反映客户的个人风格和兴趣。'
			},
			luxuryHotels: {
				title: '高端酒店预订',
				description: '确保在全球各地的豪华度假村和五星级酒店住宿，提供高级设施、独家优惠和无缝预订体验。'
			},
			premiumFlights: {
				title: '商务舱和头等舱预订',
				description: '提供专业服务，预订优质航空座位，确保商务或休闲旅行的舒适、便利和个性化机上体验。'
			},
			privateJets: {
				title: '私人飞机包机',
				description: '提供灵活和保密的私人飞机包机服务，满足客户寻求效率、隐私和定制旅行解决方案的需求。'
			}
		},
		about: {
			title: '关于途视光',
			description: '我们专注于专业精神、细节关注和无与伦比的客户服务，努力通过让每一次旅行都成为难忘的冒险来重新定义奢华旅行。',
			companyName: '广州途视光票务服务有限公司',
			address: '广州市天河区新塘街道3号6栋A275单元402室',
			license: '营业执照号：S0612022018311G(1-1)',
			representative: '法人：张雪'
		},
		contact: {
			title: '联系我们',
			phone: '电话',
			email: '邮箱',
			address: '地址',
			website: '网站',
			representative: '法人代表',
			representativePhone: '法人手机号'
		},
		footer: {
			copyright: '© 2024 广州途视光票务服务有限公司. 保留所有权利。',
			privacy: '隐私政策',
			terms: '服务条款'
		}
	},
	en: {
		nav: {
			home: 'Home',
			services: 'Services',
			about: 'About',
			contact: 'Contact'
		},
		hero: {
			title: 'Waytime',
			subtitle: 'Redefining Luxury Travel',
			description: 'As a leading travel service provider, we are committed to crafting exceptional travel experiences that cater to the unique preferences of discerning clients.',
			cta: 'Explore Our Services'
		},
		services: {
			title: 'Our Services',
			subtitle: 'Comprehensive luxury travel experiences tailored for you',
			customTours: {
				title: 'Private Custom Tours',
				description: 'Tailored personalized itineraries that combine cultural immersion, scenic exploration, and exclusive activities, ensuring every journey reflects the client\'s personal style and interests.'
			},
			luxuryHotels: {
				title: 'Luxury Hotel Bookings',
				description: 'Secure accommodations at luxury resorts and five-star hotels worldwide, offering premium facilities, exclusive benefits, and seamless booking experiences.'
			},
			premiumFlights: {
				title: 'Business & First Class Bookings',
				description: 'Professional service for booking premium airline seats, ensuring comfort, convenience, and personalized in-flight experiences for business or leisure travel.'
			},
			privateJets: {
				title: 'Private Jet Charters',
				description: 'Flexible and confidential private jet charter services, meeting clients\' needs for efficiency, privacy, and customized travel solutions for both short and long-haul journeys.'
			}
		},
		about: {
			title: 'About Waytime',
			description: 'We focus on professionalism, attention to detail, and unparalleled customer service, striving to redefine luxury travel by making every journey an unforgettable adventure.',
			companyName: 'Guangzhou Tushiguang Tickets Co., Ltd',
			address: 'Room 402, Unit A275, Building 6, No. 3 Xintang Street, Tianhe District, Guangzhou City',
			license: 'Trading License No: S0612022018311G(1-1)',
			representative: 'Company Representative: Zhang Xue'
		},
		contact: {
			title: 'Contact Us',
			phone: 'Phone',
			email: 'Email',
			address: 'Address',
			website: 'Website',
			representative: 'Representative',
			representativePhone: 'Representative Phone'
		},
		footer: {
			copyright: '© 2024 Guangzhou Tushiguang Tickets Co., Ltd. All rights reserved.',
			privacy: 'Privacy Policy',
			terms: 'Terms of Service'
		}
	}
};

// Derived store for current translations
export const t = derived(currentLanguage, ($currentLanguage) => {
	return translations[$currentLanguage];
});

// Language switcher component helper
export const languages: Array<{ code: Language; name: string; flag: string }> = [
	{ code: 'en', name: 'English', flag: '🇺🇸' },
	{ code: 'zh', name: '中文', flag: '🇨🇳' }
]; 