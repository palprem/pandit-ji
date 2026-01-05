import React from 'react'

function AddressMap() {
    return (

        <div className="wpb_map_wraper" style={{ textAlign: "center" }}>

            <iframe
                loading="lazy"
                src="https://www.google.com/maps?q=Upkar%20Hospital,Brij%20Enclave,Varanasi,Uttar%20Pradesh,221005&output=embed"
                style={{ width: '100%', height: '20rem', border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}

export default AddressMap