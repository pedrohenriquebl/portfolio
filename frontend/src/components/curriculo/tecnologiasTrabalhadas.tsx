import { Tecnologia } from "@core";

export interface TecnologiasTrabalhadasProps {
    lista: Tecnologia[];
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
    return (
        <div className="
            flex justify-center items-center p-6 w-full border border-zinc-800
            lg:w-72 bg-black rounded-2xl
        ">
            {props.lista && props.lista.length > 0 ? (
                <div className="flex justify-center flex-wrap gap-x-3">
                    {props.lista.map((tecnologia) => (
                        <div key={tecnologia.id}>
                            <span className="text-red-500 font-bold">#</span>
                            <span className="text-white">{tecnologia.nome}</span>
                        </div>
                    ))}
                </div>
            ) : null }
        </div>
    );
}