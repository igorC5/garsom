import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "../../../components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { z } from "zod";

const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { oQueBusca } = location.state // servicos || contratar

    const schema1 = z.object({
        nome: z.string(),
        telefone: z.string(),
    })

    const schema2 = z.object({
        cnpj: z.string(),
        ie: z.string(),
        endereco: z.date(),
    })

    const schema3 = z.object({
        email: z.string(),
        senha: z.string(),
        senha2: z.string(),
    })

    const optSchema = z.object({
        code: z.string(),
    })

    // REGISTRO PRA TRABALHADOR
    const RegisterWorker = () => {
        return (
            <>
                <Button 
                className="cursor-pointer"
                onClick={() => navigate('/')}
                >
                    <ArrowLeft size={80} /> voltar
                </Button>
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
                        onClick={() => navigate('/')}
                    >
                        <ArrowLeft size={80} /> voltar
                    </Button>
                    <h2>VAMOS COMEÇAR!</h2>
                    <h2>Precisamos de algumas informações:</h2>
                    
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
                
                    <Button 
                        className="cursor-pointer"
                        onClick={() => setTela('infos3')}
                    >
                        Próximo <ArrowRight size={80} /> 
                    </Button>
                </>
            )
        }

        const Tela3 = () => {
            return (
                <>
                    <Button 
                        className="cursor-pointer"
                        onClick={() => setTela('infos2')}
                    >
                        <ArrowLeft size={80} /> voltar
                    </Button>
                    <Button 
                        className="cursor-pointer"
                        onClick={() => setTela('infos3')}
                    >
                        Próximo <ArrowRight size={80} /> 
                    </Button>
                </>
            )
        }
        return (
            <>
                {tela === 'infos1' && <Tela1 />}
                {tela === 'infos2' && <Tela2 />}
                {tela === 'infos3' && <Tela3 />}
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