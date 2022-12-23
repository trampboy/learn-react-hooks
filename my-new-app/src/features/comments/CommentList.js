/**
 * Created by JingHongGang on 2022/12/23.
 */
import {useState, useCallback, useRef} from 'react'

// 受控组件
// function MyForm() {
//   const [value, setValue] = useState('')
//   const handleChange = useCallback((evt) => {
//       console.error('evt.target.value', evt.target.value)
//       setValue(evt.target.value)
//     }, []
//   );
//   return <input value={value} onChange={handleChange} />
// }

// 非受控组件
// function MyForm() {
//   const inputRef = useRef()
//   const handleSubmit = (evt) => {
//     evt.preventDefault()
//     console.error('name', inputRef.current.value)
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input ref={inputRef}/>
//       <input type='submit' value="Submit"/>
//     </form>
//   )
// }

function useForm(initialValue = {}) {
  const [values, setValues] = useState(initialValue)
  const setFieldValue = useCallback(
    (name, value) => {
      setValues((values) => {
        return {
          ...values,
          [name]: value,
        }
      })
    },
    []);
  return {values, setFieldValue}
}

// 使用 Hooks 简化处理
function MyForm() {
  const {values, setFieldValue} = useForm({})
  return (
    <form>
      <input value={values['name']} onChange={(evt) => setFieldValue('name', evt.target.value)}/>
      <input value={values['email']} onChange={(evt) => setFieldValue('email', evt.target.value)}/>
    </form>
  )
}

export default function commentList() {
  return (
    <div>
      Comment List
      <MyForm/>
    </div>
  )
}