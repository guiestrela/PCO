import { Button, ContainerButton, DivContainerText, DivFlex, Title, Text, TitleH2, DivFlexImage, Img } from "../../../uiKit";

import comoAjudar from "../../images/comoAjudar.png"

function SectionAud() {
    return(
        <>
            <DivFlex width="100%" alignitems="center" justifycontent="center">
                <DivFlex width="1440px" height="100%" justifycontent="center" alignitems="center" flexdirection="column" backgroundColor="#023D69" paddingTotal="80px" paddingTotalmob="20px">
                    <DivContainerText justifycontent="center" alignitems="center" flexdirection="column">
                        <Title fontsize="72px" fontweight="700" color="#FFFFFF" fontsizemob="50px">
                            O grupo pão com ovo<br/> 
                            preza pela transparência<br/> 
                            e honestidade
                        </Title>                                                                
                    </DivContainerText>
                    <ContainerButton alignitems="center" justifycontent="center" flexdirection="column" paddingtop="50px">
                        <Button width="100%" height="66px" alignitems="center" justifycontent="center" borderradius="12px" border="2px solid #FFDF78" backgroundColor="#FFDF78" marginbotton="40px" fontsize="30px" fontweight="600" color="#0C3077" 
                        fontsizemob="15px" padding="0 20px" onClick={function (): void {
                        throw new Error("Function not implemented.");
                        } }>
                            Confira aqui a prestação de contas do projeto 
                        </Button>                        
                    </ContainerButton> 
                </DivFlex>
            </DivFlex>

            <DivFlex width="100%" alignitems="center" justifycontent="center">
                <DivFlex width="1440px" height="100%" justifycontent="center" alignitems="center" backgroundColor="#FFFFFF" paddingTotal="80px 0 80px 0" paddingTotalmob="20px" flexdirectionmob="column">
                    <DivFlex flexdirection="column" justifycontent="start" alignitems="start" alignitemsmob="center">
                        <DivContainerText justifycontent="start" alignitems="start" flexdirection="column">
                            <TitleH2 fontsize="72px" fontweight="700" color="#0C3077" fontsizemob="60px" textalign="start"
                            paddingbottommob="20px">
                                Como ajudar?
                            </TitleH2> 
                            <Text fontsize="28px" fontweight="400" color="#0C3077" fontsizemob="28px" textalign="start">
                                A nossa missão depende da generosidade e do<br/>
                                apoio da comunidade. Existem várias maneiras<br/> 
                                pelas quais você pode fazer a diferença e nos<br/> 
                                ajudar a alcançar mais pessoas necessitadas.<br/> 
                                Sua contribuição é essencial para<br/>
                                continuarmos a transformar vidas.
                            </Text>                                                               
                        </DivContainerText>
                        <ContainerButton alignitems="start" justifycontent="center" paddingtop="50px" alignitemsmob="center">
                            <Button width="100%" height="66px" alignitems="center" justifycontent="center" borderradius="12px" border="2px solid #FFDF78" backgroundColor="#FFDF78" marginbotton="40px" fontsize="30px" fontweight="600" color="#0055A5" 
                            fontsizemob="38.8px" padding="0 20px" onClick={function (): void {
                            throw new Error("Function not implemented.");
                            } }>
                            Saiba como ajudar 
                            </Button>                        
                        </ContainerButton>
                    </DivFlex>
                    <DivFlex>
                        <DivFlexImage alignitems="center" justifycontent="center" flexdirection="column" gap="25px">
                            <Img src={comoAjudar}/>                            
                        </DivFlexImage>
                    </DivFlex>                    
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default SectionAud;