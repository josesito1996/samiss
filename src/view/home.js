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
          <div class="btn-actions d-flex">
            <p class="moreIcon">+</p>
            <p>Actuación</p>
          </div>
        </div>
        <div class="tags-case d-flex">
          <ul class="">
            <li><a href="#">Datos</a></li>
            <li><a href="#">Actuaciones</a></li>
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

  //     //agregar archivos subidos al home
  //     let getFile = localStorage.getItem('file')

  //     //localStorage file date orden

  //     const  container_archivosSubidos = viewHome.querySelector("#container_archivosSubidos");
  //     container_archivosSubidos.innerHTML = `
  //     <div><button>${getFile}</button>
  //     </div>
  //         `
  //   //calcular el nivel de riesgo
  //   //Cuantos values me traigo

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

  //       //habilitar input
  //       const editar = viewHome.querySelector("#edit");
  //       editar.addEventListener("click", ()=>{
  //         const description = viewHome.querySelector("#description");
  //         if(description .disabled == true)	{
  // 		      description.disabled=false;
  // 	         }
  //               else
  //         {
  //           description.disabled=true;
  //         }
  //             });

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
          countComment.classList.remove("hide");
          save.classList.remove("hide");
          edit.classList.add("hide");
        })

        edit.addEventListener("click", ()=>{
          pComment.classList.add("hide");
          divComment.classList.remove("hide");
          txtComment.classList.remove("hide");
          countComment.classList.remove("hide");
          save.classList.remove("hide");
          edit.classList.add("hide");
        });

        save.addEventListener("click", ()=> {
          txtComment.value="";
          divComment.classList.add("hide");
          txtComment.classList.add("hide");
          countComment.classList.add("hide");
          pComment.classList.remove("hide");
          edit.classList.remove("hide");
          save.classList.add("hide");
        })




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

