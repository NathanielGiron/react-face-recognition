import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return(
    <div className='text-center pt-4'>
      <img src={imageUrl} alt='' width={500} />
    </div>
  );
}

export default FaceRecognition;