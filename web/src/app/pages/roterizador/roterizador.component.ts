import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DxSelectBoxComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import * as L from 'leaflet';
import polyline from '@mapbox/polyline';

import {
  Nominatim,
  RoterizadorService,
  Route,
  Pedagio,
} from './roterizador.service';

import pedagios from './pedagios.json';

interface PedagioNomeCusto {
  pedagio: Pedagio;
  nome: string;
  custo: string;
}

@Component({
  selector: 'app-roterizador',
  templateUrl: './roterizador.component.html',
  styleUrls: ['./roterizador.component.scss'],
})
export class RoterizadorComponent implements OnInit, AfterViewInit {
  @ViewChild('origem') origemDxSelectBox: DxSelectBoxComponent;
  @ViewChild('destino') destinoDxSelectBox: DxSelectBoxComponent;
  @ViewChild('mapa') mapaElementRef: ElementRef<HTMLDivElement>;

  origemDataSource: DataSource;
  destinoDataSource: DataSource;
  rota: Route;
  pedagios: PedagioNomeCusto[] = [];
  linkRota: string;
  mapa: L.Map;
  tiles: L.TileLayer;
  polyline: L.Polyline<any>;
  pedagiosMarker: L.Marker<any>[];

  constructor(
    private httpClient: HttpClient,
    private roterizadorService: RoterizadorService
  ) {
    this._configuraDataSource();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.mapa = L.map(this.mapaElementRef.nativeElement, {
      center: L.latLng([-13.7881849, -59.3213139]),
      zoom: 3,
    });
    this.tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    this.tiles.addTo(this.mapa);
  }

  async acaoCalcular(origem: Nominatim, destino: Nominatim): Promise<void> {
    try {
      const rotas = await this.roterizadorService.obterRotas(origem, destino);
      const [rota] = rotas.routes;

      this.rota = rota;
      this.pedagios = this._obterPedagios(rota.legs[0].annotation.nodes);
      this.linkRota = this.roterizadorService.obterLinkRota(origem, destino);

      this._adicionarRotaMapa(rota);
      this._adicionarPedagiosMapa(this.pedagios);
    } catch (erro) {
      console.warn(erro);
    }
  }

  private _adicionarPedagiosMapa(pedagiosEncontrados: PedagioNomeCusto[]): void {
    this.pedagiosMarker?.map((p) => p.remove());

    this.pedagiosMarker = pedagiosEncontrados.map(({ pedagio, nome, custo }) => {
      const icon = L.AwesomeMarkers.icon({
        icon: 'dollar',
        markerColor: 'blue',
        prefix: 'fa',
        iconColor: 'white',
      });
      const marcador = new L.Marker<L.DivIcon>(
        [Number(pedagio.lat), Number(pedagio.lon)],
        {
          icon,
        }
      );
      marcador.bindTooltip(`${nome} - ${custo}`);
      marcador.addTo(this.mapa);

      return marcador;
    });
  }

  private _adicionarRotaMapa(rota: Route): void {
    if (this.polyline) {
      this.polyline.remove();
    }
    const geometry = rota.geometry;
    const decode: L.LatLngExpression[] = polyline.decode(geometry) as any;
    this.polyline = L.polyline(decode);
    this.polyline.addTo(this.mapa);
    this.mapa.fitBounds(this.polyline.getBounds());
  }

  private _obterPedagios(nodes: number[]): PedagioNomeCusto[] {
    return pedagios.osm.node
      .map((node) => {
        const pedagio = (node as any) as Pedagio;
        const id = Number(pedagio.id);
        const nomes: string[] = [];
        let custo: string = null;

        if (pedagio.tag instanceof Array) {
          custo = pedagio.tag.find((p) => p.k === 'charge')?.v;

          nomes.push(pedagio.tag.find((p) => p.k === 'operator')?.v);
          nomes.push(pedagio.tag.find((p) => p.k === 'note')?.v);
        }

        if (custo == null) {
          return;
        }

        if (nodes.includes(id)) {
          return {
            pedagio,
            custo,
            nome: nomes.join(' - ').trim(),
          };
        }
      })
      .filter((p) => p);
  }

  private _configuraDataSource(): void {
    this.origemDataSource = new DataSource({
      store: new CustomStore({
        key: 'place_id',
        load: () => {
          return this.httpClient
            .get(
              'https://nominatim.openstreetmap.org/search/?q=' +
                this.origemDxSelectBox.text +
                '&limit=5&format=json&addressdetails=1'
            )
            .toPromise();
        },
      }),
    });
    this.destinoDataSource = new DataSource({
      store: new CustomStore({
        key: 'place_id',
        load: () => {
          return this.httpClient
            .get(
              'https://nominatim.openstreetmap.org/search/?q=' +
                this.destinoDxSelectBox.text +
                '&limit=5&format=json&addressdetails=1'
            )
            .toPromise();
        },
      }),
    });
  }
}

// function calculo(): Array<any> {
//   const pedagiosEmViagem = [];
//   pedagios.osm.node.forEach((pedagio) => {
//     const id = Number(pedagio['-id']);
//     let custo: string = null;

//     if (pedagio.tag instanceof Array) {
//       custo = pedagio.tag.find((p) => p['-k'] === 'charge')?.['-v'];
//     }

//     if (custo == null) {
//       return;
//     }

//     viagem.trips.forEach((trip) => {
//       trip.legs.forEach((leg) => {
//         leg.annotation.nodes.forEach((node) => {
//           if (node === id) {
//             pedagiosEmViagem.push([leg, custo]);
//           }
//         });
//       });
//     });
//   });

//   return pedagiosEmViagem;
// }
