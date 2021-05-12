// var admin = require('firebase-admin');
// import { user } from "../firebase/firebase-Auth";
// import { getProfileInfo } from "../firebase/firestore-controller";

export default () => {
  localStorage.removeItem("date");
  localStorage.removeItem("order");
  // const currentUser = user();
  // getProfileInfo(currentUser.uid).then((doc) => {
  //     localStorage.setItem('orden', doc.data().orden);
  // });

  // // user
  // const currentUser = firebase.auth();
  // currentUser.currentUser;

  // // getProfileInfo
  // const getProfileInfo = (userId) =>
  //   firebase.firestore().collection("users").doc(userId).get();

  // getProfileInfo(currentUser.uid).then((doc) => {
  //   localStorage.setItem("orden", doc.data().orden);
  // });

  const viewInspection = document.createElement("div");
  viewInspection.innerHTML = `
    <!---Primera fila-->
    <div class="row " style="">
        <!-- Navbar-->
        <nav class="navbar navbar-expand-lg navbar-light " style="height: 64px;border-bottom: 1px solid  #E1E6F0;">
            <div class="container-fluid justify-content-between">
    
                <!-- Left elements -->
                <div class="d-flex col-12 col-lg-3">
                    <!-- Brand -->
                    <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
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
                                  <a class="nav-link active" aria-current="page" style="color:#0E3141;font-weight: bold;font-size:12px;" href="#">Mis casos</a>
                              </li>
                            </div>   
                           
                        </ul>
                    </div>
                    <div class="d-flex float-end align-items-center justify-content-center" style="margin-top:15px;">
                        <ul class="navbar-nav flex-row">
                            <li class="nav-item me-3 me-lg-1">
                                <a class="nav-link d-sm-flex align-items-sm-center" href="#">
                                    <span> <i class="fas fa-search"></i></span>
                                </a>
                            </li>
                            <li class="nav-item me-3 me-lg-1">
                                <a class="nav-link d-sm-flex align-items-sm-center" href="#">
                                    <img src="./img/bells.png" class="rounded-circle" height="23px" alt="" loading="lazy" />
                                    <strong class="d-none d-sm-block ms-1">John</strong>
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
                            <a class="nav-link d-sm-flex align-items-sm-center" href="#">
                                <img src="./img/Avatar.png" class="rounded-circle" height="32px" ; width="32px" ; alt=""
                                    loading="lazy" />
                                <strong class="d-none d-sm-block ms-1">Alonso Hoyos</strong>
                            </a>
                        </li>
                        <li class="nav-item me-3 me-lg-1">
                            <a class="nav-link d-sm-flex align-items-sm-center" href="#">
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
                    <a class="nav-link d-sm-flex align-items-sm-center" href="#">
                        <img src="./img/double left.png" class="rounded-circle" height="24px" ; width="24px" ; alt=""
                            loading="lazy" />
                        <strong class="d-none d-sm-block ms-1" id="home_inspection">Home</strong>
                    </a>
                </li>
            </ul>
        </div>
    
        <div class="col-12 d-flex align-items-center justify-content-center">
    <h1 class="new_case">Nuevo Caso</h1>
</div>

<div class="col-12 d-flex align-items-center justify-content-center">

    <div class=" d-flex  flex-row float-start align-items-center justify-content-center">
        <li class=" " style="list-style: none; width:400px;text-align: center;">
            <a class="nav-link active" id="sube_archivo" aria-current="page"
                style="color: #0F3041;font-weight: 600;
                font-size: 16px;border-bottom:  1px solid #7D7D7D;" href="#">Sube
                tus archivos</a>


                

        </li>
        <li class=" " style="list-style: none; width:400px;text-align: center;">
            <a class="nav-link active" href="#" id="sube_manual" style="color:#0E3141;font-size: 16px; ">Crear de forma manual</a>
        </li>
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
            
                     
            flex: none;
            order: 4;
            flex-grow: 0;
            margin: 30px 671px;" class="pruebahome">Continuar</button>
        </form>
    </div>
</div>
    
    
        <!---FROM 2 --->
        <div id="handbook" class="ocultar">
            <div class="col-12 d-flex justify-content-center align-items-center">
                <form id="form_handbook" style="width:740px; height:852px;">
                    <div class="mb-3 row" style="margin-left:30px;margin-top:58px;">
                        <label for="staticEmail" class="col-12 col-lg-5 col-form-label" style=" margin-left:0px;">1. Fecha de
                            inicio</label>
                        <input type="date"  class="form-control" style="width:161.54px; height:39px;"
                            name="trip-start" id="fecha_inspection" value="2021-05-03" min="1980-01-01" max="2030-12-31"> 
                    </div>
    
                    <div class="mb-3 row" style="margin-left:30px;margin-top:50px;">
                        <label for="inputPassword" class="col-12 col-lg-5   col-form-label" style=" margin-left:0px;">2. Orden de
                            inspección</label>
                        <input type="text" class="form-control" id="orden_inspection"  placeholder="1924-2021" 
                            style="width:161.54px; height:39px;">
                    </div>
    
                    <div class="mb-3 row" style="margin-left:30px;margin-top:50px;">
                        <label for="inputPassword" class="col-12 col-lg-5  col-form-label" style=" margin-left:0px;">3. Inspector de
                            trabajo</label>
                        <input type="text" class="form-control"  placeholder="Alberto Morán"
                            style="width:355.19px; height:73px;">
                        <div class="d-flex column justify-content-end" >
                            <i class="fas fa-plus link-success "></i><a class="link-success" href="#"
                                id="links_new_inspector" style="margin-right:60px;">Nuevo inspector</a>
                        </div>
                    </div>
    
                    <div class="mb-3 row" style="margin-left:30px;margin-top:40px;">
                        <label for="inputPassword" class="col-12 col-lg-5  col-form-label" style=" margin-left:0px;">4. Inspector
                            auxiliar</label>
                        <input type="text" class="form-control" id="auxiliar"  placeholder="Federico Pajuelo"
                            style="width:355.19px; height:39px;">
                        <div class="d-flex column justify-content-end" >
                            <i class="fas fa-plus link-success "></i><a class="link-success" href="#"
                                id="links_new_inspector" style="margin-right:60px;">Nuevo inspector</a>
                        </div>
                    </div>
    
                    <div class="mb-3 row" style="margin-left:30px;margin-top:50px;">
                        <div class="d-flex flex-row bd-highlight ">
                            <label for="inputPassword" class="form-label" style=" margin-left:0px">5. Materias</label>
                            <input type="checkbox" style=" margin-left:170px;margin-bottom:38px;" name="CheckAll" id="select-all" />
                            <input type="checkbox" style=" margin-left:170px;margin-bottom:38px;" class="ocultar"  name="CheckAll"  id="select-all1" />
                            <label class = " form-check-label" style="margin-left:0px;">
                            Selecionar todos
                            </label>
                        </div>
                        <div id="container_check">
                            <div class="check1" style="margin-left:242.93px;margin-rigth:30px;">
    
                                <div class="row " style=" margin-button:31px;">
                                    <input type="checkbox" class="checkbox" id="check1" name="Relaciones laborales" value="Relaciones laborales" 
                                        style="width:auto;" />
                                    <label class="form-check-label"  style="margin-left:0px;width:auto;"
                                        for="Relaciones laborales">
                                        Relaciones laborales
                                    </label>
                                </div>
    
                                <div class="row " style=" margin-button:31px;">
                                    <input type="checkbox" class="checkbox" id="check2" value="Seguridad y salud en el trabajo" value="Seguridad y salud en el trabajo" style="width:auto;" />
                                    <label class="form-check-label" style="margin-left:0px;width:auto;"
                                        for="Seguridad y salud en el trabajo">
                                        Seguridad y salud en el trabajo
                                    </label>
                                </div>
    
                                <div class="row " style=" margin-button:31px;">
                                    <input type="checkbox" name="check3" class="checkbox"  id="check3" value="Empleo y colocación" id="check3" style="width:auto;" />
                                    <label class="form-check-label" style="margin-left:0px;width:auto;"
                                        for="Empleo y colocación">
                                        Empleo y colocación
                                    </label>
                                </div>
    
                                <div class="row ">
                                    <input type="checkbox" name="check4" class="checkbox" id="check4" value="Intermediación laboral" style="width:auto;" />
                                    <label class="form-check-label" style="margin-left:0px;width:auto;"
                                        for="Intermediación laboral">
                                        Intermediación laboral
                                    </label>
                                </div>
    
                            </div>
    
                            <div class="check2 " style=" margin-left:31px;">
    
                                <div class="row " style=" margin-button:31px;">
                                    <input type="checkbox" name="check5" class="checkbox"  id="check5" value="Promoción y formación" style="width:auto;" />
                                    <label class="form-check-label" style="margin-left:0px;width:auto;"
                                        for="Promoción y formacións">
                                        Promoción y formación
                                    </label>
                                </div>
    

    
    

    
                                <div class="row">
                                    <input type="checkbox" name="check6" class="checkbox" id="check6" value =" Intermediación laboral" style="width:auto;" />
                                    <label class="form-check-label" style="margin-left:0px;width:auto;"
                                        for="Intermediación laboral">
                                        Extranjeros
                                    </label>
                                </div>

                               <div class="row " style=" margin-button:31px;">
                                  <input type="checkbox" name="check7" class="checkbox" id="check7" value="Seguridad social" style="width:auto;" />
                                  <label class="form-check-label col-12 col-lg-7 " style="margin-left:0px;width:auto;"
                                      for="Seguridad social">
                                      Seguridad social
                                  </label>
                              </div>

                                <div class="row " style=" margin-button:31px;">
                                    <input type="checkbox" name="check8" class="checkbox" id="check8" value ="Labor inspectiva" style="width:auto;" />
                                    <label class="form-check-label " style="margin-left:0px;width:auto;"
                                        for="Labor inspectiva">
                                        Labor inspectiva
                                    </label>
                                </div>


                            </div>
                        </div>
                    </div>
    
    
                    <div class="mb-3 row " style="margin-left:30px;margin-top:40px;">
                        <label for="Denominación del caso" class="col-sm-2 col-form-label col-12 col-lg-5"  style=" margin-left:0px;">6. Denominación del caso</label>
                        <input type="text" class="form-control" required id="mensaje" placeholder="Caso Estibadores"
                            style="width:285.96px; height:39px;">
                    </div>
    
                    <div class="row" id="btn_crearCaso">
                       <input type="button" disabled id="enviar" value="Crear caso">
                    </div>

                 
    
                </form>
            </div>
        </div>
        <!---FILA 3-->
        <div class="row" style="height:81px;border-top:1px solid  #E1E6F0;">
        
        <footer class="d-flex justify-content-around" >
            <div id="footer_términos" class="d-flex flex-row " style="margin-top:19px;">
                <p>Copyright © 2021 <strong>sami</strong>. Todos los derechos reservados.</p>
                <a href="" class="text-danger" style="text-decoration:none">Términos del Servicio</a>
                <p>y</p>
                <a href="" class="text-danger" style="text-decoration:none">Políticas de Privacidad</a>
            </div>
            <img src="./img/logo_footer.png" class="img_groups" style="margin-top:19px;" alt="logo">
        </footer>
    </div>
        `;

  //Validar Size

//   var inputElement = viewInspection.querySelector("#myfile");

  //inspector auxiliar

  //******* Form Caso *******//
  const inspectionDate = viewInspection.querySelector("#fecha_inspection");
   const inspectionOrder = viewInspection.querySelector("#orden_inspection");
//   const checkboxes = viewInspection.querySelector(
//     'input[type="checkbox"]:checked'
//   );

  function handlerDate() {
    localStorage.setItem("date", inspectionDate.value);
  }

  function handlerOrder() {
    localStorage.setItem("order", inspectionOrder.value);
  }

  inspectionDate.addEventListener("change", handlerDate);
   inspectionOrder.addEventListener("change", handlerOrder);

  //******* Form Caso - Materias *******//
  const checkUno = viewInspection.querySelector("#check1");
  const checkDos = viewInspection.querySelector("#check2");
  const checkTres = viewInspection.querySelector("#check3");
  const checkCuatro = viewInspection.querySelector("#check4");
  const checkCinco = viewInspection.querySelector("#check5");
  const checkSeis = viewInspection.querySelector("#check6");
  const checkSiete = viewInspection.querySelector("#check7");
  const checkOcho = viewInspection.querySelector("#check8");
  localStorage.removeItem("materia1");
  localStorage.removeItem("materia2");
  localStorage.removeItem("materia3");
  localStorage.removeItem("materia4");
  localStorage.removeItem("materia5");
  localStorage.removeItem("materia6");
  localStorage.removeItem("materia7");
  localStorage.removeItem("materia8");

  function handlerCheck1() {
    let checked = checkUno.checked;
    if (checked) {
      localStorage.setItem("materia1", checkUno.value);
    } else {
      localStorage.removeItem("materia1");
    }
  }

  function handlerCheck2() {
    let checked = checkDos.checked;
    if (checked) {
      localStorage.setItem("materia2", checkDos.value);
    } else {
      localStorage.removeItem("materia2");
    }
  }

  function handlerCheck3() {
    let checked = checkTres.checked;
    if (checked) {
      localStorage.setItem("materia3", checkTres.value);
    } else {
      localStorage.removeItem("materia3");
    }
  }

  function handlerCheck4() {
    let checked = checkCuatro.checked;
    if (checked) {
      localStorage.setItem("materia4", checkCuatro.value);
    } else {
      localStorage.removeItem("materia4");
    }
  }

  function handlerCheck5() {
    let checked = checkCinco.checked;
    if (checked) {
      localStorage.setItem("materia5", checkCinco.value);
    } else {
      localStorage.removeItem("materia5");
    }
  }

  function handlerCheck6() {
    let checked = checkSeis.checked;
    if (checked) {
      localStorage.setItem("materia6", checkSeis.value);
    } else {
      localStorage.removeItem("materia6");
    }
  }

  function handlerCheck7() {
    let checked = checkSiete.checked;
    if (checked) {
      localStorage.setItem("materia7", checkSiete.value);
    } else {
      localStorage.removeItem("materia7");
    }
  }

  function handlerCheck8() {
    let checked = checkOcho.checked;
    if (checked) {
      localStorage.setItem("materia8", checkOcho.value);
    } else {
      localStorage.removeItem("materia8");
    }
  }

  checkUno.addEventListener("change", handlerCheck1);
  checkDos.addEventListener("change", handlerCheck2);
  checkTres.addEventListener("change", handlerCheck3);
  checkCuatro.addEventListener("change", handlerCheck4);
  checkCinco.addEventListener("change", handlerCheck5);
  checkSeis.addEventListener("change", handlerCheck6);
  checkSiete.addEventListener("change", handlerCheck7);
  checkOcho.addEventListener("change", handlerCheck8);
  //******* Form Caso - Materias *******//


 //Validar Size
//subir archivos 
const  fileInput  = viewInspection.querySelector( "#myfiles" ); 
const button     = viewInspection.querySelector( ".myfile" );
const the_return = viewInspection.querySelector(".file-return");
   
    const file1 = viewInspection.querySelector("#file1");
    viewInspection.querySelector("#myfiles").onchange = function() {cambiar()}
            function cambiar() {
                file1.classList.remove("ocultar");
                return the_return.innerHTML = fileInput.value;
                
            };

    const buton_prueba = viewInspection.querySelector(".pruebahome");
   
       buton_prueba.addEventListener("click", () => {
        console.log(cambiar(fileInput.value))
        const nameFile = cambiar(fileInput.value);
        localStorage.setItem('file',nameFile )
     
        window.location.hash = '#/home' 
        });
       
//droppear
// var MAX_BYTES = 102400; // 100 KB
const fileLimit = 5000000;
function dragenter(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  function dragover(event) {
    event.stopPropagation();
    event.preventDefault();
  }

const file2 = viewInspection.querySelector("#file2")
function drop(event) {
  
    console.log("drop", event);
    event.stopPropagation();
    event.preventDefault();

    var data = event.dataTransfer;
    var files = data.files;
    console.log(files);
    var file;
    console.log(file);
    var reader;
    console.log(reader);

    for (var i = 0; i < files.length; i++) {
      file = files[i];
      reader = new FileReader();
      // reader.onloadend = onFileLoaded;
      reader.readAsBinaryString(file);
    }
  
    file2.classList.remove("ocultar");
    let gallery = viewInspection.querySelector('.gallery');
    console.log(gallery);

    gallery.innerHTML = `<span class="">${file.name}</span>`;
       if(this.file[0].size > 5000000){
         viewInspection.querySelector("#message_error").innerHTML = "Ups, el archivo excede el máximo de 50mb de peso. "
          this.value = "";
       };   
}
  var contenedor = viewInspection.querySelector("#drop-area");
        contenedor.addEventListener("dragenter", dragenter, false);
        contenedor.addEventListener("dragover", dragover, false);
        contenedor.addEventListener("drop", drop, false);

      //Evento click link Sube tus archivos
        
    const form1 =  viewInspection.querySelector("#drop");    
    const sube_archivo = viewInspection.querySelector("#sube_archivo");    
    sube_archivo.addEventListener('click', (e) => {
      e.preventDefault();
      form1.classList.remove("ocultar");
      form2.classList.add("ocultar")
     
    });

      //Evento click Crear de formulario manual

      const form2 =  viewInspection.querySelector("#handbook");    
      const sube_manual = viewInspection.querySelector("#sube_manual");    
      sube_manual.addEventListener('click', (e) => {
        e.preventDefault();
        form2.classList.remove("ocultar")
        form1.classList.add("ocultar")

           console.log(cambiar(fileInput.value))
            const nameFile = cambiar(fileInput.value);
            localStorage.setItem('file',nameFile )

         
            
      });

      //check
     const check= viewInspection.querySelector('#select-all')
     const uncheck= viewInspection.querySelector('#select-all1')
     check.addEventListener ('click',  (e) => {
        check.classList.add("ocultar");
        uncheck.classList.remove("ocultar");
        var checkboxes = viewInspection.querySelectorAll('input[type="checkbox"]');
        console.log(checkboxes)
        for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].type == 'checkbox'){  checkboxes[i].checked = true;
         } else  {
        
         } ; 
        }  
      });

     //uncheck
    uncheck.addEventListener ('click',  (e) => {
        var checkboxes = viewInspection.querySelectorAll('input[type="checkbox"]');
        console.log(checkboxes)
        check.classList.remove("ocultar");
        uncheck.classList.add("ocultar");
        for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].type == 'checkbox'){  checkboxes[i].checked = false;
         } else  {
         
         } ; 
        }       
      });

      //código por optimizar
      const mensaje = viewInspection.querySelector("#mensaje");
      mensaje.addEventListener("keyup", (e) => {
             console.log("change");
         const boton = viewInspection.querySelector("#enviar");
        console.log(boton)
        
        if (mensaje.value.trim() !== "") {
          console.log("Se muestra")
          boton.removeAttribute('disabled')
        } else {
          boton.setAttribute('disabled', "true");
        }
      });

      //guardar en firesbase
    //   const guardar = viewInspection.querySelector("#enviar");
    //   guardar.addEventListener('click' , (e) => {  

    //     const fecha_inscripcion = viewInspection.querySelector("#fecha_inspection").value;
    //     const orden_inscripcion = viewInspection.querySelector("#orden_inspection").value;
       
    //     firebase.firestore()
    //     .collection("users").add({
    //         fecha:fecha_inscripcion,
    //         orden:orden_inscripcion,
       
    //     })
    //     .then (function (docRef){
    //         console.log("document with id", docRef.id);

           
    //         viewInspection.querySelector("#fecha_inspection").value = '';
    //         viewInspection.querySelector("#orden_inspection").value  = ''; 
         
    //     })
    //     .catch (function (error){ 
    //     })
    // });
      //ir a home con el boton crear caso
      const btn_home = viewInspection.querySelector('#enviar');
      btn_home.addEventListener('click', (e) => {

        let checkedElements = viewInspection.querySelectorAll('input:checked');
        console.log(checkedElements)
        // let allCheckboxes = viewInspection.querySelectorAll('.checkbox');

        let allIsChecked = checkedElements.length;

        console.log( allIsChecked);
        localStorage.setItem("checked", allIsChecked);

        const auxiliar = viewInspection.querySelector("#auxiliar");
        localStorage.setItem("inspectorAuxiliar", auxiliar.value);
        window.location.hash = '#/home' 
        });
      return viewInspection
  };

  