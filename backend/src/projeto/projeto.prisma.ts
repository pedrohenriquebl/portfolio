import { Projeto } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProjetoPrisma {
  constructor(private readonly prisma: PrismaProvider) {}
  async obterTodos(): Promise<Projeto[]> {
    const projetos = await this.prisma.projeto.findMany();
    return projetos as any;
  }

  async obterPorId(id: number): Promise<Projeto | null> {
    const projetoId = await this.prisma.projeto.findUnique({
      where: { id },
      include: { tecnologias: true },
    });
    return projetoId as any;
  }
}
