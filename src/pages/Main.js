import React from "react";
import { LoaderIndicator } from "../components";

import BookList from "../components/book-list";
import ShopCartTable from "../components/shop-cart-table";

const Main = () => {
  return (
    <>
      <BookList />
      <ShopCartTable/>
    </>
  );
};

export default Main;
