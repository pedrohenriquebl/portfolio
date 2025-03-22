export default function Experiencia() {
    return (
        <div className="flex gap-6 flex-col sm:flex-row lg:flex-col justify-around items-center border border-zinc-800 rounded-2xl p-6 bg-black">
            <Item principal="+150" label="países atendidos" />
            <Item principal="+20" label="anos de experiência" />
            <Item principal="420k" label="alunos matrículados" />
        </div>
    )
}

function Item(props: { principal: string, label: string }){
    return (
        <div className="flex flex-row items-center text-center gap-2">
            <span className="text-red-500 text-3xl font-bold leading-6">{props.principal}</span>
            <span className="text-zinc-400 text-sm text-center">{props.label}</span>
        </div>
    )
}