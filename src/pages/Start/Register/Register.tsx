import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "../../../components/ui/button";
import { ArrowLeft, ArrowRight, Eye, EyeOff, Icon } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { InputMask, useMask } from '@react-input/mask';

const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { oQueBusca } = location.state // servicos || contratar

    const schema1 = z.object({
        nome: z.string().min(2),
        telefone: z.string().min(15),
    })

    const form1 = useForm<z.infer<typeof schema1>>({
        resolver: zodResolver(schema1),
        defaultValues: {
            nome: '',
            telefone: '',
        }
    })

    const schema2 = z.object({
        cnpj: z.string().min(18),
        ie: z.string().min(8),
        endereco: z.string(),
    })

    const form2 = useForm<z.infer<typeof schema2>>({
        resolver: zodResolver(schema2),
        defaultValues: {
            cnpj: '',
            ie: '',
            endereco: '',
        }
    })

    const schema3 = z.object({
        email: z.string().email('E-mail inválido'),
        senha: z.string(),
        senha2: z.string(),
    })

    const form3 = useForm<z.infer<typeof schema3>>({
        resolver: zodResolver(schema3),
        defaultValues: {
            email: '',
            senha: '',
            senha2: '',
        }
    })

    const otpSchema = z.object({
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

            const onSubmit1 = () => {
                setTela('infos2')
            }

            const PhoneInputRef = useMask({
                mask: '(__) _____-____',
                replacement: { _: /\d/ },
            });

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
                    
                    <Form {...form1}>
                        <form onSubmit={form1.handleSubmit(onSubmit1)}>

                            <FormField 
                                control={form1.control}
                                name='nome'
                                render={({field}) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Nome</FormLabel>
                                            <FormControl>
                                                <Input {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <FormField 
                                control={form1.control}
                                name='telefone'
                                render={({field}) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Telefone</FormLabel>
                                            <FormControl>
                                                <Input  
                                                    {...field}
                                                    ref={(e) => {
                                                        field.ref(e); // Mantém a referência original do field
                                                        if (e !== null) {
                                                            PhoneInputRef.current = e ; // Aplica a máscara
                                                        }
                                                    }} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <Button 
                                type='submit'
                                className="cursor-pointer"
                                // onClick={() => setTela('infos2')}
                            >
                                Próximo <ArrowRight size={80} /> 
                            </Button>
                        </form>
                    </Form>

                </>
            )
        }
         
        const Tela2 = () => {

            const onSubmit2 = () => {
                setTela("infos3")
            }

            const cnpjInputRef = useMask({
                mask: '__.___.___/____-__',
                replacement: { _: /\d/ },
            });

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

                    <Form {...form2}>
                        <form onSubmit={form2.handleSubmit(onSubmit2)}>

                            <FormField 
                                control={form2.control}
                                name='cnpj'
                                render={({field}) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>CNPJ</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    ref={(e) => {
                                                        field.ref(e); // Mantém a referência original do field
                                                        if (e !== null) {
                                                            cnpjInputRef.current = e ; // Aplica a máscara
                                                        }
                                                    }} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <FormField 
                                control={form2.control}
                                name='ie'
                                render={({field}) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Inscrição Estadual</FormLabel>
                                            <FormControl>
                                                <Input {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <FormField 
                                control={form2.control}
                                name='endereco'
                                render={({field}) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>ENDEREÇO</FormLabel>
                                            <FormControl>
                                                <Input {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <Button 
                                type='submit'
                                className="cursor-pointer"
                            >
                                Próximo <ArrowRight size={80} /> 
                            </Button>
                        </form>
                    </Form>

                </>
            )
        }

        const Tela3 = () => {
            const [showPassword, setShowpassword] = useState(false);
            const [showPassword2, setShowpassword2] = useState(false);

            const onSubmit3 = () => {

            }

            return (
                <>
                    <Button 
                        className="cursor-pointer"
                        onClick={() => setTela('infos2')}
                    >
                        <ArrowLeft size={80} /> voltar
                    </Button>
                    
                    <Form {...form3}>
                        <form onSubmit={form3.handleSubmit(onSubmit3)}>

                            <FormField 
                                control={form3.control}
                                name='email'
                                render={({field}) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>EMAIL</FormLabel>
                                            <FormControl>
                                                <Input {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <FormField 
                                control={form3.control}
                                name='senha'
                                render={({field}) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>CRIE UMA SENHA</FormLabel>
                                            <FormControl>
                                                <div className="h-[40px]  relative">
                                                    <Input 
                                                        className="absolute" 
                                                        type={showPassword ? 'text' : 'password'}
                                                        {...field} 
                                                    />
                                                    <div 
                                                        className=" absolute right-0 w-10 h-full"
                                                        onClick={() => setShowpassword(!showPassword)}
                                                    >
                                                        {
                                                        showPassword
                                                        ?
                                                            <EyeOff className="relative w-full h-full p-[7px]"/>
                                                        :
                                                            <Eye className="relative w-full h-full p-[7px]"/>
                                                        }
                                                    </div>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <FormField 
                                control={form3.control}
                                name='senha2'
                                render={({field}) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>DIGITE SUA SENHA NOVAMENTE</FormLabel>
                                            <FormControl>
                                                <div className="h-[40px]  relative">
                                                    <Input 
                                                        className="absolute" 
                                                        type={showPassword2 ? 'text' : 'password'}
                                                        {...field} 
                                                    />
                                                    <div 
                                                        className=" absolute right-0 w-10 h-full"
                                                        onClick={() => setShowpassword2(!showPassword2)}
                                                    >
                                                        {
                                                        showPassword2 
                                                        ?
                                                            <EyeOff className="relative w-full h-full p-[7px]"/>
                                                        :
                                                            <Eye className="relative w-full h-full p-[7px]"/>
                                                        }
                                                    </div>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                    
                            <Button 
                                type='submit'
                                className="cursor-pointer"
                            >
                                Próximo <ArrowRight size={80} /> 
                            </Button>
                        </form>
                    </Form>
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