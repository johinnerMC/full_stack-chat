import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import logoGoogle from "/google.svg"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authenticationWithEmailAndPassword } from "../../store/auth/authProvider";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const RegisterPage = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();
  const dispatch = useDispatch();

   const { status, msg } = useSelector((state) => state.auth);
   
 /*   useEffect(() => {
       if( status === 'not-authenticated' ) {
        Swal.fire('Error', msg, 'error')
      }
   }, [status]) */
   

  const onSubmit = (formData) => {
    dispatch(authenticationWithEmailAndPassword(formData))
  }

  return (
    <AuthLayout>
      <form 
        className="mt-8"
        onSubmit={handleSubmit(onSubmit)}
        >
      <div className="flex flex-col">
          {
            errors.name
              ? <label className="text-lg font-medium text-red-700">{errors.userName.message}</label>
              : <label className="text-lg font-medium">Usuario</label>
          }
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Introduce su nombre de usuario"
            {...register('name', {
              required: {
                value: true,
                message: "Ingrese un nombre de usuario",
              },
              minLength: {
                value: 8,
                message: "Nombre de usuario debe tener minimo 8 caracteres",
              },
            })}
          />
          
        </div>
        <div className="flex flex-col">
          {
            errors.email
              ? <label className="text-lg font-medium text-red-700">{errors.email.message}</label>
              : <label className="text-lg font-medium">Correo electrónico</label>
          }
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Introduce tu correo electronico"
            {...register("email", {
              required: {
                value: true,
                message: "Ingrese un correo",
              },
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Ingrese un correo valido",
              },
            })}
          />
        </div>
        <div className="flex flex-col mt-4">
          {
            errors.password
              ? <label className="text-lg font-medium text-red-700">{errors.password.message}</label>
              : <label className="text-lg font-medium">Contraseña</label>
          }
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Introduce tu contraseña"
            type={"password"}
            {...register("password", {
              required: {
                value: true,
                message: "Ingrese una contraseña",
              },
              minLength: {
                value: 6,
                message: "La contraseña debe tener minino 6 caracteres"
              }
            })}
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 font-medium text-base" htmlFor="remember">
              Recuerda por 30 días
            </label>
          </div>
          <button className="font-medium text-base text-violet-500">
            Has olvidado tu contraseña
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button 
            className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg"
            type="submit"
            >
            Registrase
          </button>
          <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 ">
            <img src={logoGoogle} alt="logo Google" />
            Registrate con Google
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">¿Ya tienes una cuenta?</p>
          <button className="ml-2 font-medium text-base text-violet-500">
            <Link to="/auth/login"> 
            Acceder
            </Link>
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};
