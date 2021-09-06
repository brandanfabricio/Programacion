function Formulario() {
    return (
        <div>
            <form>
            <label>Datos</label>
            
            <fieldset>
            
            <input type="text" placeholder="Nombre"/><br/> <br/>
            <input type="text" placeholder="Apellido"/> <br/><br/>
            <input type="number" placeholder="DNI" min="8" max="8"/> <br/><br/>



        </fieldset><br/>
        <label>Datos personales</label>
        <fieldset>
        <label>Foto</label> <br/>
        <input type="text" placeholder="coloca url de la imagen" id="url" /> <br/>
       <img src="" id="img" width="150px" height="150px"/><br/>
       <button id="boton"> Subir foto</button> <br/><br/>
         
       <input type="email" placeholder="email" /> <br/><br/>
             <input type="tel" placeholder="telefono"/> <br/><br/>
             <input type="url" placeholder="pagina"/> <br/><br/>
             <input type="text" placeholder="Direcion"/> <br/><br/>
             <label>Fecha de Nacimiento</label>
             <input type="date"/> <br/><br/>

        </fieldset>
            
        <label>Description</label>  <br/>

<textarea cols="50" rows="5">

</textarea>

<input type="text" placeholder="nombre"/> <br/><br/>
<input type="text" placeholder="nombre"/> <br/><br/>
<input type="text" placeholder="nombre"/> <br/><br/>
<input type="text" placeholder="nombre"/> <br/><br/>
<input type="text" placeholder="nombre"/> <br/><br/>
<input type="text" placeholder="nombre"/> <br/><br/>


            </form>

    </div>
    )
}
module.exports = Formulario;