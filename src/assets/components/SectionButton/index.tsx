import { MainContainerButton, MasterContainerButton } from "./style";

import { Button, ContainerButton } from "../Button/style";

function SectionButton() {
    return (
        <>
            <MasterContainerButton>
            <MainContainerButton>
                <ContainerButton flex={1} paddingleft="80px"  justifycontent="flex-start">
                    <Button borderradius="15px" border="solid 3px #023D69" widthtotal="500px" widthtmob="380px" 
                    heighttotal="86px" fontsize="22px" 
                    backgroundColor="transparent" color="#023D69"
                    
                    onClick={function (): void {
                            throw new Error("Function not implemented.");
                        } }>confira as datas das próximas ações
                    </Button>
                </ContainerButton>
                <ContainerButton flex={1} paddingright="80px" justifycontent="flex-end">
                    <Button borderradius="15px" border="solid 3px #023D69" widthtotal="500px" widthtmob="380px" 
                    heighttotal="86px" fontsize="22px"
                    backgroundColor="transparent" color="#023D69"  
                    onClick={function (): void {
                            throw new Error("Function not implemented.");
                        } }>acompanhe as ações no instagram
                    </Button>
                </ContainerButton>
            </MainContainerButton>                    
        </MasterContainerButton>          
        </>
    )
}
export default SectionButton;