import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { dataSeries } from './dataSeries';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit 
{
  
  constructor(private seriesService: SeriesService) { }
  series: Array<Serie> = [];
  
  getSeries()
  {
    this.seriesService.getSeries().subscribe(series => this.series = series);
  }

  ngOnInit() {
    this.getSeries();
  }

}
