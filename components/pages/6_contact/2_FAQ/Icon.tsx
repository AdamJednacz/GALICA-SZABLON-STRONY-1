import React from 'react'


export interface IconType {
    className:string
}

const Icon:React.FC<IconType> = ({className}) => {
  return (
<svg className={className} xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8" fill="none">
  <path d="M0 0L15 0L7.5 7.5L0 0Z" fill="#1B53A5"/>
</svg>
  )
}

export default Icon