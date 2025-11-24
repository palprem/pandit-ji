import React from 'react'
import '../../style/typography.css';

export default function MutedText({ children, className = '' }) {
    return <p className={className + 'custon-muted-text card-text '}>{children}</p>

}

