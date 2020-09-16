import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Address {
  city: string;
  municipality: string;
  region: string;
  state: string;
  country: string;
  country_code: string;
}

export interface Nominatim {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  boundingbox: string[];
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
  icon: string;
  address: Address;
}

export interface Waypoint {
  hint: string;
  location: number[];
  name: string;
}

export interface Annotation {
  nodes: any[];
}

export interface Leg {
  steps: any[];
  weight: number;
  distance: number;
  annotation: Annotation;
  summary: string;
  duration: number;
}


export interface Route {
  legs: Leg[];
  weight_name: string;
  geometry: string;
  weight: number;
  distance: number;
  duration: number;
}

export interface Osrm {
  code: string;
  waypoints: Waypoint[];
  routes: Route[];
}

export interface Tag {
  k: string;
  v: string;
}

export interface Pedagio {
  id: string;
  lat: string;
  lon: string;
  version: string;
  timestamp: Date;
  changeset: string;
  uid: string;
  user: string;
  tag: Tag[];
}

@Injectable({
  providedIn: 'root',
})
export class RoterizadorService {
  readonly nominationUri = 'https://nominatim.openstreetmap.org/search/';
  readonly ormUri =
    'https://router.project-osrm.org/route/v1/driving/{origem};{destino}?annotations=nodes&geometries=polyline&alternatives=false';
    readonly linkRota = 'http://map.project-osrm.org/?loc={origem}&loc={destino}&hl=en&alt=0&srv=1'

  constructor(private httpClient: HttpClient) {}

  obterLinkRota(origem: Nominatim, destino: Nominatim): string {
    return this.linkRota
      .replace('{origem}', `${origem.lat},${origem.lon}`)
      .replace('{destino}', `${destino.lat},${destino.lon}`);
  }

  obterRotas(origem: Nominatim, destino: Nominatim): Promise<Osrm> {
    const uri = this.ormUri
      .replace('{origem}', `${origem.lon},${origem.lat}`)
      .replace('{destino}', `${destino.lon},${destino.lat}`);

    return this.httpClient.get<Osrm>(uri).toPromise();
  }
}
