import { signIn } from '../firebase/firebase-Auth.js';

export default () => {
    const viewSignIn = document.createElement('div');
    viewSignIn.innerHTML =`
      <div class="container-login d-flex">
        <div class="div-logo-form d-flex">
          <div>
            <img src="./img/svg/logo-blanco.svg" class="logoLogin" alt="logo" />
          </div>
          <div class="form">
            <form class="form1">
              <div clas="row">
                <img src="./img/svg/group.svg" class="img_group" alt="logo" />
              </div>

              <div clas="row">
                <div class="flex_newAccount">
                  <p class="txtgray ">
                    Completa tus credenciales. ¿Aún no tienes una cuenta?&nbsp
                  </p>
                  <a
                    href="#/signUp"
                    class="ptxtRed"
                    id="newAccount"
                    style="text-decoration:none"
                    >Crea tu cuenta</a
                  >
                </div>
              </div>

              <div clas="row">
                <div
                  class="input-group"
                  id="container_email"
                  style="height:auto;"
                >
                  <label
                    for="exampleInputEmail1"
                    class="form-label txtgray subtxt"
                    style="position: absolute;"
                    >Usuario</label
                  >
                  <input
                    type="email"
                    name="email"
                    id="fname"
                    class="form-control txtPlaceholderGray"
                    placeholder="nombre@petroperu.com"
                    aria-required="true"
                    aria-invalid="false"
                    style="border-radius:10px; background:none; position: relative; :focus:outline: 0;"
                    required
                  /><br />
                  <p id="messageEmail"></p>
                </div>
                <p id="mensajeEmail" class="aviso"></p>
                <div class="input-group">
                  <input
                    type="password"
                    id="password"
                    class="form-control txtPlaceholderGray"
                    name="txtPassword"
                    placeholder="Contraseña"
                    style="border-radius:10px; outline: 0;"
                  />
                  <!-- <button type="button" id="btnToggle" class="toggle"><i id="eyeIcon" class="bi bi-eye"></i></button> -->
                  <button type="button" id="btnToggle" class="toggle">
                    <img src="./img/svg/eye.svg" alt="eye" />
                  </button>
                </div>
              </div>

              <div clas="row" style="margin-top:15px;margin-left:252px;">
                <a href="#/signUp" class="" style="font-size:12px" color:#1890FF;"
                  >Olvidé mi contraseña</a
                >
              </div>

              <!-- <div clas="row"></div> -->
              <div clas="row ">
                <button type="button" id="getIn" style="margin-top:15px" class="ingresar ">
                  <span class="">Ingresar</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
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
}

//mostrar contraseña
  const password = viewSignIn.querySelector('#password');
  const btn_password = viewSignIn.querySelector('#btnToggle');
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
    
//mostrar vista registrar, si el email está validado
    // const btn_Ingresar = viewSignIn.querySelector('.ingresar');
    // btn_Ingresar.addEventListener('click', (e) => {
    //     e.preventDefault;
    //     let email = document.getElementById("fname").value;

    //     validarEmail(email) ? window.location.hash = '#/home' : alert("email inválido");
    //     // screen1.classList.add("ocultar");
    //   });
  //SIGIN VALIDACION
  
  const txtEmail = viewSignIn.querySelector('#fname');
  const txtPassword = viewSignIn.querySelector('#password');
  const aviso = viewSignIn.querySelector('#aviso_error');
  const btnRegister1 = viewSignIn.querySelector('#getIn');

  btnRegister1.addEventListener('click', (e) => {
    e.preventDefault();
    const email = txtEmail.value;
    console.log(email);
    const pass = txtPassword.value;
    console.log(pass);

    const auth = firebase.auth();
 auth.signInWithEmailAndPassword(email, pass)

 .then(userCredencial => {
  window.location.hash = "#/inspection";
  var user = userCredential.user;
  console.log("exitoso");
  // readAddNotes();
})
.catch((error) => {

  var errorCode = error.code;
  console.log(errorCode)
  var errorMessage = error.message;
  console.log(errorMessage)
  if (errorCode === 'auth/user-not-found') {
    document.getElementById('mensajeEmail').innerHTML = 'Usuario no registrado';
  }else if (errorCode === 'auth/wrong-password') {
    document.getElementById('mensajePass').innerHTML = 'Usuario no registrado';
  }else{
    document.getElementById('mensajeEmail').innerHTML = 'Usuario no registrado';
    document.getElementById('mensajePass').innerHTML = 'Usuario no registrado';
  }

  });

  });
      return viewSignIn
  };
  