// import logo from './logo.svg';
import './App.css';
import React from 'react';
import BlogDetail from './features/articles/BlogDetail'
import plugins from 'js-plugin'
import CommentList from './features/comments/CommentList'

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <BlogDetail/>
      </header>
    </div>
  );
}

export default App;
