export const config = {
  isDevelopment: import.meta.env.MODE === "development",
  isProduction: import.meta.env.MODE === "production",
  get baseUrl() {
    // this is just to show that we can conditionally serve different URLs based on env setup
    // (for demo purposes)
    if (this.isProduction) {
      return "http://localhost:1337/"; // here we will have our production url
    }

    if (this.isDevelopment) {
      return "http://localhost:1337/"; // this is our dev env url
    }

    return "http://localhost:1337/"; // default url
  },
} as const;
