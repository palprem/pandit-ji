import axios from "axios";
import 'dotenv/config'

// console.log('process.env.PUBLIC_API_URL', process.env.PUBLIC_API_URL)
const api = axios.create({
    baseURL: process.env.PUBLIC_API_URL || "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    }
})

// Add token automatically
api.interceptors.request.use(
    (config) => {
        const tt = localStorage.getItem('persist:root')
        const json = JSON.parse(tt)

        const filnalToken = JSON.parse(json.auth)?.user?.token

        const token = typeof window !== 'undefined' ? filnalToken : null;
        
        const pathname = window.location.pathname;
        const match = pathname.match(/^\/(en|hi)/);
        const locale = match ? match[1] : "en";

        config.url = `/${locale}/api/${config.url.startsWith("/") ? config.url : "" + config.url}`;
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
)

//Global error handler
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if ((error.response?.status == 400) || (error.response?.status == 401)) {
            console.warn("Unauthorized - redirect to login");
            // Optionally logout or redirect here
        }
        return Promise.reject(error);
    }

)

export default api