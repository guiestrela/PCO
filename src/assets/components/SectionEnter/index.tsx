import { DivContainerText, DivFlex, TitleH2, Text, DivFlexImage, Img, ContainerButton, Button } from "../../../uiKit";

import foto01 from "../../images/foto01.png"
import foto02 from "../../images/foto02.png"
import foto03 from "../../images/foto03.png"
import foto04 from "../../images/foto04.png"
import mapaBrasil from "../../images/acoesBrasil.png"
import foto05 from "../../images/foto05.png"



function SectionEnter() {
    return(
        <>
            <DivFlex width="100%" alignitems="center" justifycontent="center">
                <DivFlex width="1440px" height="100%" justifycontent="center" alignitems="center" flexdirection="column" backgroundColor="#023D69" paddingTotal="80px" paddingTotalmob="20px">
                    <DivContainerText justifycontent="center" alignitems="center" flexdirection="column">
                        <TitleH2 fontsize="68px" fontweight="400" color="#FFFFFF" fontsizemob="50px">
                            Você faz a diferença!
                        </TitleH2>
                        <Text fontsize="50px" fontweight="500" color="#FFFFFF" textalign="center" paddingtop="20px" paddingbottom="30px"
                        fontsizemob="30px">
                            Veja como sua doação é convertida<br/> em <strong>solidariedade</strong>
                        </Text>                        
                    </DivContainerText>
                    <DivFlex alignitems="center" justifycontent="center" flexdirection="row" gap="20px" flexdirectionmob="column">
                        <DivFlexImage alignitems="center" justifycontent="center" flexdirection="column" gap="25px">
                            <Img src={foto01}/>
                            <Img src={foto02}/>
                        </DivFlexImage>
                        <DivFlexImage alignitems="center" justifycontent="center" flexdirection="column" gap="13px">
                            <Img src={foto03}/>
                            <Img src={foto04}/>                            
                        </DivFlexImage>
                    </DivFlex>
                    <ContainerButton alignitems="center" justifycontent="center" flexdirection="column" paddingtop="50px">
                        <Button width="100%" height="66px" alignitems="center" justifycontent="center" borderradius="12px" border="2px solid #FFFFFF" backgroundColor="#FFFFFF" marginbotton="40px" fontsize="40px" fontweight="400" color="#0C3077" 
                        fontsizemob="30px" onClick={function (): void {
                            throw new Error("Function not implemented.");
                        } }>
                            Acompanhe nossas ações
                        </Button>
                        <Button width="100%" height="66px" alignitems="center" justifycontent="center" borderradius="12px" border="2px solid #FFFFFF" backgroundColor="#FFFFFF" fontsize="40px" fontweight="400" color="#0C3077" fontsizemob="30px" onClick={function (): void {
                            throw new Error("Function not implemented.");
                        } }>
                            Seja um voluntário
                        </Button>
                    </ContainerButton>
                </DivFlex>
            </DivFlex>
            <DivFlex width="100%" alignitems="center" justifycontent="center">
                <DivFlex width="1440px" height="100%" justifycontent="center" alignitems="center" flexdirection="column" backgroundColor="#FFFFFF" paddingTotal="80px" paddingTotalmob="20px">
                    <DivContainerText justifycontent="center" alignitems="center" flexdirection="column">
                        <TitleH2 fontsize="68px" fontweight="400" color="#FABD47" fontsizemob="50px">
                            Locais que já realizamos<br/> ações
                        </TitleH2>    
                        <DivFlexImage alignitems="center" justifycontent="center" flexdirection="column" gap="25px">
                            <Img src={mapaBrasil}/>                            
                        </DivFlexImage>                                           
                    </DivContainerText>
                </DivFlex>
            </DivFlex>

            <DivFlex width="100%" alignitems="center" justifycontent="center">
                <DivFlex width="1440px" justifycontent="center" alignitems="center"  backgroundColor="#FFFFFF"  paddingTotalmob="20px" flexdirectionmob="column">
                        <DivFlex justifycontent="center" alignitems="center" backgroundColor="#FFF1D6"
                        flexdirectionmob="column">
                            <DivContainerText justifycontent="start" alignitems="start" flexdirection="column" paddingTotal="20px" flexdirectionmob="column"
                            justifycontentmob="center" alignitemsmob="center"
                            >
                                <TitleH2 fontsize="68px" fontweight="400" color="#023D69" fontsizemob="70px" textalign="start" textalignmob="center">
                                O Exemplo<br/> Arrasta
                                </TitleH2>
                                <Text fontsize="28px" fontweight="400" color="#023D69" textalign="start" paddingtop="20px" paddingbottom="30px"
                                fontsizemob="30px">
                                Participou de alguma ação conosco?<br/> 
                                Compartilhe com a #PaocomOvoDF<br/> e marque o nosso Instagram<br/> @paocomovodf
                                </Text>
                            <ContainerButton alignitems="center" justifycontent="center" flexdirection="column" paddingtop="50px">
                                <Button width="100%" height="66px" alignitems="center" justifycontent="center" borderradius="12px" border="2px solid #FFDF78" backgroundColor="#FFDF78" marginbotton="40px" fontsize="30px" fontweight="400" color="#0C3077" 
                                fontsizemob="30px" padding="0 20px" onClick={function (): void {
                                throw new Error("Function not implemented.");
                                } }>
                                Siga nosso Instagram! 
                                </Button>                        
                            </ContainerButton>                        
                        </DivContainerText>
                        <DivFlexImage  alignitems="center" justifycontent="center">
                            <Img src={foto05}/>                            
                        </DivFlexImage>                             
                    </DivFlex>                                            
                </DivFlex>

            </DivFlex>
        </>
    )
}

export default SectionEnter;