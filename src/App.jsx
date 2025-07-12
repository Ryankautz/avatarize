import CustomHeader from './components/CustomHeader/CustomHeader.jsx'
import './App.css'
import Filtro from './components/Filtro/Filtro.jsx'
import Profile from './components/Profile/Profile.jsx'
import { useState } from 'react'

function App() {
  const [params, setParams] = useState(null);
  
  return (
    <div className='Page'>
      <CustomHeader/>
      <div className='Content'>
        <div className='Left'>
          <Filtro onSubmit={setParams}/>
        </div>
        <div className='Right'>
          <Profile params={params}/>
        </div>
      </div>
      {/* <CustomFooter/> */}
    </div>
  )
};

export default App;