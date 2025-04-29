import { BannerContainer, BannerImage, BannerTextContainer, Button, ContainerButton, ImageContainer, MainContainer, MainContainerButton, TextContainer } from "./style";

import ImageBanner from "../../images/fotoBanner01.png";

function Banner() {
    return (
        <>
        <MainContainer>
            <BannerContainer>        
                <ImageContainer>
                    <BannerTextContainer>
                        <TextContainer>
                            No fluxo da vida,<br/> 
                            toda hora você<br/> recebe e doa.
                        </TextContainer>
                        <ContainerButton paddingtop="20px">
                            <Button borderradius="15px" border="none" widthtotal="240px" heighttotal="54px" fontsize="22px" color="#023D69"  onClick={function (): void {
                                    throw new Error("Function not implemented.");
                                } }>apoie o projeto</Button>
                        </ContainerButton>
                    </BannerTextContainer>
                    <BannerImage  src={ImageBanner} alt="Banner" />
                </ImageContainer>                     
            </BannerContainer>              
        </MainContainer>  
        <MainContainerButton>
                <ContainerButton flex={1} paddingleft="80px" justifycontent="flex-start">
                    <Button borderradius="15px" border="solid 3px #023D69" widthtotal="500px" 
                    heighttotal="86px" fontsize="22px" 
                    backgroundColor="transparent" color="#023D69"
                    
                    onClick={function (): void {
                            throw new Error("Function not implemented.");
                        } }>confira as datas das próximas ações
                    </Button>
                </ContainerButton>
                <ContainerButton flex={1} paddingright="80px" justifycontent="flex-end">
                    <Button borderradius="15px" border="solid 3px #023D69" widthtotal="500px" 
                    heighttotal="86px" fontsize="22px"
                    backgroundColor="transparent" color="#023D69"  
                    onClick={function (): void {
                            throw new Error("Function not implemented.");
                        } }>acompanhe as ações no instagram
                    </Button>
                </ContainerButton>
            </MainContainerButton>                  
        </>
    );
}
export default Banner;