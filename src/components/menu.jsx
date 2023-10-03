import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Menuzinho() {
    return (
        <Sheet>
            <SheetTrigger><i class="fa-solid fa-bars"></i></SheetTrigger>
            <SheetContent className="bg-bgcolor text-black">
                <SheetHeader>
                    <SheetTitle className="text-center pt-[30px] text-[2rem]"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Configurações</a></SheetTitle>
                    <SheetTitle className="text-center pt-[30px] text-[2rem]"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Historico de compra</a></SheetTitle>
                    <SheetTitle className="text-center pt-[30px] text-[2rem]"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Sobre</a></SheetTitle>
                    <SheetTitle className="text-center pt-[30px] text-[2rem]"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Contato</a></SheetTitle>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}