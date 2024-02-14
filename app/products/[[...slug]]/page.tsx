import React from 'react';

// props are different here.
type Props = {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
  // we can access querystring parameters from search params
};

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slug} {sortOrder}
    </div>
  );
};

export default ProductPage;

// with [...slug] we can catch all params like grocery/dairy/milk/etc... But with this we cannot hit product page
// with [[...slug]] we can tell next that params are optional
