import React from 'react'


const titulo = {
    color: 'white',
}
const Perfiles = ({nombre,trabajo,habilidades,imgURL,estilos}) => {
  return (
    <div>
      <div className='container-sm my-5' style={estilos}>
        <div className='row'>
            <div className ="col-3">
                <div className="d-flex justify-content-end">
                    <img src={imgURL} alt="Foto1" className="img-fluid"/>
                </div>
                
            </div>
            <div className ="col-9">
                <h1 style={titulo} class="fw-bold">{nombre}</h1>
                <h3>{trabajo}</h3>
                <p>{habilidades}</p>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Perfiles
