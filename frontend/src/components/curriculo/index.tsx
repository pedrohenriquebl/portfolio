import { Tecnologia } from "@core";
import TecnologiasTrabalhadas from "./tecnologiasTrabalhadas";
import Experiencia from "./Experiencia";
import MiniCV from "./MiniCV";

export interface CurricruloProps {
    tecnologias: Tecnologia[];
}

export default function Curriculo(props: CurricruloProps) {
    return (
        <div className="flex flex-col md:flex-row gap-4 min-h-72 w-full">            
            <MiniCV />            
            <Experiencia />
            <TecnologiasTrabalhadas lista={props.tecnologias}/>        
        </div>
    );
}