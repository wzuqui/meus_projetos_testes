import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GrafoService {
  obterMacros(): Macro[] {
    return macros;
  }
  obterLinks(): Link[] {
    return links;
  }
}

export class Macro {
  id: number;
  nome: string;
  tipo: 'ellipse' | 'rectangle';
}

export class Link {
  id: number;
  de: number;
  para: number;
}

const macros: Macro[] = [
  {
    id: 0,
    nome: 'Nenhuma',
    tipo: 'ellipse',
  },
  {
    id: 100,
    nome: 'Parada de Retorno',
    tipo: 'ellipse',
  },
  {
    id: 10,
    nome: 'Macro Livre',
    tipo: 'ellipse',
  },
  {
    id: 51,
    nome: 'Parada de Refeição',
    tipo: 'ellipse',
  },
  {
    id: 52,
    nome: 'Parada de Abastecimento',
    tipo: 'ellipse',
  },
  {
    id: 53,
    nome: 'Parada de Pernoite',
    tipo: 'ellipse',
  },
  {
    id: 54,
    nome: 'Parada de Outras Paradas',
    tipo: 'ellipse',
  },
  {
    id: 55,
    nome: 'Parada de Coleta',
    tipo: 'ellipse',
  },
  {
    id: 56,
    nome: 'Parada de Entrega',
    tipo: 'ellipse',
  },
  {
    id: 57,
    nome: 'Parada de Pneus',
    tipo: 'ellipse',
  },
  {
    id: 58,
    nome: 'Extra 01',
    tipo: 'ellipse',
  },
  {
    id: 59,
    nome: 'Extra 02',
    tipo: 'ellipse',
  },
  {
    id: 60,
    nome: 'Extra 03',
    tipo: 'ellipse',
  },
  {
    id: 61,
    nome: 'Reinício de Refeição',
    tipo: 'ellipse',
  },
  {
    id: 62,
    nome: 'Reinício de Abastecimento',
    tipo: 'ellipse',
  },
  {
    id: 63,
    nome: 'Reinício de Pernoite',
    tipo: 'ellipse',
  },
  {
    id: 64,
    nome: 'Reinício de Outras Paradas',
    tipo: 'ellipse',
  },
  {
    id: 65,
    nome: 'Reinício de Coleta',
    tipo: 'ellipse',
  },
  {
    id: 66,
    nome: 'Reinício de Entrega',
    tipo: 'ellipse',
  },
  {
    id: 67,
    nome: 'Reinício de Pneus',
    tipo: 'ellipse',
  },
  {
    id: 71,
    nome: 'Início de Carga',
    tipo: 'ellipse',
  },
  {
    id: 72,
    nome: 'Fim de Carga',
    tipo: 'ellipse',
  },
  {
    id: 73,
    nome: 'Início de Descarga',
    tipo: 'ellipse',
  },
  {
    id: 74,
    nome: 'Fim de Descarga',
    tipo: 'ellipse',
  },
  {
    id: 75,
    nome: 'Início de Viagem',
    tipo: 'ellipse',
  },
  {
    id: 76,
    nome: 'Fim de Viagem',
    tipo: 'ellipse',
  },
  {
    id: 77,
    nome: 'Marcar Placa',
    tipo: 'ellipse',
  },
];

