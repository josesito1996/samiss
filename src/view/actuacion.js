import { signIn } from '../firebase/firebase-Auth.js';

export default () => {
    const viewActuacion = document.createElement('div');
    viewActuacion .innerHTML =  `
    <!---Primera fila-->
    <div class="row " >
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
    <h1 class="new_case">Nueva Actuación</h1>
</div>

<div class="col-12 d-flex align-items-center justify-content-center">

    <div class=" d-flex  flex-row float-start align-items-center justify-content-center" style="border-bottom:1px solid #7D7D7D; ;width:800px;">
        <li  style="list-style: none; width:400px;text-align: center;">
            <a class="nav-link active"  id="sube_archivo" aria-current="page"
                style="color: #0F3041;font-weight: 600;
                font-size: 16px;border-bottom:  1px solid #7D7D7D;" href="#">Sube
                tus archivos</a>
        </li>
        <li  id="sube_manual" style=" width:400px;text-align: center;">
            <a class="nav-link active" href="#" id="line_manual"  style="color:#0E3141;font-size: 16px; ">Crear de forma manual</a>
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
                <form id="form_handbook" style="width:800px; height:655px;">
                    <div class="mb-3 row" style="margin-left:30px;margin-top:58px;">
                        <label for="staticEmail" class="col-12 col-lg-5 col-form-label" style=" margin-left:0px;">1. Fecha de
                            actuación</label>
                        <input type="date"   
                        style="width:161px; height:39px;" class="form-control" name="trip-start" id="fecha_inspection" value="2021-05-03" min="1980-01-01" placeholder="13/04/21" max="2030-12-31"> 
                    </div>
    
                    <div class="mb-3 row" style="margin-left:30px;margin-top:50px;">
                        <label for="inputPassword" class="col-12 col-lg-5   col-form-label" style=" margin-left:0px;">2. Tipo de actuación</label>
                        <select name="cars" id="cars" required="seleciona aquí" class="form-control" style="width:266px; height:36.49px;"> 
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                     
                    </div>
    
                    <div class="mb-3 row" style="margin-left:30px;margin-top:50px;">
                        <label for="inputPassword" class="col-12 col-lg-5  col-form-label" style=" margin-left:0px;">3. Funcionarios</label>
                        <input type="text" class="form-control"  placeholder="Alberto Morán"
                            style="width:354px; height:39px;">
                        <div class="d-flex column justify-content-end me-5" >
                            <img src="./img/svg/+.svg" class="logo" alt="logo" /><a class="link-success" href="#"
                                id="links_new_inspector" style="margin-right:95px;">Funcionarios</a>
                        </div>
                    </div>
    
                    <div class="mb-3 row" style="margin-left:30px;margin-top:40px;">
                        <label for="inputPassword" class="col-12 col-lg-5  col-form-label" style=" margin-left:0px;">4. Etapa</label>
                        <select name="cars" id="cars" required="seleciona aquí" class="form-control" style="width:231px; height:36.49px;">
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                      
                    </div>
    
                    <div class="mb-3 row" style="margin-left:30px;margin-top:50px;">
                        <div class="d-flex flex-row bd-highlight ">
                            <label for="inputPassword" class="form-label" style=" margin-left:0px">5. Descripcion</label>
                            <input type="text" class="form-control" style=" margin-left:240px;margin-bottom:38px; width:414px; height:105px;" name="CheckAll" id="select-all" />                          
                        </div>
                    </div>
    
                    <div class="row" id="btn_crearCaso">
                       <input type="button" disabled id="enviar" value="Crear actuación">
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

//email con la nomenclatura correcta

//Evento click Crear de formulario manual
const form1 =  viewActuacion.querySelector("#drop");  
const form2 =  viewActuacion.querySelector("#handbook");   
const line_manual= viewActuacion.querySelector("#line_manual");    
const line_drop= viewActuacion.querySelector("#sube_archivo");    
const sube_manual =  viewActuacion.querySelector("#sube_manual");    
sube_manual.addEventListener('click', (e) => {
  e.preventDefault();
 
  line_manual.style.borderBottomColor = " black";
  line_drop.style.borderBottomColor = "white";
  form2.classList.remove("ocultar")
  form1.classList.add("ocultar")

     console.log(cambiar(fileInput.value))
      const nameFile = cambiar(fileInput.value);
      localStorage.setItem('file',nameFile )

   
      
});

      return viewActuacion 
  };
  