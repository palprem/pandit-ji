'use client';

import Header from "@/components/header/header";
import ParentFooter from "@/components/footer/parent-footer";
import FloatingContects from "@/components/floatingItem/floatingContects";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import BootstrapClient from "./BootstrapClient";
import Providers from "./providers"; // if this uses context/hooks
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import './globals.css';

export default function ProvidersWrapper({ children }) {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 100);
        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <>
            <div className={`app-container ${loading ? "fade-blur" : ""}`}>

                {loading && (
                    <Loader loading={loading} />

                )}
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>

                        <Providers>
                            <Header />
                            {children}
                            <ParentFooter />
                            <FloatingContects />
                            <BootstrapClient />
                            <ToastContainer />
                        </Providers>

                    </PersistGate>

                </Provider >

            </div>

        </>
    );
}
