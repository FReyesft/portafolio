import { FiDownload } from 'react-icons/fi';
import { Button } from '@nextui-org/react';

export default function ButtonDowload() {
  return (
    <a href="/developerHV.pdf" download="mi-archivo.pdf">
      <Button color='success' startContent={<FiDownload/>} className='m-5'>Descargar HV</Button> 
    </a>
  );
}
