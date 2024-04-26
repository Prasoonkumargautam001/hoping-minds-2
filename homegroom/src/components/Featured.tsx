import styled from "styled-components"
import { ContentBox } from "./Navbar"

const Container = styled.div`
    
`
const Heading = styled.div`
    
`
const Featured = () => {
  return (
    <ContentBox>
        <Container>
            <Heading>
                <h1>Featured Service Offered</h1>
                <p>We provide best service by proving proffesional servents.</p>
            </Heading>
        </Container>

      
    </ContentBox>
  )
}

export default Featured
