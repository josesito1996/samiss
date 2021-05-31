// import {viewHome} from './home'
export default () => {
    const viewActuacion = document.createElement('div');
    viewActuacion.innerHTML = `
    <!---Primera fila-->
    <div class="row " >
        <!-- Navbar-->
        <nav class="navbar navbar-expand-lg navbar-light " style="height: 64px;border-bottom: 1px solid  #E1E6F0;">
            <div class="container-fluid justify-content-between">
    
                <!-- Left elements -->
                <div class="d-flex col-12 col-lg-3">
                    <!-- Brand -->
                    <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#/home">
                        <img src="./img/logo_inspection.png" position: absolute; alt="" loading="lazy"
                            style="margin-top: 19px; width: 77.19px;height: 26px;margin-left: 152px;margin-top: 19px;" />
                    </a>
    
                </div>
                <div class="lines">
                </div>
    
                <!-- Center elements -->
    
                <div class="col-12 col-lg-6">
                    <div class="float-start align-items-center justify-content-center">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <div class="d-flex align-items-center "style="height: 64px;border-bottom: 1px solid  #D70025;width:106px;">
                              <li class="nav-item">
                                  <a class="nav-link active" aria-current="page" style="color:#0E3141;font-weight: bold;font-size:12px;" href="#/home">Mis casos</a>
                              </li>
                            </div>   
                           
                        </ul>
                    </div>
                    <div class="d-flex float-end align-items-center justify-content-center" style="margin-top:15px;">
                        <ul class="navbar-nav flex-row">
                            <li class="nav-item me-3 me-lg-1">
                                <a class="nav-link d-sm-flex align-items-sm-center" href="#/home">
                                    <span> <i class="fas fa-search"></i></span>
                                </a>
                            </li>
                            <li class="nav-item me-3 me-lg-1">
                                <a class="nav-link d-sm-flex align-items-sm-center" href="#/home">
                                    <img src="./img/bells.png" class="rounded-circle" height="23px" alt="" loading="lazy" />
                                    <strong class="d-none d-sm-block ms-1"></strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                </div>
                <!-- Right elements -->
                <div class="col-12 ">
                    <ul class="navbar-nav flex-row">
                        <li class="nav-item me-3 me-lg-1">
                            <a class="nav-link d-sm-flex align-items-sm-center" href="#/home">
                                <img src="./img/Avatar.png" class="rounded-circle" height="32px" ; width="32px" ; alt=""
                                    loading="lazy" />
                                <strong class="d-none d-sm-block ms-1">Alonso Hoyos</strong>
                            </a>
                        </li>
                        <li class="nav-item me-3 me-lg-1">
                            <a class="nav-link d-sm-flex align-items-sm-center" href="#/home">
                                <span><i class="fas fa-chevron-down mt-2"></i></span>
                            </a>
                        </li>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Navbar -->
    
    </div>
    <!---FILA 2-->
    <div class="row" >
    
        <div class="col-12" style="margin-left:152px;margin-top:20px;">
            <ul class="navbar-nav flex-row">
                <li class="nav-item me-3 me-lg-1">
                    <a class="nav-link d-sm-flex align-items-sm-center" href="#/home">
                        <img src="./img/double left.png" class="rounded-circle" height="24px" ; width="24px" ; alt=""
                            loading="lazy" />
                        <strong class="d-none d-sm-block ms-1" id="home_inspection">Home</strong>
                    </a>
                </li>
            </ul>
        </div>
    
        <div class="col-12 d-flex align-items-center justify-content-center">
    <h1 class="new_case">Nueva Actuación</h1>
</div>

<div class="col-12 d-flex align-items-center justify-content-center">

    <div class=" d-flex  flex-row float-start align-items-center justify-content-center" style="border-bottom:1px solid #7D7D7D; ;width:800px;margin-top:34px;">
     
            <div class="subir"  id="add_archivo" href="#/home">Sube tus archivos</div>
       
     
            <div class="subir"  id="add_manual"  style="color:#0E3141;font-size: 16px; ">Crear de forma manual</div>
     
    </div>

</div>

<!---FROM 1 --->
<div id="drop" style="margin-bottom:150px;">
    <div class="col-12 d-flex align-items-center justify-content-center">
        <form>
            <p style="font-family: Montserrat;
                font-style: normal;
                font-weight: 300;
                font-size: 14px;
                line-height: 17px;
                /* identical to box height */
                
                text-align: center;
                
                color: #7B89B2;margin-bottom: 30px;margin-top:30px;">Tamaño máximo: 50mb</p>

            <div id="drop-area">
                <img src="./img/nube.png" class="rounded-circle" style="height:56.2px ; width:60px; margin-top:70px;" ; alt="" />
                <p style="font-family: Inter;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 15px;
                text-align: center;
                margin-bottom:0px;
                color: #7B89B2;">Arrastra tus archivos aquí</p>
                <p style="font-family: Inter;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 15px;
                text-align: center;
               
                color: #7B89B2;">o</p>

                <label for="myfiles" class="myfile">
                             Cargar desde computadora
                        </label>
                        <input id="myfiles"  type="file" style='display: none;' />
                  

               
            </div>

            <div id="file1" class="ocultar" > 
                <div class="d-flex flex-row d-flex align-items-center" >
                <input type="radio" name="file" value="file"> 
                <div style ="border: 1px solid #C1C7DA;
                box-sizing: border-box;
                border-radius: 7px;
                
                /* Inside Auto Layout */
                
                flex: none;
                order: 1;
                flex-grow: 0;
                margin: 0px 20px;">
                <p class="file-return" id="gallery"></p>
                </div>
                </div>
            </div>
            <div id="file2" class="ocultar "> 

            <div id="file2" class="ocultar d-flex flex-row d-flex align-items-center"> 
                <div >
                <input type="radio" name="file" value="file"> 
                <div style="border: 1px solid #C1C7DA;
                box-sizing: border-box;
                border-radius: 7px;
                
                /* Inside Auto Layout */
                
                flex: none;
                order: 1;
                flex-grow: 0;
                margin: 0px 20px;">
                <p class ="gallery"id="gallery" ></p>
                </div>
                </div>
                </div>
            </div>

            <div id="message_error">
            </div>
            </div>
            <button style="background: #FF3355;
            opacity: 0.4;
                     
            border: 2px solid #FF3355;
            box-sizing: border-box;
            box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            height:43px;
            width:98px;
            flex: none;
            order: 4;
            flex-grow: 0;
            margin: 20px 0 0 630px;" class="pruebahome">Continuar</button>
        </form>
    </div>
</div>
    
    
        <!---FROM 2 --->
        <div id="handbook" class="ocultar">
            <div class="col-12 d-flex justify-content-center align-items-center">
                <form id="form_handbook" style="width:800px; height:655px;">
                    <div class="mb-3 row" style="margin-left:30px;margin-top:40px;">
                        <label for="staticEmail" class="col-12 col-lg-5 col-form-label" style=" margin-left:0px;font-size: 14px;">1. Fecha de
                            actuación</label>
                        <input type="date"   
                        style="width:161px; height:39px;" class="form-control" name="trip-start" id="date_actuacion" value="2021-05-03" min="1980-01-01" placeholder="13/04/21" max="2030-12-31"> 
                    </div>
    
                    <div class="mb-3 row" style="margin-left:30px;margin-top:40px;">
                        <label for="inputPassword" class="col-12 col-lg-5   col-form-label" style=" margin-left:0px; font-size: 14px;">2. Tipo de actuación</label>
                        <select name="mySelectValueTipo" id="mySelectValueTipo"  required="seleciona aquí" class="form-control" style="width:266px; height:36.49px;"> 
                                <option value="">Selecciona aquí</option>
                                <option value="Visita inspectiva">Visita inspectiva</option>
                                <option value="Requerimiento de comparecencia ">Requerimiento de comparecencia </option>
                                <option value="Comparecencia">Comparecencia</option>
                                <option value="Requerimiento">Requerimiento</option>
                                <option value="Acta de infracción ">Acta de infracción </option>
                                <option value=" Descargos"> Descargos</option>
                                <option value=" Resolución  "> Resolución  </option>
                                <option value="  Apelación"> Apelación</option>
                                <option value="  Escrito"> Escrito</option>
                            </select>
                     
                    </div>
    
                    <div class="mb-3 row" style="margin-left:30px;margin-top:40px;">
                        <label for="inputPassword" class="col-12 col-lg-5  col-form-label" style=" margin-left:0px; font-size: 14px;">3. Funcionarios</label>
                        <input type="text" class="form-control" id="funcionario_actuacion"  placeholder="Ejem. Rosa Cubas Linares "
                            style="width:354px; height:39px;">
                        <div class="d-flex column justify-content-end me-5" >
                            <img src="./img/svg/+.svg" class="logo" alt="logo" /><a class="link-success" href="#/home"
                                id="links_new_inspector" style="margin-right:95px;">Funcionarios</a>
                        </div>
                    </div>
    
                    <div class="mb-3 row" style="margin-left:30px;margin-top:40px;">
                        <label for="inputPassword" class="col-12 col-lg-5  col-form-label" style=" margin-left:0px;font-size: 14px;">4. Etapa</label>
                        <select name="mySelectValueEtapa" id="mySelectValueEtapa" required="Selecciona aquí" class="form-control" style="width:231px; height:36.49px;">
                                <option value="">Selecciona aquí</option>
                                <option value="Investigación ">Investigación </option>
                                <option value="Inspección">Inspecció</option>
                                <option value="Sancionadora">Sancionadora</option>
                            </select>
                      
                    </div>
    
                    <div class="mb-3 row" style="margin-left:20px;margin-top:40px;">
                        <div class="d-flex flex-row bd-highlight ">
                            <label for="inputPassword" class="form-label" style=" margin-left:0px; font-size: 14px;">5. Descripcion</label>
                            <input type="text" class="form-control" placeholder="Escribir aquí" style=" margin-left:240px;margin-bottom:38px; width:414px; height:105px;" name="CheckAll" id="descripcion_actuacion" />                          
                        </div>
                    </div>


                    <div class="mb-3 row" style="margin-left:30px;margin-top:20px;">
                        <div class="d-flex flex-row bd-highlight ">
                        <label for="inputPassword" class="form-label" style=" margin-left:0px;font-size: 14px;">6. Documentos</label>

                        <label for="file-upload" id="subir" style="margin-left:240px;">
                                    <img  src="./img/svg/carga.svg" alt="" />Añada tus documentos
                                        </label>
                                        <input id="file-upload"  type="file" style='display: none;'/>
                                        <div id="info" style="margin-left:240px;"></div>
                        </div>   

                    </div>

                    <div class="" id="btn_crearActuacion" style="text-align:center; margin-top:30px;">
                       <input type="button" class="btnenviar_acti" value="Crear actuación" style="height:40px; width:138px; color:white; border-radius:10px;">

                    </div>
                </form>
            </div>
        </div>
        <!---FILA 3-->
        <div class="row" style="height:81px;border-top:1px solid  #E1E6F0;">

        <div class="footer d-flex">
        <p>
          Copyright © 2021 <strong>sami.</strong>Todos los derechos
          reservados.
          <span>Términos del Servicio y Políticas de Privacidad</span>
        </p>
        <img src="./img/svg/group.svg" alt="logo" />
      </div>
    </div>
    `;

// subir documento

const subir = viewActuacion.querySelector("#subir");

const file_upload = viewActuacion.querySelector("#file-upload");
file_upload.addEventListener("change", ()=> {
  subir.classList.add("ocultar");
  
  var pdrs = document.getElementById('file-upload').files[0].name;
  document.getElementById('info').innerHTML = pdrs;
 
})

var fichero;
var storageRef;

function inicializar() {
    fichero = viewActuacion.querySelector("#file-upload");
    fichero.addEventListener("change", subirDocAFirebase, false);
    storageRef = firebase.storage().ref();
}
inicializar()

function subirDocAFirebase(){
    console.log("subiendo")
    var documentoSubir = fichero.files[0];

    var subir = storageRef.child("documentos/"+documentoSubir.name).put(documentoSubir)
   
    .then(function(snapshot) {
  console.log('Uploaded a blob or file!');
});
   
}
// //Evento click Crear de formulario manual
// const form1 =  viewActuacion.querySelector("#drop");  
// const form2 =  viewActuacion.querySelector("#handbook");   
// const line_manual= viewActuacion.querySelector("#line_manual");    
// const line_drop= viewActuacion.querySelector("#sube_archivo");    
// const sube_manual =  viewActuacion.querySelector("#sube_manual");   

// const descripcion_actuacion = viewActuacion.querySelector("#descripcion_actuacion").value;
// localStorage.removeItem("descripcion_actuacion", descripcion_actuacion )

// sube_manual.addEventListener('click', (e) => {
//   e.preventDefault();
 
//   line_manual.style.borderBottomColor = "black";
//   line_drop.style.borderBottomColor = "white";
//   form2.classList.remove("ocultar")
//   form1.classList.add("ocultar")


// });

 //Evento click link Sube tus archivos
        
 const form1 =  viewActuacion.querySelector("#drop"); 
 const form2 =  viewActuacion.querySelector("#handbook");       
 const sube_archivo = viewActuacion.querySelector("#add_archivo");    
 const sube_manual = viewActuacion.querySelector("#add_manual"); 
 

sube_archivo.addEventListener("click", ()=> {
form1.classList.remove("ocultar");
form2.classList.add("ocultar");
})

sube_manual.addEventListener("click", ()=> {
form1.classList.add("ocultar");
form2.classList.remove("ocultar");
})

sube_archivo.classList.add("subir_change");
const links = viewActuacion.getElementsByClassName("subir");
for(let i=0; i < links.length; i ++)
       {
        links[i].onclick = function (){

          let el = links[0];
          while(el)
          {
            if(el.tagName === "DIV"){
            // remueve class
            el.classList.remove("subir_change");
          }

          //pasa al hermano
          el = el.nextSibling;
        }
           this.classList.add("subir_change");
         };
       }    


//localstorage Etapas
const btn_crearActuacion = viewActuacion.querySelector("#btn_crearActuacion");
// const casoSeleccionado = viewHome.querySelector("#casoSeleccionado"); 
btn_crearActuacion.addEventListener("click", () => {

    
    // returns selected option value  
        const selectedOptionEtapa = viewActuacion.querySelector("#mySelectValueEtapa").options[ viewActuacion.querySelector("#mySelectValueEtapa").selectedIndex]; // returns selected option element
        console.log(selectedOptionEtapa.value); // return selected option value (2nd method)
        localStorage.setItem("etapa", selectedOptionEtapa.value )

        const selectedOptionTipo = viewActuacion.querySelector("#mySelectValueTipo").options[ viewActuacion.querySelector("#mySelectValueTipo").selectedIndex]; // returns selected option element
        console.log(selectedOptionTipo.value); // return selected option value (2nd method)
        localStorage.setItem("tipo", selectedOptionTipo.value )    
       
        const funcionario_actuacion = viewActuacion.querySelector("#funcionario_actuacion").value; // returns selected option element
        
        localStorage.setItem("funcionario_actuacion",  funcionario_actuacion )
        
        const descripcion_actuacion = viewActuacion.querySelector("#descripcion_actuacion").value;
        console.log(descripcion_actuacion)
             

        const date_actuacion = viewActuacion.querySelector("#date_actuacion").value;
        localStorage.setItem("date_actuacion", date_actuacion )

        //USANDO FIREBASE PARA CREAR COLLECTION DEL FORMULARIO CREAR ACTUACION
        const db = firebase.firestore()
        db.collection("crearActuación").add({
            Fecha: date_actuacion,
            Tipo: selectedOptionTipo.value,
            Funcionario: funcionario_actuacion,
            Etapa: selectedOptionEtapa.value,
            Descripcion: descripcion_actuacion,
            
            // Documentos: "USA",
        })
        .then(() => {
            console.log("Document successfully written!", );
            selectedOptionTipo.value = "";
            selectedOptionEtapa.value ="";
            viewActuacion.querySelector("#funcionario_actuacion").value="";
            viewActuacion.querySelector("#descripcion_actuacion").value="";
            viewActuacion.querySelector("#date_actuacion").value="";
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });

        
             function handlerDescripcion() {
                if (descripcion_actuacion) {
                    localStorage.setItem("descripcion_actuacion", descripcion_actuacion );
                } else {
              console.log("soy nulo")
                }
              }
              handlerDescripcion()
        

        //sacar año

        function getYear(curDate){
            var dt = new Date(curDate);`enter code here`
             var year = dt.getFullYear();
            return year.toString() 
            }
        
           console.log( getYear(date_actuacion));
           const year =  getYear(date_actuacion);
           localStorage.setItem("year", year )

        //sacar dia 

        function getDate(curDate){
            var dt = new Date(curDate);`enter code here`       
            return  (dt.getDate()+1).toString().padStart(2, 0);
            }
        
           console.log(getDate(date_actuacion));

           const day =  getDate(date_actuacion);
           localStorage.setItem("day", day )

        //sacar mes
        function getMonth(curDate){

            var meses = [
                "Ene", "Feb", "Mar",
                "Abr", "May", "Jun", "Jul",
                "Ago", "Sep", "Oct",
                "Nov", "Dic"
              ] 
            const  dt = new Date(curDate);`enter code here`
            var mes = dt.getMonth();
            // const mes = (dt.getMonth() + 1).toString().padStart(2, 0).toString();
            return meses[mes]   ;
            }
        
           console.log(getMonth(date_actuacion));
           const month =  getMonth(date_actuacion);
           localStorage.setItem("month", month )
    
        //    casoSeleccionado.classList.remove('ocultar');

            window.location.hash = "#/home";
    });




      return viewActuacion 
  };