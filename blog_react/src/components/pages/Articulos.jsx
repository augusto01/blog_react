import React from 'react'
import { useState,useEffect } from 'react'
export const Articulos = () => {


  /**POR DEFECTO LA LISTA DE ARTICULOS DEBE ESTAR VACÍA */
  const [articulos, setArticulos ] = useState([]);


  useEffect(()=>{
    conseguirArticulos();
  },[])

  const conseguirArticulos = async ()=>{
    const url = 'http://localhost:3900/api/listar-articulos'
    let peticion = await fetch(url,{
      method: 'GET'
    });
    let datos = await peticion.json();
    console.log(datos);

    if (datos.status == 'success'){
      setArticulos(datos.articulos)
    }
  }

  return (
    <>
      {articulos.map (articulo => {
        return(
        <article key={articulo._id} className='articulo-item'>
                  <div className='mascara'>
                    <img src='https://imgs.search.brave.com/0pCT_BUqd7KYiJJxxcxYSmlhZugqhx8kgXY9UyMSUsU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzQxL0NBQko3MC5w/bmc'></img>
                  </div>
                  <div className='datos'>
                    <h3 className='titulo'>{articulo.titulo}</h3>
                    <p className='description'>{articulo.contenido}</p>

                    <button className='edit'>Editar</button>
                    <button className='delete'>Borrar</button>
                  </div>
        </article>
        ) 
      })} 
    </>
  )
}
