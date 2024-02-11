import React from 'react';

// props are different here.
type Props = {
  params: { slug: string[] };
};

const ProductPage = ({ params: { slug } }: Props) => {
  return <div>ProductPage {slug}</div>;
};

export default ProductPage;

// with [...slug] we can catch all params like grocery/dairy/milk/etc... But with this we cannot hit product page
// with [[...slug]] we can tell next that params are optional
