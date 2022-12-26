/**
 * Created by JingHongGang on 2022/12/26.
 */
import {Button} from 'antd'
import NiceModal, {createNiceModal, useNiceModal} from './NiceModal'

const MyModal = createNiceModal("my-modal", () => {
  return (
    <NiceModal id="my-modal" title="Nice Modal">
      Hello NiceModal!
    </NiceModal>
  )
})

export default function Sider() {
  const modal = useNiceModal("my-modal")
  return (
    <>
      <Button onClick={() => modal.show()}>New Users</Button>
      <MyModal/>
    </>
  )
}