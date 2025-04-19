import { Link } from "react-router-dom";
import { Button } from "../components/ui/button"

function Start() {

  return (
    <>
      <div className="w-screen h-screen bg-background">
        <div className="flex justify-center">
          <div className="bg-white border-4 shadow-[10px_10px_0px_0px_black] border-solid absolute top-25 h-[70%] w-[50%]">
            <div className="flex relative top-[10%] w-[70%] h-[15%] mx-auto bg-black -rotate-2">
              <h1 className="text-white text-center self-center font-anton w-full text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">NOS DIGA, O QUE VOCÊ BUSCA?</h1>
            </div>
            <div className="flex relative top-[30%] w-[70%] px-[10%] gap-[10%] h-[10%] mx-auto justify-between">
              <Link to='/das' className="h-15 w-[50%]">
                <Button className=" cursor-pointer w-[100%] h-15 font-dmSans text-[18px] font-[1000]">SERVIÇOS</Button>
              </Link>
              <Link to='/das' className="h-15 w-[50%]">
                <Button className="cursor-pointer w-[100%] h-15 font-dmSans text-[18px] font-[1000]">CONTRATAR</Button>
              </Link>
            </div>
            <div className="flex relative top-[45%] w-[50%] mx-auto justify-center">
              <Link to='/dsa' className="font-dmSans underline text-[20px] font-[1000]">Já tem uma conta?</Link>
            </div>
          </div>
        </div>
          
        {/* <div className="w-[100%] h-[15%] absolute bottom-0 bg-white border-t-4"></div> */}
      </div>
    </>
  )
}

export default Start;
