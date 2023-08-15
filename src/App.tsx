import Header from './components/header'
import './App.css'

const navItems = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Contact',
    url: '/contact'
  }
]

function App() {

  return (
    <>
      <Header navItems={navItems} currentUrl='/'/>
    </>
  )
}

export default App
