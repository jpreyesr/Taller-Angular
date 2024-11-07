import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit 
{
  series: Array<Serie> = [];
  constructor() { }
  getSeriesList(): Array<Serie>
  {
    return dataSeries;
  }

  ngOnInit() {
    this.series = this.getSeriesList();
  }

}
