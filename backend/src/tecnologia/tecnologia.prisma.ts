import { Tecnologia } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class TecnologiaPrisma {
  constructor(private readonly prisma: PrismaProvider) {}
  async obterTodas(): Promise<Tecnologia[]> {
    const tecnologias = await this.prisma.tecnologia.findMany();
    return tecnologias;
  }

  async obterDestaque(): Promise<Tecnologia[]> {
    const tecnologias = await this.prisma.tecnologia.findMany({
      where: {
        destaque: true,
      },
    });
    return tecnologias;
  }
}
