import Principal from "@/components/landing/Principal";
import Cabecalho from "@/components/shared/Cabecalho";
import CarrosselImagens from "@/components/shared/CarrosselImanges";
import Container from "@/components/shared/Container";
import { obterProjeto } from "@/functions/projetos";

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params;
    const projeto = await obterProjeto(id);

    return projeto ? (
        <div className="bg-black">
            <Cabecalho />
            <Container className="py-7 flex flex-col gap-10">
                <h1 className="text-3xl font-bold">{projeto.nome}</h1>
                <div className="flex flex-col items-center">
                    <CarrosselImagens imagens={projeto.imagens.slice(1)} />
                </div>
            </Container>
        </div>
    ): null;
}