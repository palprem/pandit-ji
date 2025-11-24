import React from "react";
import "../style/loader.css";

const Loader = ({ loading }) => {
    return (
        <div className={`loader-overlay ${loading ? "active" : ""}`}>
            <div className="om-icon">ॐ</div>
        </div>
    );
};

export default Loader;
