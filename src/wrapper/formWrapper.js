import React from 'react'
import '../style/card.css';

function FormWrapper({ children }) {
    return (
        <section className="card-body-1" >
            <div className="container-fluid h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className=" text-black border-radius-5 ">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormWrapper