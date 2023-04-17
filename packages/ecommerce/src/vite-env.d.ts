/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BACKEND_ITEMS_API_URL: string;
    readonly VITE_BACKEND_HISTORY_API_URL: string;
    readonly VITE_ID: object;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}