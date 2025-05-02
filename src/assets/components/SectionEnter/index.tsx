import { ContainerColumn, ContainerEnter, ContainerImage, ImageEnder, MainContainerEnter, MainContainerImage, MasterContainerEnter, TextContainer, TextInfo, TituloInfo } from "./style";

import foto01 from "../../images/foto01.png";
import foto02 from "../../images/foto02.png";
import foto03 from "../../images/foto03.png";
import foto04 from "../../images/foto04.png";
import foto05 from "../../images/foto05.png";
import comoAjudar from "../../images/comoAjudar.png";

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
                    <ContainerEnter backgroundcolor="#FFF1D6" height="848px" width="1302px">
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
                                height="848px"/>                               
                            </ContainerImage>
                        </ContainerColumn>
                    </ContainerEnter>
                </MainContainerEnter>
                
                <MainContainerEnter backgroundcolor="#023D69" height="720px">
                    <TextContainer alignitems="center">
                        <TituloInfo fontsize="72px" fontweight="700" color="#FFFFFF" textalign="center">O grupo pão com ovo<br/> 
                                        preza pela transparência<br/> 
                                            e honestidade
                        </TituloInfo>
                        <ContainerButton justifycontent="center" alignitems="center" paddingtop="40px">
                                <Button border="solid 2px #FFDF78" borderradius="24px" widthtotal="760px" heighttotal="99px" fontsize="30px" color="#263238" backgroundColor="#FFDF78">
                                Confira aqui a prestação de contas do projeto 
                                </Button>                                
                            </ContainerButton>                        
                    </TextContainer>
                </MainContainerEnter>
                <MainContainerEnter height="720px">
                    <ContainerEnter height="540.61px" width="1280.26px">
                    <ContainerColumn flexdirection="column">
                            <TextContainer alignitems="start">
                                <TituloInfo fontsize="68px" fontweight="400" color="#023D69" textalign="start">Como ajudar?</TituloInfo>
                                <TextInfo color="#023D69" fontfamily="Poppins" fontsize="28px" fontweight="400" textalign="start">
                                A nossa missão depende da generosidade e do apoio da comunidade. Existem várias maneiras pelas quais você pode fazer a diferença e nos ajudar a alcançar mais pessoas necessitadas. Sua contribuição é essencial para continuarmos a transformar vidas.
                                </TextInfo>
                            </TextContainer>
                            <ContainerButton justifycontent="start" alignitems="start" paddingright="128px">
                                <Button border="solid 2px #FFDF78" borderradius="24px" widthtotal="500px" heighttotal="99px" fontsize="40px" color="#0C3077" backgroundColor="#FFDF78">
                                Saiba como ajudar 
                                </Button>                                
                            </ContainerButton>
                            </ContainerColumn>
                            <ContainerColumn>
                            <ContainerImage gap="20px">
                                <ImageEnder src={comoAjudar} width="564.26px"
                                height="540.61px"/>                               
                            </ContainerImage>
                        </ContainerColumn>
                    </ContainerEnter>
                </MainContainerEnter>
                    
            </MasterContainerEnter>
        </>
    );
}
export default SectionEnter;