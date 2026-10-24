import {useState} from 'react'
import NotFound from './pages/NotFound/NotFound'
import LoginForm from './components/UI/loginForm'
import SortBy from './components/layouts/sortBy';

function App() {
  let email = "";
  let password = "";
  const [data,setData]= useState({
    email,
    password
  })
  let tab = ["yo","ya","bien","non"];

  return (
    <div>
      <NotFound />
      <LoginForm/>
      <SortBy categoryList={tab}/>
    </div>

  )
}

export default App