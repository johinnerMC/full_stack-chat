import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import logoGoogle from "/google.svg"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { logInAuthentication } from "../../store/auth/authProvider";
import Swal from "sweetalert2";
import { useEffect, useMemo } from "react";


export const LoginPage = () => {

  const remembe = localStorage.getItem('email')
  const dispatch = useDispatch();
  const { status, msg } = useSelector((state) => state.auth);
  console.log('ok')

   
  const {register, handleSubmit} = useForm({
    defaultValues: {
      email: remembe ?  remembe : '', 
      rememberme: remembe ? true : false
    }
  });

  const onSubmit = (formData) => {
    
    (formData.rememberme)
      ? localStorage.setItem('email', formData.email)
      : localStorage.removeItem('email')
    
      dispatch(logInAuthentication(formData))
      if( status === 'not-authenticated' ) {
        Swal.fire('Error', 'Verifique el Correo o Contrase;a', 'error')
      }
  }

  return (
    <AuthLayout>
      <form 
        className="mt-8"
        onSubmit={handleSubmit(onSubmit)}
        >
        <div className="flex flex-col">
          <label className="text-lg font-medium">Correo electrónico</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Introduce tu correo electronico"
            {...register('email')}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-lg font-medium">Contraseña</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Introduce tu contraseña"
            type={"password"}
            {...register('password')}
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input 
              type="checkbox" 
              id="remember" 
              {...register('rememberme')}
              />
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
            Iniciar sesión
          </button>
          <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 ">
            <img src={logoGoogle} alt="logo google" />
            Inicia sesión con Google
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">¿No tienes una cuenta?</p>
          <button className="ml-2 font-medium text-base text-violet-500">
          <Link to="/auth/register"> 
            Inscribirse
          </Link>    
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};
