import { useState } from "react";
import { Typography } from "./Components/Typography";
import { Button } from "./Components/Button";

function App() {
  return (
    <>
      <div className="box-content w-96 bg-violet-200 border-2 border-purple-950 text-center p-2" >
        <div className="h-96  bg-contain bg-center bg-no-repeat bg-[url('https://fastly.picsum.photos/id/528/600/600.jpg?hmac=nL7SYr5EG0lf-fqe8R-dejiSaeQ0McPReRaIzYuT0uQ')]"></div>

        <Typography Tag="h2" size="lg" weight="black">
          Nombre del producto
        </Typography>
        <Typography Tag="h1" size="base">
          Descripcion <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          quae!        
        </Typography>

        <div className="flex justify-around" >
          <Typography Tag="h3" weight="bold" size="md">
            $$$$$          
          </Typography>
          <Button color="primary">Lo quiero</Button>
        </div>
      </div>
    </>
  );
}

export default App;