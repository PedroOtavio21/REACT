import Profile from "./components/Profile"
import './styles/globals.css'
import profileImg from './assets/images/urameshi.jpg'

export default function App(){
  return (
    <div className="app">
      <Profile 
        avatar={profileImg}
        name='Pedro Otávio'
        bio='Desenvolvedor Fullstack JavaScript'
        phone='(85) 981043088'
        email='pedrootavio.bezerra14@gmail.com'
        githubUrl='teste@email.com'
        linkedinUrl='teste@email.com'
        twitterUrl='teste@email.com'
        />
    </div>
  )
}