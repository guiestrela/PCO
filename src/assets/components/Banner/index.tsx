import { BannerContainer, BannerImage, BannerTextContainer, ImageContainer, MainContainer,  TextContainer } from "./style";

import { Button, ContainerButton } from "../Button/style";

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
        </>
    );
}
export default Banner;