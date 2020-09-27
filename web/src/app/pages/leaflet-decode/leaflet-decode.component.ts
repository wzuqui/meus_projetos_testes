import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import * as L from 'leaflet';
import polyline from '@mapbox/polyline';


@Component({
  selector: 'app-leaflet-decode',
  templateUrl: './leaflet-decode.component.html',
  styleUrls: ['./leaflet-decode.component.scss']
})
export class LeafletDecodeComponent implements OnInit, AfterViewInit {
  @ViewChild('mapa') mapaElementRef: ElementRef<HTMLDivElement>;
  mapa: L.Map;
  tiles: L.TileLayer;
  polyline: L.Polyline<any>;

  constructor() { }

  ngOnInit(): void {
  }

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

  acaoDecodificar(linha: string): void {
    if (this.polyline) {
      this.polyline.remove();
    }
    const decode: L.LatLngExpression[] = polyline.decode(linha) as any;
    this.polyline = L.polyline(decode);
    this.polyline.addTo(this.mapa);
    this.mapa.fitBounds(this.polyline.getBounds());
  }
}
