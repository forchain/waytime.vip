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
			title: '途拾光',
			subtitle: '重新定义奢华旅行',
			description:
				'作为领先的旅游服务提供商，我们致力于策划特别旅游体验，以满足有眼光客户的独特偏好。',
			cta: '探索我们的服务'
		},
		services: {
			title: '我们的服务',
			subtitle: '为您提供全方位的奢华旅行体验',
			customTours: {
				title: '私人定制旅行',
				description: '定制个性化的行程，将文化沉浸、风景探索与专属活动相结合，确保每次旅行都能反映客户的个人风格和兴趣。',
				details: {
					personalizedItineraries: '个性化行程',
					personalizedItinerariesDesc: '量身定制的旅行计划，反映您的兴趣、偏好和旅行风格。',
					culturalImmersion: '文化沉浸',
					culturalImmersionDesc: '真实体验，连接本地文化、传统和社区。',
					exclusiveActivities: '专属活动',
					exclusiveActivitiesDesc: '享受独特体验和常规游客无法参与的专属活动。'
				},
				card: '定制旅行体验'
			},
			luxuryHotels: {
				title: '高端酒店预订',
				description: '确保在全球各地的豪华度假村和五星级酒店住宿，提供高级设施、独家优惠和无缝预订体验。',
				details: {
					premiumProperties: '高端酒店',
					premiumPropertiesDesc: '入住全球最负盛名的酒店、度假村和精品物业。',
					exclusiveBenefits: '专属礼遇',
					exclusiveBenefitsDesc: '通过合作伙伴享受特惠价格、房型升级和VIP礼遇。',
					seamlessBooking: '无忧预订',
					seamlessBookingDesc: '个性化服务和全天候支持，预订无忧。'
				},
				card: '奢华住宿体验'
			},
			premiumFlights: {
				title: '商务舱和头等舱预订',
				description: '提供专业服务，预订优质航空座位，确保商务或休闲旅行的舒适、便利和个性化机上体验。',
				details: {
					businessFirstClass: '商务舱与头等舱',
					businessFirstClassDesc: '主流航空公司优质座位，舒适与服务兼备。',
					personalizedService: '个性化服务',
					personalizedServiceDesc: '根据您的偏好定制机上体验。',
					priorityHandling: '优先服务',
					priorityHandlingDesc: '快速安检、优先登机和专属贵宾休息室。'
				},
				card: '尊享空中之旅'
			},
			privateJets: {
				title: '私人飞机包机',
				description: '提供灵活和保密的私人飞机包机服务，满足客户寻求效率、隐私和定制旅行解决方案的需求。',
				details: {
					privateAviation: '私人航空',
					privateAviationDesc: '专属包机，灵活高效，保障隐私。',
					bespokeJourneys: '定制航线',
					bespokeJourneysDesc: '根据您的需求定制航线和服务。',
					vipSupport: 'VIP支持',
					vipSupportDesc: '全程专属服务，确保每一细节完美。'
				},
				card: '私人航空体验'
			}
		},
		about: {
			title: '关于途拾光',
			description:
				'我们专注于专业精神、细节关注和无与伦比的客户服务，努力通过让每一次旅行都成为难忘的冒险来重新定义奢华旅行。',
			companyName: '广州途拾光票务服务有限公司',
			address: '广州市天河区新塘街道3号6栋A275单元402室',
			license: '营业执照号：S0612022018311G(1-1)',
			representative: '法人：张雪',
			storyTitle: '我们的故事',
			story1: '以变革奢华旅行为愿景，途拾光已成为高端旅游服务的佼佼者，服务于追求卓越的客户。',
			story2: '我们致力于个性化服务、关注细节和客户满意度，成为全球奢华旅行者的信赖之选。',
			story3: '总部位于广州，服务全球客户，带来世界级旅行体验。',
			excellenceTitle: '每一次旅程皆卓越',
			excellenceDesc: '我们相信每一次旅程都应非凡，每一次体验都应难忘，每一个细节都应完美。',
			missionTitle: '我们的使命与价值观',
			missionDesc: '以核心价值观为指引，致力于超越期望的卓越旅行体验。',
			professionalismTitle: '专业精神',
			professionalismDesc: '在所有服务中保持最高专业标准和道德规范。',
			detailTitle: '关注细节',
			detailDesc: '确保您的每一段旅程都被精心策划和完美执行。',
			serviceTitle: '无与伦比的服务',
			serviceDesc: '提供超越期望的卓越客户服务，建立持久关系。',
			companyInfoTitle: '公司信息',
			companyInfoDesc: '持证经营，专注卓越的旅游服务商。',
			companyDetailsTitle: '公司详情',
			chineseName: '中文名',
			englishName: '英文名',
			businessLicense: '营业执照',
			representativeLabel: '法人',
			officeAddressTitle: '办公地址',
			whyChooseTitle: '为什么选择途拾光？',
			whyChooseDesc: '选择专注奢华旅行的合作伙伴，体验与众不同。',
			yearsExperience: '年行业经验',
			yearsExperienceDesc: '数十年奢华旅行策划与执行经验。',
			happyClients: '满意客户',
			happyClientsDesc: '众多客户信赖我们的奢华旅行服务。',
			countries: '服务国家',
			countriesDesc: '全球网络，覆盖世界各地目的地。',
			support: '全天候支持',
			supportDesc: '全天候为您的旅行需求提供协助。',
			ctaTitle: '准备开启您的旅程？',
			ctaDesc: '让我们为您量身定制完美的奢华旅行体验。'
		},
		contact: {
			title: '联系我们',
			phone: '电话',
			email: '邮箱',
			address: '地址',
			website: '网站',
			representative: '法人代表',
			representativePhone: '法人手机号',
			subtitle: '与我们的奢华旅行专家取得联系，开启您的专属旅程。',
			getInTouch: '联系我们',
			getInTouchDesc: '我们的奢华旅行专家团队随时为您打造难忘体验。欢迎随时咨询您的旅行梦想。',
			callNow: '立即致电',
			sendEmail: '发送邮件',
			businessHours: '营业时间',
			businessHoursMonFri: '周一至周五：9:00-18:00',
			businessHoursSat: '周六：10:00-16:00',
			sendMessage: '发送信息',
			sendMessageDesc: '告诉我们您的旅行梦想，我们将助您实现。',
			fullName: '姓名',
			fullNamePlaceholder: '请输入您的姓名',
			emailAddress: '邮箱地址',
			emailAddressPlaceholder: 'your.email@example.com',
			phoneNumber: '联系电话',
			phoneNumberPlaceholder: '请输入您的联系电话',
			serviceInterest: '服务意向',
			serviceInterestPlaceholder: '请选择服务',
			message: '留言',
			messagePlaceholder: '请描述您的旅行计划、偏好或具体需求……',
			submit: '提交',
			submitting: '提交中…',
			submitSuccess: '感谢您的留言！我们会尽快与您联系。',
			submitError: '抱歉，发送失败，请重试。',
			required: '必填',
			otherService: '其他服务',
			faqTitle: '常见问题',
			faqDesc: '查找关于我们奢华旅行服务的常见问题答案。',
			faq: [
				{
					q: '我应该提前多久预订奢华旅行？',
					a: '建议提前3-6个月预订奢华旅行体验，尤其在高峰季节。对于私人飞机包机和专属体验，建议提前6-12个月，以确保有空位。'
				},
				{
					q: '旅行期间是否提供24/7支持？',
					a: '是的，我们为所有客户提供全天候支持。专属团队24小时待命，协助解答问题、处理变更或紧急情况。'
				},
				{
					q: '可以安排网站未列出的定制体验吗？',
					a: '当然可以！我们专注于打造完全定制的体验。广泛的合作伙伴网络和行业资源可为您量身定制独特行程。'
				},
				{
					q: '支持哪些支付方式？',
					a: '我们支持银行转账、主流信用卡和安全在线支付。大额订单也可协商其他支付方式。'
				}
			]
		},
		footer: {
			copyright: '© 2024 广州途拾光票务服务有限公司. 保留所有权利。',
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
			description:
				'As a leading travel service provider, we are committed to crafting exceptional travel experiences that cater to the unique preferences of discerning clients.',
			cta: 'Explore Our Services'
		},
		services: {
			title: 'Our Services',
			subtitle: 'Comprehensive luxury travel experiences tailored for you',
			customTours: {
				title: 'Private Custom Tours',
				description: "Tailored personalized itineraries that combine cultural immersion, scenic exploration, and exclusive activities, ensuring every journey reflects the client's personal style and interests.",
				details: {
					personalizedItineraries: 'Personalized Itineraries',
					personalizedItinerariesDesc: 'Tailored travel plans that reflect your unique interests, preferences, and travel style.',
					culturalImmersion: 'Cultural Immersion',
					culturalImmersionDesc: 'Authentic experiences that connect you with local cultures, traditions, and communities.',
					exclusiveActivities: 'Exclusive Activities',
					exclusiveActivitiesDesc: 'Access to unique experiences and activities not available to regular tourists.'
				},
				card: 'Custom Travel Experiences'
			},
			luxuryHotels: {
				title: 'Luxury Hotel Bookings',
				description: 'Secure accommodations at luxury resorts and five-star hotels worldwide, offering premium facilities, exclusive benefits, and seamless booking experiences.',
				details: {
					premiumProperties: 'Premium Properties',
					premiumPropertiesDesc: "Access to the world's most prestigious hotels, resorts, and boutique properties.",
					exclusiveBenefits: 'Exclusive Benefits',
					exclusiveBenefitsDesc: 'Special rates, room upgrades, and VIP amenities through our partnerships.',
					seamlessBooking: 'Seamless Booking',
					seamlessBookingDesc: 'Hassle-free reservations with personalized service and 24/7 support.'
				},
				card: 'Luxury Accommodations'
			},
			premiumFlights: {
				title: 'Business & First Class Bookings',
				description: 'Professional service for booking premium airline seats, ensuring comfort, convenience, and personalized in-flight experiences for business or leisure travel.',
				details: {
					businessFirstClass: 'Business & First Class',
					businessFirstClassDesc: 'Premium seating on major airlines with the best comfort and service.',
					personalizedService: 'Personalized Service',
					personalizedServiceDesc: 'Customized in-flight experiences tailored to your preferences.',
					priorityHandling: 'Priority Handling',
					priorityHandlingDesc: 'Fast-track security, priority boarding, and exclusive lounge access.'
				},
				card: 'Premium Air Travel'
			},
			privateJets: {
				title: 'Private Jet Charters',
				description: "Flexible and confidential private jet charter services, meeting clients' needs for efficiency, privacy, and customized travel solutions for both short and long-haul journeys.",
				details: {
					privateAviation: 'Private Aviation',
					privateAviationDesc: 'Exclusive charters for flexibility, efficiency, and privacy.',
					bespokeJourneys: 'Bespoke Journeys',
					bespokeJourneysDesc: 'Tailored routes and services to your requirements.',
					vipSupport: 'VIP Support',
					vipSupportDesc: 'Dedicated service throughout your journey, ensuring perfection in every detail.'
				},
				card: 'Private Aviation Experience'
			}
		},
		about: {
			title: 'About Waytime',
			description:
				'We focus on professionalism, attention to detail, and unparalleled customer service, striving to redefine luxury travel by making every journey an unforgettable adventure.',
			companyName: 'Guangzhou Tushiguang Tickets Co., Ltd',
			address:
				'Room 402, Unit A275, Building 6, No. 3 Xintang Street, Tianhe District, Guangzhou City',
			license: 'Trading License No: S0612022018311G(1-1)',
			representative: 'Company Representative: Zhang Xue',
			storyTitle: 'Our Story',
			story1: 'Founded with a vision to transform luxury travel, Waytime has established itself as a premier travel service provider, catering to discerning clients who demand excellence in every aspect of their journey.',
			story2: 'Our commitment to personalized service, attention to detail, and unwavering dedication to client satisfaction has made us the trusted choice for luxury travelers worldwide.',
			story3: 'From our headquarters in Guangzhou, we serve clients globally, bringing world-class travel experiences to those who appreciate the finest things in life.',
			excellenceTitle: 'Excellence in Every Journey',
			excellenceDesc: 'We believe that every journey should be extraordinary, every experience should be memorable, and every detail should be perfect.',
			missionTitle: 'Our Mission & Values',
			missionDesc: 'Guided by our core values, we strive to deliver exceptional travel experiences that exceed expectations.',
			professionalismTitle: 'Professionalism',
			professionalismDesc: 'Maintaining the highest standards of professional service and ethical business practices in all our interactions.',
			detailTitle: 'Attention to Detail',
			detailDesc: 'Ensuring every aspect of your journey is meticulously planned and executed to perfection.',
			serviceTitle: 'Unparalleled Service',
			serviceDesc: 'Providing exceptional customer service that goes beyond expectations to create lasting relationships.',
			companyInfoTitle: 'Company Information',
			companyInfoDesc: 'Established and licensed travel service provider committed to excellence.',
			companyDetailsTitle: 'Company Details',
			chineseName: 'Chinese Name',
			englishName: 'English Name',
			businessLicense: 'Business License',
			representativeLabel: 'Representative',
			officeAddressTitle: 'Office Address',
			whyChooseTitle: 'Why Choose Waytime?',
			whyChooseDesc: 'Experience the difference that comes with choosing a dedicated luxury travel partner.',
			yearsExperience: 'Years Experience',
			yearsExperienceDesc: 'Decades of expertise in luxury travel planning and execution.',
			happyClients: 'Happy Clients',
			happyClientsDesc: 'Satisfied customers who trust us with their luxury travel needs.',
			countries: 'Countries',
			countriesDesc: 'Global network covering destinations worldwide.',
			support: 'Support',
			supportDesc: 'Round-the-clock assistance for all your travel needs.',
			ctaTitle: 'Ready to Start Your Journey?',
			ctaDesc: 'Let us help you create the perfect luxury travel experience tailored to your preferences and desires.'
		},
		contact: {
			title: 'Contact Us',
			phone: 'Phone',
			email: 'Email',
			address: 'Address',
			website: 'Website',
			representative: 'Representative',
			representativePhone: 'Representative Phone',
			subtitle: 'Get in touch with our luxury travel experts to start planning your extraordinary journey.',
			getInTouch: 'Get in Touch',
			getInTouchDesc: 'Our team of luxury travel specialists is ready to help you create unforgettable experiences. Contact us today to discuss your travel dreams.',
			callNow: 'Call Now',
			sendEmail: 'Send Email',
			businessHours: 'Business Hours',
			businessHoursMonFri: 'Monday - Friday: 9:00 AM - 6:00 PM',
			businessHoursSat: 'Saturday: 10:00 AM - 4:00 PM',
			sendMessage: 'Send us a Message',
			sendMessageDesc: 'Tell us about your travel dreams and we\'ll help make them a reality.',
			fullName: 'Full Name',
			fullNamePlaceholder: 'Your full name',
			emailAddress: 'Email Address',
			emailAddressPlaceholder: 'your.email@example.com',
			phoneNumber: 'Phone Number',
			phoneNumberPlaceholder: '+1 (555) 123-4567',
			serviceInterest: 'Service Interest',
			serviceInterestPlaceholder: 'Select a service',
			message: 'Message',
			messagePlaceholder: 'Tell us about your travel plans, preferences, and any specific requirements…',
			submit: 'Submit',
			submitting: 'Submitting…',
			submitSuccess: 'Thank you for your message! We will get back to you soon.',
			submitError: 'Sorry, there was an error sending your message. Please try again.',
			required: 'required',
			otherService: 'Other Services',
			faqTitle: 'Frequently Asked Questions',
			faqDesc: 'Find answers to common questions about our luxury travel services.',
			faq: [
				{
					q: 'How far in advance should I book my luxury travel?',
					a: 'We recommend booking at least 3-6 months in advance for luxury travel experiences, especially during peak seasons. For private jet charters and exclusive experiences, 6-12 months notice is ideal to ensure availability.'
				},
				{
					q: 'Do you offer 24/7 support during travel?',
					a: 'Yes, we provide round-the-clock support for all our clients. Our dedicated team is available 24/7 to assist with any questions, changes, or emergencies during your journey.'
				},
				{
					q: 'Can you arrange custom experiences not listed on your website?',
					a: 'Absolutely! We specialize in creating completely customized experiences. Our extensive network of partners and insider knowledge allows us to arrange unique experiences tailored to your specific interests and preferences.'
				},
				{
					q: 'What payment methods do you accept?',
					a: 'We accept various payment methods including bank transfers, major credit cards, and secure online payments. For high-value bookings, we also accommodate alternative payment arrangements.'
				}
			]
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
