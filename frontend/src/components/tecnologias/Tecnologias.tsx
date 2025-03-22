import { Tecnologia } from "@core";
import Image from "next/image";

export interface TecnologiasProps {
    lista: Tecnologia[];
}

export default function Tecnologias(props: TecnologiasProps) {
    return props.lista ? (
        <div className="flex justify-center gap-4 flex-wrap w-4/5">
            {props.lista.map((tecnologia) => (
                <div key={tecnologia.id} className="flex flex-col items-center gap-1">
                    <span className="relative w-11 h-11 sm:h-16 sm:w-16 rounded-xl overflow-hidden">
                        <Image 
                            src={tecnologia.imagem} 
                            fill 
                            alt={tecnologia.nome} 
                            className="object-contain"
                        />
                    </span>
                    <span className="text-white text-[10px] sm:text-[14px]">
                        {tecnologia.nome}
                    </span>
                </div>
            ))}
        </div>
    ) : null
}