"use client"
import React, { useEffect } from 'react'
import { Carousel } from "bootstrap";

function Carousels({ children, images = [] }) {
    useEffect(() => {
        const element = document.querySelector("#carouselHomeCaptions");
        if (element) {
            new Carousel(element, {
                interval: 3000,
                ride: "carousel",
                pause: false,
            });
        }
    }, []);
    return (
        <div id="carouselHomeCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false">
            <div className="carousel-indicators">
                {images.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        data-bs-target="#carouselHomeCaptions"
                        data-bs-slide-to={i}
                        className={i === 0 ? "active" : ""}
                        aria-current={i === 0 ? "true" : "false"}
                        aria-label={`Slide ${i + 1}`}
                    ></button>
                ))}

            </div>

            <div className="carousel-inner">{children}</div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselHomeCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-shown">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselHomeCaptions" data-bs-slide="next">
                <span className="visually-shown">Next</span>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    )
}

export default Carousels;