import React from 'react'
import {ClipLoader} from 'react-spinners'

const Loader = () => (<div className='loader'>
  <ClipLoader sizeUnit={'px'} size={50} color={'dodgerblue'} loading={true}/>
</div>)

export default Loader
