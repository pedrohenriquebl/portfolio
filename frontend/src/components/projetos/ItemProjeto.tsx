import { Projeto } from "@core";
import Image from "next/image";
import Link from "next/link";

export interface ItemProjetoProps {
    projeto: Projeto
}

export default function ItemProjeto(props: ItemProjetoProps) {
    return (
        <Link href={`/projeto/${props.projeto.id}`}>
            <div 
                className="
                    min-w-64 min-h-64
                    relative rounded-2xl overflow-hidden
                    border border-zinc-800
                    transition-transform duration-200 hover:scale-105
                "
            >
                <Image
                    src={props.projeto.imagens[0]}
                    alt={props.projeto.nome}
                    fill
                    style={{ objectFit: "cover" }} 
                />
            </div>
        </Link>
    )
}
