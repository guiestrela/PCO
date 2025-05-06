import { Button, ContainerButton, DivFlex } from "../../../uiKit";

function SectionButton() {
    return (
        <>            
            <DivFlex width="100%" height="100%" alignitems="center" 
            justifycontent="center">
                <DivFlex width="1440px" height="100%" paddingTotal="80px 0 80px 0" flexdirectionmob="column" justifycontentmob="center" alignitemsmob="center" gap="10px">
                <ContainerButton paddingleft="80px"  justifycontent="flex-start" paddingleftmob="0" paddingbottommob="20px" justifycontentmob="center" alignitemsmob="center">
                    <Button justifycontent="center" alignitems="center" borderradius="15px" border="solid 3px #023D69" width="460px" height="86px" 
                    fontsize="18px" 
                    backgroundColor="transparent" color="#023D69" widthmob="80%"                                        onClick={function (): void {
                            throw new Error("Function not implemented.");
                        } }>confira as datas das próximas ações
                    </Button>
                </ContainerButton>
                <ContainerButton paddingright="80px" justifycontent="flex-end" paddingrightmob="0" justifycontentmob="center" alignitemsmob="center">
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