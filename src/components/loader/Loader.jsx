import React from 'react'
import ReactDom from 'react-dom'

const Loader = () => {
  return ReactDom.createPortal  (
   <div className='loader__wwrapper'>
            <div className='loader__style'>
                     
            </div>
   </div>

  )
}

export const Spinner = () => {
    return (
        <div className='spinner__style'>

        </div>
    )
}

export default Loader