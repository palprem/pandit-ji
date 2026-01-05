"use client";

import React from 'react'
import '@/style/card.css';

function CardWithVideo({ videoId = '' }) {
    return (


        <div className='video-container img-fluid'>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading='lazy'
            />
            
        </div>

    )
}

export default CardWithVideo