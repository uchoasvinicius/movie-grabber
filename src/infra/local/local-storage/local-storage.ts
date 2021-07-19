export class LocalStorage {
  set (key: string, value: any): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  get (key: string): any {
    return JSON.parse(localStorage.getItem(key) as any)
  }
}
