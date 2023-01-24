import Image from "next/image";
import logo from "../public/logo.png";
import product1 from "../public/product1.jpg";
import { SvgBasket } from "@/component/svg";
import handleClick from "@/function.js/function";
import { Collection } from "@/function.js/function";
import Carousel from "./carousel";

export default function Home() {
  return (
    <>
      <div className="h-full bg-white w-full flex-col  pb-12 md:flex-col md:px-44 lg:px-44">
        <div className="flex w-full h-fit flex  justify-center py-12 ">
          <Image
            src={logo}
            className="flex items-center w-48   md:w-60 md:h-fit  "
          />
        </div>
        <div className="flex-col w-full h-fit  ">
          <div className="flex w-full  items-center justify-center gap-0 text-center ">
            <div className="w-4/12 h-10 flex text-center items-center justify-center j text-bold text-xl border border-black font-bold ">
              <button type="button" onClick={handleClick}>
                Collection
              </button>
            </div>
            <div className="w-4/12 h-10 flex text-center items-center justify-center  border-32 text-xl border border-black font-bold">
              <button type="button"> <a href="https://www.instagram.com/newdawnsupply/?igshid=Zjc2ZTc4Nzk%3D"> Contact</a>
              </button>
            </div>
            <select className="w-4/12 h-10 flex  border text-xl text-center border-black font-bold">
              <option>About</option>
              <option>Product</option>
              <option>Pricelist</option>
            </select>
          </div>
          <div className="w-full h-fit ">
            <Carousel className="w-full h-fit" />
          </div>
          <div className="flex font-bold text-3xl items-center justify-center gap-3 w-full h-full pt-12">
            <SvgBasket />
            <p>Shop Now!</p>
          </div>
          <div className="flex-col justify-center flex items-center gap-4 pt-12 text-center font-medium text-md text-white">
            <div className="w-5/12 h-12 bg-red rounded-3xl bg-stone-400 justify-center flex items-center bg-shopee">
              Shopee
            </div>
            <div className="w-5/12 h-12 bg-red rounded-3xl bg-stone-400 justify-center flex items-center bg-black">
              Tiktok Shop
            </div>
            <div className="w-5/12 h-12 bg-red rounded-3xl bg-stone-400 justify-center flex items-center bg-tokopedia ">
              Tokopedia
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-24 bg-black pt-12 text-white flex justify-center text-xs md:text-md lg:text-md ">
        <p>newdawnsupply8@gmail.com newdawnsupply</p>
      </div>
    </>
  );
}
