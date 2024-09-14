import React from 'react'
import Page1 from './Page/Page1'
import Page2 from './Page/Page2'
import Page3 from './Page/Page3'
import Page4 from './Page/Page4'
import Page5 from './Page/Page5'
import Page6 from './Page/Page6'
import Footer from './Footer/Footer'
import Heade from './Header/Heade'
import { DetaProvider } from './Context/SharedDeta'
import Page3a from './Page/Page3a'

const App = () => {
  return (
  
    <DetaProvider> 
    <Heade />
    <Page1 />
    <Page2 />
    <Page3 />
    <Page3a/>
    <Page4 />
    <Page5 />
    <Page6 />
    <Footer />
  </DetaProvider>
 
  

  
    
  )
}

export default App
