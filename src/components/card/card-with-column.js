import React from 'react'
import '../../style/card.css';
import Title from '../typography/title';
import StringTitle from '../typography/strongTitle';
import MutedText from '../typography/mutedText';

function CardWithColumn({ style, children, items = [], trans = '' }) {
    return (
        <>
            <div className="col-md-6 col-12">

                {
                    items.map((item, index) => {
                        return <div className='my-3' key={index}>
                            <h5 className="card-title">{trans(item.title)}</h5>
                            <MutedText className=' my-2 mb-4' >{trans(item.subTitle)}</MutedText>
                        </div>
                    })
                }
            </div>

            <div className="col-md-6 col-12 text-center ">
                {children}
            </div>
        </>
    )
}
export default CardWithColumn