const links: Link[] = [
  { id: 53943, de: 77, para: 60 },
  { id: 53942, de: 77, para: 59 },
  { id: 53941, de: 76, para: 77 },
  { id: 53940, de: 76, para: 60 },
  { id: 53939, de: 75, para: 76 },
  { id: 53938, de: 75, para: 57 },
  { id: 53937, de: 75, para: 56 },
  { id: 53936, de: 75, para: 55 },
  { id: 53935, de: 75, para: 54 },
  { id: 53934, de: 75, para: 53 },
  { id: 53933, de: 75, para: 52 },
  { id: 53932, de: 75, para: 51 },
  { id: 53931, de: 74, para: 74 },
  { id: 53930, de: 73, para: 73 },
  { id: 53929, de: 72, para: 72 },
  { id: 53928, de: 71, para: 71 },
  { id: 53927, de: 67, para: 60 },
  { id: 53926, de: 67, para: 76 },
  { id: 53925, de: 67, para: 57 },
  { id: 53924, de: 67, para: 56 },
  { id: 53923, de: 67, para: 55 },
  { id: 53922, de: 67, para: 54 },
  { id: 53921, de: 67, para: 53 },
  { id: 53920, de: 67, para: 52 },
  { id: 53919, de: 67, para: 51 },
  { id: 53918, de: 66, para: 60 },
  { id: 53917, de: 66, para: 76 },
  { id: 53916, de: 66, para: 57 },
  { id: 53915, de: 66, para: 56 },
  { id: 53914, de: 66, para: 55 },
  { id: 53913, de: 66, para: 54 },
  { id: 53912, de: 66, para: 53 },
  { id: 53911, de: 66, para: 52 },
  { id: 53910, de: 66, para: 51 },
  { id: 53909, de: 65, para: 60 },
  { id: 53908, de: 65, para: 76 },
  { id: 53907, de: 65, para: 57 },
  { id: 53906, de: 65, para: 56 },
  { id: 53905, de: 65, para: 55 },
  { id: 53904, de: 65, para: 54 },
  { id: 53903, de: 65, para: 53 },
  { id: 53902, de: 65, para: 52 },
  { id: 53901, de: 65, para: 51 },
  { id: 53900, de: 64, para: 60 },
  { id: 53899, de: 64, para: 76 },
  { id: 53898, de: 64, para: 57 },
  { id: 53897, de: 64, para: 56 },
  { id: 53896, de: 64, para: 55 },
  { id: 53895, de: 64, para: 54 },
  { id: 53894, de: 64, para: 53 },
  { id: 53893, de: 64, para: 52 },
  { id: 53892, de: 64, para: 51 },
  { id: 53891, de: 63, para: 60 },
  { id: 53890, de: 63, para: 76 },
  { id: 53889, de: 63, para: 57 },
  { id: 53888, de: 63, para: 56 },
  { id: 53887, de: 63, para: 55 },
  { id: 53886, de: 63, para: 54 },
  { id: 53885, de: 63, para: 53 },
  { id: 53884, de: 63, para: 52 },
  { id: 53883, de: 63, para: 51 },
  { id: 53882, de: 62, para: 60 },
  { id: 53881, de: 62, para: 76 },
  { id: 53880, de: 62, para: 57 },
  { id: 53879, de: 62, para: 56 },
  { id: 53878, de: 62, para: 55 },
  { id: 53877, de: 62, para: 54 },
  { id: 53876, de: 62, para: 53 },
  { id: 53875, de: 62, para: 52 },
  { id: 53874, de: 62, para: 51 },
  { id: 53873, de: 61, para: 60 },
  { id: 53872, de: 61, para: 76 },
  { id: 53871, de: 61, para: 57 },
  { id: 53870, de: 61, para: 56 },
  { id: 53869, de: 61, para: 55 },
  { id: 53868, de: 61, para: 54 },
  { id: 53867, de: 61, para: 53 },
  { id: 53866, de: 61, para: 52 },
  { id: 53865, de: 61, para: 51 },
  { id: 53864, de: 60, para: 77 },
  { id: 53863, de: 60, para: 60 },
  { id: 53862, de: 60, para: 59 },
  { id: 53861, de: 59, para: 64 },
  { id: 53860, de: 59, para: 75 },
  { id: 53859, de: 59, para: 57 },
  { id: 53858, de: 59, para: 56 },
  { id: 53857, de: 59, para: 55 },
  { id: 53856, de: 59, para: 54 },
  { id: 53855, de: 59, para: 53 },
  { id: 53854, de: 59, para: 52 },
  { id: 53853, de: 59, para: 51 },
  { id: 53852, de: 58, para: 58 },
  { id: 53851, de: 57, para: 67 },
  { id: 53850, de: 56, para: 66 },
  { id: 53849, de: 55, para: 65 },
  { id: 53848, de: 54, para: 59 },
  { id: 53847, de: 54, para: 64 },
  { id: 53846, de: 53, para: 63 },
  { id: 53845, de: 52, para: 62 },
  { id: 53844, de: 51, para: 61 },
];
