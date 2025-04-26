import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";


const Login = () => {
    return (
        <div className="w-screen h-screen bg-background">
            <h1>Escolha sua forma de Login:</h1>
            <Button className="cursor-pointer">Entrar com Login Garsom</Button>
            <Button className="cursor-pointer">Entrar com Google</Button>
            <Button className="cursor-pointer">Entrar com Apple</Button>
            <h3>Ou</h3>
            <Button className="cursor-pointer">Criar Conta</Button>
            <Link to='/' >
                <Button className="cursor-pointer absolute">
                    <ArrowLeft size={80} /> voltar
                </Button>
            </Link>
        </div>
    )
};

export default Login;