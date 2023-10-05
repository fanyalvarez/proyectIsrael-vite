import classNames from "classnames";
import { Button } from "./Button";
import { Typography } from "./Typography";

export default function Form() {
  return (
    <div className="box-content w-6/12 bg-violet-200 border-purple-950 p-5  rounded-md">
        <Typography Tag="h1"  size="lg" weight="bold"> Formulario</Typography>
      <form ction="" className="grid grid-cols-1 gap-5">
        <label className="block">
          <span>Tipo de tecnica</span>
           <select className="block w-full rounded-md bg-gray-100 border-transparent mt-1 py-1 outline-violet-200" type="text" name="" id="" >
                <option value="">Corte laser</option>
                <option value="">Grabado</option>
           </select>
        </label>
        <label className="block">
          <span>Nombre</span>
          <input className="block w-full rounded-md bg-gray-100 border-transparent mt-1 py-1  outline-violet-200" type="text" name="" id="" />
        </label>
        <label className="block">
          <span>Descripcion</span>
          <textarea className="block w-full rounded-md bg-gray-100 border-transparent mt-1 py-1 outline-violet-200" type="text" rows="4" name="" id=""></textarea>
        </label>

        <div>
        <Typography Tag="h2" size="md"> Dimensiones</Typography>
        <div className=" grid grid-cols-3 gap-4 mt-0">
          <label className="block">
            <span>Largo</span>
            <input className="block w-full rounded-md bg-gray-100 border-transparent mt-1 py-1 outline-violet-200" type="number" name="" id="" />
          </label>
          <label className="block">
            <span>Alto</span>
            <input className="block w-full rounded-md bg-gray-100 border-transparent mt-1 py-1 outline-violet-200" type="number" name="" id="" />
          </label>
          <label className="block">
            <span>Ancho</span>
            <input className="block w-full rounded-md bg-gray-100 border-transparent mt-1 py-1 outline-violet-200" type="number" name="" id="" />
          </label>
        </div>
        </div>

        <label className="block">
        <span>Precio aprox</span>
          <input className="block w-full rounded-md bg-gray-100 border-transparent mt-1 py-1 outline-violet-200" type="number" name="" id="" />
        </label>
        <label className="block">
          <span>Categorias</span>
          <select className="block w-full rounded-md bg-gray-100 border-transparent mt-1 py-1 outline-violet-200 " type="text" name="" id="" >
                <option value="">Cumpleaños</option>
                <option value="">Halloween</option>
                <option value="">Navidad</option>
                <option value="">San valentin</option>
                <option value="">Boda</option>
                <option value="">Bautizo</option>
                <option value="">1ra Comunión</option>
           </select>
        </label>
        <label className="block">
          <span>Tags</span>
          <select className="block w-full rounded-md bg-gray-100 border-transparent mt-1 py-1 outline-violet-200 " type="text" name="" id="" >
                <option value="">Pokemon</option>
                <option value="">Animales</option>
            
           </select>
        </label>

        <label className="block">
        <span>Add imagen</span>
          <input className="block w-full rounded-md bg-gray-100 border-transparent mt-1 py-1 outline-violet-200" type="file" name="" id="" />
        </label>

        <Button color="primary">Subir</Button>
      </form>
    </div>
  );
}
