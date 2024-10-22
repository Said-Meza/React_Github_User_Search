import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchUserGithub from "./components/SearchUserGithub"
import { Error404 } from './components/Error404'


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<SearchUserGithub />} />
        <Route path='*' element={<Error404 />} />
        

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
