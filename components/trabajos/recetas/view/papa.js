import {imgPapa} from '../../../../public/index';
import Img from 'next/image';
 
 function Papa() {
    return (
        <div>
            
        <h1>Papa Fritas</h1> 
       <h5>Receta de papa Frita caseras.</h5> 

       <Img src={imgPapa}
             alt='Huevo'
             width={200}
             height={200}
            /> 

       <h2>Ingredientes</h2> 
       <ul>
           <li>3 o 4 papas (300g.)</li>
           <li>4 dientes de ajo</li>
           <li>aceite de vegetal</li>
           <li>sal</li>
       </ul>
       <h2>Elaboracion (Pasos)</h2>
       <ol>
           <li>Calentear el aceite en el sarten</li>
           <li>añadir las papas cortadas, la sal y los ajos</li>
           <li>freir al gusto</li>
           <li>serir en plato</li>
       </ol>
        </div>
    )
}

module.exports = Papa



