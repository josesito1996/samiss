export default () => {
  const viewHome = document.createElement("div");
  const inspectionDate = localStorage.getItem("date");
  const inspectionOrder = localStorage.getItem("order");

  viewHome.innerHTML =`
    <div class="wrapper">
      <div class="header">
        <div class="header-left d-flex">
          <img src="./img/svg/logo.svg" class="logo" alt="logo" />
          <span class="vertical-line"></span>
        </div>
        <div class="header-center d-flex">
          <div class="tag-case d-flex">
            <p>Mis Casos</p>
          </div>
          <div class="search-notification d-flex">
            <img src="./img/svg/search.svg" class="icon" alt="search" />
            <img
              src="./img/svg/notifications.svg"
              class="icon"
              alt="nofications"
            />
            <span class="vertical-line"></span>
          </div>
        </div>
        <div class="header-right d-flex">
          <img src="./img/svg/avatar.svg" class="avatar" alt="profile" />
          <p>Alonso Hoyos</p>
          <img src="./img/svg/chevron-down.svg" alt="profile menu" />
        </div>
      </div>

      <div class="mainCase">
        <div class="btn-back d-flex">
          <img src="./img/svg/double left.svg" alt="back button" />
          <p>Volver</p>
        </div>
        <div class="title-btnActions d-flex">
          <h5>Caso estibadores</h5>
          <div class="btn-actions d-flex" id="actuacion">
            <p class="moreIcon">+</p>
            <p>Actuación</p>
          </div>
        </div>
        <div class="tags-case d-flex">
          <ul class="">
            <li><a href="#">Datos</a></li>
            <li><a href="#" >Actuaciones</a></li>
            <li><a href="#">Documentos</a></li>
            <li><a href="#">Tareas</a></li>
          </ul>
        </div>
        <div class="detailMain d-flex">
          <div class="detail-description">
            <div class="title-description d-flex">
              <h6 class="text-blue-opacity">Descripción</h6>

              <img
                id="btnEditComment"
                src="./img/svg/edit.svg"
                class="btnEditComment"
                alt="icon edit"
              />
              <img
                id="btnSaveComment"
                src="./img/svg/save.svg"
                class="btnSaveComment hide"
                alt="icon edit"
              />
            </div>
            <p id="pComment" class="ptxt-comment">
              Hola <strong>Alonso</strong> si deseas escribir algo puntual sobre
              el caso puedes hacer <strong>click aquí</strong> o en el
              <strong>ícono del lapiz</strong>. Recuerda que podrás editar en
              cualquier momento la descripción.
            </p>
            <div id="textareaContainer" class="textarea-container hide">
              <textarea
                name="txtComment"
                id="txtComment"
                placeholder="Escribir aquí..."
                cols=""
                rows=""
                autofocus
                class="txt-comment hide"
                disabled
              ></textarea>
              <p id="countComment" class="hide">(Máximo 200 caracteres)</p>

            </div>
            <h6 class="text-blue-opacity">Fecha de creación</h6>
            <p>${inspectionDate}</p>
            <h6 class="text-blue-opacity">Orden de inspección</h6>
            <p>${inspectionOrder}</p>
            <h6 class="text-blue-opacity">Materias</h6>
            <div id="materias" class="cardsMaterias">
              <div id="materia1" class="card_materia_uno">
                <img src="./img/svg/redes.svg" class="cardIcon" />
                <p class="text-blue">Relaciones Laborales</p>
              </div>
              <div id="materia2" class="card_materia_dos">
                <img src="./img/svg/seguro-de-vida.svg" class="cardIcon" />
                <p class="text-blue">Seguridad y salud en el trabajo</p>
              </div>
              <div id="materia3" class="card_materia_tres">
                <img src="./img/svg/headhunting.svg" class="cardIcon" />
                <p class="text-blue">Empleo y colocación</p>
              </div>

              <div id="materia4" class="card_materia_cuatro">

                <img src="./img/svg/apreton-manos.svg" class="cardIcon" />
                <p class="text-blue">Intermediación laboral</p>
              </div>
              <div id="materia5" class="card_materia_cinco">
                <img src="./img/svg/presentacion.svg" class="cardIcon" />
                <p class="text-blue">Promoción y formación</p>
              </div>
              <div id="materia6" class="card_materia_seis">
                <img src="./img/svg/headhunting.svg" class="cardIcon" />
                <p class="text-blue">Extranjeros</p>
              </div>
              <div id="materia7" class="card_materia_siete">
                <img src="./img/svg/bandera.svg" class="cardIcon" />
                <p class="text-blue">Seguridad social</p>
              </div>
              <div id="materia8" class="card_materia_ocho">
                <img src="./img/svg/inspeccion.svg" class="cardIcon" />

                <p class="text-blue">Labor inspectiva</p>

              </div>
            </div>
          </div>
          <div class="detail-process-performance d-flex  justify-content-center align-items-center">
            <div class="card-process bg-white ">
                <div class="col-12 " id="inProcess">
                    <div class="row" id="title_inProcess">
                    <p >Actuación en proceso</p>
                    </div>
                    <div class="row">
                        <div class="d-flex flex-row " style="margin-right:50px">
                        <div>
                            <p class="title_tipoResolution">Tipo:Resolución de <br> Sub intendencia</p>
                        </div>

                        <div class="d-flex flex-row justify-content-center  " style="border-left:none;" id="container_adicional_information">
                            <img class="img_tipoResolution" src="./img/svg/file text.svg" alt="" />
                            <div class="d-flex flex-column   ">
                                <p class="text_Resolution">0</p>
                                <p class="text_tipoResolution">Documentos</p>
                            </div>
                        </div>

                        <div class="d-flex flex-row justify-content-center   align-items-center " id="container_adicional_information">
                            <img class="img_tipoResolution" src="./img/svg/user check.svg" alt="" />
                            <div class="d-flex flex-column  align-items-center ">
                                <p class="text_Resolution">Laura Perez</p>
                                <p class="text_tipoResolution">Funcionario(a)</p>
                            </div>
                        </div>

                        <div class="d-flex flex-row justify-content-center    " id="container_adicional_information">
                            <div class="d-flex flex-column  align-items-center">
                                <p class="text_Resolution" style="color: #FF3355;">Tareas</p>
                                <p class="text_Resolution" style="font-size: 10px;margin-left:28px;">0 pendientes</p>
                            </div>
                            <img src="./img/svg/Vector.svg"  class="style_icon_right" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                    <hr>
                    <div class="col-12 d-flex ">
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <div>
                                    <h6 class="title_card" style="margin-left:36px;">Multa Potencial</h6>
                                    <div class="d-flex flex-row ">
                                        <img src="./img/trending up.png" alt="" loading="lazy"
                                            style=" width: 24px;height: 27px; margin-right:12.68px;margin-left:67px" />
                                        <p id="multa" style="font-weight: 600;
                                            font-size: 20px;
                                            line-height: 20px;      
                                            display: flex;
                                            align-items: center;
                                            color: #0E3141;"></p>
                                    </div>
                                </div>

                                <div style="margin-bottom:44px;margin-top:25px;">
                                    <h6 class="title_card" style="margin-left:36px;">Riesgo</h6>
                                    <div class="d-flex flex-row align-items-center">
                                        <div id="label_risk" style="margin-left:65px; margin-right:26.7px;">
                                            <li class="bullets1" style="
                                            color: #FF3355;
                                            list-style:initial;
                                            opacity: 0.2;"><span id="label_level_risk" class="label_level_risk1">Nivel
                                                    Alto</span>
                                            </li>

                                            <li class="bullets2" style="
                                            color: #FFB000;
                                            list-style:initial;;
                                             opacity: 0.2;"><span id="label_level_risk" class="label_level_risk2">Nivel
                                                    Moderado</span></li>

                                            <li class="bullets3" style="
                                            color:  #31CC53;
                                            list-style:initial;
                                            opacity: 0.2;"><span id="label_level_risk" class="label_level_risk3">Nivel
                                                    Leve</span> </li>
                                        </div>

                                        <div id="bars" class="d-flex flex-row-reverse align-items-end">
                                            <div id="bar1" style="width: 6.94px;
                                            height: 46px;
                                            left: 637.21px;
                                            top: 559px;
                                            background:#FF3355;
                                            opacity: 0.2;
                                            border-radius: 5px;"></div>

                                            <div id="bar2" style="width: 6.94px;
                                            height: 33.67px;
                                            left: 619.18px;
                                            top: 571.33px;  
                                            background: #FFB000;
                                            opacity: 0.2;
                                            border-radius: 5px;
                                            margin-right:11.11px;"></div>

                                            <div id="bar3" style="width: 6.94px;
                                            height: 22.76px;
                                            left: 601.15px;
                                            top: 582.24px;
                                            background: #31CC53;
                                            opacity: 0.2;
                                            border-radius: 5px;
                                            margin-right:11.11px"></div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h6 class="title_card" style="margin-left:36px;font-family: Raleway;
                                font-style: normal;
                                font-weight: bold;
                                font-size: 14px;
                                line-height: 20px;
                                align-items: center;
                                color: #969CBA;
                               ">Perfil de funcionarios</h6>

                                    <div class="d-flex flex-row align-items-center justify-content-center" style="width:261px; height:68px; background: #F9FBFC;                
                                        border: 1px solid #466EFE;
                                        margin-top:14px;
                                        box-sizing: border-box;
                                        border-radius: 6px;
                                        margin-bottom:73px;
                                        margin-left:32px;">
                                        <img src="./img/funcionario.png" alt="" loading="lazy"
                                            style=" width: 38.3px;height: 38px;" />
                                        <p style="margin-left:18.7px;margin-top:10px;font-family: Raleway;
                                        font-style: normal;
                                        font-weight: bold;
                                        font-size: 14px;
                                        line-height: 16px;
                                        display: flex;
                                        align-items: center;
                                        color: #0F3041;">${localStorage.getItem('inspectorAuxiliar') }</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6">
                                <div class="row d-flex  justify-content-center">
                                    <div class="col-12 col-lg-3">
                                        <div class="row d-flex justify-content-center mt-100">
                                            <div class="col-md-6">
                                                <div class="progressCircle blue"> <span class="progressCircle-left">
                                                        <span class="progressCircle-bar"></span> </span> <span
                                                        class="progressCircle-right"> <span
                                                            class="progressCircle-bar"></span>
                                                    </span>
                                                    <div class="progressCircle-value">0</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-lg-6" style="margin-left:20px;">
                                        <p class="title_card" style="margin-bottom:0px;font-weight: 600;">Documentos</p>
                                        <p style="font-family: Raleway;
                                            font-style: normal;
                                            // font-weight: 600;
                                            font-size: 11px;
                                            line-height: 20px;
                                            color: #969CBA;">aun no tienes documentos <br> solicitados?</p>
                                    </div>

                                    <div class="col-12 col-lg-1">
                                        <img src="./img/+.png" alt="" style=" width: 20px;height: 20px;" />
                                    </div>
                                </div>
                                <div id="container_archivosSubidos">
                                </div>
                        </div>
                    </div>
                </div>
            </div>     

          </div>
        </div>
      </div>

      <div class="sidebarCase">
        <h6>Estado del caso</h6>
        <div class="div-process d-flex">
          <img src="./img/svg/check.svg" class="checkIcon" alt="Icono check" />
          <div class="detail-process">
            <p class="detail-title">En proceso</p>
            <p class="detail-txt">
              Felicitaciones por crear tu primer caso, no olvides registrar tu
              primera actuación.
              <!-- El 13/12/21 se notificó la inspección. Recuerda que a la fecha de
              hoy 30/04/21 quedan
              <span>7 días</span>
              para iniciar la siguiente actuación -->
            </p>
          </div>
          <img src="./img/svg/copy.svg" class="copyIcon" alt="Icono copiar" />
        </div>
        <hr class="horizontalLine-sidebar" />

        <!-- STATUS copy (inicio)-->
        <div class="status mb-5">
          <div class="status d-flex flex-column">
            <h6 class="title_card">Status</h6>

            <div class="line-content">
              <div class="line">
                <div class="d-flex flex-row" style="height:25px;">
                  <div>
                    <div class="contents" style="background: #466EFE;">
                      <h1
                        style=" position: absolute; font-size: 14px;font-weight: bold;"
                      >
                        1
                      </h1>
                      <p style="font-size: 12px;color: #FFFFFF;">
                        Investigación
                      </p>
                    </div>
                    <p style="font-size: 11px;color:#31CC53; margin-left:30px;">
                      0 actuaciones cerradas
                    </p>
                  </div>
                  <div style="margin-left:13px;">
                    <img src="./img/check.png" alt="" />
                  </div>
                </div>
                <div class="lines"></div>
                <!-- -->
                <div
                  class="d-flex flex-row justify-content-center"
                  style="height:25px;"
                >
                  <div>
                    <div class="contents">
                      <h1 class="numbers">2</h1>
                      <p class="style_text_status">Instrucción</p>
                    </div>
                    <p style="font-size: 11px;color:#31CC53; margin-left:30px;">
                      0 actuaciones cerradas
                    </p>
                  </div>

                  <div style="margin-left:13px;" class="ocultar_img">
                    <img src="./img/check.png" alt="" />
                  </div>
                </div>
                <div class="lines"></div>
                <div
                  class="d-flex flex-row justify-content-center"
                  style="height:25px;"
                >
                  <div>
                    <div class="contents">
                      <h1 class="numbers">3</h1>
                      <p class="style_text_status">Sancionadora</p>
                    </div>
                    <p style="font-size: 11px;color:#31CC53;margin-left:30px;">
                      0 actuaciones cerradas
                    </p>
                  </div>

                  <div style="margin-left:13px;" class="ocultar_img">
                    <img src="./img/check.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- STATUS copy (termino)-->

        <hr class="horizontalLine-sidebar" />
        <div class="div-activities">
          <div class="title d-flex">
            <h6 class="title-left">Actividades</h6>
            <a class="title-right"> Ver todas </a>
          </div>
          <div class="activity-details d-flex">
            <p>Puedes registrar nuevas tareas en la pestaña de actuaciones</p>
            <!-- <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Habitant
              sit lacus mattis.
            </p>
            <img src="./img/svg/btn-right.svg" alt="next button" /> -->
          </div>
        </div>

      </div>

      <div class="footer d-flex">
        <p>
          Copyright © 2021 <strong>sami.</strong>Todos los derechos reservados.
          <span>Términos del Servicio y Políticas de Privacidad</span>
        </p>
        <img src="./img/svg/group.svg" alt="logo" />
      </div>
    </div>
  `;

<<<<<<< HEAD
=======

>>>>>>> 37cd373a23c162a0e48cd6f92403efb271437f29
  // **********  Columna Izquierda (inicio)********** //
  // const materias = viewHome.querySelector("#materias");

  const nameMateria1 = localStorage.getItem("materia1");
  const nameMateria2 = localStorage.getItem("materia2");
  const nameMateria3 = localStorage.getItem("materia3");
  const nameMateria4 = localStorage.getItem("materia4");
  const nameMateria5 = localStorage.getItem("materia5");
  const nameMateria6 = localStorage.getItem("materia6");
  const nameMateria7 = localStorage.getItem("materia7");
  const nameMateria8 = localStorage.getItem("materia8");
  const materia1 = viewHome.querySelector("#materia1");
  const materia2 = viewHome.querySelector("#materia2");
  const materia3 = viewHome.querySelector("#materia3");
  const materia4 = viewHome.querySelector("#materia4");
  const materia5 = viewHome.querySelector("#materia5");
  const materia6 = viewHome.querySelector("#materia6");
  const materia7 = viewHome.querySelector("#materia7");
  const materia8 = viewHome.querySelector("#materia8");

  if (nameMateria1 == null) {
    materia1.classList.add("hide");
  } else {
    materia1.classList.remove("hide");
  }

  if (nameMateria2 == null) {
    materia2.classList.add("hide");
  } else {
    materia2.classList.remove("hide");
  }

  if (nameMateria3 == null) {
    materia3.classList.add("hide");
  } else {
    materia3.classList.remove("hide");
  }

  if (nameMateria4 == null) {
    materia4.classList.add("hide");
  } else {
    materia4.classList.remove("hide");
  }

  if (nameMateria5 == null) {
    materia5.classList.add("hide");
  } else {
    materia5.classList.remove("hide");
  }

  if (nameMateria6 == null) {
    materia6.classList.add("hide");
  } else {
    materia6.classList.remove("hide");
  }

  if (nameMateria7 == null) {
    materia7.classList.add("hide");
  } else {
    materia7.classList.remove("hide");
  }

  if (nameMateria8 == null) {
    materia8.classList.add("hide");
  } else {
    materia8.classList.remove("hide");
  }


 
        //Ingresar comentarios al textarea
        const edit = viewHome.querySelector("#btnEditComment");
        const save = viewHome.querySelector("#btnSaveComment");
        const pComment = viewHome.querySelector("#pComment");
        const divComment = viewHome.querySelector("#textareaContainer");
        const txtComment = viewHome.querySelector("#txtComment");
        const countComment = viewHome.querySelector("#countComment");
        
        pComment.addEventListener("click", () => {
          pComment.classList.add("hide");
          divComment.classList.remove("hide");
          txtComment.classList.remove("hide");
          txtComment.disabled = false;
          countComment.classList.remove("hide");
          save.classList.remove("hide");
          edit.classList.add("hide");
        })

        edit.addEventListener("click", ()=>{
          pComment.classList.add("hide");
          divComment.classList.remove("hide");
          txtComment.classList.remove("hide");
          txtComment.disabled= false ;
          countComment.classList.remove("hide");
          save.classList.remove("hide");
          edit.classList.add("hide");
        });

        save.addEventListener("click", ()=> {
          txtComment.disabled= true ;
          edit.classList.remove("hide");
          save.classList.add("hide");
        })



//  agregar archivos subidos al home
    let getFile = localStorage.getItem('file')  

     
    // localStorage file date orden
     


    const  container_archivosSubidos = viewHome.querySelector("#container_archivosSubidos");
    container_archivosSubidos.innerHTML = `
    <div><button>${getFile}</button>
    </div>
    `
//  calcular el nivel de riesgo
//   Cuantos values me traigo

<<<<<<< HEAD
  //         //número aleatorio
  //         function aleatorio(inferior, superior) {
  //             var numPosibilidades = superior - inferior;
  //             var aleatorio = Math.random() * (numPosibilidades + 1);
  //             aleatorio = Math.floor(aleatorio);
  //             return inferior + aleatorio;
  //         }

  //         const multa_aleatoria = (x) =>  {
  //             return x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  //           }
  //           console.log(multa_aleatoria(aleatorio(5000, 250000)));

  //           //Registar multa alearotia en input
  //           const multa = viewHome.querySelector("#multa");
  //           multa.innerHTML='S/' + multa_aleatoria((aleatorio(5000, 250000)))

  //           //nivel de riego
  //           const sizeCheck = localStorage.getItem("checked");
  //           if(sizeCheck>=4){
  //             //Si el usuario marca 4 o más materias debe aparecer riesgo alto
  //             const  label_level_risk = viewHome.querySelector(".label_level_risk1");
  //             label_level_risk.style.fontSize = '14px';
  //             const  bullets = viewHome.querySelector(".bullets1");
  //             bullets.style.opacity = 1;
  //             const  bar1 = viewHome.querySelector("#bar1");
  //             bar1.style.opacity = 1;
  //             console.log("riesgo alto")

  //         }else if (sizeCheck>=2){
  //              //Si marca 2 o 3 riesgo medio
  //              const  label_level_risk = viewHome.querySelector(".label_level_risk2");
  //              label_level_risk.style.fontSize = '14px';
  //              const  bullets = viewHome.querySelector(".bullets2");
  //              bullets.style.opacity = 1;
  //              const  bar2 = viewHome.querySelector("#bar2");
  //              bar2.style.opacity = 1;
  //             console.log("riesgo medio")

  //         }else{
  //             // solo 1 materia debe aparecer como riesgo bajo
  //             const  label_level_risk = viewHome.querySelector(".label_level_risk3");
  //             label_level_risk.style.fontSize = '14px';
  //             const  bullets = viewHome.querySelector(".bullets3");
  //             bullets.style.opacity = 1;
  //             const  bar3 = viewHome.querySelector("#bar3");
  //             bar3.style.opacity = 1;
  //             console.log("riesgo bajo")
  //         }

  return viewHome;
};
=======
//   // **********  Columna Izquierda (termino)  ********** //

