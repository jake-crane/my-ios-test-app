import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyModal from './MyModal'
import loremIpsum from './lorem-ipsum'

function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="App">
      {showModal && (
        <MyModal
          achTextAgreement={loremIpsum}
          toggle={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

export default App
