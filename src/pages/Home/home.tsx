import { useNavigate } from 'react-router-dom'
import './home-style'
import { CgGames } from 'react-icons/cg'
import * as Style from './home-style'

const Home = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/login')
    
  }

  return (
    <Style.Home>
      <Style.HomeTitle>Bem vindo ao Super Nintendo Retro</Style.HomeTitle>

      <Style.HomeSection>
        <Style.HomeDescription>Clique no controle para fazer o seu login</Style.HomeDescription>
        <Style.IconLog><CgGames onClick={handleNavigate}/></Style.IconLog>
      </Style.HomeSection>
    </Style.Home>
  )
}

export default Home