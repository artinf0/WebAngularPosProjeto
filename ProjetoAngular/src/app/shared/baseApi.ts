import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


export abstract class BaseApi<T>{
    private url: string;

    constructor(private httpClient: HttpClient, private path: string) {

        this.url = `${environment.baseUrl}/${this.path}`;
     }

    listar(): Observable<T[]> {
        return this.httpClient.get(`${this.url}`)
            .pipe(map(value => value as T[]));
    }

    consultar(id : number | string ): Observable<T>{
        return this.httpClient.get(`${this.url}/${id}`)
        .pipe(map(value=>value as T));
    }

    atualizar(id:number | string, body : T): Observable<T>{
        return this.httpClient.put(`${this.url}/${id}`, body)
        .pipe(map(value => value as T));
    }

    criar(body:T):Observable<T>{
        return this.httpClient.post(`${this.url}`, body)
        .pipe(map(value=>value as T));
    }

    remover (id: number | string): Observable<T>{
        return this.httpClient.delete(`${this.url}/${id}`)
        .pipe(map(value=>value as T));
    }

    salvar(body?: any): Observable<T> {
        const {id, ...bodyRequest} = body;
        if (id) {
          return this.atualizar(id, bodyRequest);
        }
        return this.criar(body);
      }

}