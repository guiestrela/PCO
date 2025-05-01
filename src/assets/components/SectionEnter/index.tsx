import { ContainerColumn, ContainerImage, ImageEnder, MainContainerEnter, MainContainerImage, MasterContainerEnter, TextContainer, TextInfo, TituloInfo } from "./style";

import foto01 from "../../images/foto01.png";
import foto02 from "../../images/foto02.png";
import foto03 from "../../images/foto03.png";
import foto04 from "../../images/foto04.png";
import { Button, ContainerButton } from "../Button/style";

function SectionEnter() {
    return (
        <>
            <MasterContainerEnter>

                <MainContainerEnter backgroundcolor="#023D69">
                        <TextContainer>
                            <TituloInfo fontsize="68px" fontweight="400" color="#FFFFFF">Você faz a diferença!</TituloInfo>
                            <TextInfo color="#FFFFFF" fontfamily="Poppins" fontsize="50px" fontweight="500">
                                Veja como sua doação é convertida<br/> em solidariedade
                            </TextInfo>
                        </TextContainer> 
                    <ContainerColumn>                      
                        <MainContainerImage>
                            <ContainerImage gap="13px">
                                <ImageEnder src={foto01} width="500px"
                                height="334px"/>
                                <ImageEnder />
                                <ImageEnder src={foto02} width="500px" height="627px"/>
                                <ImageEnder />
                            </ContainerImage>                        
                        </MainContainerImage> 

                        <MainContainerImage>
                            <ContainerImage gap="20px">
                                <ImageEnder src={foto03} width="760px"
                                height="467px"/>
                                <ImageEnder />
                                <ImageEnder src={foto04} width="760px" height="467px"/>
                                <ImageEnder />
                            </ContainerImage>
                        </MainContainerImage>  
                    </ContainerColumn>
                    <ContainerButton flexdirection="column" justifycontent="center" paddingtop="80px" paddingbottom="70px" gap="40px">
                        <Button border="solid 2px #023D69" borderradius="12px" widthtotal="543px" heighttotal="66px" fontsize="40px" color="#0C3077">
                            Acompanhe nossas ações
                        </Button>
                        <Button border="solid 2px #023D69" borderradius="12px" widthtotal="543px" heighttotal="66px" fontsize="40px" color="#0C3077">
                            Seja um voluntário
                        </Button>
                    </ContainerButton>
                </MainContainerEnter>
                    
            </MasterContainerEnter>
        </>
    );
}
export default SectionEnter;