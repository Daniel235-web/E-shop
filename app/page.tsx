import { products } from "@/utils/product";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import { truncateText } from "@/utils/truncateText";

export default function Home() {
  return (
    <div className="p-8 ">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div>
          {products.map((product: any) =>{
            return <div>
              {truncateText (product.name)}
            </div>
          })}
        </div>
      </Container>
    </div>
  );
  
  }
