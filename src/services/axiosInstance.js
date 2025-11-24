import axios from "axios";

const api = axios.create({
    baseURL: process.env.PUBLIC_API_URL || "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    }
})

// Add token automatically
api.interceptors.request.use(
    (config) => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
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
        if (error.response?.status == 400) {
            console.warn("Unauthorized - redirect to login");
            // Optionally logout or redirect here
        }
        return Promise.reject(error);
    }

)

export default api