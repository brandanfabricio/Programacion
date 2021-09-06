import Img from 'next/image';
import {imgHuevo} from '../../../../public/index';


function Huevo() {
    return (
        <>
          
          <h1>Huevo Fritas</h1> 
            <Img src={imgHuevo}
             alt='Huevo'
             width={200}
             height={200}
            />
            <h2>Ingredientes</h2> 
    <ul>
        <li>1  o mas huevos</li>
        <li>aceite de vegetal</li>
        <li>sal</li>
    </ul>
    <h2>Elaboracion (Pasos)</h2>
    <ol>
        <li>Calentear un poco de aceite en el sarten</li>
        <li>Romper el huevo</li>
        <li>Freir el hyuevo a gusto</li>
        <li>Servir el huevo en el plato </li>
        <li>Poner sal a gusto</li>
    </ol>   
        
        </>
    )
}
module.exports = Huevo;