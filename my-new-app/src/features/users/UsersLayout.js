/**
 * Created by JingHongGang on 2022/12/26.
 */
import Sider from './Sider'
import UsersList from './UserList'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {modalReducer} from './NiceModal'

const store = createStore(modalReducer)

export default function UsersLayout() {
  return (
    <Provider store={store}>
      <div className="main-layout">
        <Sider/>
        <UsersList/>
      </div>
    </Provider>
  )
}