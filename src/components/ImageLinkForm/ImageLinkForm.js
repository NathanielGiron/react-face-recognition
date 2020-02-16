import React from 'react';

const ImageLinkForm = () => {
  return(
    <div className='pt-4'>
      <p>{'This will detect faces in your pictures. Give it a try.'}</p>

      <form className='text-center'>
        <input className='form-control'/>
        <button className='btn btn-primary'>Detect</button>
      </form>
    </div>
  );
}

export default ImageLinkForm;