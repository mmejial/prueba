import {memo} from 'react'

export const Small =memo( ({value}) => {
    console.log('inicio o cambio')
  return (
    <small>{value}</small>
  )
})
