import React from 'react'
import { UnselectButton, SelectButton } from './Button'
import Display from './Display'

interface Props {
  name: string
}

const Wrapper: React.FC<Props> = ({ name }: Props) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
        <SelectButton name={name}></SelectButton>
        <UnselectButton name={name}></UnselectButton>
        <div style={{ marginLeft: 'auto' }}>
          <Display name={name}></Display>
        </div>
      </div>
    </>
  )
}

export default Wrapper
