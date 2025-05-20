import CustomHeader from './components/CustomHeader/CustomHeader.jsx'
import './App.css'
import Filtro from './components/Filtro.jsx'

function App() {
  

  return (
    <div className='Page'>
      <CustomHeader/>
      <div className='Content'>
        <div className='Left'>
          <Filtro/>
        </div>
        <div className='Right'>

        </div>
      </div>
      {/* <CustomFooter/> */}
    </div>
  )
}

export default App
