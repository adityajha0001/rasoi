import { TRACE_OUTPUT_VERSION } from "next/dist/shared/lib/constants";
import Head from "next/head";
import Link from "next/link";
<Head>
  <title>get login</title>


</Head>
const Login = () => {

  return (
    <>
      <div className="bg-[url('/static/coloruff.jpg')] h-screen w-full bg-center bg-cover 2xl:bg-[url('/static/coloruff.jpg')]">
        <div className="px-8 md:px-16 pt-52 md:pt-56 2xl:px-96 2xl:mx-56 2xl:pt-32 lg:pt-16 lg:mx-64 rounded xl:pt-36 xl:mx-96">
          <div className=" bg-stone-400 h-[28rem] md:h-[46rem] lg:h-[30rem] 2xl:h-[46rem] rounded-full">
            <div className=" h-[12rem] md:h-[24rem] lg:h-[14rem] xl:h-[15rem] 2xl:h-[26rem] ">
              <video autoPlay muted loop height="100" width="400" className="md:h-[390px] md:w-[700px] 2xl:h-[396px] 2xl:w-[890px] lg:w-[400px] lg:h-[220px] xl:w-[600px] xl:h-[220px]">
                <source src="/static/yumm.mp4" type="video/mp4" />
              </video>
            </div>
            <h1 className="flex justify-center mt-8 text-3xl md:text-6xl text-white font-bold mr-2 lg:text-3xl italic lg:mt-4 2xl:text-5xl">
              Videos
            </h1>
            <p className="flex justify-center text-sm mt-8 text-white md:text-2xl lg:text-sm 2xl:text-xl">
              Short demonstration video show you the
            </p>
            <p className="flex justify-center text-sm text-white md:text-2xl lg:text-sm 2xl:text-xl">
              technique and teach you the slills
            </p>
            <p className="flex justify-center text-sm text-white md:text-2xl lg:text-sm 2xl:text-xl">you want</p>
            <p className="flex justify-center mt-8 ml-2 md:ml-4 ">
             <Link href={"/loginMain"}><button className="bg-orange-400 px-4 py-2 font-bold border-4 text-white text-2xl rounded-full md:text-4xl md:px-8 md:py-4 lg:text-2xl lg:px-4 lg:py-2 2xl:text-4xl">
                L
              </button></Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
