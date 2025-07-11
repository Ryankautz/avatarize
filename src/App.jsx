import CustomHeader from './components/CustomHeader/CustomHeader.jsx'
import './App.css'
import Filtro from './components/Filtro/Filtro.jsx'
import Resultado from './components/Resultado/Resultado.jsx'

function App() {
  
  return (
    <div className='Page'>
      <CustomHeader/>
      <div className='Content'>
        <div className='Left'>
          <Filtro/>
        </div>
        <div className='Right'>
          <Profile/>
        </div>
      </div>
      {/* <CustomFooter/> */}
    </div>
  )
}

export default App;