import classNames from "classnames";
import { Button } from "./Button";
import { Typography } from "./Typography";

export default function Card() {
  return (
    <div className="box-content w-96 bg-violet-200 border-2 border-purple-950 text-center p-2">
      <div className="h-96  bg-contain bg-center bg-no-repeat bg-[url('https://fastly.picsum.photos/id/528/600/600.jpg?hmac=nL7SYr5EG0lf-fqe8R-dejiSaeQ0McPReRaIzYuT0uQ')]"></div>

      <Typography Tag="h2" size="lg" weight="black">
        Nombre del producto
      </Typography>

      <Typography Tag="h2" size="base">
        Tecnica: laser
      </Typography>
      <Typography Tag="h2" size="base">
        Descripcion: <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quae!
      </Typography>
      <Typography Tag="h2" size="base">
        #tag #tag #tag #tag
      </Typography>
      <Typography Tag="h3" size="base" weight="normal">
        dimensiones largo:23 alto:23 ancho:23
      </Typography>

      <div className="flex justify-around items-center">
        <Typography Tag="h3" weight="bold" size="md">
          $$$$$
        </Typography>
        <Button color="primary">Lo quiero</Button>
      </div>
    </div>
  );
}
