export default () => {
  const viewReport = document.createElement("div");

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


  viewReport.innerHTML = `
      <div style="text-align:left;">
      <!--botón reporte -->
      <button id="btnReport" 
        style="font-size:11px; 
        border-radius:5px;
        padding:5px;
        color: white;
        background: #FF3355;">
        Generar Reporte
      </button>
    </div>

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
                <img src="./img/svg/barras.svg" style="margin-right:10px;" alt="icono barras" />
                <strong>Riesgo</strong>
                <p style="padding-left: 45px;">${tipoRiesgo}</p>
              </div>
            </div>

            <div id="div-right">
              <div id="container-materias" class="div-right-materias">
                
                <img src="./img/svg/elecciones.svg" style="margin-right: 8px;" alt="icono materias" />
                <strong>Materias</strong>
                  <div id="divMaterias" style="padding-left: 45px;">
                  <p style="margin:0;" id="materia_1" class="hide">• Relaciones laborales</p>
                  <p style="margin:0;" id="materia_2" class="hide">• Seguridad y salud en el trabajo</p>
                  <p style="margin:0;" id="materia_3" class="hide">• Empleo y colocación</p>
                  <p style="margin:0;" id="materia_4" class="hide">• Intermediación laboral</p>
                  <p style="margin:0;" id="materia_5" class="hide">• Promoción y formación</p>
                  <p style="margin:0;" id="materia_6" class="hide">• Extranjeros</p>
                  <p style="margin:0;" id="materia_7" class="hide">• Seguridad social</p>
                  <p style="margin:0;" id="materia_8" class="hide">• Labor inspectiva</p>
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

   
     <div class="footer d-flex" style="margin-top:90px; padding: 10px 20px 5px;">
        <p>
          Copyright © 2021 <strong>sami.</strong>Todos los derechos reservados.
          <span>Términos del Servicio y Políticas de Privacidad</span>
        </p>
        <img src="./img/svg/group.svg" alt="logo" />
      </div>

    </div>
  `;

  const materia_1 = viewReport.querySelector("#materia_1");
  const materia_2 = viewReport.querySelector("#materia_2");
  const materia_3 = viewReport.querySelector("#materia_3");
  const materia_4 = viewReport.querySelector("#materia_4");
  const materia_5 = viewReport.querySelector("#materia_5");
  const materia_6 = viewReport.querySelector("#materia_6");
  const materia_7 = viewReport.querySelector("#materia_7");
  const materia_8 = viewReport.querySelector("#materia_8");

   if(localStorage.getItem('materia1') == undefined ){
      console.log("no existe materia1");
      materia_1.classList.add("hide");
    } else {
      console.log("existe materia1");
      materia_1.classList.remove("hide");
   }

    if (localStorage.getItem("materia2") == undefined) {
      console.log("no existe materia2");
      materia_2.classList.add("hide");
    } else {
      console.log("existe materia2");
      materia_2.classList.remove("hide");
    }

    if (localStorage.getItem("materia3") == undefined) {
      console.log("no existe materia3");
      materia_3.classList.add("hide");
    } else {
      console.log("existe materia3");
      materia_3.classList.remove("hide");
    }

    
    if (localStorage.getItem("materia4") == undefined) {
      console.log("no existe materia4");
      materia_4.classList.add("hide");
    } else {
      console.log("existe materia4");
      materia_4.classList.remove("hide");
    }


    
    if (localStorage.getItem("materia5") == undefined) {
      console.log("no existe materia5");
      materia_5.classList.add("hide");
    } else {
      console.log("existe materia5");
      materia_5.classList.remove("hide");
    }


    
    if (localStorage.getItem("materia6") == undefined) {
      console.log("no existe materia6");
      materia_6.classList.add("hide");
    } else {
      console.log("existe materia6");
      materia_6.classList.remove("hide");
    }

    
    if (localStorage.getItem("materia7") == undefined) {
      console.log("no existe materia7");
      materia_7.classList.add("hide");
    } else {
      console.log("existe materia7");
      materia_7.classList.remove("hide");
    }


    
    if (localStorage.getItem("materia8") == undefined) {
      console.log("no existe materia8");
      materia_8.classList.add("hide");
    } else {
      console.log("existe materia8");
      materia_8.classList.remove("hide");
    }


  const btnReport = viewReport.querySelector("#btnReport");
  const containerReport = viewReport.querySelector("#container-report");

  
  btnReport.addEventListener("click", () => {
    console.log("REPORTE");
    
    html2pdf().from(containerReport).save();
  });

  const containerReporte = viewReport.querySelector("#container-report");
  console.log('es HTML???', containerReporte);

  return viewReport;
};