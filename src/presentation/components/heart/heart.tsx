import React, { useState } from 'react'

interface Props {
  movie: string
  active: boolean
  set: Function
}

const Heart: React.FC<Props> = ({ movie, active, set }: Props) => {
  const [like, setLike] = useState(active)
  const save = (): void => {
    setLike((old) => !old)
    set({ key: 'FAVORITES', value: movie })
  }

  return (<button className="heart" onClick={(() => save())}>
    <svg width="34" height="31" viewBox="0 0 24 21" className="shadow">
      <path fill={(like) ? 'rgba(255, 0, 0, 1)' : 'rgba(36,36,36,0.27)'}
        stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M19.84,2.61 C18.8084758,1.57799147 17.409138,0.998174379 15.95,0.998174379
               C14.490862,0.998174379 13.0915242,1.57799147 12.06,2.61 L11,3.67 L9.94,2.61
               C7.79161231,0.461612378 4.30838771,0.461612404 2.16000006,2.61000006
               C0.0116124038,4.75838771 0.0116123778,8.24161231 2.16,10.39 L3.22,11.45
               L11,19.23 L18.78,11.45 L19.84,10.39 C20.8720085,9.3584758 21.4518256,7.95913803
               21.4518256,6.5 C21.4518256,5.04086197 20.8720085,3.6415242 19.84,2.61
               L19.84,2.61 Z"
        transform="translate(1)"/>
    </svg>
  </button>)
}

export default Heart
