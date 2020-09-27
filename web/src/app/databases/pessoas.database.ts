import Dexie from 'dexie';

interface Pessoa {
  id?: number;
  nome: string;
  idade: string;
}

export class PessoasDatabase extends Dexie {
  public pessoas: Dexie.Table<Pessoa, number>;

  constructor() {
    super('PessoasDatabase');
    this.version(1).stores({
      pessoas: '++id,nome,idade'
    });
    this.pessoas = this.table('pessoas');
  }
}
