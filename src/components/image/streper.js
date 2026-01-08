import React from 'react'
import '../../style/header.css';

function Streper({ title = '' }) {
    return (
        <div className="image-aboutus-banner" style={{ marginTop: '70px', marginBottom: '70px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="lg-text text-light text-end">{title}</h1>
                        <p className="image-aboutus-para text-end">ॐ त्र्यंबकं यजामहे सुगंधिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Streper