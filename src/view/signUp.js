
export default () => {
    const viewSignUp = document.createElement('div');
    
    viewSignUp.innerHTML =`
      <div class="container-register d-flex">
        <!-- <div class="row"> -->
        <!---Columna izquierda-->
        <!-- <div class="col-12 col-lg-4"> -->
        <div class="div-logo-form d-flex">
          <div class="">
            <img
              src="./img/svg/logo.svg"
              id=""
              style="width:160px; height:54px;"
              alt="logo"
            />
          </div>
          <!---Columna derecha-->
          <!-- <div class="col-12 col-lg-8"> -->
          <!--FORMULARIO 1-->

          <!---Segunda fila-->
          <div class="formRegister" id="formRegister">
            <form id="form2">
              <div class="row">
                <div class="col-12">
                  <h1 class="registrar ">Regístrate</h1>
                </div>

                <div
                  class="col-12 d-flex align-items-center bd-highlight"
                  id="completar"
                >
                  <p
                    class=" txtgray"
                    style="text-align: center; font-size: 14px"
                  >
                    Completa los datos solicitados. ¿Ya tienes una cuenta?&nbsp
                  </p>
                  <a
                    href=""
                    class="ptxtRed mb-3 "
                    style="text-decoration:none; font-size: 14px;"
                    >Ingresa</a
                  >
                </div>

                <div class="col-12 ">
                  <div class="row ms-5 mt-3 mb-3">
                    <div class="col-12 col-lg-3">
                      <table>
                        <tr>
                          <td>
                            <button class="btn_color1" id="btn_step_one">
                              1
                            </button>
                          </td>
                          <td>
                            <!--<a href="" class="text-muted" style="text-decoration:none; margin-left:9px; font-size:11px">Datos personales</a>-->
                            <p
                              style="margin-bottom:0; margin-left:9px; font-size:11px; color:rgba(131, 135, 149, 1);"
                            >
                              Datos personales
                            </p>
                          </td>
                        </tr>
                      </table>
                    </div>

                    <div class="col-12 col-lg-9">
                      <table>
                        <tr>
                          <td>
                            <button class="btn_color" id="btn_step_two">
                              2
                            </button>
                          </td>
                          <td>
                            <!--<a href="" class="text-muted" style="text-decoration:none; margin-left:9px; font-size:11px">Datos empresa</a>-->
                            <p
                              style="margin-bottom:0; margin-left:9px; font-size:11px; color:rgba(131, 135, 149, 1);"
                            >
                              Datos empresa
                            </p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div id="container_infoUser">
                  <div class="container_user1 col-md-4 mt-5">
                    <div class="textOnInput ">
                      <label
                        for="camponombre"
                        class=""
                        style="font-size:12px; color:#696465;"
                        >Nombre</label
                      >
                      <input
                        type="text"
                        name="nombre"
                        id="fname1"
                        class="form-control fname1"
                        style="font-size:14px;"
                        placeholder="Completar"
                        id="camponombre"
                        required
                      />
                    </div>

                    <div class="textOnInput ">
                      <label
                        for="camponombre"
                        class=""
                        style="font-size:12px; color:#696465;"
                        >Apellido</label
                      >
                      <input
                        type="text"
                        name="nombre"
                        id="fname1"
                        class="form-control fname1"
                        style="font-size:14px; margin-left:40px;"
                        placeholder="Completar"
                        id="camponombre"
                      />
                    </div>
                  </div>

                  <div class="container_user1">
                    <div class="textOnInput">
                      <label
                        for="camponombre"
                        class=""
                        style="font-size:12px; color:#696465;"
                        >Correo</label
                      >
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="form-control"
                        style="font-size:14px;"
                        placeholder="nombre@petroperu.com"
                      />
                    </div>

                    <div class="textOnInput">
                      <label
                        for="camponombre"
                        class=""
                        style="font-size:12px; color:#696465;"
                        >Contraseña</label
                      >
                      <input
                        type="password"
                        id="password1"
                        class="form-control"
                        name="txtPassword"
                        style="font-size:14px; margin-left:40px;"
                        placeholder="Contraseña"
                      />
                      <button type="button" id="btn_password" class="">
                        <!-- <i id="eyeIcon" class="bi bi-eye"></i> -->
                        <img src="./img/svg/eye.svg" alt="eye" />
                      </button>
                    </div>
                  </div>

                  <div class="col-12 d-flex flex-row" style="margin-top:8px">
                    <div
                      class="d-flex flex-row ms-5 mb-3"
                      style="font-size:14px;"
                    >
                      <input type="checkbox" name="check"
                      class="form-check-input" style= margin:5px;">
                      <p class="" style="font-size:14px; color:#838795;">
                        Acepto los&nbsp
                      </p>
                      <!--<a href="#" class="text-danger " id="newAccount" style="text-decoration:none">-->
                      <p style="color:#FF3355; font-size:14px;">
                        Términos del Servicio
                      </p>
                      <!--</a>-->
                      <p style="font-size:14px; color:#838795;">&nbspy&nbsp</p>
                      <!--<a href="#" class="text-danger" id="newAccount" style="text-decoration:none"> -->
                      <p style="color:#FF3355; font-size:14px;">
                        Políticas de Privacidad
                      </p>
                      <!--</a>-->
                      <!-- </p> -->
                    </div>
                  </div>
                </div>
              </div>

              <!---INFORMACIÓN EMPRESA-->
              <div class="col-12">
                <div id="container_infoEmpresa" class="ocultar">
                  <div class="textOnInput2">
                    <label
                      for="camponombre"
                      style="font-size:12px; color:#696465;"
                      >Empresa</label
                    >
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="form-control"
                      style="font-size:14px;"
                      placeholder="Ej. Petroperu"
                    /><br />
                  </div>

                  <div
                    id="ajuste"
                    class="d-flex align-items-center bd-highlight"
                  >
                    <!-- <p class=" fs-6 fw-normal mb-1">Agrega un colocador &nbsp</p>-->
                    <p
                      class=""
                      style="font-size:14px; color: #7D7577; margin-bottom:0px;"
                    >
                      Agrega un Usuario &nbsp
                    </p>
                    <img
                      src="../src/img/svg/help-circle.svg"
                      alt="help circle"
                    />
                    <!--<i class="bi bi-question-circle "></i>-->
                  </div>

                  <!-- Modal -->
                  <!-- Button trigger modal -->
                  <div class="d-flex colum" style="height:110px;">
                    <button
                      type="button"
                      id="btn_New"
                      class="btn btn-primary ms-5"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      <img
                        src="./img/svg/add-new-circle.svg"
                        alt="agrega usuario"
                      />
                      <p
                        style="font-size: 11px;color: #466EFE;font-weight: 500;line-height: 16px; margin-top:6px; margin-bottom:3px;"
                      >
                        Nuevo
                      </p>
                    </button>

                    <!--Show Data-->
                    <div
                      id="div_Show_Data"
                      style="margin-top:15px; width:64px;"
                      class="hide"
                    >
                      <div
                        class="rounded-circle mt-1"
                        id="btn_border_showNamei"
                        style="height:56px; width:56px"
                      >
                        <div
                          id="showNamei"
                          class="rounded-circle"
                          style="width:50px; height:50px;"
                        >
                          <p></p>
                        </div>
                      </div>

                      <div
                        id="showName"
                        style="font-size: 11px;color: #5A6072; line-height: 16px; margin-top:8px; text-align:center;"
                        class="showName"
                      >
                        <p></p>
                      </div>

                      <div id="show_icon" class="ocultar" style="margin-left:8">
                        <div class="row" style="height:18px;">
                          <div
                            class="col col-12 col-lg-6  align-items-center"
                            style="width:12px; margin-right:8px"
                          >
                            <button id="pencil"></button>
                          </div>

                          <div
                            class="col col-12 col-lg-6 "
                            style="width:12px;padding:0px"
                          >
                            <button id="trash"></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div
                        class="modal-content"
                        style="width:500px; height:402px;"
                      >
                        <div class="modal-header" style="border-bottom: none;">
                          <h5
                            class="modal-title mt-3 ms-5"
                            id="staticBackdropLabel"
                            style="font-size:24px; font-weight: bold;;"
                          >
                            Nuevo Colaborador
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        <p
                          class="mt-3 ms-5"
                          style="font-size: 14px; color: #7D7577;"
                        >
                          Completa los datos solicitados de un usuario
                          frecuente.
                        </p>
                        <div
                          class="d-flex align-items-center flex-column justify-content-center "
                        >
                          <div class="row d-flex justify-content-start">
                            <div id="textOnInput3">
                              <label
                                for="camponombre"
                                style="font-size:14px; color:#696465;"
                                >Nombre</label
                              >
                              <input
                                type="text"
                                name="nombre"
                                class="form-control"
                                style="width:302px; height:45px;margin-left: 60px; font-size:14px"
                                placeholder="Ej. Juan Perez"
                                id="name"
                              />
                            </div>

                            <div id="textOnInput3">
                              <label
                                for="camponombre"
                                style="font-size:14px; color:#696465;"
                                >Correo</label
                              >
                              <input
                                type="email"
                                name="email"
                                id="email"
                                class="form-control"
                                style="font-size:14px;"
                                placeholder="Ej. nombre@petroperu.com"
                              />
                            </div>
                          </div>

                          <div class="modal-footer" style="border-top:none;">
                            <button
                              type="button"
                              class="btn btn-secondary btn-danger"
                              style="width:109px; height:40px; background: #FF3355; border-radius: 8px; color: white;"
                              id="add"
                              data-bs-dismiss="modal"
                            >
                              Agregar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 p-5">
                <hr style="width:650px;" />
                <button id="btn_next">Siguiente</button>
                <button id="btn_nextWelcome" class="ocultar">Siguiente</button>
                <button id="btn_behind" class="ocultar">Anterior</button>
              </div>

              <!-- </div>******************* -->
            </form>
          </div>

          <form id="form3" class="ocultar">
            <h1 class="registrar">Regístro Completado</h1>

            <img
              src="./img/banner.png"
              id="banner"
              alt="logo"
            />

            <div id="show_message" class="show_message" 
            style="color:#7D7577; font-size: 14px; line-height: 20px; margin:24px 222px 58px 50px">
            </div>

            <!-- <div class="m-5">
              <div id="showMessage_part1" class="mb-5">
                <p></p>
              </div>
              <div id="showMessage_part2">
                <p></p>
              </div>
            </div> -->

            <button class="btn btn-danger" id="añadir_Inspección">
              Añadir Inspección
            </button>
          </form>
        </div>

        <!-- </div>
                    </div> -->

        <!--FORMULARIO 2-->

        <!-- </div>
                
            </div> -->

        <div class="footer d-flex">
          <p>
            Copyright © 2021 <strong>sami.</strong>Todos los derechos
            reservados.
            <span>Términos del Servicio y Políticas de Privacidad</span>
          </p>
          <img src="./img/svg/group.svg" alt="logo" />
        </div>
      </div>

      <!---Primera fila-->
    `;

  //email con la nomenclatura correcta
    function validarEmail(correo) {
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(correo);
    if(esValido==true){
      return true
    }
    else{
      return false;
    } 
  } ; 

  //PANTALLA RESGITRO
    //mostrar contraseña
    const password = viewSignUp.querySelector('#password1');
    const btn_password = viewSignUp.querySelector('#btn_password');
    let click = false;

    btn_password.addEventListener('click', (e)=>{
        if(!click){
        password.type = 'text'
        click = true
        }else if(click){
        password.type = 'password'
        click = false
        }
    })



    const btn_ingresar = viewSignUp.querySelector('#btn_next');
    const container_infoUser =  viewSignUp.querySelector('#container_infoUser');
    const conteiner_infoEmpresa =  viewSignUp.querySelector('#container_infoEmpresa');
    const conteiner_behind =  viewSignUp.querySelector('#btn_behind');
    const btn_change =  viewSignUp.querySelector('#btn_color');
    // const btn_change1 =  viewSignUp.querySelector('#btn_color1');

    const step_one = viewSignUp.querySelector('#btn_step_one');
    const step_two = viewSignUp.querySelector('#btn_step_two');
    const div_Show_Data = viewSignUp.querySelector("#div_Show_Data");
    

    btn_ingresar.addEventListener('click', (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const passwordSubmit = viewSignUp.querySelector("#password1").value;
      //enviar datos  FIREBASE
      console.log(email, passwordSubmit);
      console.log(email, passwordSubmit);

      const authentication = firebase.auth();
      authentication
        .createUserWithEmailAndPassword(email, passwordSubmit)
        .then((userCredencial) => {
          console.log("registrado");
        });
      if (validarEmail(email)) {

        /******* desactiva paso uno *******/
        step_one.classList.remove("btn_color1");
        step_one.classList.add("btn_color");

        /******** activa paso dos *******/
        step_two.classList.remove("btn_color");
        step_two.classList.add("btn_color1");

        container_infoUser.classList.add("ocultar");
        conteiner_infoEmpresa.classList.remove("ocultar");
        conteiner_behind.classList.remove("ocultar");
        // btn_change1.classList.add("hidde");
        // btn_change.classList.remove("hidde"); ///***************** */

        //modal
        const myModal = viewSignUp.querySelector(".modal");
        const myInput = viewSignUp.querySelector(".myInput");

        myModal.addEventListener("shown.bs.modal", function () {
          myInput.focus();
        });

        // Evento click agregar

        const show_icon = viewSignUp.querySelector("#show_icon");
        const btn_nextWelcome = viewSignUp.querySelector("#btn_nextWelcome");
        const btn_add = viewSignUp.querySelector("#add");
        btn_add.addEventListener("click", (e) => {
          e.preventDefault;

          btn_ingresar.classList.add("ocultar");
          btn_nextWelcome.classList.remove("ocultar");
          //jalar los nombres ingresados
          div_Show_Data.classList.remove("hide");

          let name = document.getElementById("name").value;
          document.getElementById("showName").innerHTML = name;

          let name1 = name.split(" ")[0];
          let name2 = name.split(" ")[1];
          document.getElementById("showName").innerHTML = name1 + name2 + "...";

          let separador = " ", // un espacio en blanco
            arregloDeSubCadenas = name.split(separador); // SEPARA EL NOMBRE EN CADENAS INDIVIDUALES
          console.log(arregloDeSubCadenas);

          // Imprime la primera letra de la cadena
          for (let i = 0; i < arregloDeSubCadenas.length; i++) {
            let subCadena1 = name1.substring(0, 1).toUpperCase();
            let subCadena2 = name2.substring(0, 1).toUpperCase();

            // let subCadena = arregloDeSubCadenas[i].substring(0, 1).toUpperCase();
            console.log(subCadena1);
            console.log(subCadena2);
            document.getElementById("showNamei").innerHTML =
              subCadena1 + subCadena2;
          }
          //Mostrar iconos

          show_icon.classList.remove("ocultar");
        });
      } else {
        alert("email inválido");
      }
    });

    conteiner_behind.addEventListener("click", (e) => {
      e.preventDefault();
      /******* desactiva paso dos *******/
      step_one.classList.add("btn_color1");
      step_one.classList.remove("btn_color");

      /******** activa paso uno *******/
      step_two.classList.add("btn_color");
      step_two.classList.remove("btn_color1");

      container_infoUser.classList.remove("ocultar");
      conteiner_infoEmpresa.classList.add("ocultar");
      conteiner_behind.classList.add("ocultar");
    });



//FORMULARIO BIENVENIDA
const btn_nextWelcome =  viewSignUp.querySelector('#btn_nextWelcome');
const formRegister = viewSignUp.querySelector('#formRegister');
const registro =  viewSignUp.querySelector('#form2'); 
const welcome =  viewSignUp.querySelector('#form3'); 
btn_nextWelcome.addEventListener("click", (e) => {
    e.preventDefault();
    //formulario BIENVENIDA
    welcome.classList.remove("ocultar");
    registro.classList.add("ocultar");
    formRegister.classList.add("ocultar");
    
 
    //Seleccionar el nombre del usuario por medio del valor del atributo id
    const nombresincortar = document.getElementById("name").value;
    const nombrecortado = nombresincortar.split(" ");
    const primernombre = nombrecortado[0];
    
    console.log(primernombre);

    let email = document.getElementById("email").value 


    // //Declaro una variable que contendrá msm
    // let message1 = "Gracias &nbsp;"  + primernombre  +  " &nbsppor registrarte.";
    // let message2 = "Te hemos enviado un mensaje a &nbsp;" + email + "&nbsp; para verificar tu correo electrónico, así como las invitaciones a los colaboradores en tu empresa";
    // //Colocar el mensaje que se muestra al Usuario llamando su nombre
    //   document.getElementById("showMessage_part1").innerHTML= message1 

    //   document.getElementById("showMessage_part2").innerHTML= message2 

    const showMessage = document.getElementById("show_message")


    show_message.innerHTML = `
        <p>Gracias <strong>${primernombre}</strong> por registrarte </p>
        <p>Te hemos enviado mensaje a <span style="color:#FF4766;">${email}</span> para verificar tu correo electrónico, así como las invitaciones a los colaboradores de tu empresa.</p>
     `;

      return 
      });  

    //Ir a la página Inspección
    let añadir_Inspección = viewSignUp.querySelector("#añadir_Inspección");
    añadir_Inspección.addEventListener('click', (e) => {
        e.preventDefault();
        {window.location.hash = '#/inspection' }
      
        // screen1.classList.add("ocultar");
      });

     
    


    return viewSignUp;

}

