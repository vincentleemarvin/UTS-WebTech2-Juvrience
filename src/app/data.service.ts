import { Injectable } from '@angular/core';
import { Matkul } from './matkul';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'https://crudcrud.com/api/2a93e132c7cf4ef0bf2352e7b51995d0';

  constructor(private http: HttpClient) {}

  getMatkuls() {
    return this.http.get(`${this.baseUrl}/matkul`);
  }

  getMatkul(id: number) {
    return this.http.get(`${this.baseUrl}/matkul/${id}`);
  }

  postMatkul(matkul: Matkul) {
    delete matkul._id; 
    return this.http.post(`${this.baseUrl}/matkul`, matkul);
  }

  updateMatkul(matkul: Matkul) {
    const id = matkul._id;
    delete matkul._id; 
    return this.http.put(`${this.baseUrl}/matkul/${id}`, matkul);
  }

  deleteMatkul(matkul: Matkul) {
    const id = matkul._id;
    return this.http.delete(`${this.baseUrl}/matkul/${id}`);
  }
}
