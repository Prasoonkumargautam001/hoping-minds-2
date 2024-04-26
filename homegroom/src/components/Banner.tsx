import styled from "styled-components";
import { bannerData } from "../Store/Data";
import { ContentBox } from "./Navbar";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh;
gap: 70px;
  align-items: center;
`;
const BannerLeft = styled.div`
display: flex;
align-items: center;
flex-direction: column;

`;
const BannerRight = styled.div`


padding: 100px 0;
:nth-child(2){
    flex-direction: row;

}

`;
const BannerText = styled.div`
  h1 {
    font-size: 49px;
    margin-bottom: 10px;
    width: 200px;
  }
  p {
    text-align: left;
    width: 450px;
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 30px;
  }
`;
const Button = styled.a`
  padding: 10px 16px;
  background-color: black;
  border-radius: 8px;

  color: white;
`;
const Wrapper = styled.div`
  margin-top: -12vh;
  background: #474bff;
  background: -webkit-linear-gradient(0deg, #474bff 0%, #bc48ff 100%);
  background: linear-gradient(0deg, #474bff 0%, #bc48ff 100%);
  height: 100vh;
  width: 100vw;
`;
const ImageBox = styled.div`
margin: 10px;
display: flex;
flex-direction: row-reverse;    
`
const Image = styled.img`
max-width: 270px;
object-fit: cover;
height: 155px;
border-radius: 20px;
    
`

const Banner = () => {
  const { buttonData, desc, heading } = bannerData;
  return (
    <Wrapper>
      <ContentBox>
        <Container>
          <BannerLeft>
            <BannerText>
              <h1>{heading}</h1>
              <p>{desc}</p>
              <Button href={buttonData.buttonUrl}>
                {buttonData.buttonText}
              </Button>
            </BannerText>
          </BannerLeft>
          <BannerRight>
            {
                bannerData.images.map((img,i)=>(
                    <ImageBox key={i}>
                    <Image src={img} alt="" />
                    </ImageBox>
                ))
            }
          
                
                                
                            

            
            
          </BannerRight>
        </Container>
      </ContentBox>
    </Wrapper>
  );
};

export default Banner;
