import { Tecnologia } from "@core";
import Cabecalho from "../shared/Cabecalho";
import Tecnologias from "../tecnologias/Tecnologias";

export interface PrincipalProps {
    tecnologias: Tecnologia[]
}

export default function Principal(props: PrincipalProps) {
    return (
        <div 
            className="
                flex flex-col items-center justify-center h-[350px]
                bg-[url('/principal.jpeg')]
                bg-center bg-cover bg-no-repeat
            "
        >
            <Cabecalho />
            <div className="w-full flex flex-1 flex-col justify-center items-center gap-5">
                <div className="flex flex-col items-center gap-1">
                    <h1 className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span className="text-white text-3xl sm:text-5xl font-bold text-center">
                            Pedro Henrique Barcellos Lopes
                        </span>
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </h1>
                    <h2 className="text-white text-lg text-center">Desenvolvedor</h2>
                </div>
                <Tecnologias lista={props.tecnologias} />
            </div>
        </div>
    )
}