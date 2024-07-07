import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MkCoreSampleService {
  public getBestFramework(): string {
    return 'Angular';
  }
}
