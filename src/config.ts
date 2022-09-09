export const SITE = {
	title: '五合クラウド',
	description: 'Your website description.',
	defaultLanguage: 'js_JP',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	Japanese:'jp'
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'heartcomputer',
	appId: 'Z3Q2CDT05U',
	apiKey: '28058607ce75e6e736406909ece29239',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en:{},
	jp: {
		'メニュー': [
			{ text: 'はじめに', link: 'jp/1.top' },
			{ text: '製品サポート', link: 'jp/2.製品サポート' },
			{ text: '業務情報', link: 'jp/3.業務情報' },
			{ text: '用語の定義', link: 'jp/4.用語の定義' },
			{ text: 'APIs', link: 'jp/5.APIs' },
			{ text: 'FAQ', link: 'jp/99.FAQ' },
		],
		'その他': [{ text: 'コミュニティ', link: 'jp/101.コミュニティ' }],
	},
};
