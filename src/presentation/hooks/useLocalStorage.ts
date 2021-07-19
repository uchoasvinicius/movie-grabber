import { LocalStorage } from '@/infra/local/local-storage/local-storage'

export type SaveOptions = 'WATCH_LATER' | 'FAVORITES'

type Set = {
  key: string
  value: string
}

const get = (key: string): string | any => {
  const localStorage = new LocalStorage()
  const savedValue = localStorage.get(key)
  if (savedValue) return savedValue
}

const set = (props: Set): string | any => {
  const localStorage = new LocalStorage()

  const { key, value } = props
  const movies = get(key)
  if (movies) {
    if (movies.includes(value)) {
      const index = movies.indexOf(value)
      if (index > -1) {
        movies.splice(index, 1)
      }
    } else {
      movies.push(value)
    }
    localStorage.set(key, movies)
  } else {
    localStorage.set(key, [value])
  }

  console.log(movies)
}

export {
  get, set
}
//
// export default function useLocalStorage (key: string, value?: string, type?: SaveOptions): string[] | any {
//   return [get(key), set({ key, value, type })]
// }
