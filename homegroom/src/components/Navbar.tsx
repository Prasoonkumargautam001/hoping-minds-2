import styled from "styled-components"
import { INavMenu, navMenu } from "../Store/Data"
export const ContentBox = styled.div`
    max-width: 1200px;
    margin: auto;
`
 const Wrapper = styled.div`
position: sticky;
top: 10px;
left: 0;
width: 100%;
 `
const Container = styled.nav`
height: 85px;
background-color: white;
box-shadow: 10px 10px 10px #00000067;
padding: 20px;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: space-between;
    
`
const Logo = styled.h2`
    
`
const  MenuBar = styled.div`
    
`
const Menu = styled.a`
font-weight: 600;
margin: 0 20px;
&:hover{
    color: #646464;
}
    
`
const SignIn = styled.button`
    padding: 10px 20px;
border-radius: 8px;
font-weight: 600;
font-size: 16px;


background-color: #ec9f41;
&:hover{
    transform: scale(1.04);
    box-shadow: 10px 10px 10px  1px rgba(0,0,0,1 );
}

`

const Navbar = () => {
  return (
    <Wrapper>
        <ContentBox>
        <Container>
            <Logo>Home Groom</Logo>
            <MenuBar>
                {
                    navMenu.map((menu:INavMenu)=><Menu href={menu.url}>{menu.title}</Menu>)
                }
            <SignIn>SignIn</SignIn>
            </MenuBar>
        </Container>
        </ContentBox>
      
    </Wrapper>
  )
}

export default Navbar
