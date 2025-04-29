import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Button } from "../../../components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Register = () => {
    const location = useLocation();
    const { oQueBusca } = location.state // servicos || contratar

    // REGISTRO PRA TRABALHADOR
    const RegisterWorker = () => {
        return (
            <>
                <h2>EMPREGADO</h2>
            </>
        )
    }
    
    // REGISTRO PRA EMPRESA
    const RegisterCompany = () => {

        const [tela, setTela] = useState<
            'infos1' |
            'infos2' |
            'infos3'
        >('infos1');

        const Tela1 = () => {
            return (
                <>  
                    <Button 
                        className="cursor-pointer"
                    >
                        <ArrowLeft size={80} /> voltar
                    </Button>
                    <h2>VAMOS COMEÇAR!</h2>
                    <h2>Precisamos de algumas informações:</h2>
                    <label>Número da sua empresa*</label>
                    <input className="bg-white border-2" type="text" />
                    <label>Nome fantasia*</label>
                    <input className="bg-white border-2" type="text" />
                    <Button 
                        className="cursor-pointer"
                        onClick={() => setTela('infos2')}
                    >
                        Próximo <ArrowRight size={80} /> 
                    </Button>
                </>
            )
        }
         
        const Tela2 = () => {
            return (
                <>
                    <Button 
                        className="cursor-pointer"
                        onClick={() => setTela('infos1')}
                    >
                        <ArrowLeft size={80} /> voltar
                    </Button>
                    <h2>VAMOS COMEÇAR!</h2>
                    <h2>Precisamos de algumas informações:</h2>
                    <label>CNPJ*</label>
                    <input className="bg-white border-2" type="text" />
                    <label>IE</label>
                    <input className="bg-white border-2" type="text" />
                    <label>Email da empresa*</label>
                    <input className="bg-white border-2" type="text" />
                    <Button 
                        className="cursor-pointer"
                        onClick={() => setTela('infos3')}
                    >
                        Próximo <ArrowRight size={80} /> 
                    </Button>
                </>
            )
        }

        const tela3 = () => {
            return (
                <>
                
                </>
            )
        }
        return (
            <>
                <Tela1 />
            </>
        )
    }

    return (
        <>
        <div className="w-screen h-screen bg-background">
            {oQueBusca === 'servicos' && (
                <RegisterWorker />
            )}
            {oQueBusca === 'contratar' && (
                <RegisterCompany />
            )}
        </div>
        </>
    )
}

export default Register;