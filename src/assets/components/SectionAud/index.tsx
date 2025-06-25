import { 
    Button, 
    ContainerButton, 
    DivContainerText, 
    DivFlex, 
    Title, 
    Text, 
    TitleH2, 
    DivFlexImage, 
    Img } 
    from "../../../uiKit";

import comoAjudar from "../../images/comoAjudar.png"
import fotoElipise from "../../images/fotoEllipse.png"
import facaParte from "../../images/facaParte.png"
import whatsApp from "../../images/whatsapps.png"
import whatsIcon from "../../icons/whatsaapIconButton.svg"

function SectionAud() {
    return(
        <>
            <DivFlex 
                width="100%" 
                alignitems="center" 
                justifycontent="center">
                <DivFlex 
                    width="1440px" 
                    height="100%" 
                    justifycontent="center" 
                    alignitems="center" 
                    flexdirection="column" 
                    backgroundColor="#023D69" 
                    paddingTotal="80px" 
                    paddingTotalmob="20px">
                    <DivContainerText 
                        justifycontent="center" 
                        alignitems="center" 
                        flexdirection="column">
                        <Title 
                            fontsize="72px" 
                            fontweight="700" 
                            color="#FFFFFF" 
                            fontsizemob="50px"
                            paddingleftmob="20px" 
                            paddingrightmob="20px">
                            O grupo pão com ovo<br/> 
                            preza pela transparência<br/> 
                            e honestidade
                        </Title>                                                                
                    </DivContainerText>
                    <ContainerButton 
                        alignitems="center" 
                        justifycontent="center" 
                        flexdirection="column" 
                        paddingtop="50px">
                        <Button 
                            width="100%" 
                            height="66px" 
                            alignitems="center" 
                            justifycontent="center" 
                            borderradius="12px" 
                            border="2px solid #FFDF78" 
                            backgroundColor="#FFDF78" 
                            marginbotton="40px" 
                            fontsize="30px" 
                            fontweight="600" 
                            color="#0C3077" 
                            fontsizemob="15px" 
                            padding="0 20px" 
                            onClick={function (): void {
                            throw new Error("Function not implemented.");
                            } }>
                            Confira aqui a prestação de contas do projeto 
                        </Button>                        
                    </ContainerButton> 
                </DivFlex>
            </DivFlex>

            <DivFlex 
                width="100%" 
                alignitems="center" 
                justifycontent="center"
                
            >
                <DivFlex 
                    width="1440px" 
                    height="100%" 
                    justifycontent="center" 
                    alignitems="center" 
                    backgroundColor="#FFFFFF" 
                    paddingTotal="80px 0 80px 0" 
                    paddingTotalmob="20px" 
                    flexdirectionmob="column">
                    <DivFlex 
                        flexdirection="column" 
                        justifycontent="start"  
                        alignitems="start" 
                        alignitemsmob="center">
                        <DivContainerText 
                            justifycontent="start" 
                            alignitems="start" 
                            flexdirection="column">
                            <TitleH2 
                                fontsize="72px" 
                                fontweight="700" 
                                color="#0C3077" 
                                fontsizemob="60px" 
                                textalign="start"
                                paddingbottommob="20px"
                                paddingleftmob="20px" 
                                paddingrightmob="20px">
                                Como ajudar?
                            </TitleH2> 
                            <Text 
                                fontsize="28px" 
                                fontweight="400" 
                                color="#0C3077" 
                                fontsizemob="28px" 
                                textalign="start"
                                paddingleftmob="20px" 
                                paddingrightmob="20px">
                                A nossa missão depende da generosidade e do<br/>
                                apoio da comunidade. Existem várias maneiras<br/> 
                                pelas quais você pode fazer a diferença e nos<br/> 
                                ajudar a alcançar mais pessoas necessitadas.<br/> 
                                Sua contribuição é essencial para<br/>
                                continuarmos a transformar vidas.
                            </Text>                                                               
                        </DivContainerText>
                        <ContainerButton 
                            alignitems="start" 
                            justifycontent="center" 
                            paddingtop="50px" 
                            alignitemsmob="center">
                            <Button 
                                width="100%" 
                                height="66px" 
                                alignitems="center" 
                                justifycontent="center" 
                                borderradius="12px" 
                                border="2px solid #FFDF78" 
                                backgroundColor="#FFDF78" 
                                marginbotton="40px" 
                                fontsize="30px" 
                                fontweight="600" 
                                color="#0055A5" 
                                fontsizemob="38.8px" 
                                padding="0 20px" 
                                onClick={function (): void {
                                throw new Error("Function not implemented.");
                                } }>
                                Saiba como ajudar 
                            </Button>                        
                        </ContainerButton>
                    </DivFlex>
                    <DivFlex>
                        <DivFlexImage 
                            alignitems="center" 
                            justifycontent="center" 
                            flexdirection="column" 
                            gap="25px">
                            <Img src={comoAjudar}/>                            
                        </DivFlexImage>
                    </DivFlex>                    
                </DivFlex>
            </DivFlex>

            <DivFlex 
                width="100%" 
                alignitems="center" 
                justifycontent="center"
                backgroundimage="linear-gradient(to right,  #023D69, #0055A5 30%,  #F5C766 80%); "
            >
                <DivFlex 
                    width="1440px" 
                    height="100%" 
                    justifycontent="center" 
                    alignitems="center" 
                    backgroundColor="#FFFFFF" 
                    paddingTotal="80px 0 80px 0" 
                    paddingTotalmob="20px" 
                    flexdirectionmob="column">                    
                    <DivFlex>
                        <DivFlexImage 
                            alignitems="center" 
                            justifycontent="center" 
                            flexdirection="column" 
                            gap="25px" 
                            paddingright="20px" 
                            paddingbottommob="40px">
                            <Img src={fotoElipise}/>                            
                        </DivFlexImage>
                    </DivFlex>   
                    <DivFlex 
                        flexdirection="column" 
                        justifycontent="start" 
                        alignitems="start" 
                        alignitemsmob="center">
                        <DivContainerText 
                            justifycontent="start" 
                            alignitems="start" 
                            flexdirection="column">
                            <TitleH2 
                                fontsize="68px" 
                                fontweight="400" 
                                color="#0C3077" 
                                fontsizemob="45px" 
                                textalign="start"
                                paddingbottommob="20px"
                                paddingleftmob="20px" 
                                paddingrightmob="20px">
                                O Projeto Pão com Ovo<br/> 
                                teve um crescimento de<br/> 
                                567% ao longo dos anos
                            </TitleH2> 
                            <Text 
                                fontsize="28px" 
                                fontweight="400" 
                                color="#0C3077" 
                                fontsizemob="28px" 
                                textalign="start"
                                paddingleftmob="20px" 
                                paddingrightmob="20px">
                                Queremos continuar crescendo e impactando ainda<br/> 
                                mais vidas, mas para isso precisamos da ajuda de<br/>
                                doadores e voluntários. Sua contribuição é<br/>
                                fundamental para que possamos expandir nossos<br/> 
                                serviços e alcançar mais pessoas necessitadas. Junte<br/>
                                -se a nós e faça parte dessa transformação!
                            </Text>                                                               
                        </DivContainerText>
                        <ContainerButton 
                            alignitems="start" 
                            justifycontent="center" 
                            paddingtop="50px" 
                            alignitemsmob="center">
                            <Button 
                                width="100%" 
                                height="66px" 
                                alignitems="center" 
                                justifycontent="center" 
                                borderradius="12px" 
                                border="2px solid #FFDF78" 
                                backgroundColor="#FFDF78" 
                                marginbotton="40px" 
                                fontsize="28px" 
                                fontweight="400" 
                                color="#021639" 
                                fontsizemob="22px" 
                                padding="0 20px" 
                                onClick={function (): void {
                                throw new Error("Function not implemented.");
                                } }>
                                Acompanhe a evolução do projeto 
                            </Button>                        
                        </ContainerButton>
                    </DivFlex>                 
                </DivFlex>
            </DivFlex>

            <DivFlex 
                width="100%" 
                alignitems="center" 
                justifycontent="center">
                <DivFlex 
                    width="1440px" 
                    height="100%" 
                    justifycontent="center" 
                    alignitems="center" 
                    backgroundColor="#FFDF66" 
                    paddingTotal="80px 0 0 0" 
                    paddingTotalmob="20px" 
                    flexdirectionmob="column">
                    <DivFlex 
                        flexdirection="column" 
                        justifycontent="start" 
                        alignitems="start" 
                        alignitemsmob="center">
                        <DivContainerText 
                            justifycontent="start" 
                            alignitems="start" 
                            flexdirection="column" 
                            paddingright="80px">
                            <TitleH2 
                                fontsize="88px" 
                                fontweight="700" 
                                color="#0C3077" 
                                fontsizemob="57px" 
                                textalign="start" 
                                paddingbottommob="42px" 
                                paddingleftmob="20px" 
                                paddingrightmob="20px" 
                                textalignmob="center">
                                Faça parte do<br/> 
                                projeto e<br/> 
                                transforme a vida<br/> 
                                de centenas de<br/> 
                                pessoas
                            </TitleH2>                                                                                         
                        </DivContainerText>
                        <ContainerButton 
                            alignitems="start" 
                            justifycontent="center" 
                            paddingtop="50px" 
                            alignitemsmob="center">
                            <Button 
                                width="100%" 
                                height="66px" 
                                alignitems="center" 
                                justifycontent="center" 
                                borderradius="12px" 
                                border="2px solid #023D69" 
                                backgroundColor="#023D69" 
                                marginbotton="40px" 
                                fontsize="30px" 
                                fontweight="600" 
                                color="#FFFFFF" 
                                fontsizemob="34px" 
                                padding="0 20px" 
                                onClick={function (): void {
                                throw new Error("Function not implemented.");
                                } }>
                                Quero ser um doador 
                            </Button>                        
                        </ContainerButton>
                    </DivFlex>
                    <DivFlex 
                        flexdirection="column" 
                        alignitems="end"    
                        justifycontent="start"  
                        paddingbottom="250px" 
                        paddingbottommob="20px">
                        <DivFlexImage 
                            widthTotal="90%" >
                            <Img src={facaParte}/>                            
                        </DivFlexImage>
                    </DivFlex>                    
                </DivFlex>                
            </DivFlex>

            <DivFlex 
                width="100%" 
                alignitems="center" 
                justifycontent="center">
                <DivFlex 
                    width="1440px" 
                    height="100%" 
                    justifycontent="center" 
                    alignitems="center" 
                    backgroundColor="#FFFFFF" 
                    paddingTotal="80px 0 80px 0" 
                    paddingTotalmob="20px" 
                    flexdirectionmob="column">                    
                    <DivFlex>
                        <DivFlexImage 
                            alignitems="center" 
                            justifycontent="center" 
                            gap="25px" 
                            paddingright="20px" 
                            paddingbottommob="40px">
                            <Img src={whatsApp}/>                            
                        </DivFlexImage>
                    </DivFlex>   
                    <DivFlex 
                        flexdirection="column" 
                        justifycontent="start" 
                        alignitems="start" 
                        alignitemsmob="center" 
                        paddingleft="60px" 
                        justifycontentmob="center" 
                        paddingTotal="20px">
                        <DivContainerText 
                            justifycontent="start" 
                            alignitems="start" 
                            flexdirection="column">
                            <TitleH2 
                                fontsize="88px" 
                                fontweight="400" 
                                color="#0C3077" 
                                fontsizemob="45px" 
                                textalign="start"
                                paddingbottommob="20px"
                                paddingleftmob="20px" 
                                paddingrightmob="20px">
                                Mantenha-se<br/>
                                atualizado!
                            </TitleH2>                                                                                       
                        </DivContainerText>
                        <ContainerButton 
                            alignitems="start" 
                            justifycontent="start" 
                            paddingtop="50px" 
                            alignitemsmob="center" 
                            justifycontentmob="center">
                            <Button 
                                width="100%" 
                                height="104px" 
                                alignitems="center" 
                                justifycontent="end" 
                                borderradius="12px" 
                                textalign="start" 
                                border="2px solid #023D69" 
                                backgroundColor="#023D69" 
                                marginbotton="40px" 
                                fontsize="28px" 
                                fontweight="400" 
                                color="#FFFFFF" 
                                gap="40px"
                                fontsizemob="15px" 
                                padding="0 20px" 
                                onClick={function (): void {
                                throw new Error("Function not implemented.");
                                } }>
                                <img src={whatsIcon} alt="whatsappp" />Faça parte do grupo<br/> de Whatsapp! 
                            </Button>                        
                        </ContainerButton>
                    </DivFlex>                 
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default SectionAud;