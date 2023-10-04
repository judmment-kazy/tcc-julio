import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Auth() {
    return (
        <div className="w-full h-full flex justify-center items-center bg-stylish bg-brickwall">
            <a href="/" className="absolute left-8 top-4 bg-bgcolor w-[4rem] rounded-[5px] border-4 border-black flex justify-center items-center"><i className="fa-solid fa-arrow-turn-up -rotate-90 text-[3rem]"></i></a>
            <Tabs defaultValue="login" className="w-[400px] scale-110">
                <TabsList className="grid w-full grid-cols-2 bg-bgcolor rounded-[50px]">
                    <TabsTrigger value="login">Fazer Login</TabsTrigger>
                    <TabsTrigger value="register">Fazer Registro</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Card className="bg-bgcolor rounded-[10px]">
                        <CardHeader>
                            <CardTitle>Entre em sua conta</CardTitle>
                            <CardDescription>
                                Por favor informe seu dados de login abaixo.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Nome/Email</Label>
                                <Input id="name" placeholder="Digite seu nome ou email" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Senha</Label>
                                <Input id="username" placeholder="Digite sua senha" />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button className="bg-black w-full rounded-[50px] text-white">Entrar</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="register">
                    <Card className="bg-bgcolor rounded-[10px]">
                        <CardHeader>
                            <CardTitle>Registro</CardTitle>
                            <CardDescription>
                                Informe os dados necessários para que possamos criar uma conta para você.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Nome</Label>
                                <Input id="current" placeholder="Digite seu nome" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">Email</Label>
                                <Input id="new" placeholder="comiocudequemtalendo@email.com" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">Senha</Label>
                                <Input id="new" placeholder="Digite sua senha" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">Confirme sua senha</Label>
                                <Input id="new" placeholder="Digite sua senha" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-black w-full rounded-[50px] text-white">Entrar</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}