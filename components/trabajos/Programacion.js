import {Huevo,Pollo,Papa} from './recetas/index';
import {useState} from 'react';
import { Formulario} from './formulario/index';



export default function hola() {

  const[num,actualizarNum] =useState(1)

  const[ver,ActualizarVer] = useState(false)
  const[verF,ActualizarVerF] = useState(false)


 const Ver = ()=>{

   if(!ver ){
   ActualizarVer(true)
  }
   else{
   ActualizarVer(false)

   }
    
 }


 const VerF = () => {
  if(verF ){
    ActualizarVerF(false)
   }
    else{
    ActualizarVerF(true)
 
    }

 }



 const Siguente = ()=>{
   let sigiente = num + 1;
   actualizarNum(sigiente) 
 }

const Anterior = () => {
  let anterior = num -1;
  actualizarNum(anterior)
}

  let recetas;
  if(num == 1){  
      recetas = <Huevo/>    
} else if(num == 2){ 
  recetas = <Pollo/>
}else if(num == 3){ 
  recetas = <Papa/>
}
  



return (
        <div>
          <h1>Materia de Prgramacion</h1>
          <button onClick={Ver}>Recetas</button>
          <button onClick={VerF}>Formulario</button>
          


         
           
          {ver? 
          
          <section>
            
          <button onClick={Anterior}>anterior</button>
          <button onClick={Siguente}>Siguente</button>
           { recetas } 
         
          

            </section>
          
          
          
          
          : null  }
              {verF? <Formulario/>:null} 
        </div>
    )
}
