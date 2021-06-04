export default () => {
  const viewHomeCases = document.createElement("div");

  viewHomeCases.innerHTML = `
    <div class="wrapperCases">
      <!-- Header (Casos) -->
      <div class="headerCases">
        <h1>HEADER</h1>
      </div>

      <!-- Contenedor (sidebar y mainCards de casos) -->
      <div class="containerHomeCases">

        <!-- Siderbar (casos) -->
        <div class="sidebarCases">

          <img src="./img/sunafil-casilla-roja.png" alt="logo sunafil" />

          <div class="sidebar-company">
            <p>Empresa</p>
            <img src="./img/saga.png" alt="logo empresa" />
          </div>

          <div class="company-pendingTasks">
            <div class="pendingTasks-header d-flex justify-content-between">
              <p>Tareas pendientes</p>
              <button>Ver Todas</button>
            </div>
            <div class="pendingTasks-content" >

              <div class="pendingTasks-content-card d-flex">
                <img src="./img/svg/circulo-rojo.svg" alt="circulo rojo" />
                <div class="card-fvenci">
                  <p>02 Jun</p>
                  <span>Vencimiento</span>
                </div>
                <div class="card-taskName">
                  <p>Tarea 1:</p>
                  <span>Gravida et...</span>
                </div>
              </div>

              <div class="pendingTasks-content-card d-flex">
                <img src="./img/svg/circulo-rojo.svg" alt="circulo rojo" />
                <div class="card-fvenci">
                  <p>09 Jun</p>
                  <span>Vencimiento</span>
                </div>
                <div class="card-taskName">
                  <p>Tarea 2:</p>
                  <span>Gravida et...</span>
                </div>
              </div>


              <div class="pendingTasks-content-card d-flex">
                <img src="./img/svg/circulo-rojo.svg" alt="circulo rojo" />
                <div class="card-fvenci">
                  <p>12 Jun</p>
                  <span>Vencimiento</span>
                </div>
                <div class="card-taskName">
                  <p>Tarea 3:</p>
                  <span>Gravida et...</span>
                </div>
              </div>


            </div>
          </div>

          <div class="caseProgress">
            <div class="caseProgress-header d-flex justify-content-between">
              <p>Progreso de casos</p>
              <img src="./img/svg/btn-right.svg" alt="botón siguiente" />
            </div>
            <div class="caseProgress-content d-flex">
              <img src="./img/svg/circle-progress.svg" alt="circulo progreso" />
              <div class="content-items">
                <img src="./img/svg/circulo-azul.svg" alt="En proceso" style="margin-top:5px;" />
                <img src="./img/svg/circulo-verde.svg" alt="En proceso" style="margin-top:10px;" />
                <img src="./img/svg/circulo-rojoItem.svg" alt="En proceso" style="margin-top:10px;"/>
              </div>
            </div>
          </div>

          <div class="caseTeam">
            <p>Equipo</p>
            <div class="caseTeam-names">
              <div class="miniCardTeam d-flex align-items-center">
                <img src="./img/svg/avatar1.svg" alt="foto perfil" />
                <p>Sofia Jimenez</p>
              </div>
              <div class="miniCardTeam d-flex align-items-center">
                <img src="./img/svg/avatar2.svg" alt="foto perfil" />
                <p>Mario Gonzales</p>
              </div>
              <div class="miniCardTeam d-flex align-items-center">
                <img src="./img/svg/avatar3.svg" alt="foto perfil" />
                <p>Alonso Aguirre</p>
              </div>
            </div>
          </div>

        </div>

        <!-- Main (casos) -->
        <div class="mainCases">
          <h1>MAIN</h1>
        </div>
      </div>

      <!-- Footer (casos)-->
      <div class="footerCases d-flex">
        <p>
          Copyright © 2021 <strong>sami.</strong>Todos los derechos reservados.
          <span>Términos del Servicio y Políticas de Privacidad</span>
        </p>
        <img src="./img/svg/group.svg" alt="logo" />
      </div>
    </div>
  `;

  return viewHomeCases
}