import { ReactNode } from "react";

export default interface Mensagem {
    id: string
    texto: string;
    autor: string;
    lado: "esquerdo" | "direito";
    icone?: string | null | ReactNode;
}