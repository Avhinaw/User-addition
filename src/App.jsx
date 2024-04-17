import { useState } from 'react'
import Form from './components/Form'
import Cards from './components/Cards'
function App() {

  const [users, setUsers] = useState([]);
  const handleFormData = (data)=>{
        setUsers([...users, data]);
  }

  return (  
    <>
      <div className='h-screen w-full bg-zinc-400 flex items-center justify-center '>
          <div className='container mx-auto'>
            <Cards users={users} />
            <Form handleFormData={handleFormData} />
          </div>
      </div>
    </>
  )
}

export default App
