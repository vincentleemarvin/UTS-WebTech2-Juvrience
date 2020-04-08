import { Component, OnInit } from '@angular/core';
import {  Matkul } from '../matkul';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-form-matkul',
  templateUrl: './form-matkul.component.html',
  styleUrls: ['./form-matkul.component.scss']
})
export class FormMatkulComponent implements OnInit {
  matkul: Matkul = {
    _id: '',
    nama:'',
    dosen: '',
    semester: '',
    tahun: '',
  };
  id = null;
  error = false;
  update = true;

  constructor(
    private _snackBar: MatSnackBar,
    private ds: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // jika ada parameter id di URL
      if (params.get('id')) {
        this.id = params.get('id');

        this.ds.getMatkul(this.id).subscribe(
          response => {
            this.matkul = response as Matkul;
          },
          err => {
            console.log(err);
            this.error = true;
          }
        );
      } else {
        this.update = false;
      }
    });
  }

  postMatkul() {
    this.ds.postMatkul(this.matkul).subscribe(response => {
      // tampilkan notifikasi
      this.openSnackBar("Mata Kuliah Added", null)
      this.router.navigate(['/first']);
    });
  }

  deleteMatkul() {
    this.ds.deleteMatkul(this.matkul).subscribe(
      response => {
        // tampilkan notifikasi
        this.openSnackBar("Mata Kuliah Deleted", null)
        this.router.navigate(['/first']);
      },
      err => {
        console.log(err);
      }
    );
  }

  updateMatkul() {
    this.ds.updateMatkul(this.matkul).subscribe(
      response => {
        // tampilkan notifikasi
        this.openSnackBar("Mata Kuliah Updated", null)
        this.router.navigate(['/first']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
