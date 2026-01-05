import React from 'react'
import './style.css';
function InfiniteScrollAnimation({ translate = {}, items = [] }) {
    return (
        <div className='tag-list'>
            <div className='inner'>
                {
                    [...items, ...items].map((text, index) => {
                        return <div key={index} className='tag'> <span className='text-warning'>#</span> {translate(text)} </div>
                    })
                }
            </div>
            <div className='fade'></div>
        </div>
    )
}

export default InfiniteScrollAnimation;