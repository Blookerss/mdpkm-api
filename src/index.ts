import type { Voxura, Instance, Component } from 'voxura';
import type { ReactNode, JSXElementConstructor } from 'react';

const global = globalThis as any;
export const voxura = global.voxura as Voxura;

const { mdpkm } = global;
export default mdpkm.default as mdpkm

export const InstanceCreator: typeof AbstractInstanceCreator = mdpkm.InstanceCreator;
export const COMPONENT_EXTRAS = mdpkm.COMPONENT_EXTRAS as Record<Component["id"], ComponentExtra>;
export const INSTANCE_CREATORS = mdpkm.INSTANCE_CREATORS as AbstractInstanceCreator[];

export interface ComponentExtra {
	contentTabs?: JSXElementConstructor<{ instance: Instance }>[],
	settingsTabs?: JSXElementConstructor<{ instance: Instance }>[],
	enabledContentTabs?: ('essential' | 'modSearch' | 'modManagement')[]
}

export interface mdpkm {
	newsSources: NewsSource<unknown>[]

	getNewsSource(id: string): void
}

export interface NewsSource<T> {
    id: string
    
	getNews(): Promise<NewsItem<T>[]>
    get displayName(): string
}

export interface NewsItem<T> {
    source: NewsSource<T>

    get title(): string
    get image(): string
	get url(): string
}

abstract class AbstractInstanceCreator {
    public static id: string;

    public abstract create(data: any[]): Promise<Instance>;
    public abstract render(setData: (value: any[]) => void, setSatisfied: (value: boolean) => void): ReactNode;
}