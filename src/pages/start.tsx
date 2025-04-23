import { Link } from "react-router-dom";
import { Button } from "../components/ui/button"
import { useState } from "react";
import { ChevronLeft, ArrowBigLeft, ArrowLeft } from 'lucide-react';

function Start() {
  const [estagio, setEstagio] = useState(0);
  const [oqueBuscaResposta, setOqueBuscaResposta] = useState<'servicos' | 'contratar' | ''>('');

  const AvancarEstado = (busca: 'servicos' | 'contratar') => {
    setEstagio(prev => prev + 1);
    setOqueBuscaResposta(busca);
  }

  const OqueBusca = () => {
    return (
      <div className="flex justify-center">
        <div className="bg-white border-4 shadow-[10px_10px_0px_0px_black] border-solid absolute top-25 h-[70%] w-[50%]">
          <div className="flex relative top-[10%] w-[70%] h-[15%] mx-auto bg-black -rotate-2">
            <h1 className="text-white text-center self-center font-anton w-full text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">NOS DIGA, O QUE VOCÊ BUSCA?</h1>
          </div>
          <div className="flex relative top-[30%] w-[70%] px-[10%] gap-[10%] h-[10%] mx-auto justify-between">
              <Button
                onClick={() => AvancarEstado('servicos')}
                className=" cursor-pointer w-[50%] h-15 font-dmSans text-[18px] font-[1000]"
              >
                SERVIÇOS
              </Button>
              <Button
                onClick={() => AvancarEstado('contratar')} 
                className="cursor-pointer w-[50%] h-15 font-dmSans text-[18px] font-[1000]"
              >
                CONTRATAR
              </Button>
          </div>
          <div className="flex relative top-[45%] w-[50%] mx-auto justify-center">
            <Link to='/dsa' className="font-dmSans underline text-[20px] font-[1000]">Já tem uma conta?</Link>
          </div>
        </div>
      </div>
    )
  }

  const ComoEntrar = () => {
    return (
      <div className="flex justify-center">
        <div className="bg-white border-4 shadow-[10px_10px_0px_0px_black] border-solid absolute top-25 h-[70%] w-[50%]">
          <div className=" absolute flex ml-5 mt-5">
            <Button 
              onClick={() => setEstagio(prev => prev - 1)}
              className="cursor-pointer absolute"
            >
              <ArrowLeft size={80} /> voltar
            </Button>
          </div>
          
          <div className="flex relative top-[10%] w-[70%] h-[15%] mx-auto bg-black rotate-2">
            <h1 className="text-white text-center self-center font-anton w-full text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">Como você gostaria de entrar?</h1>
          </div>
          <div className="flex relative top-[30%] w-[70%] px-[10%] gap-[10%] h-[10%] mx-auto justify-between">
            <Link to='/das' className="h-15 w-[50%]">
              <Button className=" cursor-pointer w-[100%] h-15 font-dmSans text-[18px] font-[1000]">Não sou cadastrado</Button>
            </Link>
            <Link to='/das' className="h-15 w-[50%]">
              <Button className="cursor-pointer w-[100%] h-15 font-dmSans text-[18px] font-[1000]">Já possuo cadastro</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="w-screen h-screen bg-background">
        {estagio === 0 && (
          <OqueBusca />
        )}
        {estagio === 1 && (
          <ComoEntrar />
        )}
      </div>
    </>
  )
}

export default Start;
