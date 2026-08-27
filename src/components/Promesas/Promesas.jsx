import React from 'react'

const Promesas = () => {


    const falsasPromesas = (estado) => {
        return new Promise((resolve,reject) => {
            if(estado){
                resolve("Promesa cumplida, me llegó la play")
            }else{
                reject("promesa rechazada, me llegó carbon")
            }
        })
    }

    console.log(falsasPromesas(false))
    
    falsasPromesas(false)
    .then((respuesta)=>{
        console.log("SISI SE CUMPLIO" + respuesta)
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>console.log("Proceso terminado"))


  return (
    <div>Promesas</div>
  )
}

export default Promesas