import Img from 'next/image';
import {imgPollo} from '../../../../public/index';


function Pollo() {
    return (
        <div>
              <h1>Pollo al horno</h1> 
    <h5>Receta de pollo al horno caseras.</h5> 

    <Img src={imgPollo}
             alt='Huevo'
             width={200}
             height={200}
            /> 

    <h2>Ingredientes</h2> 
    <ul>
        <li>1 Pollo completo</li>
        <li>2 dientes de ajo</li>
        <li>Provenzal</li>
        <li>sal</li>
        <l1>Mostaza</l1>
        <li>1 limon</li>
        <li>Peregil</li>
    </ul>
    <h2>Elaboracion (Pasos)</h2>
    <ol>
        <li>Cortar y separar cada pieza del pollo</li>
        <li> Hacerle corte a las pizas del pollo </li>

        <ol>
            En un recipiente
             <li>Picar el diente de ajo y colocarlo dentro del recipiente </li>
             <li>colocar sal a gusto</li>
             <li>mostaza a gusto</li>
             <li>Porvenzal a gusto</li>
             <li>Picar cantodad a gusto de peregil</li>
             <li>Añadir jugo de limon</li>
             <li>Mesclar todo el contenido</li>
        </ol>
     
        <li>Mesclar el contenido del recipiente con el Pollo, procurar que dentro de los cortes entren contenido</li>
        <li> Colocar el Pollo en el Horno durante 1:30 una hora y media</li>
    </ol>
        </div>
    )
}

module.exports = Pollo;