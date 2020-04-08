import { Component, OnInit, ViewChild } from '@angular/core';
import { Matkul } from '../matkul';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  Matkuls: Matkul[];
  error:boolean;
  displayedColumns: string[] = ['nama', 'dosen', 'semester', 'tahun'];
                    

  constructor(
    private ds: DataService,
  ) {}

  ngOnInit(): void {
    this.ds.getMatkuls().subscribe(
      response => {
        this.Matkuls = response as Matkul[];
      },
      err => {
        console.log(err);
        this.error = true;
      }
    );
  }

}
