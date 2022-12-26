/**
 * Created by JingHongGang on 2022/12/26.
 */
import {Button} from 'antd'
import {useNiceModal} from './NiceModal'

export default function UserList() {
  const modal = useNiceModal("my-modal")
  return (
    <Button onClick={() => modal.show()}>Edit User</Button>
  )
}