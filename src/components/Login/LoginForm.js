import { SHA3 } from 'crypto-js';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../services/user';
import { Form, Input } from '../Forms';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import { addUser } from '../../store/slices/userSlice';

const LoginForm = ({ setModalState }) => {
  const [formState, setForm] = useState({
    correo: '',
    contraseña: ''
  });
  const [loginErrorState, setLoginError] = useState("");
  const form = useForm(formState, setForm);
  const dispatch = useDispatch();

  const loginCallback = (user) => {
    dispatch(addUser(user));
  }

  const [loginFetch, isLoading, messageState] = useFetch(login, loginCallback,
    true,
    'Los datos ingresados no son válidos'
  );

  const handleLogin = async () => {
    if(formState.correo !== '' && formState.contraseña !== ''){
      await loginFetch({
        email: formState.correo,
        password: SHA3(formState.contraseña).toString()
      });
    } else {
      setLoginError("Porfavor ingrese su correo y contraseña");
    }
  }

  return (
    <Form className="box column has-background-light" form={form}>
      <div className="field">
        <h1 className="has-text-weight-bold is-size-4">Accede a la plataforma</h1>
      </div>

      <Input
        name="correo"
        type="email"
        label="Correo"  
        placeholder="Ingrese su correo"
        state={formState}
        setState={setForm}
      />

      <Input
        name="contraseña"
        type="password"
        label="Contraseña"  
        placeholder="********"
        state={formState}
        setState={setForm}
        onKeyDown={handleLogin}
      />

      <div className="field">
        <button className={`button is-link ${isLoading && "is-loading"}`} type="button" onClick={handleLogin}>Acceder</button>
        <p className="help is-danger">
          {messageState || loginErrorState}
        </p>
      </div>

      <hr className="dropdown-divider"/>

      <div className="field is-centered">
        <button className="button is-success" type="button" onClick={setModalState}>Crear usuario</button>
      </div>
    </Form>
  )
}

export default LoginForm;