import { Button } from "../components/ui/button"

function Start() {

  return (
    <>
      <div className="w-screen h-screen bg-[rgb(224,226,255)]">
        <div className="w-[100%] h-[20%] flex justify-center items-center">
          <h2 className='font-[var(--font-weight-heading)] text-[40px]'>Nos diga, o que você busca?</h2>
        </div>
        <div className="w-[100%] h-[35%] flex justify-center items-center">
          <div className="
          bg-white 
            h-[100%] 
            w-[20%] 
            flex 
            flex-col
            shadow-2xl
            border-1
            shadow-[4px_4px_0_0]
          ">
            <div className="flex mt-[20%] w-[70%] flex-col mx-auto space-y-10">
              <Button className='cursor-pointer text-[120%]'>Serviços</Button>
              <Button className='cursor-pointer text-[120%]'>Contratar</Button>
            </div>
            <div className="mt-15 ml-5">
              <a className='font-semibold underline cursor-pointer'>Clique aqui caso já tenha outra conta</a>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[15%] absolute bottom-0 bg-white border-t-4"></div>
      </div>
    </>
  )
}

export default Start;
