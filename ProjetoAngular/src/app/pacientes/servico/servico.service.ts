import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paciente } from '../model/paciente';
import { BaseApi } from 'src/app/shared/baseApi';

@Injectable({
  providedIn: 'root'
})
export class ServicoService extends BaseApi < paciente > {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'pacientes')
  }
}