import React from 'react'

function TitleWrapper({ children = <></> }) {
    return <div className="it-blog-title-wrap" style={{ marginBottom: '10px' }}>
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="it-blog-title-box ">
                    {children}
                </div>
            </div>
        </div>
    </div>

}

export default TitleWrapper