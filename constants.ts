const CONSTANTS = (globalThis as any).Constants;

export const { IMAGES, APP_DIR, APP_NAME, APP_VERSION, PLACEHOLDER_ICON, TOTAL_SYSTEM_MEMORY } = CONSTANTS as {
	IMAGES: Record<string, string>
	APP_DIR: string
	APP_NAME: string
	APP_VERSION: string
	PLACEHOLDER_ICON: string
	TOTAL_SYSTEM_MEMORY: number
};