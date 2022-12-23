/**
 * Created by JingHongGang on 2022/12/23.
 */
import {useState, useCallback, useRef, useMemo} from 'react'

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

function useForm(initialValue = {}, validators) {
  const [values, setValues] = useState(initialValue)
  const [errors, setErrors] = useState({});
  const setFieldValue = useCallback(
    (name, value) => {
      setValues((values) => {
        return {
          ...values,
          [name]: value,
        }
      })
      if (validators && validators[name]) {
        const error = validators[name](value)
        setErrors((errors) => {
          return {
            ...errors,
            [name]: error
          }
        })
      }
    }, [validators]);
  return {values, errors, setFieldValue}
}

// 使用 Hooks 简化处理
function MyForm() {
  const validators = useMemo(() => {
    return {
      name: (value) => {
        if (value.length < 2) return "名字成都不得小于2位"
        return null
      },
      email: (value) => {
        if (!value.includes('@')) return "邮箱格式无效"
        return null
      }
    }
  }, []);
  const {values, errors, setFieldValue} = useForm({}, validators)
  return (
    <form>
      <input value={values['name']} onChange={(evt) => setFieldValue('name', evt.target.value)}/>
      {errors['name']}
      <input value={values['email']} onChange={(evt) => setFieldValue('email', evt.target.value)}/>
      {errors['email']}
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