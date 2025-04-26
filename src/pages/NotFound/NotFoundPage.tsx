import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return (
        <div className="bg-background w-[100%] h-[100vh] flex justify-center items-center">
            <div className="bg-white border-4 shadow-[10px_10px_0px_0px_black] border-solid absolute top-25 h-[20%] w-[20%] flex justity-center items-center">
                <div className="mx-auto">
                    <h1 className="font-dmSans text-[1000] text-[30px]">Página não encontrada :(</h1>
                    <br/>
                    <br/>
                    <Link className="font-bold underline" to='/'>Voltar a página inicial</Link>
                </div>
            </div>
        </div>
    )
}