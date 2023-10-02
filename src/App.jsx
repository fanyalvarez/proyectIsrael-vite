import { useState } from "react";
import { Typography } from "./Components/Typography";
import { Button } from "./Components/Button";




function App() {


  return (
    <>
    

      <Typography Tag="h1" size='xl'> 12345 </Typography>
      <Typography Tag="h1" size='lg'> 12345 </Typography>
      <Typography Tag="h1" size='md'> 12345 </Typography>
      <Typography Tag="h1" size='base'> 12345 </Typography>
      <Typography Tag="h1" size='sm'> 12345 </Typography>
      <Typography Tag="h1" size='xs'> 12345 </Typography>
      <Typography Tag="h1" weight='black'> 67890 </Typography>
      <Typography Tag="h1" weight='bold'> 67890 </Typography>
      <Typography Tag="h1" weight='normal'> 67890 </Typography>
      <Typography Tag="h1" weight='light'> 67890 </Typography>

      <Button color='primary'>123456</Button>
      <Button color='secondary'>123456</Button>
      <Button color='outline'>123456</Button>
    </>
  );
}

export default App;
