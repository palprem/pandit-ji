import React from 'react'
import TitleWrapper from './titleWrapper';

export function Title({ children = '', className = '' }) {
    return <TitleWrapper>
        <h2 className={"it-section-title-3 h2 fw-bold  " + className} style={{ paddingBottom: '30px' }}>{children}</h2>
    </TitleWrapper>
}

export function H3Title({ children = '', className = '' }) {
    return <TitleWrapper>
        <h2 className={"it-section-title-3 h4 fw-bold  " + className} style={{ paddingBottom: '30px' }}>{children}</h2>
    </TitleWrapper>
}

export function SubTitle({ children = '', className = '' }) {
    return <TitleWrapper>
        <h5 className={"it-section-title-3 fw-bold  " + className} >{children}</h5>
    </TitleWrapper>
}
export function SmallTitle({ children = '', className = '' }) {
    return <TitleWrapper>
        <span className={"it-section-title-3 card-title " + className} style={{ paddingBottom: '30px', lineHeight:"32px" }}>{children}</span>
    </TitleWrapper>
}