// import logo from './logo.svg';
import './App.css';
import React from 'react';
import BlogDetail from './features/articles/BlogDetail'
import plugins from 'js-plugin'
import CommentList from './features/comments/CommentList'
import {Button} from 'antd'
import 'antd/dist/reset.css'
import _ from 'lodash'
import {useHash} from 'react-use'
import MyRouter from './MyRouter'
import {createBrowserRouter, RouterProvider, Outlet, Link} from 'react-router-dom'

// function UserList() {
//   const [users, setUsers] = React.useState([])
//   const [loading, setLoading] = React.useState(false)
//   const [error, setError] = React.useState(null)
//
//   const fetchUsers = async ()  => {
//     setLoading(true)
//     try {
//       const res = await fetch("https://reqres.in/api/users/")
//       const json = await res.json()
//       setUsers(json.data)
//     } catch (err) {
//       setError(err)
//     }
//     setLoading(false)
//   }
//
//   return (
//     <div>
//       <button onClick={fetchUsers} disabled={loading}>
//         {loading ? "Loading..." : "Show Users"}
//       </button>
//       {error && <div>Failed: {String(error)}</div>}
//       <br/>
//       <ul>
//         {users.length > 0 && users.map((user) => {
//           return <li key={user.id}>{user.first_name}</li>
//         })}
//       </ul>
//     </div>
//
//   )
// }

plugins.register({
  name: 'plugin1',
  blog: {
    footer: () => <CommentList/>
  }
})

function Route() {
  return null
}

function Page1() {
  return "Page 1"
}

function Page2() {
  return "Page 2"
}

function Page3() {
  return "Page 3"
}

function Page4() {
  return "Page 4"
}

function Root() {
  return (
    <div className="App">
      <div className="sider">
        <Link to={`page1`}>Page 1</Link>
        <Link to={`page2`}>Page 2</Link>
        <Link to={`page3`}>Page 3</Link>
        <Link to={`page4`}>Page 4</Link>
      </div>
      <div className="page-container">
        <Outlet/>
      </div>
      {/*<header className="App-header">*/}
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      {/*<p>*/}
      {/*  Edit <code>src/App.js</code> and save to reload.*/}
      {/*</p>*/}
      {/*<a*/}
      {/*  className="App-link"*/}
      {/*  href="https://reactjs.org"*/}
      {/*  target="_blank"*/}
      {/*  rel="noopener noreferrer"*/}
      {/*>*/}
      {/*  Learn React*/}
      {/*</a>*/}
      {/*<UserList/>*/}
      {/*<BlogDetail/>*/}
      {/*<Button type="primary">Button</Button>*/}
      {/*</header>*/}
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [{
      path: 'page1',
      element: <Page1/>,
    }, {
      path: 'page2',
      element: <Page2/>,
    }, {
      path: 'page3',
      element: <Page3/>,
    }, {
      path: 'page4',
      element: <Page4/>,
    }]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
