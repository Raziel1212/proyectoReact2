import { useState } from "react";
import Alert from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";


const Registro = ({ alert, setAlert }) => {
  return (
    <>
      <div class="classFormulario d-flex justify-content-center pt-4 ">
        <div class="text-center">
          <h1>Crea una cuenta</h1>

          <div class="d-inline-flex ">
            <div class="border border-black border-2 rounded-circle m-2 ">
              <SocialButton icon="fa-brands fa-facebook fa-lg m-4 text-primary" />
            </div>
            <div class="border border-black border-2 rounded-3 rounded-circle m-2">
              <SocialButton icon="fa-brands fa-github fa-lg m-4" />
            </div>
            <div class="border border-black border-2 rounded-3 rounded-circle m-2">
              <SocialButton icon="fa-brands fa-linkedin-in fa-lg m-4 text-primary" />
            </div>
          </div>
          <p>O usa tu email para registrarte</p>
          <Formulario setAlert={setAlert} />
          {alert.msg && <Alert msg={alert.msg} color={alert.color} />}
        </div>
      </div>
    </>
  );
};

export default Registro;
