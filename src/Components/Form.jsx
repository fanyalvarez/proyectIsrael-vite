import classNames from "classnames";
import { Button } from "./Button";
import { Typography } from "./Typography";

export default function Form() {
  return (
    <div className="box-content w-4/12 bg-violet-200 border-purple-950 p-5  rounded-md">
        <Typography Tag="h1"  size="lg" weight="bold"> Formulario</Typography>
      <form ction="" className="grid grid-cols-1 gap-5">

        <label className="block">
          Tipo de tecnica
           <select className="block w-full rounded-md bg-gray-100 border-transparent mt-2 py-2 outline-violet-200" type="text" name="" id="" >
                <option value="">Corte laser</option>
                <option value="">Grabado</option>
           </select>
        </label>

        <label className="block">
          Nombre
          <input className="block w-full rounded-md bg-gray-100 border-transparent mt-2 py-2  outline-violet-200" type="text" name="" id="" />
        </label>

        <label className="block">
          Descripcion
          <textarea className="block w-full rounded-md bg-gray-100 border-transparent mt-2 py-2 outline-violet-200" type="text" rows="4" name="" id=""></textarea>
        </label>

        <div>
          <Typography Tag="h2" size="md"> Dimensiones</Typography>
            <div className=" grid grid-cols-3 gap-4 mt-0">
              <label className="block">
                Largo
                <input className="block w-full rounded-md bg-gray-100 border-transparent mt-2 py-2 outline-violet-200" type="number" name="" id="" />
              </label>
              <label className="block">
                Alto
                <input className="block w-full rounded-md bg-gray-100 border-transparent mt-2 py-2 outline-violet-200" type="number" name="" id="" />
              </label>
              <label className="block">
                Ancho
                <input className="block w-full rounded-md bg-gray-100 border-transparent mt-2 py-2 outline-violet-200" type="number" name="" id="" />
              </label>
            </div>
        </div>

        <label className="block">
          Precio aprox
          <input className="block w-full rounded-md bg-gray-100 border-transparent mt-2 py-2 outline-violet-200" type="number" name="" id="" />
        </label>

        <label className="block">
          Categorias
          <select className="block w-full rounded-md bg-gray-100 border-transparent mt-2 py-2 outline-violet-200 " type="text" name="" id="">
                <option value="">Cumpleaños</option>
                <option value="">Halloween</option>
                <option value="">Navidad</option>
                <option value="">San valentin</option>
                <option value="">Boda</option>
                <option value="">Bautizo</option>
                <option value="">1ra Comunión</option>
           </select>
        </label>

        <label> Tags </label>
        <ul className="bg-white flex flex-wrap rounded-md m-0" >
          <li className="ml-2"> <Button color="primary">Pokemon</Button></li>
          <li className="ml-2"> <Button color="primary">Animales</Button></li>
        </ul>

        <label className="block">
          Add imagen
          <input className="block w-full rounded-md bg-gray-100 border-transparent mt-2 py-2 outline-violet-200" type="file" name="" id="" />
        </label>

        <Button color="primary">Subir</Button>
      </form>
    </div>
  );
}
