import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private store(key: any, obj: any): void {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  public retrieve(key: any) {
    let itemString = localStorage.getItem(key);
    return JSON.parse(itemString);
  }

  public create(key: any, obj: any = {}): string {
    this.store(key, obj)
    return key;
  }

  public update(key: any, obj: any): void {
    let item = this.retrieve(key);
    this.store(key, Object.assign(item, obj));
  }

  public updateAll(key: any, obj: any): void {
    let item = this.retrieve(key);
    this.store(key, obj);
  }

  public delete(key: any): void {
    localStorage.removeItem(key);
  }
}
