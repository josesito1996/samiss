export default () => {
  const viewHomeCases = document.createElement("div");

  viewHomeCases.innerHTML = `
    <div class="wrapperCases">
      <!-- Header (Casos) -->
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

              <div id="container_pedingTasks" class="pendingTasks-content-card d-flex">

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
        <div class="d-flex flex-row justify-content-between" id="nav-several-case">
           
           <div id="burger" class="d-flex flex-row align-items-sm-center">
               <img id="listSeveralCase" src="./img/svg/listSeveralCase.svg"/>
               <p class="style_MisCasos" style="margin-bottom: 0px;">Mis Casos</p>
           </div>

           <div id= "container_right" class="d-flex flex-row align-items-sm-center ">
           
               <div id="byStage" class="d-flex flex-row justify-content-between align-items-sm-center ">
                   <p class="style_porEtapa"  style="margin-bottom: 0px;">Por Etapa</p>
                   <img src="./img/svg/down_doc.svg"/>
               </div>

               <div id="seeker" class="d-flex flex-row align-items-sm-center">
                   <input type="search" id ="search_homeCase" name="searchCase" placeholder="  Buscar caso" />
                   <img id="img_search_homeCase" src="./img/svg/search_homeCase.svg"/>
               </div>

               <div id="slide" class="d-flex flex-row justify-content-between align-items-sm-center " >
                   <img  src="./img/svg/horizontal_slide.svg"/> 
                   <img  src="./img/svg/vertiracl_grid.svg"/>
               </div>

               <div id="pagination" class="d-flex flex-row justify-content-between align-items-sm-center" >
                   <div id="numberContainer">01</div>
                   <p class="paginationNumber"  style="margin-bottom: 0px;">de 01 páginas</p>
               </div>

           </div>

       </div>

              
       <div id="show_card_homeCase">
           <div class="d-flex flex-column justify-content-center" id="card_empty">
           <img  src="./img/svg/more_card_homeCase.svg"/>
               <p id="txt_nuevoCaso">Nuevo Caso</p>
           </div>
           <div id="show_allCard_homeCase">
           
           </div>

           <div id="paginations" class="d-flex flex-row justify-content-between align-items-sm-center" >
               <div id="numberContainer">01</div>
               <p class="paginationNumber"  style="margin-bottom: 0px;">de 01 páginas</p>
            </div>
          
       </div>
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

  // var starCountRef = firebase.database().ref('cases/' + '/crearActuacion');
  // starCountRef.on('value', (snapshot) => {
  //   const data = snapshot.val();
  //    console.log(data)
  //   // updateStarCount(postElement, data);
  // });


const show_card_homeCase = viewHomeCases.querySelector("#show_allCard_homeCase")
    firebase
      .firestore()
      .collection("cases")
      .onSnapshot((querySnapshot) => {
        show_card_homeCase.innerHTML = "";
        querySnapshot.forEach((doc) => {
            const chain = doc.data().tipoNivel
            const newChain = chain.slice(6, 14)
            console.log(newChain)

        //     //sacar año

        //   function getYear(curDate){
        //     var dt = new Date(curDate);`enter code here`
        //      var year = dt.getFullYear();
        //     return year.toString() 
        //     }
        
        //    console.log( getYear(doc.data().inspectionDate));
        //    const year =  getYear(doc.data().inspectionDate);
        //    localStorage.setItem("year", year )

        // //sacar dia 

        // function getDate(curDate){
        //     var dt = new Date(curDate);`enter code here`       
        //     return  (dt.getDate()+1).toString().padStart(2, 0);
        //     }
        
        //    console.log(getDate(doc.data().inspectionDate));

        //    const day =  getDate(doc.data().inspectionDate);
        //    localStorage.setItem("day", day )

        // //sacar mes
        // function getMonth(curDate){

        //     var meses = [
        //         "Enero", "Febrero", "Marzo",
        //         "Abril", "Mayo", "Junio", "Julio",
        //         "Agosto", "Septiembre", "Octubre",
        //         "Noviembre", "Diciembre"
        //       ] 
        //     const  dt = new Date(curDate);`enter code here`
        //     var mes = dt.getMonth();
        //     // const mes = (dt.getMonth() + 1).toString().padStart(2, 0).toString();
        //     return meses[mes]   ;
        //     }
        
        //    console.log(getMonth(doc.data().inspectionDate));
        //    const month =  getMonth(doc.data().inspectionDate);
        //    localStorage.setItem("month", month )
    
            show_card_homeCase.innerHTML += `
          <div id="container_information_homeCase" class="d-flex flex-column">

          <div id ="row1_card_homeCase" class="d-flex flex-row justify-content-between">
             
            <div class="d-flex ">
                <div id="date_homeCase"><span>${doc.data().inspectionDate}</span>
                </div>
            </div>

            <div class="d-flex flex-row ">
                <div id="stage_homeCase"><span>${doc.data().Etapa}</span>
                </div>
                <img id="bntDetailCase" src="./img/svg/arrow_card_homeCase.svg"/>
            </div>
          </div>

          <div id="row2_card_homeCase" class="d-flex flex-column ">

                  <p id ="style_card_denomination_homeCase">${doc.data().denomination}</p>
              
              
          </div>

          <div class="d-flex flex-row" id="row3_card_homeCase" >
              <div class="d-flex flex-column" id="kind_stage_card_homeCase">
                <p id ="style_card_dateStage_homeCase">${doc.data().Fecha}</p>
                  <p id ="style_title_card_homeCase">${doc.data().Tipo}</p>
                  <p id ="style_txt_stage_card_homeCase">Última actuación</p>
              </div>

              <div class="d-flex flex-column">
                  <p id ="style_title_card_homeCase">${newChain}</p>
                  <p id ="style_txt_stage_card_homeCase">Riesgo</p>
              </div>
          </div>

          <div class="d-flex flex-row" id="row4_card_homeCase">

              <div class="d-flex flex-column" id="container1">
                  <p id ="style_title_card_homeCase">${doc.data().inspectionOrder}</p>
                  <p id ="style_txt_stage_card_homeCase">Orden de Inspección</p>
              </div>

              <div class="d-flex flex-column" id="container2">
                  <div class="d-flex flex-row align-items-center">
                      <div id="ball"></div><div id ="style_titleNumber_card_homeCase">3</div><p id ="style_title_card_homeCase"> de 6 Tareas</p>
                  </div>
                  <p id ="style_txt_stage_card_homeCase" style="margin-left:10px">Pendientes</p>
              </div>

              <div class="d-flex flex-column" id="container3">
                  <p id ="style_dateExpirationHomework_card_homeCase">03/06</p>
                  <p id ="style_txt_stage_card_homeCase">Vencimiento</p>
              </div>
              
          </div>

          </div>`;

/****** Traer tareas pendientes *******/
const containerPendingTasks = viewHomeCases.querySelector("#container_pedingTasks") ;

  firebase
    .firestore()
    .collection("tasks")
    .where("status", "==", "Pendiente")
    .onSnapshot((querySnapshot) => {
      containerPendingTasks.innerHTML = "";
      let count = 0
      querySnapshot.forEach((doc) => {
        count = count + 1
        containerPendingTasks.innerHTML += `
      <div class="d-flex">
        <img src="./img/svg/circulo-rojo.svg" alt="circulo rojo" />
        <div class="card-fvenci">
          <p>02 Jun</p>
          <span>Vencimiento</span>
        </div>
        <div class="card-taskName">
          <p>Tarea ${count}:</p>
          <p class="taskName">${doc.data().taskName}</p>
        </div>
      </div>
      `;
      });
    });







/******* trae id de Caso ******/
const bntDetailCase = viewHomeCases.querySelector("#bntDetailCase");

  bntDetailCase.addEventListener("click", () => {

    // console.log("traer id Case", doc.id);

    global_variable = doc.id;
    console.log('ENVIO ID->', global_variable);
  });


        })
    })   


// // for (const value of Object.values(data.data)) {
// //     let id = value.id;
// //     let name = id.toUpperCase();
// //     let img = value.splash;
// //     let infoAttack = value.info.attack;
// //     let infoDefense = value.info.defense;
// //     //console.log(infoDefense);
// //     let infoMagic = value.info.magic;

//     const container_information_homeCase = homeCase.querySelector("#container_information_homeCase")
// // }



  return viewHomeCases
}