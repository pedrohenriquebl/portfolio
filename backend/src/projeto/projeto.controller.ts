import { Controller, Get, Param } from "@nestjs/common";
import { ProjetoPrisma } from "./projeto.prisma";
import { Projeto } from "@core";

@Controller("projetos")
export class ProjetoController {
  constructor(private readonly repo: ProjetoPrisma) {}

  @Get()
  async obterTodos(): Promise<Projeto[]> {
    return await this.repo.obterTodos();
  }

  @Get(":id")
  async obterPorId(@Param("id") id: number): Promise<Projeto | null> {
    return await this.repo.obterPorId(Number(id));
  }
}
