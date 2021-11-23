import confirm from '../../../core/utils/confirm'
import info from '../../../core/utils/infor'
import Logo from '../../components/logo'
import Navbar from '../../components/NavBar'
import SessionController from '../../components/SessionController'
import * as DL from './Default.layout.styles'


interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout (props: DefaultLayoutProps) {


  return <DL.Wrapper>
    <DL.Header>
      <Logo />
    </DL.Header>
    <DL.Main>
      <DL.Navigation>
        <Navbar />
      </DL.Navigation>
      <DL.FeaturedContent>
        {props.children}
      </DL.FeaturedContent>
      <DL.Aside>
        <SessionController  
          name = 'Logan'
          description = 'dog desde sempre'
          onLogout = { ()=> {
            confirm({
              title: 'Deseja realmente sair?',
              onConfirm: () => {
                info({
                  title: 'Você foi deslogado',
                  description: 'Você será redirecionado para a página de login'
                })
              },
            })
          }}
        />
      </DL.Aside>
    </DL.Main>
  </DL.Wrapper>
}

export default DefaultLayout