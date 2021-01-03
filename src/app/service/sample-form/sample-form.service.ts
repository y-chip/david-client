import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SampleForm } from './sample-form';

@Injectable({
  providedIn: 'root',
})
export class SampleFormService {
  private url = 'http://localhost:8080/sample-form';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  get(): Observable<SampleForm> {
    return this.httpClient.get<SampleForm>(this.url);
  }

  post(sampleForm: SampleForm): Observable<SampleForm> {
    return this.httpClient.post<SampleForm>(
      this.url,
      sampleForm,
      this.httpOptions
    );
  }
}
