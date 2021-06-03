// import { addTask } from "../view-controller/home-controller.js";
// import { storage } from '../firebase/firebase.js';

// import { containerReport } from "../reports/case-report/caseReport.js";

export default () => {
  const viewHome = document.createElement("div");
  const inspectionDate = localStorage.getItem("date");
  let inspecDate = inspectionDate.split("-");
  let reversedDate = inspecDate.reverse();
  let dateCreacion = reversedDate.join("-");

  const inspectionOrder = localStorage.getItem("order");
  const etapa_actuacion = localStorage.getItem("etapa");
  const tipo_actuacion = localStorage.getItem("tipo");


  const date_actuacion = localStorage.getItem("date_actuacion");

  //condicional si el value del local strogae esta vacio

  // fecha actual
  let date = new Date();

  let days = date.getDate();
  let months = date.getMonth() + 1;
  let years = date.getFullYear();

  if (months < 10) {
    const fecha1 = `${days}/0${months}/${years}`;
    localStorage.setItem("fechaActual", fecha1);
    console.log(`${days}/0${months}/${years}`);
  } else {
    const fecha2 = `${days}/${months}/${years}`;
    console.log(`${days}/${months}/${years}`);
    localStorage.setItem("fechaActual", fecha2);
  }
  // Imprime: 9/6/2019

  const year = localStorage.getItem("year");
  const day = localStorage.getItem("day");
  const month = localStorage.getItem("month");

  const funcionario_actuacion = localStorage.getItem("funcionario_actuacion");

  const descripcion_actuacion = localStorage.getItem("descripcion_actuacion");

  viewHome.innerHTML = `


    <div class="wrapper">

      <div class="header">

        <div class="header-left d-flex">
        <a href="#/home">
          <img src="./img/svg/logo.svg" class="logo" alt="logo" />
        </a>
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

          
          <div class="ocultar" id="container_actuacion">
          <div class="btn-actions d-flex" id="actuacion">
          <p class="moreIcon">+</p>
          <p>Actuación</p>
        </div>
          </div>
        </div>
        <div class="tags-case d-flex">
        
            <div id="link_datos"  class="links">Datos</div>
            <div id="link_actuaciones" class="links">Actuaciones</div>
            <div id="link_documentos" class="links">Documentos</div>
        
        </div>
        <div  id="main-datos">
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
            
                class="txt-comment hide"
                disabled
              ></textarea>
              <p id="countComment" class="hide">(Máximo 200 caracteres)</p>

            </div>
            <h6 class="text-blue-opacity">Fecha de creación</h6>
            <!--dateCreacion-->
            <p>${dateCreacion}</p>
            <h6 class="text-blue-opacity">Orden de inspección</h6>
            <!--inspectionOrder-->
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
          <div class="detail-process-performance d-flex  justify-content-center">
            <div class="card-process bg-white ">
                <div class="col-12 " id="inProcess">
                    <div class="row" id="title_inProcess">
                    <p >Actuación en proceso</p>
                    </div>
                    <div class="row">
                        <div class="d-flex flex-row "  style="margin-right:50px">
                        <div id="casoNuevo">
                            <p class="title_tipoResolution">Tipo de actuacion: Caso Nuevo </p>
                        </div>
                        <div id="casoSeleccionado" class="ocultar">
                            <p class="title_tipoResolution">Tipo:${tipo_actuacion} </p>
                        </div>
                         
                            <div  id="container_actuacionenproceso">
                              <div id="actuacion"><img src="./img/svg/+actuacion.svg" style="margin-right:20px;"/> Actuación</div>
                            </div>
                         
                        <div class="ocultar" id="flex-container_datos" >
                        <div class="d-flex flex-row justify-content-center  " style="border-left:none;" id="container_adicional_information">
                            <img class="img_tipoResolution" src="./img/svg/file text.svg" alt="" />
                            <div class="d-flex flex-column   ">
                            <div id="ceroDocumentos">
                                <p class="text_Resolution">0</p>
                                <p class="text_tipoResolution">Documentos</p>
                            </div>

                            <div id="sumaTotalDocumentos" class='ocultar'>
                                
                                </div>
                            </div>
                        </div>

                        <div class="d-flex flex-row justify-content-center   align-items-center " id="container_adicional_information">
                            <img class="img_tipoResolution" src="./img/svg/user check.svg" alt="" />
                            <div class="d-flex flex-column  align-items-center ">
                                <p class="text_Resolution">${funcionario_actuacion}</p>
                                <p class="text_tipoResolution">Funcionario(a)</p>
                            </div>
                        </div>

                        <div class="d-flex flex-row justify-content-center    " id="container_adicional_information">
                            <div class="d-flex flex-column  align-items-center">
                                <p class="text_Resolution" style="color: #FF3355;">Tareas</p>
                                <div id="ceroPendiente">
                                <p class="text_Resolution"  style="font-size: 10px;margin-left:28px;"> 0 Pendientes</p>
                                </div>
                                <div id="sumaTotalPendiente" class='ocultar'>
                                
                                </div>
                            </div>
                            <img src="./img/svg/Vector.svg"  class="style_icon_right" alt="" />
                        </div>
                        </div> 
                    </div>
                    </div>
                </div>
                    <hr>
                    <div class="container-mainCaso d-flex ">

                              <div class="mainCaso-left">
                                <!-- Multa Potencial -->
                                <div class="div-multa">
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
                                <!-- -->

                                <!-- div-Riesgo -->
                                <div class="div-riesgo">
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
                                <!-- -->
                              </div>

                              <div class="mainCaso-right">
                              <!--funcionario homeCase-->
                                <div class="div-funcionario">
                                    <h6 class="title_card" style="margin-left:36px;font-family: Raleway;
                                font-style: normal;
                                font-weight: bold;
                                font-size: 14px;
                                line-height: 20px;
                                align-items: center;
                                color: #969CBA;
                                    ">Perfil de funcionarios</h6>

                                    <div class="d-flex colum" style="cursor:pointer;">
                                        <div class="d-flex flex-row align-items-center justify-content-center" id="container_funcionario_homeCaso" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                                            <img src="./img/svg/avatar_home.svg" alt="" loading="lazy"
                                                style=" width: 38.3px;height: 38px;" />
                                            <p >${localStorage.getItem(
                                              "inspectorAuxiliar"
                                            )}</p>
                                        </div>
                                    
                                    <!-- -->

                                      <!-- Modal Infromación Funcionario -->
                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content" style="width:488px; height:367px;">
                                              <div class="row">
                                                <div class="d-flex flex-row">
                                                  <div class="padding_funcionario" style="width:150px;position: relative;"/>
                                                  <img src="./img/svg/hombre.svg" class="funcionario" alt="" loading="lazy"/>
                                                  <div class="fondo_camera">
                                                  </div>
                                                  <img src="./img/svg/camera on.svg" class="camera" alt="" loading="lazy"/>
                                                  
                                                  </div>
                                                  <div class="padding_funcionario_modal" style="width:338px;">
                                                  <div class="d-flex flex-column   justify-content-center" >
                                                      <div class="row" style= "width:338px;">
                                                      <button type="button" ><img src="./img/svg/x.svg" alt="" loading="lazy" id="close_modal_funcionario" data-bs-dismiss="modal"
                                                      aria-label="Close"/></button>
                                                      </div>
                                                      <div class="row" style="border-bottom:1px solid #BDBDBD; width:187px;margin-bottom:13px;" >
                                                        <p class="modal_title_funcionario" style="line-height: 14px;margin-bottom:0px;" >Funcionario actual</p>
                                                        <p class="nameFuncionario_modal">${localStorage.getItem(
                                                          "inspectorAuxiliar"
                                                        )}</p>
                                                      </div>
                                                      <div class="row">
                                                        <div class="d-flex flex-row" style="margin-bottom:25px;">
                                                          <div class="modal_etapas" style="margin-right:20px;">
                                                          <p class="modal_title_funcionario" style="margin-bottom:0px;" >Etapa</p>
                                                            <div class="d-flex flex-row align-items-center">
                                                              <img src="./img/svg/!.svg" alt="" loading="lazy"/>
                                                              <p class="modal_txt_funcionario" style="margin-bottom:0px;" >&nbsp; &nbsp; Investigación</p>
                                                            </div>
                                                          </div>
                                                          <div class="modal_cantidadCasos">
                                                          <p class="modal_title_funcionario"  style="margin-bottom:0px;">Cantidad de casos</p>
                                                            <div class="d-flex flex-row align-items-center">
                                                              <img src="./img/svg/list modal.svg" alt="" loading="lazy"/>
                                                              <p class="modal_txt_funcionario" style="margin-bottom:0px;" >&nbsp; &nbsp; 0 casos</p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div class="row" style="margin-bottom:22px;">
                                                      <p class="modal_title_funcionario" style="margin-bottom:0px;" >Multas promedio</p>
                                                      <div class="d-flex flex-row">
                                                          <div class="modal_up">
                                                            <div class="d-flex flex-row" style="width:135px;">
                                                              <img src="./img/svg/trending up modal.svg" alt="" loading="lazy"/>
                                                              <p class="modal_txt_funcionario" style="margin-bottom:0px;margin-left:12px;" >${localStorage.getItem(
                                                                "multa1"
                                                              )}</p>
                                                            </div>
                                                          </div>
                                                          <div class="down">
                                                            <div class="d-flex flex-row" style="width:135px;">
                                                              <img src="./img/svg/trending down modal.svg" alt="" loading="lazy"/>
                                                              <p class="modal_txt_funcionario" style="margin-bottom:0px;margin-left:12px;" >${localStorage.getItem(
                                                                "multa2"
                                                              )}</p>
                                                            </div>
                                                          </div>
                                                        
                                                        </div>
                                                      </div>
                                                      <div class="row" style="margin-bottom:22px;">
                                                        <p class="modal_title_funcionario" style="margin-bottom:0px;" >Ranking por multas</p>
                                                           <div class="d-flex flex-row">
                                                           <img src="./img/svg/user check modal.svg" style="margin-right:16px;" alt="" loading="lazy"/>
                                                           <p class="modal_txt_funcionario" style="margin-bottom:0px;" >Puesto &nbsp; ${localStorage.getItem(
                                                             "aleatorio"
                                                           )} &nbsp; de 10</p>
                                                           </div> 
                                                      </div>
                                                      <div class="row">
                                                        <p class="modal_title_funcionario" style="margin-bottom:0px;">Califica a tu funcionario</p>
                                                        
                                                        <div class="star-container">
                                                        <span style ="width:230px;"> </span>
                                                        <div class="star" data-val="5"></div>
                                                        <div class="star" data-val="4"></div>
                                                        <div class="star" data-val="3"></div>
                                                        <div class="star" data-val="2"></div>
                                                        <div class="star" data-val="1"></div>
                                                       
                                                      </div>
                                                      
                                                       
                                                        </div>
                                                      </div>
                                                  </div>

                                                  </div>
                                                </div>
                                              </div>
                                    </div>
                                </div>
                              </div>

                              
                                <!-- div-sunafil -->

                                <div class="div-cardSunafil d-flex">
                                  <img src="./img/sunafil.jpg" style="height:16px; width:64px;"/>
                                  <div class="cardSunafil d-flex">
                                    <div class="cardSunafil-body d-flex">
                                      <img src="./img/svg/alert-circle-red.svg"/>
                                      <p id="pSunafil"></p>
                                    </div>
                                    <div class="cardSunafil-footer d-flex">
                                      <p>Ver más</p>
                                      <img src="./img/svg/vector.svg"/>
                                    </div>
                                  </div>
                                </div>


                                <!-- -->
                                </div>

      <div style="margin-top:50px; text-align:center;">
      <!--botón reporte -->
      <button id="btnReport" 
        style="font-size:11px; 
        border-radius:5px;
        padding:5px 7px;
        color: white;
        margin-left:-330px;
        background: #FF3355;">
        Generar Reporte
      </button>

      <button id="btnShowCreateCase" 
        style="font-size:11px; 
        border-radius:5px;
        padding:5px 10px;
        color: white;
        margin-left:-220px;
        background: #FF3355;">
        +  Crear Caso
      </button>
    </div>




                            <!-- -->
                            <div class="col-12 col-lg-6 hidde">
                                <div class=" row d-flex  justify-content-center">
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
        <div class="ocultar" id="main-actuaciones">
            <!--MAIN-INFORMATION-->

            <!--Menú botones-->

            <div class="row" style="margin-top:47px;" >

              <div class="d-flex flex-row" id="parent_buttons_etapas">
                  <div id="button_total" class="buttons_etapa">
                    Total
                  </div>

                  <div id="buttons_etapa1" class="buttons_etapa">
                  <strong>ETAPA 1:</strong>&nbsp; Investigación
                  </div>

                  <div id="buttons_etapa2" class="buttons_etapa">
                    <strong>ETAPA 2:</strong>&nbsp; Instrucción
                  </div>

                  <div id="buttons_etapa3" class="buttons_etapa">
                    <strong>ETAPA 3:</strong>&nbsp; Sancionadora
                  </div>
              
              </div>

            </div>

           <div id="linea_grey"></div> 
          <div class="row" style="margin-top:19px"  >
            <div   id="container_total">
               <div class="row">
              <!--COLUMNA IZQUIERDA-->
                <div class="col-12 col-lg-1" id="container_line_time">
                  <div class="container_line_time">
                    <div id="year"><span>${year}</span></div>
              
                    <div class="timeline">
                      <div class="container left">
                        <div class="content">
                        <div id="day">${day}</div>
                        <div id="month">${month}</div>
                        </div>
                      </div>
                    </div>
                    <div class= "timeLineAfter"></div>
                  

                  </div>
                </div>     
          <!--COLUMNA DERECHA-->
                <div class="col-12 col-lg-11" id="container_actuacion_head">
                  <div class="container_actuacion_head">
                    <!--primera-fila-->
                    <div class="row">
                    <!--etapa_actuacion-->
                    <div id="etapas"><span></span></div>
                    </div>
                    
                    <!--segunda-fila-->
                    <div class=" d-flex  flex-row  justify-content-center" >
                        
                        <!--trae datos de crear actuacion-->
                        <div class="col-12 col-lg-3"   id="container_adicional_information_actuacion" style="margin-left:55px">
                          <p class="text_tipoResolution_actuacion_principal" style="margin-bottom:0px;">ACTUACIÓN</p>
                          <div id="actuacion_tipo"  style="margin-left:0px;"><span>Tipo:${tipo_actuacion}</span></div>
                        </div>
                          <!--descripcion-->
                        <div class="col-12 col-lg-5"   >
                          <div id="descripcion_actuacion_get" style="margin-left:50px">
                            <p class="text_tipoResolution_actuacion_principal" style="margin-bottom:0px;margin-top:11px;">Descripción</p>
                            <p style= "font-size:12px;font-weight: 600;" id="input_setDescripcion_actuacion"  >${descripcion_actuacion}</p>
                          </div>
                          <div id="descripcion_actuacion_edit" class="ocultar" style="margin-left:50px">
                                <div class="title-description d-flex">
                                    <p class="text-blue-opacity" id="title_descripcion_actuacion" >Descripción</p>

                                    <img
                                      id="btnEditComment_actuacion"
                                      src="./img/svg/edit actuacion descripcion.svg"
                                      class="btnEditComment_actuacion"
                                      alt="icon edit"
                                    />
                                    <img
                                      id="btnSaveComment_actuacion"
                                      src="./img/svg/save_actuacion.svg"
                                      class="btnSaveComment hide"
                                      alt="icon edit"
                                    />
                                  </div>
                                  <p id="pComment_actuacion" class="ptxt-comment">
                                  Si deseas escribir algo puntal sobre la actuación puedes hacerlo <strong >aquí</strong>.Recuerda que puedes edicarlo en cualquier momento haciendo click en el lápiz.
                                  </p>
                                  <div id="textareaContainer_actuacion" class="textarea-container hide">
                                    <textarea
                                      name="txtComment"
                                      id="txtComment_actuacion"
                                      placeholder="Escribir aquí..."
                                      cols=""
                                      rows=""
                                  
                                      class="txt-comment_actuacion hide"
                                      disabled
                                    ></textarea>
                                    <p id="countComment_actuacion"  class="hide">(Máximo 200 caracteres)</p>
                                </div>
                          </div>
                        </div>
                      
                          <!--funcionario-->
                        <div class="col-12 col-lg-4"  id="container_adicional_information_actuacion">
                            <div class="d-flex justify-content-end align-items-center ">
                                      <img class="img_tipoResolution" src="./img/svg/user check.svg" alt="" />
                                      <div class="d-flex flex-column  align-items-center" style="margin-right:10px;">
                                          <p class="text_Resolution" style="margin-right:25px;">${funcionario_actuacion}</p>
                                          <p class="text_tipoResolution_fila"  style="margin-bottom:0px;padding-right:35px">Funcionario (a)</p>
                                      </div>
                            </div>
                        </div>
                        
                    </div>
              
                  <!--tercera-fila-->
                    <div class="d-flex  flex-row align-items-center justify-content-center" id="container_3Line_actuacion" >
                  <!--archivos subidos-->
                            <div class="col-12 col-lg-4">
                              <div class="d-flex flex-row align-items-center" style="border-left:none;margin-left:5px;" id="container_adicional_information_actuacion">
                                  <img class="ocultar" id="mostrarCli" src="./img/svg/cli.svg" alt="" />
                                  <div class="d-flex flex-column">
                                    <p class="text_tipoResolution_actuacion_principal" style="margin-bottom:0px;margin-top:5px;font-size: 9px;">PRINCIPAL</p>
                                    <div class="d-flex flex-row align-items-center justify-content-center ">
                                    <p id="txt_carga">Cargar documento</p>
                                      <label for="file-upload" id="subir" >
                                      <img  src="./img/svg/carga.svg" alt="" />
                                        </label>
                                        <input id="file-upload" onchange='cambiar()' type="file" style='display: none;'/>
                                        <div id="info"></div>
                                        <div>
                                      
                                        </div>
                                      </div>
                                  </div>
                              </div>
                            </div>

                              <div class="col-12 col-lg-8 ">
                                <div class="d-flex flex-row ">
                    <!--nombre de usuario-->
                                <div class="ocultar" id="usuario">
                                  <div class="d-flex flex-row justify-content-center   align-items-center " id="container_adicional_information_actuacion" style="margin-top:4px;margin-right:18px;">
                                      <img class="img_tipoResolution" src="./img/svg/avatar.svg" alt="" />
                                      <div class="d-flex flex-column">
                                      <p class="text_Resolution">Subido por Alonso</p>
                                        <p class="text_tipoResolution_fila">${localStorage.getItem(
                                          "fechaActual"
                                        )}</p>
                                      </div>
                                  </div>
                                </div>
                    <!--tareas-->
                                <div class="ocultar" id="conTareas" >
                                  <div class="d-flex flex-row justify-content-center" style="border-left:none;margin-right:15px;" id="container_adicional_information_actuacion">
                                      <img class="img_tipoResolution_actuacion" src="./img/svg/list.svg" alt="" />
                                      <div class="d-flex flex-column" style="margin-top:5px;">
                                          <p class="text_Resolution">0 Tareas</p>
                                          <p class="text_tipoResolution_fila1">0 completadas</p>
                                      </div>
                                  </div>
                                </div>  
                    <!--Sin tareas -->
                                <div id="Sintareas" >
                                  <div class="d-flex flex-row justify-content-center  align-items-center " style="border-left:none;" id="container_adicional_information_actuacion">
                                      <img class="img_tipoResolution_sinDoc" src="./img/svg/noList.svg" alt="" />
                                        <p class="text_tipoResolution_fila2"  style="margin-bottom:0px;">Aún sin tareas</p>
                                  </div>
                                </div> 
                              
                    <!--Documentos--> 
                              <div class="ocultar" id="conDocumentos">         
                                <div class="d-flex flex-row justify-content-center  " style="border-left:none;" id="container_adicional_information_actuacion">
                                    <img class="img_tipoResolution_actuacion" src="./img/svg/file text.svg" alt="" />
                                    <div class="d-flex flex-column"  style="margin-top:5px;">
                                        <p class="text_Resolution">1 Documentos</p>
                                        <p class="text_tipoResolution_fila1">De tareas</p>
                                    </div>
                                </div>
                              </div>

                    <!--Sin Documentos--> 
                              <div id="Sindocumentos" >
                                <div class="d-flex flex-row  " style="border-left:none;" id="container_adicional_information_actuacion">
                                    <img class="img_tipoResolution_sinDoc" src="./img/svg/noDoc.svg" alt="" />
                                      <p class="text_tipoResolution_fila2"  style="margin-bottom:0px;">Aún sin documentos</p>
                                </div>
                              </div> 
                            </div>
                          </div>
                  </div>

                  </div>
                  <!--Tareas de la actuación --> 
                  <div class="container_task">
                      <!-- TABLA -->
                      <div class="createTask d-flex">
                          <div id="container_table" class="container-table" style="margin-top:40px;"> 
                          <table class="table table-hover table-createTask">
                            <thead id="table-head" class="hidde">
                              <tr class="thTable-createTask">
                                <th scope="col">Tareas</th>
                                <th scope="col">Documentos</th>
                                <th scope="col">Equipo</th>
                                <th scope="col">Registrado</th>
                                <th scope="col">Vencimiento</th>
                                <th scope="col">Estado</th>
                              </tr>
                            </thead>

                            <tbody id="tableTask">

                            </tbody>
                          </table>


                          </div>
                          <div class="container-btnCreateTask d-flex">
                              <button
                                id="showModal_taskform"
                                type="button"
                                class="d-flex"
                                data-bs-toggle="modal"
                                data-bs-target="#newTaskModal"
                                data-bs-whatever="@mdo">
                                    <p>Crear tarea</p>
                                    <img src="./img/svg/+_red.svg" class="" alt="agregar" />
                                </button>
                            </div>
                      </div>
                  </div>

                </div>

                </div>
            </div>

            <div class="ocultar" id="container_etapa1">
              <div style="width:800px; height:600px; background: #FFFFFF;" > </div>
            </div>
          
            <div class="ocultar" id="container_etapa2"> 
            <div style="width:800px; height:600px; background: #FFFFFF;" > </div>
            </div>
            
            <div class="ocultar" id="container_etapa3">
            <div style="width:800px; height:600px; background: #FFFFFF;" > </div>
            </div>

          </div>

        </div> 

        <div class="ocultar" id ="main-documentos" >

        <!---BOTONES CANTIDAD DE ACTUACION, DOCUMENTOS Y TAREAS--->
        <div class="d-flex flex-row" id="container_total_mainGeneral"  >

        <div class="d-flex flex-row align-items-center justify-content-center" id="container_total_general">
        <p id="total_head_documentos">Total de Actuaciones</p>
        <p id="total_number_documentos">01</p>
        </div>

        <div class="d-flex flex-row align-items-center justify-content-center" id="container_total_general">
        <p id="total_head_documentos">Total de Documentos</p>
        <p id="total_number_documentos">01</p>
        </div>

        <div class="d-flex flex-row align-items-center justify-content-center" id="container_total_general">
        <p id="total_head_documentos">Total de Pendientes</p>
        <p id="total_number_documentos" style="color:red;">01</p>
        </div>

        </div>
        <!--BUSCADORES--->
        <div class="d-flex flex-row justify-content-between align-items-center" id="styles_container_buscador">
          <div class="d-flex flex-row ">
            <ul class="d-flex flex-row mb-0">
              <li class="me-3 ">
                <a id="style_a_doc" href="#/home">
                  Por Etapa <img  src="./img/svg/down_doc.svg" alt="" />
                </a>
              </li >

              <li class="me-3">
                <a id="style_a_doc" href="#/home" >
                  Por mes/año <img  src="./img/svg/down_doc.svg" alt="" />
                </a>
              </li>

              <li class="me-3">
                <a  id="style_a_doc" href="#/home">
                  Exportar <img  src="./img/svg/download.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>

          <div>
          <div class="input-group justify-content-between" id="style_buscar">
            <div class="form-outline">
              <input type="search" id="search_doc" placeholder="Buscar por texto" />
            </div>
            <button type="button" class="btn">
            <img  src="./img/svg/search_doc.svg" alt="" />
            </button>
          </div>
          </div>
        </div>
             <!--DOCTUMENTOS--->
        <div class="row" id="" style="background: #F9FBFC;  " >

          <div class="d-flex flex-row  align-items-center" style="height:84px;">

            <div class="d-flex flex-row" style="margin-left:30px;">
              <div>
              <img  src="./img/svg/down_doc_list.svg" id="mostrar_tareas" alt="" />
              <img  src="./img/svg/up_doc_list.svg" class="ocultar" id="here_tareas" alt="" />
              </div>
              <div style="margin-left:19px;">
                <p class="text_tipoResolution_fila1" style="margin-bottom:10px;">Actuacion</p>
                <p class="text_Resolution">Tipo:${tipo_actuacion}</span></p>
              </div>
            </div>


            <div id="informationDoc_ocultar">
              <div class="d-flex flex-row"  style="margin-left:41px;">
                <div>
                <img  src="./img/svg/cli.svg" alt="" />
                </div>

                <div style="margin-left:10px;">
                  <p class="text_tipoResolution_fila1" style="margin-bottom:10px;font-size: 9px;">PRINCIPAL</p>
                    <div class="d-flex flex-column ">
                      <div id="name_info" style="width: 183.58px;height: 15px;">
                      </div>
                    </div>
                </div>
              </div>
            </div> 

            <div class="d-flex flex-row justify-content-center align-items-center" style="margin-right:36px;">

            <div>
              <div class="progressCircle1 red"> <span class="progressCircle1-left">
                      <span class="progressCircle1-bars"></span> </span> <span
                      class="progressCircle1-right"> <span
                      class="progressCircle1-bar"></span>
                    </span>
                  <div class="progressCircle1-value">1/3</div>
              </div>
            </div>

              <div style="margin-left:12px;">
                <p class="text_tipoResolution_fila1" style="margin-bottom:0px;font-size: 11px;width:123px;">DOCS PENDIENTES</p>
                <p class="show_number_tarea" >01 tarea</p>
              </div>

            </div>

              <div class="d-flex flex-row justify-content-center align-items-center">

                <div  id="usuario_documentos">
                  <div class="d-flex flex-row justify-content-center   align-items-center " id="container_adicional_information_actuacion" style="margin-top:4px;margin-right:18px;">
                      <img  src="./img/svg/avatar.svg" style ="margin-right:5px;" alt="" />
                      <p class="text_Resolution">${localStorage.getItem(
                        "name"
                      )}</p>
                  </div>
                </div>

              </div>

          </div>

          <div class="ocultar" id="tareas_ver">
          <div class="d-flex flex-row">

          <div class="d-flex flex-column">

          <!--principal actuacion-->

        
            <div id="column_izquierda_documentos" >
              <div>
                <p id="title_principal">PRINCIPAL</p>
                <div id="style_generalContainer_principal" >
                <div class="d-flex flex-row justify-content-between" id="container_principal">
                
                  <div style="width: 231px;height: 21px;">
                  <p class="styles_principal"><strong>Principal:</strong></p>
                  <p class="styles_principal">${localStorage.getItem(
                    "tipo"
                  )}</p>
                  </div>

                  <div style="width: 61px;height: 21px;">
                  <p class="styles_principal"><strong>Vence:</strong></p>
                  <p id="date_documentos">${localStorage.getItem(
                    "fechaActual"
                  )}</p>
                  </div>

                </div>
                <div class='doc_select'>
                <div class="d-flex flex-row align-items-center " id="container_doc_princial" style="height: 59px;">
                <p style="margin-left:24px;
                  font-family: Raleway;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 12px;
                  line-height: 14px;
                margin-right:12px;

                  
                  /* Primary Blue */
                  
                  color: #0F3041;" >01.</p>
                  <label for="file-upload" id="subir" style="margin-left:0px;">
                  <img  src="./img/svg/clicdoc.svg" alt="" />
                    </label>
                    <div class="d-flex flex-column ">
                    <div id="name_info1" style="width: 183.58px;height: 15px;margin-top:15px;"></div>
                    <p id="date_documentos" style="width: 73px;height: 21px;">30/04/21</p>
                    </div>
                    <img  src="./img/svg/up_mostrar_doc_tareas.svg" id="arrows_doc" class='ocultar' alt="" /> 
                </div>
                </div>
                </div>
              </div>
            </div>

              <!--principal tareas-->
            <div id="column_izquierda_documentos">
              <div>
              <p id="title_principal">TAREAS Y OTROS DOCS</p>
                <div id="prueba_tareas">
          
                </div>
              </div>
            </div>
          </div>
            

            <!--see doc o pdf o img-->
            <div id="see">

            <div>
            
            <div class="d-flex flex-row justify-content-center ">
            <ul class="d-flex flex-row ">
              <li class="me-4 ">
                <a id="style_a_docs" href="">
                <img  src="./img/svg/descargar.svg" style="margin-right:5px;" alt="" /> Descargar 
                </a>
              </li >

              <li class="me-4">
                <a id="style_a_docs" href="" >
                <img  src="./img/svg/compartir.svg" style="margin-right:5px;" alt="" /> Compartir 
                </a>
              </li>

              <li class="me-2">
                <a  id="style_a_docs" href="">
                <img  src="./img/svg/ver 1.svg" style="margin-right:5px;" alt="" /> Ver completo 
                </a>
              </li>

              <li class="me-4 mx-2">
                <a  id="style_a_docs" href="">
                <img  src="./img/svg/impresora 1.svg" style="margin-right:5px;" alt="" /> Imprimir 
                </a>
              </li>
            </ul>
          </div>

            </div>

            <div id="verFiles">
            </div>
            </div>

          </div>
        </div>
        </div>

        </div>

      </div>

      <div class="sidebarCase">
      <img src="./img/svg/sunafil.svg" class="ocultar" id="sunafil" alt="Icono check" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
      <img src="./img/svg/sunafilBlue.svg" class="" id="sunafilBlue" alt="Icono check" />
       <!-- Modal SUNAFIL -->
       <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false"
                                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content d-flex flex-column align-items-center" style="width:763px;">

              <div>
                <button type="button" ><img src="./img/svg/x.svg" alt="" loading="lazy" id="close_modal_sunafil" data-bs-dismiss="modal"
                aria-label="Close"/></button>
              </div>
                           
              <div clas="d-flex flex-row" >
                <p id="message_thank" style="margin-bottom:0px;"> <strong>${localStorage.getItem(
                  "name"
                )} </strong> gracias por confiar en nosotros, en esta ventana podrás registrar tu usuario y contraseña de forma segura. &nbsp;<img src="./img/svg/!sunafil.svg" class="checkIcon" id="sunafil" alt="Icono check"/></p>
                
                </div>

              <form  id="container_date_sunafil" >
              
                <div class="d-flex flex-row">
                  <button class="ruc">RUC</button>
                  <button class="dni">DNI</button>
                </div>

                 <!-- RUC input -->
                 <div class="form-outline">
                  <input type="text" required id="input_modalSunafil" class="form-control" placeholder="RUC" />
                </div>

    
                 <!-- Usuario input -->
                 <div class="form-outline">
                  <input type="text" required id="input_modalSunafil" class="form-control" placeholder="Usuario" />
                </div>

                <!-- Password input -->
                <div class="form-outline">
                  <input type="password" required  id="input_modalSunafil1" class="form-control" placeholder="Contraseña" />
                </div>

                <div class="d-flex flex-row align-items-center" style="margin-top:9px;margin-bottom:29px;">
                  <p id="recordatorio_modal_sunafil" style="margin-bottom:0px;">Recuérdame, para entrar más fácil</p>
                
                  <!-- Default switch -->
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" style="width:42px; height:18px;  background-size: contain; background-repeat: no-repeat;" id="flexSwitchCheckDefault" />

                  </div>
                </div>

                <a id="link_sunafil" href="#/home" style="margin-bottom:24px;">Si olvidaste tu usuario y/o contraseña solicítalos desde SUNAT Virtual</a>

                <!-- Submit button -->
                <button type="submit" disabled id = "btn_entrar_modal_sunafil" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#exampleModal1"  class="btn btn-block ">Entrar</button>
              
                </form>

                <div >
                <img src="./img/svg/imageSunafil.svg" class="checkIcon" style="margin-bottom:44px;" id="sunafil" alt="Icono check" data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
                </div>
                                                
                </div>
                </div>
                </div>
                  <!-- Mini Modal SUNAFIL -->
                <div class="modal fade" id="exampleModal1" data-bs-backdrop="static" data-bs-keyboard="false"
                                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog " style="margin-top:89px;">
            <div class="modal-content d-flex flex-column align-items-center" style="width:763px;">

            <div>
                        <button type="button" ><img src="./img/svg/x.svg" alt="" loading="lazy" id="close_modal_sunafil" data-bs-dismiss="modal"
                        aria-label="Close"/></button>
                      </div>

                      <div >
                      <img src="./img/svg/check_nimimodal.svg" class="checkIcon" style="margin-bottom:44px;" id="sunafil" alt="Icono check" data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
                      </div>
                                  
                      <div clas="d-flex flex-row" >
                        <p id="message_congratulations" style="margin-bottom:0px;"> ¡Felicidades ${localStorage.getItem(
                          "name"
                        )}!Tu registro ha sido creado correctamente</p>
                      </div>

                      <div style="margin-top: 33px;" >
                        <button type="submit"  id = "btn_entrar_minimodal_sunafil"  class="btn btn-block " data-bs-dismiss="modal">Regresar al home</button>
                      </div>
                                                      
                      <div >
                      <img src="./img/svg/imageSunafil.svg" class="checkIcon" style="margin-bottom:44px;margin-top:43px;" id="sunafil" alt="Icono check" data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
                      </div>

                                                  
                </div>
              </div>
                </div>
                

           
      <hr class="horizontalLine-sidebar" />
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



    

<!-- MODAL FORMULARIO - (Nueva tarea) -->
  <div
    class="modal fade"
    id="newTaskModal"
    tabindex="-1"
    aria-labelledby="newTaskModalLabel"
    aria-hidden="true"
    style="padding-right: 140px;"
  >
    <div class="modal-dialog">
      <div class="modal-content fromHomework">
        <div class="modal-header header-fromHomework">
          <h5 class="modal-title title-fromHomework" id="newTaskModalLabel">
            Crear tarea
          </h5>
          <button
            type="button"
            class=" btnClose-fromHomework"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img src="./img/svg/x_homework.svg" class="" alt="cerrar" />
          </button>
        </div>
        <div class="modal-body body-fromHomework">
          <form class="form-homework">

            <div class="form-group row row-fromHomework">
              <label
                for="inputText1"
                class="col-sm-2 col-form-label label-fromHomework"
                >1. Denominación</label
              >
              <div class="col-sm-10 containerInput-fromHomework">
                <input
                  type="text"
                  class="form-control input-fromHomework "
                  id="inputText1"
                  placeholder="Ejem: Solicitud de documentos a RRHH"
                />
              </div>
            </div>

            <div class="form-group row row-fromHomework">
              <label
                for="inputDate2"
                class="col-sm-2 col-form-label label-fromHomework"
                >2. Vencimiento</label
              >
              <div
                class="col-sm-10 containerInput-fromHomework"
                id="date_fromHomework"
              >
              </div>
            </div>

            <div class="form-group row row-fromHomework">
              <label
                for="inputText3"
                class="col-sm-2 col-form-label label-fromHomework"
                >3. Destinatario</label
              >
              <div class="col-sm-10 containerInput-fromHomework">
                <input
                  type="text"
                  class="form-control input-fromHomework "
                  id="inputText3"
                  placeholder="Escribir nombre del destinatario"
                />
              </div>
            </div>

            <div class="form-group row row-fromHomework">
              <label
                for="inputText4"
                class="col-sm-2 col-form-label label-fromHomework"
                >4. Correo</label
              >
              <div class="col-sm-10 containerInput-fromHomework">

                <!--<div class="input-fromHomework div-email">-->
                  <!--<span class="span-emailX">-->
                    <input
                    type="text"
                    class="form-control input-fromHomework"
                    id="inputText4"
                    placeholder="Escribir email del destinatario"
                    />
                    <!--<span>x</span>-->
                  <!--</span>-->
                <!--</div>-->
                
              </div>
            </div>

            <div class="form-group row row-fromHomework">
              <label
                for="textarea5"
                class="col-sm-2 col-form-label label-fromHomework labelTextarea-fromHomework"
                >5. Mensaje</label
              >
              <div class="col-sm-10 containerInput-fromHomework">
                <div class="containerTexarea-fromHomework">
                  <button
                    id="btnShow_modal_message"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#modalMessage"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <img src="./img/svg/edit-red.svg" class="" alt="editar" />
                    <textarea
                    class="form-control textarea-fromHomework"
                    id="textarea5"
                    rows="5"
                    col="5"
                    maxlength="135"
                    placeholder="Mensaje"
                    disabled
                    ></textarea>
                  </button>
                  <p>(Máximo 1200 caracteres)</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer footer-fromHomework">
          <!--<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>-->
          <button
            type="button"
            id="btnCreate_homework"
            class="btnCreate-fromHomework btnDisabled"
            data-bs-dismiss="modal"

            data-bs-toggle="modal"
            data-bs-target="#modalOk"

          >
            Crear tarea
          </button>
        </div>
      </div>
    </div>
  </div>


  <!-- MODAL Texarea del Formulario - (Mensaje) -->
  <div
    class="modal fade"
    data-backdrop="static"
    data-keyboard="false"

    id="modalMessage"
    tabindex="-1"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
    style="z-index: 1060;"
  >
    <div class="modal-dialog modal-dialog-centered modalDialog-message">
      <div class="modal-content modalMessage">
        <div class="modal-header header-modalMessage">
          <h4 class="modal-title" id="exampleModalCenterTitle">Mensaje</h4>
          <button
            id="btnClose_message"
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img src="./img/svg/x_homework.svg" class="" alt="cerrar" />
          </button>
        </div>
        <div class="modal-body body-modalMessage">
          <div class="containerTexarea-modalMessage">
            <textarea
              class="form-control textarea-modalMessage"
              id="textareaModal"
              rows="5"
              col="5"
              maxlength="1200"
              placeholder="Escriba su mensaje aquí."
            ></textarea>
            <p>(Máximo 1200 caracteres)</p>
          </div>
        </div>
        <div class="modal-footer footer-modalMessage">
          <button type="button" id="btnAdd_message" class="btn" data-bs-dismiss="modal">Continuar</button>
        </div>
      </div>
    </div>
  </div>


  <!-- MODAL Registro de Tarea completada - (Ok) -->

  <div
    id="modalOk"
    class="modal fade"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
    style="z-index: 1060;"
  >
    <div class="modal-dialog modal-dialog-centered modalDialog-ok">
      <div class="modal-content modalOk ">

        <div class="modal-header header-modalOk d-flex">
          <button
            id="btnClose_Ok"
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img src="./img/svg/x_homework.svg" class="" alt="cerrar" />
          </button>
        </div>

        <div class="modal-body body-modalOk">
          <div class="container-modalOk">
            <img src="./img/svg/check-circle.svg" alt="cerrar" />
            <p>Tu tarea ha sido creada con éxito en la actuación de "Requerimiento de comparecencia"</p>
          </div>
        </div>

        <div class="modal-footer footer-modalOk">
          <button type="button" id="btnAdd_message" class="btn" data-bs-dismiss="modal">Ver mi tarea</button>
        </div>

      </div>
    </div>
  </div>




  `;
  // ****  Columna Izquierda (inicio)**** //
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
  });

  edit.addEventListener("click", () => {
    pComment.classList.add("hide");
    divComment.classList.remove("hide");
    txtComment.classList.remove("hide");
    txtComment.disabled = false;
    countComment.classList.remove("hide");
    save.classList.remove("hide");
    edit.classList.add("hide");
  });

  save.addEventListener("click", () => {
    txtComment.disabled = true;
    edit.classList.remove("hide");
    save.classList.add("hide");
  });

  //  agregar archivos subidos al home
  let getFile = localStorage.getItem("file");

  // localStorage file date orden

  const container_archivosSubidos = viewHome.querySelector(
    "#container_archivosSubidos"
  );
  container_archivosSubidos.innerHTML = `
    <div><button>${getFile}</button>
    </div>
    `;

  //   // ****  Columna Izquierda (termino)  **** //

  //habilitar input
  // const editar = viewHome.querySelector("#edit");
  // editar.addEventListener("click", ()=>{
  //   const description = viewHome.querySelector("#description");
  //   if(description .disabled == true)	{
  //     description.disabled=false;
  //      }
  //         else
  //   {
  //     description.disabled=true;
  //   }
  //       });

  //número aleatorio
  function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
  }

  const multa_aleatoria = (x) => {
    return x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };
  console.log(multa_aleatoria(aleatorio(5000, 250000)));
  const multaAleatoria = multa_aleatoria(aleatorio(5000, 250000));
  // console.log("multaAleatoria", multaAleatoria);

  //Registar multa alearotia en input
  const multa = viewHome.querySelector("#multa");
  let multaPontencial = multa_aleatoria(aleatorio(5000, 250000));
  // multa.innerHTML = "S/" + multa_aleatoria(aleatorio(5000, 250000));
  multa.innerHTML = "S/" + multaPontencial;
  localStorage.setItem("multaPontencial", multaPontencial);
  console.log("otraMulta", multaPontencial);

  //nivel de riego
  const sizeCheck = localStorage.getItem("checked");
  if (sizeCheck >= 4) {
    console.log('tipo_riesgo', 'Nivel Alto');
    localStorage.setItem("tipo_riesgo", "Nivel Alto");
    //Si el usuario marca 4 o más materias debe aparecer riesgo alto
    const label_level_risk = viewHome.querySelector(".label_level_risk1");
    label_level_risk.style.fontSize = "14px";
    const bullets = viewHome.querySelector(".bullets1");
    bullets.style.opacity = 1;
    const bar1 = viewHome.querySelector("#bar1");
    bar1.style.opacity = 1;
    console.log("riesgo alto");
  } else if (sizeCheck >= 2) {
    console.log("tipo_riesgo", "Nivel Moderado");
    localStorage.setItem("tipo_riesgo", "Nivel Moderado");
    //Si marca 2 o 3 riesgo medio
    const label_level_risk = viewHome.querySelector(".label_level_risk2");
    label_level_risk.style.fontSize = "14px";
    const bullets = viewHome.querySelector(".bullets2");
    bullets.style.opacity = 1;
    const bar2 = viewHome.querySelector("#bar2");
    bar2.style.opacity = 1;
    console.log("riesgo medio");
  } else {
    console.log("tipo_riesgo", "Nivel Leve");
    localStorage.setItem("tipo_riesgo", "Nivel Leve");
    // solo 1 materia debe aparecer como riesgo bajo
    const label_level_risk = viewHome.querySelector(".label_level_risk3");
    label_level_risk.style.fontSize = "14px";
    const bullets = viewHome.querySelector(".bullets3");
    bullets.style.opacity = 1;
    const bar3 = viewHome.querySelector("#bar3");
    bar3.style.opacity = 1;
    console.log("riesgo bajo");
  }

  //Crear MODAL para funcionario

  //modal
  const myModal = viewHome.querySelector(".modal");
  myModal.addEventListener("shown.bs.modal", function () {
    //multa maxima

    function aleatorio1(inferior, superior) {
      var numPosibilidades = superior - inferior;
      var aleatorio = Math.random() * (numPosibilidades + 1);
      aleatorio = Math.floor(aleatorio);
      return inferior + aleatorio;
    }

    const multa_aleatoria1 = (x) => {
      return x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    };
    console.log(multa_aleatoria1(aleatorio1(5000, 250000)));
    const multaAleatoria1 = multa_aleatoria1(aleatorio1(15000, 250000));
    localStorage.setItem("multa1", multaAleatoria1);

    //multa min

    function aleatorio2(inferior, superior) {
      var numPosibilidades = superior - inferior;
      var aleatorio = Math.random() * (numPosibilidades + 1);
      aleatorio = Math.floor(aleatorio);
      return inferior + aleatorio;
    }

    const multa_aleatoria2 = (x) => {
      return x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    };
    console.log(multa_aleatoria2(aleatorio2(5000, 250000)));
    const multaAleatoria2 = multa_aleatoria2(aleatorio2(5000, 150000));
    localStorage.setItem("multa2", multaAleatoria2);

    //número aleatorio del 1 al 10
    //ir a link  actuaciones (main)
    function aleatorioNumber(inferior, superior) {
      var numPosibilidades = superior - inferior;
      var aleatorio = Math.random() * (numPosibilidades + 1);
      aleatorio = Math.floor(aleatorio);
      return inferior + aleatorio;
    }

    console.log(aleatorioNumber(1, 10));
    const valorNumber = aleatorioNumber(1, 10);
    console.log(valorNumber);

    localStorage.setItem("aleatorio", valorNumber);
  });

  //estrellas

  let x = viewHome.getElementsByTagName("i");
  console.log(x);
  for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function () {
      console.log("pintar");
      let value = this.getAttribute("value");
      console.log(value);
      clearClass();
      for (let j = value - 1; j >= 0; j--) {
        x[j].classList.toggle("ap");
      }
    });
  }

  function clearClass() {
    let x = viewHome.getElementsByTagName("i");
    for (let i = 0; i < x.length; i++) {
      //console.log(x[i].classList);
      x[i].classList.remove("ap");
    }
  }

  //   viewHome.querySelector('#rating').addEventListener('click', function (e) {
  //     if (e.target.nodeName === 'IMG') {
  //         var currentSibling = e.target;
  //         var nextSibling = e.target;
  //         currentSibling.classList.add('active');
  //         while ((currentSibling = currentSibling.previousElementSibling)) {
  //             currentSibling.classList.add('active');
  //         }
  //         while ((nextSibling = nextSibling.nextElementSibling)) {
  //             nextSibling.classList.remove('active');
  //         }
  //     }
  // });
  //HOME ACTUACIONES
  //ir a crear actuación actuacion

  const actuacion = viewHome.querySelector("#container_actuacionenproceso");
  actuacion.addEventListener("click", () => {
    window.location.hash = "#/actuacion";
  });

  const actuacions = viewHome.querySelector("#container_actuacion");
  actuacions.addEventListener("click", () => {
    window.location.hash = "#/actuacion";
  });

  //mostar descripcion actuacion

  // const descripcion_actuacion = localStorage.getItem("#descripcion_actuacion");
  const input_setDescripcion_actuacion = viewHome.querySelector(
    "#input_setDescripcion_actuacion"
  );
  const descripcion_actuacion_edit = viewHome.querySelector(
    "#descripcion_actuacion_edit"
  );
  const descripcion_actuacion_get = viewHome.querySelector(
    "#descripcion_actuacion_get"
  );

  if (descripcion_actuacion == null) {
    console.log(descripcion_actuacion);
    descripcion_actuacion_get.classList.add("ocultar");
    input_setDescripcion_actuacion.classList.add("ocultar");
    descripcion_actuacion_edit.classList.remove("ocultar");
  } else {
  }

  //Ingresar comentarios al textarea vista actuacion
  const edit_actuacion = viewHome.querySelector("#btnEditComment_actuacion");
  const save_actuacion = viewHome.querySelector("#btnSaveComment_actuacion");
  const pComment_actuacion = viewHome.querySelector("#pComment_actuacion");
  const divComment_actuacion = viewHome.querySelector(
    "#textareaContainer_actuacion"
  );
  const txtComment_actuacion = viewHome.querySelector("#txtComment_actuacion");
  const countComment_actuacion = viewHome.querySelector(
    "#countComment_actuacion"
  );

  pComment_actuacion.addEventListener("click", () => {
    pComment_actuacion.classList.add("hide");
    divComment_actuacion.classList.remove("hide");
    txtComment_actuacion.classList.remove("hide");
    txtComment_actuacion.disabled = false;
    countComment_actuacion.classList.remove("hide");
    save_actuacion.classList.remove("hide");
    edit_actuacion.classList.add("hide");
  });

  edit_actuacion.addEventListener("click", () => {
    pComment_actuacion.classList.add("hide");
    divComment_actuacion.classList.remove("hide");
    txtComment_actuacion.classList.remove("hide");
    txtComment_actuacion.disabled = false;
    countComment_actuacion.classList.remove("hide");
    save_actuacion.classList.remove("hide");
    edit_actuacion.classList.add("hide");
  });

  save_actuacion.addEventListener("click", () => {
    txtComment_actuacion.disabled = true;
    edit_actuacion.classList.remove("hide");
    save_actuacion.classList.add("hide");
  });
  // menú etapas

  const buttons_total = viewHome.querySelector("#button_total");
  const buttons_etapa1 = viewHome.querySelector("#buttons_etapa1");
  const buttons_etapa2 = viewHome.querySelector("#buttons_etapa2");
  const buttons_etapa3 = viewHome.querySelector("#buttons_etapa3");
  const container_total = viewHome.querySelector("#container_total");
  const container_etapa1 = viewHome.querySelector("#container_etapa1");
  const container_etapa2 = viewHome.querySelector("#container_etapa2");
  const container_etapa3 = viewHome.querySelector("#container_etapa3");

  buttons_total.addEventListener("click", () => {
    buttons_total.style.background = "rgba(15, 48, 65, 0.5)";
    buttons_total.style.fontWeight = "800";
    buttons_total.style.fontSize = "14px";
    buttons_total.style.color = "#FFFFFF";
    container_total.classList.remove("ocultar");
    container_etapa1.classList.add("ocultar");
    container_etapa2.classList.add("ocultar");
    container_etapa3.classList.add("ocultar");
  });

  buttons_etapa1.addEventListener("click", () => {
    buttons_total.style.background = "#FFFFFF";
    buttons_total.style.border = "1px solid #BDBDBD";
    buttons_total.style.boxSizing = "border-box";
    buttons_total.style.fontWeight = "500";
    buttons_total.style.fontSize = "11px";
    buttons_total.style.color = "#0F3041";
    container_total.classList.add("ocultar");
    container_etapa1.classList.remove("ocultar");
    container_etapa2.classList.add("ocultar");
    container_etapa3.classList.add("ocultar");
  });

  buttons_etapa2.addEventListener("click", () => {
    buttons_total.style.background = "#FFFFFF";
    buttons_total.style.border = "1px solid #BDBDBD";
    buttons_total.style.boxSizing = "border-box";
    buttons_total.style.fontWeight = "500";
    buttons_total.style.fontSize = "11px";
    buttons_total.style.color = "#0F3041";
    container_total.classList.add("ocultar");
    container_etapa1.classList.add("ocultar");
    container_etapa2.classList.remove("ocultar");
    container_etapa3.classList.add("ocultar");
  });

  buttons_etapa3.addEventListener("click", () => {
    buttons_total.style.background = "#FFFFFF";
    buttons_total.style.border = "1px solid #BDBDBD";
    buttons_total.style.boxSizing = "border-box";
    buttons_total.style.fontWeight = "500";
    buttons_total.style.fontSize = "11px";
    buttons_total.style.color = "#0F3041";
    container_total.classList.add("ocultar");
    container_etapa1.classList.add("ocultar");
    container_etapa2.classList.add("ocultar");
    container_etapa3.classList.remove("ocultar");
  });

  //boton etapas
  buttons_total.classList.add("button_change_etapas");
  const buttons_etapas = viewHome.getElementsByClassName("buttons_etapa");

  for (let i = 0; i < buttons_etapas.length; i++) {
    buttons_etapas[i].onclick = function () {
      let el = buttons_etapas[0];
      while (el) {
        if (el.tagName === "DIV") {
          // remueve class
          el.classList.remove("button_change_etapas");
        }

        //pasa al hermano
        el = el.nextSibling;
      }
      this.classList.add("button_change_etapas");
    };
  }

  //habilitar y deshabiliat boton entrar modal sunafil

  const sunafil = viewHome.querySelector("#sunafil");
  sunafil.addEventListener("click", () => {
    const mensaje = viewHome.querySelector("#input_modalSunafil1");
    mensaje.addEventListener("keyup", (e) => {
      console.log("change");
      const boton = viewHome.querySelector("#btn_entrar_modal_sunafil");
      console.log(boton);

      if (mensaje.value.trim() !== "") {
        console.log("Se muestra");
        boton.removeAttribute("disabled");
        const miniModal = viewHome.querySelector("#exampleModal1");
      } else {
        boton.setAttribute("disabled", "true");
      }
    });
  });

  //LINKS
  const link_datos = viewHome.querySelector("#link_datos");
  const link_actuaciones = viewHome.querySelector("#link_actuaciones");
  const link_documentos = viewHome.querySelector("#link_documentos");
  const mainDatos = viewHome.querySelector("#main-datos");
  const mainActuaciones = viewHome.querySelector("#main-actuaciones");
  const mainDocumentos = viewHome.querySelector("#main-documentos");

  link_datos.addEventListener("click", () => {
    mainDatos.classList.remove("ocultar");
    mainActuaciones.classList.add("ocultar");
    mainDocumentos.classList.add("ocultar");
  });

  link_actuaciones.addEventListener("click", () => {
    mainDatos.classList.add("ocultar");
    mainActuaciones.classList.remove("ocultar");
    mainDocumentos.classList.add("ocultar");
  });

  link_documentos.addEventListener("click", () => {
    mainDatos.classList.add("ocultar");
    mainActuaciones.classList.add("ocultar");
    mainDocumentos.classList.remove("ocultar");

    rootRef.on("value", function (snapshot) {
      var datos = snapshot.val();
      var results = "";
      for (var key in datos) {
        console.log(datos[key].nombre);

        results +=
          '<div  class="name_info_down">' + datos[key].nombre + "</div>";
      }
      document.getElementById("name_info").innerHTML = results;
      document.getElementById("name_info1").innerHTML = results;
      const click_show_doc = document.getElementById("name_info1");
      const arrows_doc = viewHome.querySelector("#arrows_doc");
      const container_doc_principal = viewHome.querySelector(
        "#container_doc_princial"
      );
      const container_tar_principal = viewHome.querySelector(
        "#container_tar_princial"
      );
      const arrows_tar = viewHome.querySelector("#arrows");
      click_show_doc.addEventListener("click", () => {
        container_doc_principal.style.background = "rgba(150, 156, 186, 0.2)";
        //  container_tar_principal.style.background =  "white";
        arrows_doc.classList.remove("ocultar");
        arrows_tar.classList.add("ocultar");

        rootRef.on("value", function (snapshot) {
          var datos = snapshot.val();
          var result = "";
          for (var key in datos) {
            console.log(datos[key].url);

            result +=
              '<iframe  class="styleIframe"  src="' +
              datos[key].url +
              '"></iframe>';
          }
          document.getElementById("verFiles").innerHTML = result;
        });
      });
    });
  });

  link_datos.classList.add("links_change");
  const links = viewHome.getElementsByClassName("links");
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      let el = links[0];
      while (el) {
        if (el.tagName === "DIV") {
          // remueve class
          el.classList.remove("links_change");
        }

        //pasa al hermano
        el = el.nextSibling;
      }
      this.classList.add("links_change");
    };
  }

  //subir datoss al storage
  const txt_carga = viewHome.querySelector("#txt_carga");
  const conDocumentos = viewHome.querySelector("#conDocumentos");
  const conTareas = viewHome.querySelector("#conTareas");
  const usuario = viewHome.querySelector("#usuario");
  const Sintareas = viewHome.querySelector("#Sintareas");
  const Sindocumentos = viewHome.querySelector("#Sindocumentos");

  const cli = viewHome.querySelector("#mostrarCli");

  const subir = viewHome.querySelector("#subir");

  const file_upload = viewHome.querySelector("#file-upload");
  file_upload.addEventListener("change", () => {
    subir.classList.add("ocultar");
    txt_carga.classList.add("ocultar");
    conDocumentos.classList.remove("ocultar");
    conTareas.classList.remove("ocultar");
    usuario.classList.remove("ocultar");
    Sintareas.classList.add("ocultar");
    Sindocumentos.classList.add("ocultar");
    cli.classList.remove("ocultar");
    var pdrs = document.getElementById("file-upload").files[0].name;
    document.getElementById("info").innerHTML = pdrs;
    const mostrarDoc = document.getElementById("info");
  });

  link_documentos.addEventListener("click", () => {
    mainDatos.classList.add("ocultar");
    mainActuaciones.classList.add("ocultar");
    mainDocumentos.classList.remove("ocultar");

    rootRef.on("value", function (snapshot) {
      var datos = snapshot.val();
      var results = "";
      for (var key in datos) {
        console.log(datos[key].nombre);

        results +=
          '<div  class="name_info_down">' + datos[key].nombre + "</div>";
      }

      document.getElementById("name_info").innerHTML = results;
      const click_show_doc = document.getElementById("name_info");
      click_show_doc.addEventListener("click", () => {
        rootRef.on("value", function (snapshot) {
          var datos = snapshot.val();
          var result = "";
          for (var key in datos) {
            console.log(datos[key].url);

            result +=
              '<iframe  class="styleIframe"  src="' +
              datos[key].url +
              '"></iframe>';
          }
          document.getElementById("verFiles").innerHTML = result;
        });
      });
      const cambiarFond = viewHome.querySelector(".name_info_down");
    });
  });

  // link_datos.classList.add("links_change");
  // const links = viewHome.getElementsByClassName("links");
  // for (let i = 0; i < links.length; i++) {
  //   links[i].onclick = function () {
  //     let el = links[0];
  //     while (el) {
  //       if (el.tagName === "DIV") {
  //         // remueve class
  //         el.classList.remove("links_change");
  //       }

  //       //pasa al hermano
  //       el = el.nextSibling;
  //     }
  //     this.classList.add("links_change");
  //   };
  // }

  // //subir datoss al storage

  // const txt_carga = viewHome.querySelector("#txt_carga");
  // const cli = viewHome.querySelector("#mostrarCli");

  // const subir = viewHome.querySelector("#subir");

  // const file_upload = viewHome.querySelector("#file-upload");
  // file_upload.addEventListener("change", () => {
  //   subir.classList.add("ocultar");
  //   txt_carga.classList.add("ocultar");
  //   cli.classList.remove("ocultar");
  //   var pdrs = document.getElementById("file-upload").files[0].name;
  //   document.getElementById("info").innerHTML = pdrs;
  //   const mostrarDoc = document.getElementById("info");
  // });

  // window.onload = inicializar;
  var fichero;
  var storageRef;

  // function inicializar() {
  fichero = viewHome.querySelector("#file-upload");
  fichero.addEventListener("change", subirDocAFirebase, false);
  storageRef = firebase.storage().ref();
  var rootRef = firebase.database().ref().child("documentos");

  function subirDocAFirebase() {
    //     console.log("subiendo")

    const documentoSubir = fichero.files[0];
    console.log(documentoSubir);
    const uploadTask = storageRef
      .child("documentos/" + documentoSubir.name)
      .put(documentoSubir);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      function (snapshot) {
        //  // Observe state change events such as progress, pause, and resume
        // console.log("subido");
      },
      function (error) {
        console.log("hubo un error");
        // Handle unsuccessful uploads
      },
      function () {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          // alert("se subió la imagen conURL", downloadURL);
          console.log("Uploaded a blob or file!");
          crearNodoEnBDFirebase(documentoSubir.name, downloadURL);
        });
      }
    );
  }

  function crearNodoEnBDFirebase(name, url) {
    rootRef.push({
      nombre: name,
      url: url,
    });
  }

  //cambiar logo Sunafil una ver sincronizado
  const cambiarLogo = viewHome.querySelector("#btn_entrar_minimodal_sunafil");
  const sunafilS = viewHome.querySelector("#sunafil");
  const sunafilBlue = viewHome.querySelector("#sunafilBlue");
  const pSunafil = viewHome.querySelector("#pSunafil");

  cambiarLogo.addEventListener("click", () => {
    sunafilS.classList.add("ocultar");
    sunafilBlue.classList.remove("ocultar");
    pSunafil.classList.add("messageSunafil");
  });

  //****************** CONTENEDOR DE TAREAS ********************//
  //******* Fecha actual - input date *******/
  const dateNew = new Date();
  const yearNow = dateNew.getFullYear();
  const monthNow = String(date.getMonth() + 1).padStart(2, "0");
  const todayDate = String(date.getDate()).padStart(2, "0");
  const datePattern = year + "/" + monthNow + "/" + todayDate;
  const currentDate = todayDate + "/" + monthNow + "/" + yearNow;

  const dateFromHomework = viewHome.querySelector("#date_fromHomework");

  const btnCreateHomework = viewHome.querySelector("#btnCreate_homework");

  dateFromHomework.innerHTML = `
  <input 
    type="date" 
    id="inputDate2" 
    value="${datePattern}" 
    class="form-control input-fromHomework date-fromHomework" 
  >
  <!-- <img src="./img/svg/calendar-red.svg" class="" alt="icono calendario" /> -->
`;
  const inputDate2 = viewHome.querySelector("#inputDate2");
  localStorage.setItem("dateVencimiento", inputDate2.value);
  /******* Modal ingresar mensaje *******/
  const modalForm = viewHome.querySelector("#exampleModal");
  const btnShow_modal_message = viewHome.querySelector(
    "#btnShow_modal_message"
  );
  const textareaModal = viewHome.querySelector("#textareaModal");
  const btnAddMessage = viewHome.querySelector("#btnAdd_message");
  const btnCloseMessage = viewHome.querySelector("#btnClose_message");
  const textarea5 = viewHome.querySelector("#textarea5");

  btnShow_modal_message.addEventListener("click", (e) => {
    e.preventDefault;
    modalForm.classList.add("zIndexDown-modal");
  });

  btnAddMessage.addEventListener("click", (e) => {
    e.preventDefault;
    const valueTextAreaModal = textareaModal.value;

    textarea5.value = valueTextAreaModal;
    console.log(valueTextAreaModal);

    modalForm.classList.remove("zIndexDown-modal");
  });

  btnCloseMessage.addEventListener("click", (e) => {
    e.preventDefault;
    modalForm.classList.remove("zIndexDown-modal");
  });

  //****** Crea template de la tabla con datos del formulario  *******/

  // firestore - actualizar
  const completedTask = (id) =>
    firebase.firestore().collection("tasks").doc(id).update({
      status: "Finalizado",
    });

  const pendingTask = (id) =>
    firebase.firestore().collection("tasks").doc(id).update({
      status: "Pendiente",
    });

  //****** Muestra encabezado al encontrar Docs ******/
  const tableHead = viewHome.querySelector("#table-head");

  const tasksRef = firebase.firestore().collection("tasks");

  tasksRef.onSnapshot((snap) => {
    let countDoc = snap.docs.length;
    // console.log("Este es el span", snap.docs.length);

    if (countDoc >= 1) {
      tableHead.classList.remove("hidde");
    } else {
      tableHead.classList.add("hidde");
    }
  });

  // firebase
  //   .firestore()
  //   .collection("homeWorks")
  //   .get()
  //   .then((res) => {
  //     let countDoc = res.size;
  //     console.log(countDoc);

  //     if (countDoc === 1) {
  //       tableHead.classList.remove("hidde");
  //     } else {
  //       console.log("encabezado oculto");
  //     }
  //   });

  //******* Mostrar registros de firebase ********/
  const tableTask = viewHome.querySelector("#tableTask");

  firebase
    .firestore()
    .collection("tasks")
    .orderBy("taskName")
    .onSnapshot((querySnapshot) => {
      tableTask.innerHTML = "";
      querySnapshot.forEach((doc) => {
        const taskId = doc.id;
        tableTask.innerHTML += `
            <tr class="tdTable-createTask">
              <td class="chek-label td-name-task">
              <input type="checkbox" id="cboxStatus${
                doc.id
              }" value="primary_checkbox" class="check-status" data-id="${
          doc.id
        }">
              <label for="cboxStatus${doc.id}" class="">${
          doc.data().taskName
        }</label>
              </td>
              
              <td>
              <span class="docCount">${doc.data().files.length}</span>

                <label for="file-uploadTask" id="subirTask" >
                  <img  src="./img/svg/clip.svg" class="img-clip" alt="adjunto" />
                </label>
                <input id="file-uploadTask" onchange='' type="file" style='display: none;'/>
                <div id="infoTask">${doc.data().nameFile}</div>
              </td>

              <td class="tdCircle-blue">
                <img src="./img/svg/circle_blue.svg" alt="iniciales" class="img-circle-blue" />
                <span>${doc.data().initials}</span>
              </td>
              <td id="fRegister">${doc.data().date}</td>
              <td id="fVenci"><strong>${doc.data().expiration}</strong></td>
              <td id="tStatus"  class="tStatus" data-id="${doc.id}">${
          doc.data().status
        }</td>
              <td id="tStatus" class="tStatusPendiente" data-id="${
                doc.id
              }"></td>
            </tr>
        `;

        /////////// Mostrar lista de tareas en documentos  */
        const mostrar_cards_tareas = () => {
          //CREAR LISTA DE TAREAS EN VISTA DOCUMENTOS

          // const expirationDate = viewHome.querySelector("#inputDate2").value;
          const container_principal_tarea =
            viewHome.querySelector("#prueba_tareas");
          firebase
            .firestore()
            .collection("tasks")
            .orderBy("taskName")

            .onSnapshot((querySnapshot) => {
              container_principal_tarea.innerHTML = "";

              querySnapshot.forEach((doc) => {
                container_principal_tarea.innerHTML += `


<div id="style_generalContainer_principal" style="margin-bottom:8px;"class="style_generalContainer_principal">

<div  id="container_principal_tarea">
<div style="width: 231px;height: 21px;">
<p class="styles_principal"><strong>Tarea  </strong></p>
<p class="styles_principal">${doc.data().taskName}</p>
</div>

<div style="width: 61px;height: 21px;">
<p class="styles_principal" style='color:#D70025'><strong>Vence:</strong></p>
<p id="date_documentos" style='color:#D70025'>${doc.data().expiration}</p>
</div>
</div>


<div class="d-flex flex-row align-items-center " id="container_tar_princial">

<p style="margin-left:24px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
 margin-right:12px;
  color: #0F3041;" >01.</p>
  <label for="file-upload"  style="margin-left:0px;">
  <img  src="./img/svg/clicdoc.svg" alt="" />
    </label>
    <div class="d-flex flex-column ">

    <div class="file_tarea" style="width: 183.58px;height: 15px;margin-top:15px;" data-id="${
      doc.id
    }">${doc.data().files}</div>
    <p id="date_documentos" style="width: 73px;height: 21px;">30/04/21</p>
    </div>
    <img  src="./img/svg/up_mostrar_doc_tareas.svg" id="arrows" class="ocultar" alt="" />  
</div>

</div>
  `;
                const click_show_doc = viewHome.querySelectorAll(".file_tarea");

                click_show_doc.forEach((tarea) => {
                  const color_fondo_list_tarea = viewHome.querySelector(
                    "#container_tar_princial"
                  );
                  const container_doc_principal = viewHome.querySelector(
                    "#container_doc_princial"
                  );
                  const arrows = viewHome.querySelector("#arrows");
                  const arrows_doc = viewHome.querySelector("#arrows_doc");
                  tarea.addEventListener("click", (e) => {
                    // arrows.classList.remove('ocultar');
                    arrows_doc.classList.add("ocultar");

                    // color_fondo_list_tarea.style.background = "rgba(150, 156, 186, 0.2)";
                    container_doc_principal.style.background = "white";

                    console.log(e.target.dataset.id);
                    const idDocTareas = e.target.dataset.id;
                    e.preventDefault();
                    rootRefTask.on("value", function (snapshot) {
                      var datos = snapshot.val();
                      console.log(datos);
                      var result = "";
                      for (var key in datos) {
                        // console.log(datos[key].url);
                        // console.log(datos[key].id);

                        if (idDocTareas === datos[key].id) {
                          // console.log("si  es el ID");

                          result +=
                            '<iframe  class="styleIframe"  src="' +
                            datos[key].url +
                            '"></iframe>';
                        } else {
                          // console.log("diferente id");
                        }
                      }
                      document.getElementById("verFiles").innerHTML = result;
                    });
                  });
                });
              });
            });
        };

        // const tStatuss = tableTask.querySelectorAll(".tStatus");
        // tStatuss.forEach(() => {
        //       if(doc.data().status = "Pendiente"){
        //      console.log('pendiente');
        //    } else if (doc.data().status = "Finalizado") {
        //      console.log("finalizado");
        //    }
        //  });

        const checkStatus = tableTask.querySelectorAll(".check-status");
        const fRegister = tableTask.querySelector("#fRegister");
        const fVenci = tableTask.querySelector("#fVenci");
        const tStatus = tableTask.querySelector("#tStatus");

        checkStatus.forEach((check) => {
          check.checked = eval(window.localStorage.getItem(check.id));

          check.addEventListener("change", (e) => {
            e.preventDefault;
            window.localStorage.setItem(check.id, check.checked);
            console.log(e.target.dataset.id);
            if (check.checked) {
              console.log("CON check??");
              // console.log("ID del check???", check.id);

              completedTask(e.target.dataset.id);
              // fRegister.classList.add("txt-tach");
              // fVenci.classList.add("txt-tach");
              // tStatus.classList.add("txt-green");
              // // tStatus.classList.add("tStatus");
              // tStatus.classList.remove("tStatusPendiente");
              // tStatus.classList.add("tStatusFinalizado");
            } else {
              console.log("SIN check??");
              pendingTask(e.target.dataset.id);
              // fRegister.classList.remove("txt-tach");
              // fVenci.classList.remove("txt-tach");
              // tStatus.classList.remove("txt-green");
              // // tStatus.classList.remove("tStatus");
              // tStatus.classList.add("tStatusPendiente");
              // tStatus.classList.remove("tStatusFinalizado");
            }
          });
        });

        //******* subir documentos de Tareas a Storage *******/
        //  const subirTask = viewHome.querySelector("#subirTask");
        const file_uploadTask = viewHome.querySelector("#file-uploadTask");

        file_uploadTask.addEventListener("change", () => {
          const nDocs =
            document.getElementById(`file-uploadTask`).files[0].name;

          // document.getElementById(`infoTask`).innerHTML = nDocs;
          // const mostrarDoc = document.getElementById("info");

          firebase
            .firestore()
            .collection("tasks")
            .doc(doc.id)
            .update({
              // nameFile: nDocs,
              files: [nDocs],
            });
        });

        const ficheroTask = viewHome.querySelector(`#file-uploadTask`);
        ficheroTask.addEventListener("change", sendDocFirebase, false);

        const storageRefTask = firebase.storage().ref();
        const rootRefTask = firebase.database().ref().child("docTask");

        function sendDocFirebase() {
          console.log("subiendo");
          const documentoSubirTask = ficheroTask.files[0];
          console.log(documentoSubirTask);
          const uploadTasks = storageRefTask
            .child("docTask/" + documentoSubirTask.name)
            .put(documentoSubirTask);

          uploadTasks.on(
            "state_changed",
            function (snapshot) {},
            function (error) {
              console.log("hubo un error");
            },
            function () {
              uploadTasks.snapshot.ref
                .getDownloadURL()
                .then(function (downloadURL) {
                  // alert("se subió la imagen conURL", downloadURL);
                  console.log("Uploaded a blob or file!");
                  crearNodoEnBDFirebaseTask(
                    documentoSubirTask.name,
                    downloadURL,
                    doc.id
                  );
                });
            }
          );
        }

        function crearNodoEnBDFirebaseTask(name, url, id) {
          rootRefTask.push({
            nombre: name,
            url: url,
            id: id,
          });
        }

        // Llamada a funcion mostrar CArds
        mostrar_cards_tareas();
      });
    });

  const createHomework = () => {
    tableHead.classList.remove("hidde");
  };

  // const createHomework = () => {
  // tableHead.classList.remove("hidde")

  //  const expirationDate = viewHome.querySelector("#inputDate2").value;
  //  localStorage.setItem("dateVencimiento", inputDate2.value);

  // const containerTable = viewHome.querySelector("#container_table");
  // const nameTask = viewHome.querySelector("#inputText1").value;
  // localStorage.setItem("denomicacion", nameTask);

  // const container_principal_tarea = viewHome.querySelector("#container_principal_tarea");
  // const nameTask = viewHome.querySelector("#inputText1").value;

  // console.log(nameTask)
  // console.log(expirationDate)

  //     containerTable.innerHTML = `
  //     <table class="table table-hover table-createTask">
  //       <thead>
  //         <tr class="thTable-createTask">
  //           <th scope="col">Tareas</th>
  //           <th scope="col">Documentos</th>
  //           <th scope="col">Equipo</th>
  //           <th scope="col">Registrado</th>
  //           <th scope="col">Vencimiento</th>
  //           <th scope="col">Estado</th>
  //         </tr>
  //       </thead>

  //       <tbody id="tableTask">

  //       </tbody>
  //     </table>
  //  `;

  // // firestore - actualizar
  // const completedTask = (id) => firebase.firestore().collection('tasks').doc(id).update({
  //   status: 'Finalizado',
  // });

  // const pendingTask = (id) => firebase.firestore().collection('tasks').doc(id).update({
  //   status: 'Pendiente',
  // });

  // const tableTask = viewHome.querySelector("#tableTask");

  // firebase
  //   .firestore()
  //   .collection("tasks")
  //   .orderBy("date", "desc")
  //   .onSnapshot((querySnapshot) => {
  //     tableTask.innerHTML = "";
  //     querySnapshot.forEach((doc) => {
  //       const taskId = doc.id;
  //       tableTask.innerHTML += `
  //         <tr class="tdTable-createTask">
  //           <td class="chek-label td-name-task">
  //           <input type="checkbox" id="cboxStatus${doc.id}" value="primary_checkbox" class="check-status" data-id="${doc.id}">
  //           <label for="cboxStatus${doc.id}" class="">${doc.data().taskName}</label>
  //           </td>

  //           <td>
  //           <span class="docCount">${doc.data().files.length}</span>

  //             <label for="file-uploadTask" id="subirTask" >
  //               <img  src="./img/svg/clip.svg" class="img-clip" alt="adjunto" />
  //             </label>
  //             <input id="file-uploadTask" onchange='' type="file" style='display: none;'/>
  //             <div id="infoTask">${doc.data().nameFile}</div>
  //           </td>

  //           <td class="tdCircle-blue">
  //             <img src="./img/svg/circle_blue.svg" alt="iniciales" class="img-circle-blue" />
  //             <span>${doc.data().initials}</span>
  //           </td>
  //           <td id="fRegister">${doc.data().date}</td>
  //           <td id="fVenci"><strong>${doc.data().expiration}</strong></td>
  //           <td id="tStatus" data-id="${doc.id}">${doc.data().status}</td>
  //         </tr>
  //     `;

  //     const checkStatus = tableTask.querySelectorAll(".check-status");
  //     const fRegister = tableTask.querySelector("#fRegister");
  //     const fVenci = tableTask.querySelector("#fVenci");
  //     const tStatus = tableTask.querySelector("#tStatus");

  //     checkStatus.forEach((check) => {
  //       check.addEventListener("change", (e) => {
  //         e.preventDefault;
  //         console.log(e.target.dataset.id);
  //         if (check.checked) {
  //           console.log("CON check??");
  //           completedTask(e.target.dataset.id);
  //           fRegister.classList.add("txt-tach");
  //           fVenci.classList.add("txt-tach");
  //           tStatus.classList.add("txt-green");
  //         } else {
  //           console.log("SIN check??");
  //           pendingTask(e.target.dataset.id);
  //           fRegister.classList.remove("txt-tach");
  //           fVenci.classList.remove("txt-tach");
  //           tStatus.classList.remove("txt-green");
  //         }
  //       });
  //     });

  // //*****************Cargar de archivos a firebase
  // let file = "";
  // let urlFile = "";

  // const file_uploadTask = viewHome.querySelector("#file-uploadTask");

  // file_uploadTask.addEventListener("change", (e) => {
  //   console.log("cliqueaste");
  //   const input = e.target;
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     const dataURL = reader.result;
  //     urlFile = dataURL;
  //     console.log("🤔 urlFile", urlFile);

  //   };

  //   reader.readAsDataURL(input.files[0]);
  //   file = e.target.files[0];
  //   console.log("🙄file", file);

  //   // Array temporal
  //   let arry=[]
  //   arry.push(file.name);
  //   console.log(arry);

  //   firebase.firestore().collection('tasks').doc(doc.id).update({
  //     nameFile: file.name,
  //     files: arry,
  //   });

  //   console.log("nombre de archivo", file.name);
  //   console.log("Id de tarea", `${doc.id}`);
  // });

  // const uploadFileTask = () => {
  //   const refStorage =  firebase.storage().ref(`filesTask/${doc.id}/${file.name}`);
  //   refStorage.put(file);
  // }

  // //******* subir documentos de Tareas a Storage *******/
  // //  const subirTask = viewHome.querySelector("#subirTask");
  // const file_uploadTask = viewHome.querySelector('#file-uploadTask');

  // file_uploadTask.addEventListener("change", () => {
  //   const nDocs =
  //     document.getElementById(`file-uploadTask`).files[0].name;

  //   // document.getElementById(`infoTask`).innerHTML = nDocs;
  //   // const mostrarDoc = document.getElementById("info");

  //   firebase
  //     .firestore()
  //     .collection("tasks")
  //     .doc(doc.id)
  //     .update({
  //       // nameFile: nDocs,
  //       files: [nDocs],
  //     });
  // });

  // const ficheroTask = viewHome.querySelector(`#file-uploadTask`);
  // ficheroTask.addEventListener("change", sendDocFirebase, false);

  // const storageRefTask = firebase.storage().ref();
  // const rootRefTask = firebase.database().ref().child("docTask");

  // function sendDocFirebase() {
  //   console.log("subiendo");
  //   const documentoSubirTask = ficheroTask.files[0];
  //   console.log(documentoSubirTask);
  //   const uploadTasks = storageRefTask
  //     .child("docTask/" + documentoSubirTask.name)
  //     .put(documentoSubirTask);

  //   uploadTasks.on(
  //     "state_changed",
  //     function (snapshot) {},
  //     function (error) {
  //       console.log("hubo un error");
  //     },
  //     function () {
  //       uploadTasks.snapshot.ref
  //         .getDownloadURL()
  //         .then(function (downloadURL) {
  //           // alert("se subió la imagen conURL", downloadURL);
  //           console.log("Uploaded a blob or file!");
  //           crearNodoEnBDFirebaseTask(
  //             documentoSubirTask.name,
  //             downloadURL,
  //             doc.id

  //           );
  //         });
  //     }
  //   );
  // }

  // function crearNodoEnBDFirebaseTask(name, url, id) {
  //   rootRefTask.push({
  //     nombre: name,
  //     url: url,
  //     id: id,

  //   });
  // }
  //EMPIEZA MOSTRARA TAREA
  // mostrar_tareas.addEventListener('click',() =>{
  //   tareas_ver.classList.remove("ocultar");
  //   mostrar_tareas.classList.add("ocultar");
  //   here_tareas.classList.remove("ocultar");
  //   informationDoc_ocultar.classList.add("ocultarDoc");

  //   const rootRefTask = firebase.database().ref().child("docTask");

  //   rootRefTask.on('value', function(snapshot){
  //     var datos = snapshot.val();
  //     var results = ""
  //     for(var key in datos){

  //       console.log(datos[key].nombre)

  //       results +=  '<div  class="name_info_down1">'+datos[key].nombre+'</div>';

  //     }
  //     document.getElementById("file_tarea").innerHTML= results;

  //     // const cambiarFond = viewHome.querySelector('#file_tarea')
  //     // cambiarFond.addEventListener('click', () => {
  //     //   console.log('aqui')
  //     //   viewHome.querySelector("#doc_select").style.background = 'rgba(150, 156, 186, 0.2)'
  //     // });

  // });

  // const click_show_doc = document.getElementById("file_tarea");
  // click_show_doc.addEventListener("click", () => {

  //     rootRefTask.on("value", function (snapshot) {
  //       var datos = snapshot.val();
  //       var result = "";
  //       for (var key in datos) {
  //         console.log(datos[key].url);
  //         console.log(datos[key].id);

  //         if(datos[key].id === doc.id){
  //           result +=
  //           '<iframe  class="styleIframe"  src="' +
  //           datos[key].url +
  //           '"></iframe>';
  //         }else{
  //           console.log('diferente id')
  //         }
  //       }
  //       document.getElementById("verFiles").innerHTML = result;
  //     });
  // });
  // });

  //TERMINA MOSTRAR TAREA

  //   mostrar_tareas.addEventListener('click',() =>{

  //       //CREAR LISTA DE TAREAS EN VISTA DOCUMENTOS

  //   // const expirationDate = viewHome.querySelector("#inputDate2").value;
  //   const container_principal_tarea = viewHome.querySelector("#prueba_tareas");
  //   firebase.firestore()
  //   .collection("tasks").onSnapshot((querySnapshot) => {
  //   container_principal_tarea.innerHTML='';

  //   querySnapshot.forEach((doc) => {
  //     // console.log(doc.data())

  //   // console.log(doc.data())
  //   //  console.log(`${doc.id} => ${doc.data().name}`);
  //   container_principal_tarea.innerHTML += `

  //   <div id="style_generalContainer_principal" class="style_generalContainer_principal">

  //   <div  id="container_principal_tarea">
  //   <div style="width: 231px;height: 21px;">
  //   <p class="styles_principal"><strong>Tarea 1 </strong></p>
  //   <p class="styles_principal">${doc.data().taskName}</p>
  // </div>

  // <div style="width: 61px;height: 21px;">
  //   <p class="styles_principal" style='color:#D70025'><strong>Vence:</strong></p>
  //   <p id="date_documentos" style='color:#D70025'>${doc.data().expiration}</p>
  // </div>
  //   </div>

  //   <div class="d-flex flex-row align-items-center " id="container_doc_princial">
  //   <p style="margin-left:24px;
  //     font-family: Raleway;
  //     font-style: normal;
  //     font-weight: 600;
  //     font-size: 12px;
  //     line-height: 14px;
  //    margin-right:12px;
  //     color: #0F3041;" >01.</p>
  //     <label for="file-upload"  style="margin-left:0px;">
  //     <img  src="./img/svg/clicdoc.svg" alt="" />
  //       </label>
  //       <div class="d-flex flex-column ">
  //       <div id="file_tarea" style="width: 183.58px;height: 15px;margin-top:15px;">${doc.data().files}</div>
  //       <p id="date_documentos" style="width: 73px;height: 21px;">30/04/21</p>
  //       </div>
  //   </div>

  //   </div>
  //     ` ;

  //   //   const nameClick = viewHome.querySelector('#file_tarea');
  //   //   nameClick.addEventListener('click', (e) => {
  //   //     e.preventDefault();
  //   //     console.log('funciona please')
  //   //     firebase.firestore()
  //   // .collection("tasks").onSnapshot((querySnapshot) => {
  //   //   document.getElementById("verFiles").innerHTML='';
  //   // querySnapshot.forEach((doc) => {
  //   //     console.log(`${doc.data().file}`)
  //   //     document.getElementById("verFiles").innerHTML +=`
  //   //      <iframe  class="styleIframe"  src="${doc.data().files}"></iframe>
  //   //             `;
  //   //           })
  //   //         })
  //   //       })

  //         //******************* */
  //       //   const rootRefTask = firebase.database().ref().child("docTask");

  //       //   rootRefTask.on('value', function(snapshot){
  //       //     var datos = snapshot.val();
  //       //     var results = ""
  //       //     for(var key in datos){

  //       //       console.log(datos[key].nombre)

  //       //       results +=  '<div  class="name_info_down1">'+datos[key].nombre+'</div>';

  //       //     }
  //       //     document.getElementById("file_tarea").innerHTML= results;

  //       //     // const cambiarFond = viewHome.querySelector('#file_tarea')
  //       //     // cambiarFond.addEventListener('click', () => {
  //       //     //   console.log('aqui')
  //       //     //   viewHome.querySelector("#doc_select").style.background = 'rgba(150, 156, 186, 0.2)'
  //       //     // });

  //       // });

  //     });

  //     const click_show_doc = document.getElementById("file_tarea");
  //     click_show_doc.addEventListener("click", () => {

  //         rootRefTask.on("value", function (snapshot) {
  //           var datos = snapshot.val();
  //           var result = "";
  //           for (var key in datos) {
  //             console.log(datos[key].url);
  //             console.log(datos[key].id);

  //             if(datos[key].id === doc.id){

  //               console.log('si  es el ID')
  //               result +=
  //               '<iframe  class="styleIframe"  src="' +
  //               datos[key].url +
  //               '"></iframe>';
  //             }else{
  //               console.log('diferente id')
  //               result +=
  //               '<iframe  class="styleIframe"  src=""></iframe>';
  //             }
  //           }
  //           document.getElementById("verFiles").innerHTML = result;
  //         });
  //     });
  //     });
  // });

  //TERMINA OTRA MOSTRAS TAREA
  // });

  // const toggle = viewHome.querySelector("#cbox1");
  // const txtStatus = viewHome.querySelector("#txt-status");

  // toggle.addEventListener("change", function () {
  //   txtStatus.style.color = this.checked
  //     ? "#31CC53"
  //     : "#0F3041";
  //   console.log("VERDE");
  // });

  // });
  // };

  //*******Validando campos del formulario********//
  const homeworkValidInputs = () => {
    const inputDenominacion = viewHome.querySelector("#inputText1");
    const dateVencimiento = viewHome.querySelector("#inputDate2");
    const inputDestinatario = viewHome.querySelector("#inputText3");
    const inputCorreo = viewHome.querySelector("#inputText4");
    const textareaModal = viewHome.querySelector("#textareaModal");

    if (
      inputDenominacion.value === "" ||
      inputDestinatario.value === "" ||
      inputCorreo.value === "" ||
      textareaModal.value === ""
    ) {
      console.log("campos vacios");
      btnCreateHomework.classList.add("btnDisabled");
      btnCreateHomework.disabled = true;
    } else {
      console.log("campos llenos");
      btnCreateHomework.classList.remove("btnDisabled");
      btnCreateHomework.disabled = false;
    }

    // else if (
    //   inputDenominacion.validity.valid &&
    //   inputDestinatario.validity.valid &&
    //   inputCorreo.validity.valid &&
    //   inputMensaje.validity.valid
    // ) {
    //   btnCreateHomework.classList.remove("btnDisabled");
    //   btnCreateHomework.disabled = false;
    // }
  };

  const inputDenominacion = viewHome.querySelector("#inputText1");
  const dateVencimiento = viewHome.querySelector("#inputDate2");
  const inputDestinatario = viewHome.querySelector("#inputText3");
  const inputCorreo = viewHome.querySelector("#inputText4");
  // const textarea5 = viewHome.querySelector("textarea5");

  inputDenominacion.addEventListener("input", homeworkValidInputs);
  inputDestinatario.addEventListener("input", homeworkValidInputs);
  inputCorreo.addEventListener("input", homeworkValidInputs);
  textareaModal.addEventListener("input", homeworkValidInputs);

  //******** Limpia inputs ********/
  const cleanInputs = () => {
    inputDenominacion.value = "";
    inputDestinatario.value = "";
    inputCorreo.value = "";
    textarea5.value = "";
    textareaModal.value = "";
  };

  const showModalTaskform = viewHome.querySelector("#showModal_taskform");

  //******* botón Crear tarea - abre modal del formulario *******/
  showModalTaskform.addEventListener("click", (e) => {
    e.preventDefault;
    // console.log("limpia?");
    cleanInputs();
    btnCreateHomework.classList.add("btnDisabled");
    btnCreateHomework.disabled = true;
  });

  //***** botón CREAR TAREA del formulario ******/
  btnCreateHomework.addEventListener("click", (e) => {
    e.preventDefault;

    // subiendo info de formulario a firebase
    const taskName = inputDenominacion.value;
    const taskDate = currentDate;
    const taskExpiration = dateVencimiento.value;
    const taskReceiver = inputDestinatario.value;
    const taskMail = inputCorreo.value;
    const taskMessages = textarea5.value;
    const count = 0;

    // Invertir fecha de expiración d/m/a
    let resFecha = taskExpiration.split("-");
    let reversedFecha = resFecha.reverse();
    let taskExpi = reversedFecha.join("/");

    // // Iniciales del destinatario
    let initials = Array.prototype.map
      .call(taskReceiver.split(" "), function (x) {
        return x.substring(0, 1).toUpperCase();
      })
      .join("");

    const newTask = {
      taskName: taskName,
      date: taskDate,
      expiration: taskExpi,
      receiver: taskReceiver,
      initials: initials,
      mail: taskMail,
      message: taskMessages,
      status: "Pendiente",
      file: "",
      nameFile: "",
      files: [],
      count: count,
    };

    firebase.firestore().collection("tasks").add(newTask);
    console.log(newTask);

    createHomework();
    cleanInputs();
  });

  // });
  // };

  //  //******* subir documentos de Tareas a Storage *******/
  //     //  const subirTask = viewHome.querySelector("#subirTask");
  //     const file_uploadTask = viewHome.querySelector("#file-uploadTask");

  //     file_uploadTask.addEventListener("change", () => {
  //       const nDocs = document.getElementById("file-uploadTask").files[0].name;
  //       document.getElementById("infoTask").innerHTML = nDocs;

  //     });

  //     const ficheroTask = viewHome.querySelector("#file-uploadTask");
  //     ficheroTask.addEventListener("change", sendDocFirebase, false);

  //     const storageRefTask = firebase.storage().ref();
  //     const rootRefTask = firebase.database().ref().child("docTask");
  //     function sendDocFirebase() {
  //       //     console.log("subiendo")
  //       const documentoSubirTask = ficheroTask.files[0];
  //       console.log(documentoSubirTask);
  //       const uploadTasks = storageRefTask
  //         .child("docTask/" + documentoSubirTask.name)
  //         .put(documentoSubirTask);

  //       uploadTasks.on(
  //         "state_changed",
  //         function (snapshot) {},
  //         function (error) {
  //           alert("hubo un error");
  //         },
  //         function () {
  //           uploadTasks.snapshot.ref
  //             .getDownloadURL()
  //             .then(function (downloadURL) {
  //               alert("se subió la imagen conURL", downloadURL);
  //               console.log("Uploaded a blob or file!");
  //               crearNodoEnBDFirebaseTask(documentoSubirTask.name, downloadURL);
  //             });
  //         }
  //       );
  //     };

  // function  crearNodoEnBDFirebaseTask(name,url){
  //   rootRefTask.push({
  //   nombre:name,
  //   url:url,
  // })
  // }
  // });
  // //cambiar logo Sunafil una ver sincronizado
  // // const cambiarLogo = viewHome.querySelector('#btn_entrar_minimodal_sunafil');
  // // const sunafilS = viewHome.querySelector('#sunafil');
  // // const sunafilBlue = viewHome.querySelector('#sunafilBlue');
  // //     cambiarLogo.addEventListener('click', ()=>{
  // // sunafilS.classList.add('ocultar');
  // // sunafilBlue.classList.remove('ocultar');
  // //     })

  //mostar tareas en documentos

  const mostrar_tareas = viewHome.querySelector("#mostrar_tareas");
  const tareas_ver = viewHome.querySelector("#tareas_ver");
  const here_tareas = viewHome.querySelector("#here_tareas");
  const informationDoc_ocultar = viewHome.querySelector(
    "#informationDoc_ocultar"
  );

  here_tareas.addEventListener("click", () => {
    tareas_ver.classList.add("ocultar");
    mostrar_tareas.classList.remove("ocultar");
    here_tareas.classList.add("ocultar");
    informationDoc_ocultar.classList.remove("ocultarDoc");
  });

  //subir y traer files para see en documentos

  let stars = viewHome.querySelectorAll(".star");
  viewHome
    .querySelector(".star-container")
    .addEventListener("click", starRating);

  function starRating(e) {
    const star = e.target;
    const val = star.getAttribute("data-val");

    stars.forEach((star) => star.classList.remove("star__checked"));

    star.classList.add("star__checked");
  }

  mostrar_tareas.addEventListener("click", () => {
    tareas_ver.classList.remove("ocultar");
    mostrar_tareas.classList.add("ocultar");
    here_tareas.classList.remove("ocultar");
    informationDoc_ocultar.classList.add("ocultarDoc");
  });

  const casoSeleccionado = viewHome.querySelector("#casoSeleccionado");
  const casoNuevo = viewHome.querySelector("#casoNuevo");

  const flex_container_datos = viewHome.querySelector("#flex-container_datos");
  const container_actuacionenproceso = viewHome.querySelector(
    "#container_actuacionenproceso"
  );
  const container_actuacion = viewHome.querySelector("#container_actuacion");

  if (tipo_actuacion != "") {
    casoSeleccionado.classList.remove("ocultar");
    casoNuevo.classList.add("ocultar");
    casoNuevo.classList.add("ocultar");
    flex_container_datos.classList.remove("ocultar");
    flex_container_datos.style.display = "flex";
    container_actuacionenproceso.classList.add("ocultar");
    container_actuacion.classList.remove("ocultar");
    console.log("holis");
  } else {
    casoSeleccionado.classList.add("ocultar");
    casoNuevo.classList.remove("ocultar");
    flex_container_datos.classList.add("ocultar");
    container_actuacionenproceso.classList.remove("ocultar");
    container_actuacion.classList.add("ocultar");
  }

  // SUMAR DOCUMENTOS

  var sumaDocumentos = 0;
  // Sum the count of each shard in the subcollection
  firebase
    .firestore()
    .collection("tasks")
    .where("files", "!=", [])
    .get()
    .then((snapshot) => {
      let total_count = 1;
      snapshot.forEach((doc) => {
        total_count += doc.data().count;
        console.log(total_count);
        sumaDocumentos += total_count;
        console.log(sumaDocumentos);
        const sumaTotalDocumentos = sumaDocumentos + 1;

        console.log(sumaTotalDocumentos);

        const sumaTotalDocumentosContainer = viewHome.querySelector(
          "#sumaTotalDocumentos"
        );
        const ceroDocumentos = viewHome.querySelector("#ceroDocumentos");
        sumaTotalDocumentosContainer.classList.remove("ocultar");
        ceroDocumentos.classList.add("ocultar");
        sumaTotalDocumentosContainer.innerHTML = `
      <p class="text_Resolution"  style="font-size: 10px;">${sumaTotalDocumentos}</p>
      <p class="text_tipoResolution">Documentos</p>`;
        console.log(sumaTotalDocumentos);
      });
    });
  //SUMAR PENDIENTES

  var sumaPendiente = 0;
  // Sum the count of each shard in the subcollection
  firebase
    .firestore()
    .collection("tasks")
    .where("status", "==", "Pendiente")
    .get()
    .then((snapshot) => {
      let total_count = 1;
      snapshot.forEach((doc) => {
        total_count += doc.data().count;
        console.log(total_count);
        sumaPendiente += total_count;
        console.log(sumaPendiente);
        const sumaTotalPendiente = sumaPendiente;

        console.log(sumaTotalPendiente);

        const sumaTotalPendienteContainer = viewHome.querySelector(
          "#sumaTotalPendiente"
        );
        const ceroPendiente = viewHome.querySelector("#ceroPendiente");
        sumaTotalPendienteContainer.classList.remove("ocultar");
        ceroPendiente.classList.add("ocultar");
        sumaTotalPendienteContainer.innerHTML = `
            <p class="text_Resolution"  style="font-size: 10px;margin-left:28px;">${sumaTotalPendiente} Pendientes</p>`;

        console.log(sumaTotalPendiente);
      });
    });


  //******* Generar reporte de Home-Caso *****/
   const btnReport = viewHome.querySelector('#btnReport');

    btnReport.addEventListener('click', () => {
      // console.log('REPORTE');

      const inspectionDate = localStorage.getItem("date");
      let inspecDate = inspectionDate.split("-");
      let reversedDate = inspecDate.reverse();
      let dateInspection = reversedDate.join("-");

      const lawyer = localStorage.getItem("funcionario_actuacion");
      const multaPontencial = localStorage.getItem("multaPontencial");
      const tipoRiesgo = localStorage.getItem("tipo_riesgo");
      const orderInspeccion = localStorage.getItem("order");
      const inspectorAuxiliar = localStorage.getItem("inspectorAuxiliar");
      const etapa = localStorage.getItem("etapa");
      let tipoEtapa = etapa.toUpperCase();

      let show1 = '';
      let show2 = '';
      let show3 = '';
      let show4 = '';
      let show5 = '';
      let show6 = '';
      let show7 = "";
      let show8 = "";

      if (localStorage.getItem("materia1") == undefined) {
        // console.log("no existe materia1");
        show1 = "hide";
      } else {
        // console.log("existe materia1");
        show1 = "displayF";
      }

      if (localStorage.getItem("materia2") == undefined) {
        // console.log("no existe materia2");
        show2 = "hide";
      } else {
        // console.log("existe materia2");
        show2 = "displayF";
      }

      if (localStorage.getItem("materia3") == undefined) {
        // console.log("no existe materia3");
        show3 = "hide";
      } else {
        // console.log("existe materia3");
        show3 = "displayF";
      }

      if (localStorage.getItem("materia4") == undefined) {
        // console.log("no existe materia4");
        show4 = "hide";
      } else {
        // console.log("existe materia4");
        show4 = "displayF";
      }

      if (localStorage.getItem("materia5") == undefined) {
        // console.log("no existe materia5");
        show5 = "hide";
      } else {
        // console.log("existe materia5");
        show5 = "displayF";
      }

      if (localStorage.getItem("materia6") == undefined) {
        // console.log("no existe materia6");
        show6 = "hide";
      } else {
        // console.log("existe materia6");
        show6 = "displayF";
      }

      if (localStorage.getItem("materia7") == undefined) {
        // console.log("no existe materia7");
        show7 = "hide";
      } else {
        // console.log("existe materia7");
        show7 = "displayF";
      }

      if (localStorage.getItem("materia8") == undefined) {
        // console.log("no existe materia8");
        show8 = "hide";
      } else {
        // console.log("existe materia8");
        show8 = "displayF";
      }


      let imgNivelEtapa = "";
      let marginTFooter = "";
      if (tipoRiesgo === "Nivel Alto") {
        imgNivelEtapa = "./img/svg/barra-alto.svg";
        marginTFooter = "180px";
      } 

      if (tipoRiesgo === "Nivel Moderado") {
        imgNivelEtapa = "./img/svg/barra-moderado.svg";
        marginTFooter = "225px"
      } 
      
      if (tipoRiesgo === "Nivel Leve") {
        imgNivelEtapa = "./img/svg/barra-leve.svg";
        marginTFooter = "230px";
      } 


      html2pdf()
        .from(
          `
      
    <div id="container-report" style="color:#0F3041;">

      <div class="d-flex flex-column" style="margin-top:24px;">
        <img src="./img/svg/logo.svg" style="height:35px;align-self: flex-end; margin-right:30px; margin-bottom: -60px;" alt="logo"> 
        <img src="./img/banner-reporte.png" style="height: 80px; width:100%; opacity: 0.5;" alt="banner"/>
      </div>
      <div style="padding:25px 50px 0;">
        <h2>CASO ESTIBADORES</h2>
        <p style="margin:0;">Fecha de creación: ${dateInspection}</p>
        <p>Abogado a cargo: <strong>${lawyer}</strong></p>

        <div class="d-flex flex-column" style="margin-top:40px;">

          <div class="d-flex">
            <div id="div-left" style="width:50%;">
              <div class="div-left-descripcion">
                <strong>Descripción</strong>
                <p style="width:242px; text-align:justify;">
                  Loream ipsum dolor sit amet, consectetur adipiscing elit.
                  Gravida urna et mi accumsan scelerisque. Amet magna sit mattis
                  lobortis leo.
                </p>
              </div>
              <div class="div-left-multa" style="margin-top:40px;">
                <img src="./img/svg/flecha-up.svg" style="margin-right:10px;" alt="icono multa" />
                <strong>Multa potencial</strong>
                <p style="padding-left: 45px;">S/ ${multaPontencial}</p>
              </div>
              <div style="margin-top:40px;">
                <img src=${imgNivelEtapa} style="margin-right:10px;" alt="icono barras" />
                <strong>Riesgo</strong>
                <p style="padding-left: 45px;">${tipoRiesgo}</p>
              </div>
            </div>

            <div id="div-right">
              <div id="container-materias" class="div-right-materias">
                
                <img src="./img/svg/elecciones.svg" style="margin-right: 8px;" alt="icono materias" />
                <strong>Materias</strong>
                  <div id="divMaterias" style="padding-left: 45px;">
                  <p style="margin:0;" id="materia_1" class=${show1}>• Relaciones laborales</p>
                  <p style="margin:0;" id="materia_2" class=${show2}>• Seguridad y salud en el trabajo</p>
                  <p style="margin:0;" id="materia_3" class=${show3}>• Empleo y colocación</p>
                  <p style="margin:0;" id="materia_4" class=${show4}>• Intermediación laboral</p>
                  <p style="margin:0;" id="materia_5" class=${show5}>• Promoción y formación</p>
                  <p style="margin:0;" id="materia_6" class=${show6}>• Extranjeros</p>
                  <p style="margin:0;" id="materia_7" class=${show7}>• Seguridad social</p>
                  <p style="margin:0;" id="materia_8" class=${show8}>• Labor inspectiva</p>
                </div>
              </div>
              <div class="div-right-oInscripcion" style="margin-top:40px;">
                <img src="./img/svg/orden.svg" style="margin-right: 8px;" alt="icono orden" />
                <strong>Orden de Inspección</strong>
                <p style="padding-left: 45px;">${orderInspeccion}</p>
              </div>
              <div class="div-right-funcionario" style="margin-top:40px;">
                <img src="./img/svg/avatar-funci.svg" style="margin-right: 8px;" alt="icono funcionario" />
                <strong>Funcionario actual</strong>
                <p style="padding-left: 45px;">${inspectorAuxiliar}</p>
              </div>
            </div>
          </div>

          <div style="margin-top:50px;">
            <strong style="">Actuaciones</strong>
            <p style="font-size:12px; color:#BDBDBD;">
              Última actualización 19/05/2021
            </p>

            <strong style="color:#FF3355;">ETAPA: ${tipoEtapa}</strong>
            <hr style="margin:0;" />

            <table class="table-caso" style="margin-top:15px;">
              <thead id="table-head">
                <tr style="font-size:12px; color:#BDBDBD;">
                  <th scope="col" style="width:400px">TIPO</th>
                  <th scope="col">INICIO</th>
                </tr>
              </thead>
              <tbody style="padding-top:10px; color:#7D7577;">
                <tr>
                  <td>Requerimiento de comparecencia</td>
                  <td>12/04/2021</td>
                </tr>
                <tr>
                  <td>Notificación</td>
                  <td>18/01/2021</td>
                </tr>
                <tr>
                  <td>Presentan demanda</td>
                  <td>26/12/2020</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>

   
     <div class="footer d-flex" style="margin-top:${marginTFooter}; padding: 10px 20px 5px;">
        <p>
          Copyright © 2021 <strong>sami.</strong>Todos los derechos reservados.
          <span>Términos del Servicio y Políticas de Privacidad</span>
        </p>
        <img src="./img/svg/group.svg" alt="logo" />
      </div>

    </div>
  `
        )
        .save();
    })


  //**** Redirecciona a vista Crear Caso *****/

  const btnShowCreateCase = viewHome.querySelector("#btnShowCreateCase");

  btnShowCreateCase.addEventListener('click', () => {
    window.location.hash = "#/inspection";
    
  });

  return viewHome;
};
