const env = {
  development: {
    COOKIE_HOST: "",
    // GRAPHQL: 'https://beta.alike.io/graphql',
    GRAPHQL: "https://api.alike.host/graphql",
    // GRAPHQL: 'https://api.alike.io/graphql',
    // REDIRECT: 'https://beta.alike.io/checkout/cart',
    // GRAPHQL: 'https://api.alike.host/graphql',
    REDIRECT: "https://api.alike.host/checkout/cart",
    WEBSITE: "https://api.alike.host",
    APPSITE: "https://app.alike.host",
    RECAPTCHA_SITE_KEY: "6LfAK1wiAAAAAEYr08Gz9pmbekvf8LBWnotaMpB-",
    ADMIN_URL: "https://app.alike.host/#/",
    ADMIN_MOBILE_URL: "https://app.alike.host/mobile/#/",
    RAZORPAY: "rzp_live_x4wyaLkghGY9Xb",
    GOOGLE_ANALYTIC_KEY: "G-LF8DJDBETP", //'G-LF8DJDBETP', // Alike tag manage key
    ABUDHABI_GOOGLE_TAG_MANAGER_KEY: "", //'DC-8242311', // Abu dhabi tag manager Key
    SUMMER_DUBAI_GOOGLE_TAG_MANAGER_KEY: "", //'DC-5481501', // Summer in Dubai tag manager key
    // CDN_LINK: 'https://alike-asset-dev.b-cdn.net/vue-images',
    CDN_LINK:
      "https://alike-asset-uat.s3.eu-central-1.amazonaws.com/vue-images",
    GOOGLE_TAG_MANAGER_KEY: "GTM", //'GTM-KCB38M3', // Alike Script for manage for ABU dhabi events
  },
  production: {
    COOKIE_HOST: "",
    GRAPHQL: "https://api.alike.io/graphql",
    REDIRECT: "https://api.alike.io/checkout/cart",
    WEBSITE: "https://api.alike.io",
    APPSITE: "https://app.alike.io",
    RECAPTCHA_SITE_KEY: "6LfAK1wiAAAAAEYr08Gz9pmbekvf8LBWnotaMpB-",
    ADMIN_URL: "https://app.alike.io/#/",
    ADMIN_MOBILE_URL: "https://app.alike.io/mobile/#/",
    RAZORPAY: "rzp_live_x4wyaLkghGY9Xb",
    GOOGLE_ANALYTIC_KEY: "G-XQMJMD8BZX",
    ABUDHABI_GOOGLE_TAG_MANAGER_KEY: "DC-8242311",
    CDN_LINK: "https://alike-asset.b-cdn.net/vue-images",
    GOOGLE_TAG_MANAGER_KEY: "GTM-KCB38M3",
    SUMMER_DUBAI_GOOGLE_TAG_MANAGER_KEY: "DC-5481501",
  },
};

export default env[process?.env?.VERCEL_ENV || "development"];
