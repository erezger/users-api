import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {APIResponeModel} from '../models/api-response.model';

@Injectable()
export class CommonService {
  public constructor(private readonly _httpService: HttpClient) {}

  public uploadFile(
    file
  ): Observable<APIResponeModel<{ imageId: string; url: string }>> {
    const fd = new FormData();
    fd.append('file', file, file.name);
    const headers: HttpHeaders = new HttpHeaders({ FILE_UPLOAD: file.name });
    return this._httpService
      .post('/file-uploads/image', fd, { headers })
      .pipe(
        catchError((err) => throwError(err)),
        map((res: APIResponeModel<any>) => res)
      );
  }
  public uploadProfileImages(
    file
  ): Observable<APIResponeModel<any>> {
    const fd = new FormData();
    fd.append('file', file, file.name);
    const headers: HttpHeaders = new HttpHeaders({ FILE_UPLOAD: file.name });
    return this._httpService
      .post('/file-uploads/profile-images', fd, { headers })
      .pipe(
        catchError((err) => throwError(err)),
        map((res: APIResponeModel<any>) => res)
      );
  }

  public async readAsDataUrl(file): Promise<any> {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return await new Promise<any>((resolve, reject) => {
      reader.onload = (event) => {
        resolve(event.target.result);
      };
    });
  }
}
