declare global {
    interface Window {
      urlAPI: string;
      fetch: any;
    }
    namespace JSX {
      interface IntrinsicElements {
        ['nest-login']: any
        ['nest-userdatamanagement']: any
        'custom-input': any
      }
    }
  }
  
  declare global {
    namespace JSX {
      interface IntrinsicElements {
      }
    }
  }
  
  export {}