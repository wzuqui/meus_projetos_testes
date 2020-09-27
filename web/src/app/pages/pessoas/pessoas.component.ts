import { Component, OnInit } from '@angular/core';

import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import { PessoasDatabase } from 'src/app/databases/pessoas.database';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss'],
})
export class PessoasComponent implements OnInit {
  dataSource: DataSource;

  constructor() {
    this._configuraDataSource();
  }

  ngOnInit(): void {
    console.log('OnInit', 'pessoas');
  }

  private _configuraDataSource(): void {
    const db = new PessoasDatabase();
    const store = new CustomStore({
      key: 'id',
      load: (loadOptions) => {
        return db.pessoas.toArray();
      },
      insert: (values) => {
        return db.transaction('rw', db.pessoas, async () => {
          await db.pessoas.add(values);
        });
      },
      update: (key, values) => {
        return db.transaction('rw', db.pessoas, async () => {
          try {
            await db.pessoas.update(key, values);
          } catch (erro) {
            console.error(erro, key, values);
          }
        });
      },
      remove: (key) => {
        return db.transaction('rw', db.pessoas, async () => {
          await db.pessoas.delete(key);
        });
      },
    });
    this.dataSource = new DataSource({
      store,
    });
  }
}
