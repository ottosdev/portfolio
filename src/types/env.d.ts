interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_SERVICES_ID: string
    readonly VITE_PUBLIC_ID: string
    readonly VITE_TEMPLATE_ID: string
   
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }