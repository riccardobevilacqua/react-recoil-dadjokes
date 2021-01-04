import React from 'react';
import { atom, useRecoilState } from 'recoil';

export const textState = atom({
  key: 'textState',
  default: '',
})

export function TextInput() {
  const [text, setText] = useRecoilState(textState)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <p>
        Echo: {text}
      </p>
    </div>
  )
}

export function CharacterCounter() {
  return (
    <div>
      <TextInput />
    </div>
  )
}
