import React from 'react'
// import { Spinner } from 'react-bootstrap'
import { ClockLoader } from 'react-spinners'

const LoaderComponent = () => {
  return (
    <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <ClockLoader color='violet' size={70}/>
        {/* <Spinner animation="grow" variant="success" /> */}
        {/* <p>Cargando...</p> */}
    </div>
  )
}

export default LoaderComponent