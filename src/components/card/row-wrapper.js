import React from 'react'

function RowWrapper({ children,className='' }) {
  return (
    // <div className=' container-lg container-xl container-xxl d-block d-md-flex gap-3 pb-xl-5 pb-xxl-5 pb-md-5 pt-xl-3 pt-xxl-3 pt-md-3 py-2 '>
    // <div className='row align-items-center align-items-xxl-end'>
    <div className={'row '+className}>
      {children}
      </div>
  )
}

export default RowWrapper