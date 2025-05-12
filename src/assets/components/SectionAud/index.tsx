import { Button, ContainerButton, DivContainerText, DivFlex, Title } from "../../../uiKit";

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
        </>
    )
}

export default SectionAud;