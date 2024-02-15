import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const img1 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKmuBzGwiH6BHygA80xddfvWszWR7FNe3bm7PJwAvQnf_7bhoSxejS30kyg&s"
  const img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJAJb7FXFQbN0iP4meFGNvKh94H2ARE1Pr1KjXL1WpOnXmuQl4sEfoemciFw&s"
  const img3 ="https://i.pinimg.com/originals/01/cb/1e/01cb1e8084d6c027031a8ee09957e4ca.jpg"
  const profile = {
    userName: 'Mikki',
    UserId: "107",
    userTitle: "Full Stack Developer"
  }

  return (
    <>
      <h1 className='bg-black mb-4 rounded-xl' >Cards Using Props</h1>

      <div className='flex justify-content=center ml-4'>
        <Card userName="Tikki" btnText="Click here" image={img2} />
        <Card userName={profile.userName} image={img1} />
        <Card userName="chikki" image={img3}/>
      </div>
    </>
  )
}

export default App
