import { 
    Button, 
    ContainerButton, 
    DivFlex } 
    from "../../../uiKit";

function SectionButton() {
    return (
        <>            
            <DivFlex 
                width="100%" 
                height="100%" 
                alignitems="center" 
                justifycontent="center">                
                <DivFlex 
                    width="1440px" 
                    height="100%"  
                    justifycontent="center" 
                    alignitems="center" 
                    backgroundColor="#FFFFFF" 
                    paddingTotal="80px" 
                    flexdirectionmob="column" 
                    justifycontentmob="center" 
                    alignitemsmob="center" 
                    gap="10px" 
                    paddingTotalmob="20px 20px">
                <ContainerButton 
                    width="100%" 
                    justifycontent="space-between" 
                    alignitems="center" 
                    flexdirectionmob="column" 
                    gapmob="30px" 
                    gap="300px">
                    <Button 
                        justifycontent="center" 
                        alignitems="center" 
                        borderradius="15px" 
                        border="solid 3px #023D69" 
                        width="100%" 
                        height="86px" 
                        fontsize="18px" 
                        backgroundColor="transparent" 
                        color="#023D69" 
                        widthmob="100%"                                        
                        onClick={function (): void {
                            throw new Error("Function not implemented.");
                        } }>confira as datas das próximas ações
                    </Button>
                    <Button  
                        justifycontent="center" 
                        alignitems="center" 
                        borderradius="15px" 
                        border="solid 3px #023D69" 
                        width="100%" 
                        height="86px"
                        fontsize="18px" 
                        backgroundColor="transparent" 
                        color="#023D69" 
                        widthmob="100%" 
                        onClick={function (): void {
                            throw new Error("Function not implemented.");
                        } }>acompanhe as ações no instagram
                    </Button>
                </ContainerButton>                
                </DivFlex>                
            </DivFlex>                  
        </>
    )
}
export default SectionButton;