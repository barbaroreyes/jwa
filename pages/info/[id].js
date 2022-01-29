import React from 'react';

import {useRouter} from 'next/router'

const Product = () => {
    const router = useRouter();
    const {id}= router.query
    console.log(router.query)
  return (
    <div>
      pepe id
          <h1>{id}</h1>
      

    </div>
  );
}

export default Product;
