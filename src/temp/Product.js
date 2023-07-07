// import React from "react";
// import { useParams, useLocation, useSearchParams } from "react-router-dom";

// const Product = () => {
//   //const { productId } = useParams();
//   const productId = useParams.productId;
//   const location = useLocation();
//   //   const { keyWords } = useSearchParams;
//   //   const keyWord = useSearchParams.get("search");
//   return (
//     <>
//       <h3>{productId}번 상품 페이지입니다.</h3>
//       <ul>
//         <li>hash : {location.hash} </li>
//         <li>pathname : {location.pathname}</li>
//         <li>search : {location.search}</li>
//         <li>state : {location.state}</li>
//         <li>key : {location.key}</li>
//       </ul>
//       <ul>
//         <h2>useSearchParams</h2>
//         {/* <li>keyWords : {keyWords}</li>
//         <li>keyWord : {keyWord}</li> */}
//       </ul>
//     </>
//   );
// };

// export default Product;
import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Product = () => {
  const productId = useParams().productId;
  const location = useLocation();
  return (
    <>
      <h3>{productId}번 상품 페이지 입니다.</h3>
      <ul>
        <li>hash : {location.hash}</li>
        <li>pathname : {location.pathname}</li>
        <li>search : {location.search}</li>
        <li>state : {location.state}</li>
        <li>key : {location.key}</li>
      </ul>
    </>
  );
};

export default Product;
