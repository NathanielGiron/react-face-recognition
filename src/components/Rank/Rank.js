import React from 'react';

const Rank = ({ name, entries}) => {
  return(
    <div className='pt-4 text-center'>
      <div className='h3'>
        {`${name}, your current rank is...`}
      </div>
      <div className='h1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;