import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import * as L from 'leaflet';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  map: L.Map;
  tilesServer: string = environment.mapTilesServerUrl;
  currentZoom = 6;

  ngOnInit() {
    this.createMap();
  }
  createMap() {
    this.map = L.map('map').setView([52.19667, 19.35639], this.currentZoom);
    L.tileLayer(this.tilesServer, {
      maxZoom: 18,
      minZoom: 4,
      attribution: 'Learn Leaflet App'
    }).addTo(this.map);

    L.marker([53.016094, 18.566689])
    .bindPopup('<b>Toruń!</b><br>Popup test.').openPopup()
    .addTo(this.map);

    L.circle([53.016094, 18.566689], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 5500,
  }).addTo(this.map);
  }
}
