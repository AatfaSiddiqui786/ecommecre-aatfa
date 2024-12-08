/* eslint-disable @typescript-eslint/no-unused-vars */

import Hero from "./Components 1/hero";
import Brand from "./Components 1/brand";
import Ceramics from "./Components 1/ceramics";
import Product from "./Components 1/product";
import Benefit from "./Components 1/benefit";
import Touch from "./Components 1/touch";
import ProductListing from "./productlisting/page";
import Navbar from "./Components 1/navbar";


export default function Home() {
  return (
    <div>
   <Navbar/>
   <Hero />
   <Brand />
   <Ceramics />
   <Product />
   <Benefit />
   <Touch />

    </div>
  );
 }