//   //evento list para utenticar
//   const autenticar = firebase.auth();
//   autenticar.onAuthStateChanged((user) => {
//     if (user) {
//       console.log("signin");
//     } else {
//       console.log("signup");
//     }
//   });


// // //leer documentos
// // firebase.firestore()
// // .collection("users").onSnapshot((querySnapshot) => {
// //   fecha_orden.innerHTML='';
// //   querySnapshot.forEach((doc) => {
// //     //   console.log(`${doc.id} => ${doc.data().check1}`);
// //       fecha_orden.innerHTML += `
// //         <h6 class="title_card">Fecha de creación</h6>
// //         <p style="font-size: 14px;">${doc.data().fecha}</p>
// //         <h6 class="title_card">Orden de inspección</h6>
// //         <p style="font-size: 14px;">${doc.data().orden}</p>
// //         <h6 class="title_card">Materias</h6>
// //       `
// //         });
// //       });
   
    //   //habilitar input
    //   const editar = viewHome.querySelector("#edit");
    //   editar.addEventListener("click", ()=>{
    //     const description = viewHome.querySelector("#description");
    //     if(description .disabled == true)	{
	// 	      description.disabled=false;
	//          }
    //           else
    //     {
    //       description.disabled=true;
    //     }
    //         });

        //número aleatorio
        function aleatorio(inferior, superior) {
            var numPosibilidades = superior - inferior;
            var aleatorio = Math.random() * (numPosibilidades + 1);
            aleatorio = Math.floor(aleatorio);
            return inferior + aleatorio;
        }

        const multa_aleatoria = (x) =>  {
            return x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          }
          console.log(multa_aleatoria(aleatorio(5000, 250000))); 

          //Registar multa alearotia en input
          const multa = viewHome.querySelector("#multa");
          multa.innerHTML='S/' + multa_aleatoria((aleatorio(5000, 250000)))

          //nivel de riego
          const sizeCheck = localStorage.getItem("checked");
          if(sizeCheck>=4){
            //Si el usuario marca 4 o más materias debe aparecer riesgo alto
            const  label_level_risk = viewHome.querySelector(".label_level_risk1");
            label_level_risk.style.fontSize = '14px';
            const  bullets = viewHome.querySelector(".bullets1");
            bullets.style.opacity = 1;
            const  bar1 = viewHome.querySelector("#bar1");
            bar1.style.opacity = 1;
            console.log("riesgo alto")

        }else if (sizeCheck>=2){
             //Si marca 2 o 3 riesgo medio 
             const  label_level_risk = viewHome.querySelector(".label_level_risk2");
             label_level_risk.style.fontSize = '14px';
             const  bullets = viewHome.querySelector(".bullets2");
             bullets.style.opacity = 1;
             const  bar2 = viewHome.querySelector("#bar2");
             bar2.style.opacity = 1;
            console.log("riesgo medio")

        }else{
            // solo 1 materia debe aparecer como riesgo bajo
            const  label_level_risk = viewHome.querySelector(".label_level_risk3");
            label_level_risk.style.fontSize = '14px';
            const  bullets = viewHome.querySelector(".bullets3");
            bullets.style.opacity = 1;
            const  bar3 = viewHome.querySelector("#bar3");
            bar3.style.opacity = 1;
            console.log("riesgo bajo")
        }

        //ir actuacion

        const actuacion =viewHome.querySelector("#actuacion");
        actuacion.addEventListener("click", ()=> {
            window.location.hash = "#/actuacion";
        })
    
    return viewHome;
  };
>>>>>>> 37cd373a23c162a0e48cd6f92403efb271437f29

