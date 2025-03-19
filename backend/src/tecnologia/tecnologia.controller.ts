import { Controller, Get } from '@nestjs/common';
import { Tecnologia } from '@core';
import { TecnologiaPrisma } from './tecnologia.prisma';

@Controller('tecnologias')
export class TecnologiaController {
  constructor(private readonly repo: TecnologiaPrisma) {}

  @Get()
  async obterTodas(): Promise<Tecnologia[]> {
    const fetchData = await this.repo.obterTodas();
    return fetchData;
  }

  @Get('destaque')
  async obterDestaque(): Promise<Tecnologia[]> {
    const fetchData = await this.repo.obterDestaque();
    return fetchData;
  }
}
