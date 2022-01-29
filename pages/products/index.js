import Link from 'next/link';
import React from 'react';
import data from '../../data';

const Products = () => {
  return (
    <div>
      {data.map((item , i)=> {
          return (
          <Link key={i} href={`/info/${item.id}`}>
            <a >
                 <div>{item.author}</div>
              </a>
          </Link>
              
              
          )
      } )}
    </div>
  );
}

export default Products;
