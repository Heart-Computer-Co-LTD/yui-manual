import type { MarkdownInstance } from 'astro'
import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: '酉-SUBARU',
  description: '酒税管理システム',
  author: {
    name: 'Chris Tham',
    twitter: '@chris1tham',
    url: 'https://christham.net',
    email: 'chris@christham.net',
    summary: 'Outrageous actualiser.',
  },
  org: {
    name: 'Hello Tham',
    twitter: '@hellothamcom',
    url: 'https://hellotham.com',
    email: 'info@hellotham.com',
    summary:
      'Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.',
  },
  location: 'Rivendell, Middle Earth',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: '',
  social: [],
  buildTime: new Date(),
}

export const Logo = '../images/svg/astro/logomark-light.png'
export const LogoImage = '../images/astro/full-logo-light.png'
export const FeaturedSVG = '../images/svg/undraw/undraw_design_inspiration.svg'
export const DefaultSVG = '../images/svg/undraw/undraw_my_feed.svg'
export const DefaultImage = '../images/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'はじめに', href: '' },
  { name: '価格', href: 'price' },
  { name: '業務情報', href: 'blog' },
  { name: '製品サポート', href: 'doc/page-0' },
  { name: 'APIs', href: 'apis' },
  { name: 'お問合わせ', href: 'contact' },
  { name: 'FAQ', href: 'faq' },]

export const CategoryDetail = [
  {
    category: 'instructions',
    coverSVG: '../images/svg/undraw/undraw_instruction_manual.svg',
    socialImage: '../images/undraw/undraw_instruction_manual.png',
    description: 'Guidelines on using this starter.'
  },
  {
    category: 'information',
    coverSVG: '../images/svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Information articles.'
  },
]

export function categoryDetail(category: string | undefined) {
  const details = CategoryDetail.filter(cat => cat.category == category)

  if (details.length == 1) {
    return details[0]
  }
  return {
    category: 'General',
    coverSVG: '../images/svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Category ' + category,
  }
}
export const AuthorDetail = [
  {
    name: 'Chris Tham',
    description: 'Hello World',
    contact: 'chris@christham.net',
    image: '../images/authors/Chris Tham.jpg'
  }
]

export const DefaultAuthor = {
  name: 'Hello Astro',
  image: '../images/authors/default.png',
  contact: 'info@hellotham.com',
  description: '著者'
}

export function authorDetail(author: string | undefined) {
  const details = AuthorDetail.filter(person => person.name == author)

  if (details.length == 1) {
    return details[0]
  }
  return DefaultAuthor
}

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/hellotham/hello-astro`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  '初期設定': [{ text: 'ブラウザ設定', link: 'doc/page-0' }],
  '製品サポート': [
    { text: '用語の定義', link: 'doc/page-1' },
    { text: '機能一覧', link: 'doc/page-2' },
    { text: '帳票サンプル', link: 'doc/page-7-reportsample' },
    { text: '基本操作（共通）', link: 'doc/page-3' },
    { text: '基本操作（マスタメンテ）', link: 'doc/page-4-master'},
    { text: '基本操作（入力画面）', link: 'doc/page-5-input' },
    { text: '受注入力', link: 'doc/page-0030' },
    { text: '商品マスタ', link: 'doc/page-1060' },
  ],

}
