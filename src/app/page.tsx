
import Cutlery from "./component_sign/curtlery/page";
import Features from "./componentfeature/page";
import Navbarthree from "./componentnavbar/headerthree/page";
import BottomSection from "./componentpage/bottomsection/page";
import HeroSection from "./componentpage/heroSection/page";
import Product_one from "./components-product/page";








export default function Home() {
  return (
   <div>
   
<Navbarthree/>
<HeroSection/>
<Product_one/>
<Features/>
<Cutlery/>
<BottomSection/>
   </div>
      
         
  );
}
