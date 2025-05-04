import { ContainerColumn, ContainerEnter, ContainerImage, ImageEnder, MainContainerEnter, MainContainerImage, MasterContainerEnter, TextContainer, TextInfo, TituloInfo } from "./style";

import foto01 from "../../images/foto01.png";
import foto02 from "../../images/foto02.png";
import foto03 from "../../images/foto03.png";
import foto04 from "../../images/foto04.png";
import foto05 from "../../images/foto05.png";
import comoAjudar from "../../images/comoAjudar.png";
import fotoElipse from "../../images/fotoEllipse.png";
import facaParte from "../../images/facaParte.png";
import whatsapp from "../../images/whatsapps.png";
import whatsappIcon from "../../icons/whatsaapIconButton.svg";


import { Button, ContainerButton } from "../Button/style";

function SectionEnter() {
    return (
        <>
            <MasterContainerEnter>
                <MainContainerEnter backgroundcolor="#023D69" heightmob="2650px">
                        <TextContainer paddingtop="80px">
                            <TituloInfo fontsize="68px" fontweight="400" color="#FFFFFF">Você faz a diferença!</TituloInfo>
                            <TextInfo color="#FFFFFF" fontfamily="Poppins" fontsize="50px" fontweight="500">
                                Veja como sua doação é convertida<br/> em solidariedade
                            </TextInfo>
                        </TextContainer> 
                    <ContainerColumn flexdirectionmob="column">                      
                        <MainContainerImage>
                            <ContainerImage gap="13px">
                                <ImageEnder src={foto01} width="500px"
                                />
                                <ImageEnder src={foto02} width="500px" />
                            </ContainerImage>                        
                        </MainContainerImage> 

                        <MainContainerImage>
                            <ContainerImage gap="5px">
                                <ImageEnder src={foto03} width="760px"
                                />
                                <ImageEnder src={foto04} width="760px" />
                            </ContainerImage>
                        </MainContainerImage>  
                    </ContainerColumn>
                    <ContainerButton flexdirection="column" justifycontent="center" paddingtop="80px" paddingbottom="70px" gap="40px" alignitems="center">
                        <Button border="solid 2px #023D69" borderradius="12px" widthtotal="543px" heighttotal="66px" fontsize="40px" color="#0C3077">
                            Acompanhe nossas ações
                        </Button>
                        <Button border="solid 2px #023D69" borderradius="12px" widthtotal="543px" heighttotal="66px" fontsize="40px" color="#0C3077">
                            Seja um voluntário
                        </Button>
                    </ContainerButton>
                </MainContainerEnter>
                
                <MainContainerEnter backgroundcolor="#FFFFFF" height="848px" heightmob="1400px">
                    <ContainerEnter backgroundcolor="#FFF1D6" height="848px" width="100%" >
                        <ContainerColumn flexdirection="column" >
                            <TextContainer alignitems="start" paddingleft="25px">
                                <TituloInfo fontsize="68px" fontweight="400" color="#023D69" textalign="start">O Exemplo <br/>Arrasta</TituloInfo>
                                <TextInfo color="#023D69" fontfamily="Poppins" fontsize="28px" fontweight="400" textalign="start">
                                Participou de alguma ação conosco? 
                                Compartilhe com a #PaocomOvoDF <br/>e marque o nosso Instagram @paocomovodf
                                </TextInfo>
                            </TextContainer>
                            <ContainerButton justifycontent="start" alignitems="start" paddingleft="20px">
                                <Button border="solid 2px #FFDF78" borderradius="12px" widthtotal="543px" heighttotal="66px" fontsize="40px" color="#0C3077" backgroundColor="#FFDF78">
                                Siga nosso Instagram! 
                                </Button>                                
                            </ContainerButton>
                            </ContainerColumn>
                            <ContainerColumn>
                            <ContainerImage gap="20px">
                                <ImageEnder src={foto05} width="722px"
                                height="100%"/>                               
                            </ContainerImage>
                        </ContainerColumn>
                    </ContainerEnter>
                </MainContainerEnter>
                
                <MainContainerEnter backgroundcolor="#023D69" height="720px" heightmob="900px">"
                    <TextContainer alignitems="center">
                        <TituloInfo fontsize="72px" fontweight="700" color="#FFFFFF" textalign="center">O grupo pão com ovo<br/> 
                                        preza pela transparência<br/> 
                                            e honestidade
                        </TituloInfo>
                        <ContainerButton justifycontent="center" alignitems="center" paddingtop="40px">
                                <Button border="solid 2px #FFDF78" borderradius="24px" widthtotal="760px" heighttotal="99px" fontsize="30px" color="#263238" backgroundColor="#FFDF78" fontsizemob="25px" widthtmob="500px">
                                Confira aqui a prestação de contas do projeto 
                                </Button>                                
                            </ContainerButton>                        
                    </TextContainer>
                </MainContainerEnter>

                <MainContainerEnter height="720px" heightmob="1300px">
                    <ContainerEnter height="540.61px" width="100%">
                        <ContainerColumn flexdirection="column">
                            <TextContainer alignitems="start" paddingleft="80px">
                                <TituloInfo fontsize="68px" fontweight="400" color="#023D69" textalign="start">Como ajudar?</TituloInfo>
                                <TextInfo color="#023D69" fontfamily="Poppins" fontsize="28px" fontweight="400" textalign="start">
                                A nossa missão depende da generosidade e do apoio da comunidade. Existem várias maneiras pelas quais você pode fazer a diferença e nos ajudar a alcançar mais pessoas necessitadas. Sua contribuição é essencial para continuarmos a transformar vidas.
                                </TextInfo>
                            </TextContainer>
                            <ContainerButton justifycontent="start" alignitems="start" paddingleft="80px">
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
                    
                <MainContainerEnter height="720px" heightmob="1300px">                    
                    <ContainerEnter height="599px" width="100%">
                        <ContainerColumn>
                            <ContainerImage >
                                <ImageEnder src={fotoElipse} width="500px"
                                height="500px"/>                               
                            </ContainerImage>
                        </ContainerColumn>
                        <ContainerColumn flexdirection="column">
                            <TextContainer alignitems="start" justifycontent="center" gap="25px" paddingright="80px">
                                <TituloInfo fontsize="58px" fontweight="400" color="#023D69" textalign="start">O Projeto Pão com Ovo<br/> teve um crescimento de<br/> 567% ao longo dos anos</TituloInfo>
                                <TextInfo color="#023D69" fontfamily="Poppins" fontsize="28px" fontweight="400" textalign="start">
                                Queremos continuar crescendo e impactando ainda mais vidas, mas para isso precisamos da ajuda de doadores e voluntários. Sua contribuição é fundamental para que possamos expandir nossos serviços e alcançar mais pessoas necessitadas. Junte-se a nós e faça parte dessa transformação!
                                </TextInfo>
                            </TextContainer>
                            <ContainerButton justifycontent="start" alignitems="start" paddingright="170px">
                                <Button border="solid 2px #EEC93D" borderradius="4px" widthtotal="500px" heighttotal="63px" fontsize="28px" color="#021639" backgroundColor="#EEC93D">
                                Acompanhe a evolução do projeto 
                                </Button>                                
                            </ContainerButton>
                        </ContainerColumn>                        
                    </ContainerEnter>
                </MainContainerEnter>

                <MainContainerEnter height="820px" backgroundcolor="#FFDF66" heightmob="1400px">
                    <ContainerEnter height="540.61px" width="100%">
                        <ContainerColumn flexdirection="column">
                            <TextContainer alignitems="start" paddingleft="80px">
                                <TituloInfo fontsize="77px" fontweight="700" color="#023D69" textalign="start">Faça parte<br/> do projeto e<br/> transforme a vida<br/> de centenas de <br/>pessoas                                
                                </TituloInfo>                                
                            </TextContainer>
                            <ContainerButton justifycontent="start" alignitems="start" paddingleft="80px" paddingtop="40px">
                                <Button border="solid 2px #023D69" borderradius="24px" widthtotal="500px" heighttotal="83px" fontsize="38px" color="#FFFFFF" backgroundColor="#023D69">
                                Quero ser um doador 
                                </Button>                                
                            </ContainerButton>
                            </ContainerColumn>
                            <ContainerColumn>
                            <ContainerImage gap="20px" paddingbottom="140px" paddingleft="40px">
                                <ImageEnder src={facaParte} width="564.26px"
                                height="540.61px"/>                               
                            </ContainerImage>
                        </ContainerColumn>
                    </ContainerEnter>
                </MainContainerEnter>

                <MainContainerEnter height="720px" heightmob="1300px">                    
                    <ContainerEnter height="599px" width="100%">
                        <ContainerColumn>
                            <ContainerImage >
                                <ImageEnder src={whatsapp} width="500px"
                                height="500px"/>                               
                            </ContainerImage>
                        </ContainerColumn>
                        <ContainerColumn flexdirection="column">
                            <TextContainer alignitems="start" justifycontent="center" gap="25px">
                                <TituloInfo fontsize="88px" fontweight="400" color="#0C3077" textalign="start">Mantenha-se 
                                atualizado!
                                </TituloInfo>                             
                            </TextContainer>
                            <ContainerButton justifycontent="start" alignitems="start"
                            paddingtop="40px">                          
                                <Button padding="0 5px 0 40px" textalign="center" alignitems="center" border="solid 2px #023D69" borderradius="15px" widthtotal="498px" heighttotal="104px" fontsize="28px" color="#FFFFFF" backgroundColor="#023D69">
                                <img src={whatsappIcon} alt=""/>
                                Faça parte do grupo de Whatsapp! 
                                </Button>                                
                            </ContainerButton>
                        </ContainerColumn>                        
                    </ContainerEnter>
                </MainContainerEnter>

            </MasterContainerEnter>
        </>
    );
}
export default SectionEnter;