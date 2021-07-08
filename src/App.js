import { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import {n2w} from './Utils.js';

function App() {
  const [tifinagh,setTifinagh] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setTifinagh(n2w(data.number));
  }

  return (
    <div className="App">
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Nombres en Tifinagh</h4>
      <input  {...register('number', { pattern: /^\d*[\.,]?\d*$/ }, { required: true })} />
      <button type="submit" >Convertir en Tifinagh</button>
      <p>{errors.number ? "Veuillez saisir un nombre valide" : tifinagh}</p>
    </form>
    </div>
  );
}
export default App;
