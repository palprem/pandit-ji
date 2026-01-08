// import axios from "axios";
// import 'dotenv/config'

// // console.log('process.env.PUBLIC_API_URL', process.env.PUBLIC_API_URL)
// const api = axios.create({
//     baseURL: process.env.PUBLIC_API_URL || "http://localhost:3000",
//     headers: {
//         "Content-Type": "application/json",
//     }
// })

// // Add token automatically
// api.interceptors.request.use(
//     (config) => {
//         const tt = localStorage.getItem('persist:root')
//         const json = JSON.parse(tt)

//         const filnalToken = JSON.parse(json.auth)?.user?.token

//         const token = typeof window !== 'undefined' ? filnalToken : null;
        
//         const pathname = window.location.pathname;
//         const match = pathname.match(/^\/(en|hi)/);
//         const locale = match ? match[1] : "en";

//         config.url = `/${locale}/api/${config.url.startsWith("/") ? config.url : "" + config.url}`;
//         if (token) config.headers.Authorization = `Bearer ${token}`;
//         return config;
//     },
//     (error) => Promise.reject(error)
// )

// //Global error handler
// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if ((error.response?.status == 400) || (error.response?.status == 401)) {
//             console.warn("Unauthorized - redirect to login");
//             // Optionally logout or redirect here
//         }
//         return Promise.reject(error);
//     }

// )

// export default api



import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    // Browser-only safety
    if (typeof window === "undefined") return config;

    // Safe localStorage access
    let token = null;
    try {
      const persisted = localStorage.getItem("persist:root");
      if (persisted) {
        const parsed = JSON.parse(persisted);
        token = JSON.parse(parsed.auth || "{}")?.user?.token;
      }
    } catch (err) {
      console.warn("Token parse failed", err);
    }

    // Locale detection
    const match = window.location.pathname.match(/^\/(en|hi)/);
    const locale = match ? match[1] : "en";

    // Normalize URL
    const cleanUrl = config.url?.startsWith("/")
      ? config.url.slice(1)
      : config.url;

    config.url = `/${locale}/api/${cleanUrl}`;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if ([400, 401].includes(error.response?.status)) {
      console.warn("Unauthorized");
    }
    return Promise.reject(error);
  }
);

export default api;
