import { Button, ContainerButton, DivFlex } from "../../../uiKit";

function SectionButton() {
    return (
        <>            
            <DivFlex width="100%" height="100%" alignitems="center" 
            justifycontent="center">
                <DivFlex width="100%" height="100%"  justifycontent="space-around" alignitems="center" backgroundColor="#FFFFFF" paddingTotal="80px" flexdirectionmob="column" justifycontentmob="center" alignitemsmob="center" gap="10px" paddingTotalmob="20px 0">
                <ContainerButton width="100%" justifycontent="space-around" alignitems="center" paddingleft="80px" paddingright="80px" flexdirectionmob="column" gapmob="30px" gap="30px">
                    <Button justifycontent="center" alignitems="center" borderradius="15px" border="solid 3px #023D69" width="460px" height="86px" 
                    fontsize="18px" 
                    backgroundColor="transparent" color="#023D69" widthmob="80%"                                        onClick={function (): void {
                            throw new Error("Function not implemented.");
                        } }>confira as datas das próximas ações
                    </Button>

                    <Button  justifycontent="center" alignitems="center" borderradius="15px" border="solid 3px #023D69" width="460px" height="86px"
                    fontsize="18px"
                    backgroundColor="transparent" color="#023D69" widthmob="80%" 
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