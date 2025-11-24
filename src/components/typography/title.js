import React from 'react'

function Title({ children = '' }) {
    return <div className="it-blog-title-wrap" style={{ marginBottom: '10px' }}>
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="it-blog-title-box text-center">
                    <h4 className="it-section-title-3 h2 fw-bold" style={{ paddingBottom: '30px' }}>{children}</h4>
                </div>
            </div>
        </div>
    </div>

}

export default Title;