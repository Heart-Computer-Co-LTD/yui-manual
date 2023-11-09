declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	export const image: () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodString;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	const entryMap: {
		"blog": {
"2023-05-24-輸出の流れ（直接輸出）.mdx": {
  id: "2023-05-24-輸出の流れ（直接輸出）.mdx",
  slug: "2023-05-24-輸出の流れ直接輸出",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2023-05-26-輸出の流れ（間接輸出）.mdx": {
  id: "2023-05-26-輸出の流れ（間接輸出）.mdx",
  slug: "2023-05-26-輸出の流れ間接輸出",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2023-11-08-02-ExcelとWebAPIの連携によるデータ活用.mdx": {
  id: "2023-11-08-02-ExcelとWebAPIの連携によるデータ活用.mdx",
  slug: "2023-11-08-02-excelとwebapiの連携によるデータ活用",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2023-11-08-GoogleSheetsとWebAPIの連携によるデータ活用.mdx": {
  id: "2023-11-08-GoogleSheetsとWebAPIの連携によるデータ活用.mdx",
  slug: "2023-11-08-googlesheetsとwebapiの連携によるデータ活用",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2023-11-09-02-ライセンスについて.mdx": {
  id: "2023-11-09-02-ライセンスについて.mdx",
  slug: "2023-11-09-02-ライセンスについて",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2023-11-09-五合クラウドの概要と機能構成図.mdx": {
  id: "2023-11-09-五合クラウドの概要と機能構成図.mdx",
  slug: "2023-11-09-五合クラウドの概要と機能構成図",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
},
"doc": {
"page-0.md": {
  id: "page-0.md",
  slug: "page-0",
  body: string,
  collection: "doc",
  data: InferEntrySchema<"doc">
} & { render(): Render[".md"] },
"page-0030.md": {
  id: "page-0030.md",
  slug: "page-0030",
  body: string,
  collection: "doc",
  data: InferEntrySchema<"doc">
} & { render(): Render[".md"] },
"page-1.md": {
  id: "page-1.md",
  slug: "page-1",
  body: string,
  collection: "doc",
  data: InferEntrySchema<"doc">
} & { render(): Render[".md"] },
"page-1060.md": {
  id: "page-1060.md",
  slug: "page-1060",
  body: string,
  collection: "doc",
  data: InferEntrySchema<"doc">
} & { render(): Render[".md"] },
"page-2.md": {
  id: "page-2.md",
  slug: "page-2",
  body: string,
  collection: "doc",
  data: InferEntrySchema<"doc">
} & { render(): Render[".md"] },
"page-3.md": {
  id: "page-3.md",
  slug: "page-3",
  body: string,
  collection: "doc",
  data: InferEntrySchema<"doc">
} & { render(): Render[".md"] },
"page-4-master.mdx": {
  id: "page-4-master.mdx",
  slug: "page-4-master",
  body: string,
  collection: "doc",
  data: InferEntrySchema<"doc">
} & { render(): Render[".mdx"] },
"page-5-input.mdx": {
  id: "page-5-input.mdx",
  slug: "page-5-input",
  body: string,
  collection: "doc",
  data: InferEntrySchema<"doc">
} & { render(): Render[".mdx"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
