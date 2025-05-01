import { ContainerColumn, ContainerEnter, ContainerImage, ImageEnder, MainContainerEnter, MainContainerImage, MasterContainerEnter, TextContainer, TextInfo, TituloInfo } from "./style";

import foto01 from "../../images/foto01.png";
import foto02 from "../../images/foto02.png";
import foto03 from "../../images/foto03.png";
import foto04 from "../../images/foto04.png";
import foto05 from "../../images/foto05.png";
import { Button, ContainerButton } from "../Button/style";

function SectionEnter() {
    return (
        <>
            <MasterContainerEnter>

                <MainContainerEnter backgroundcolor="#023D69">
                        <TextContainer paddingtop="80px">
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
                                <ImageEnder src={foto02} width="500px" height="627px"/>
                            </ContainerImage>                        
                        </MainContainerImage> 

                        <MainContainerImage>
                            <ContainerImage gap="20px">
                                <ImageEnder src={foto03} width="760px"
                                height="467px"/>
                                <ImageEnder src={foto04} width="760px" height="467px"/>
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
                <MainContainerEnter backgroundcolor="#FFFFFF" height="848px">
                    <ContainerEnter>
                        <ContainerColumn flexdirection="column">
                            <TextContainer alignitems="start" paddingleft="25px">
                                <TituloInfo fontsize="68px" fontweight="400" color="#023D69" textalign="start">O Exemplo <br/>Arrasta</TituloInfo>
                                <TextInfo color="#023D69" fontfamily="Poppins" fontsize="28px" fontweight="400" textalign="start">
                                Participou de alguma ação conosco? 
                                Compartilhe com a #PaocomOvoDF <br/>e marque o nosso Instagram @paocomovodf
                                </TextInfo>
                            </TextContainer>
                            <ContainerButton justifycontent="center" alignitems="start" >
                                <Button border="solid 2px #FFDF78" borderradius="12px" widthtotal="543px" heighttotal="66px" fontsize="40px" color="#0C3077" backgroundColor="#FFDF78">
                                Siga nosso Instagram! 
                                </Button>                                
                            </ContainerButton>
                            </ContainerColumn>
                            <ContainerColumn>
                            <ContainerImage gap="20px">
                                <ImageEnder src={foto05} width="722px"
                                height="845px"/>                               
                            </ContainerImage>
                        </ContainerColumn>
                    </ContainerEnter>
                </MainContainerEnter>
                    
            </MasterContainerEnter>
        </>
    );
}
export default SectionEnter;