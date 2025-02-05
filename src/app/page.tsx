
import Cutlery from "./component_sign/curtlery/page";
import Features from "./componentfeature/page";
import Navbarthree from "./componentnavbar/headerthree/page";
import BottomSection from "./componentpage/bottomsection/page";
import HeroSection from "./componentpage/heroSection/page";
import API_product_one from "./components_API/page";








export default function Home() {
  return (
   <div>
   
<Navbarthree/>
<HeroSection/>
<API_product_one/>
<Features/>
<Cutlery/>
<BottomSection/>
   </div>
      
         
  );
}
