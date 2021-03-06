import React from 'react';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return(
    <div className='pt-4'>
      <p>{'This will detect faces in your pictures. Give it a try.'}</p>

      <div className='text-center'>
        <input className='form-control' onChange={onInputChange} />
        <button className='btn btn-primary' onClick={onPictureSubmit}>Detect</button>
      </div>
    </div>
  );
}

export default ImageLinkForm;