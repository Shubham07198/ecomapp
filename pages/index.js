import {FooterBanner, HeroBanner, Product} from "../components"

import { client } from "../lib/client"

export default function Home({products,bannerData}) {
console.log("nam",bannerData)
  return (
    <>
    <HeroBanner heroBanner={bannerData?.length && bannerData[0]} />
    <div className="products-heading">
      <h2>
        Best Selling Products
        <p>Speakers of many variations</p>
      </h2>
    </div>

    <div className="products-container">
      {products?.map((product)=>
        <Product key={product._id} product={product}/>
      )}
    </div>

    <FooterBanner footerBanner={bannerData?.length && bannerData[0]}/>
    </>
  )
}

export const getServerSideProps = async()=>{
  const query = '*[_type == "product"]';
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)

  return{
    props : {products,bannerData}
  }
}
