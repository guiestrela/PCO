import { Button, ContainerButton, DivContainerText, DivFlex, DivFlexImage, Img, Title } from "../../../uiKit";

import imageBanner from "../../images/fotoBanner01.png";

function Banner() {
    return (
        <>
            <DivFlex width="100%" alignitems="center" justifycontent="center"
            height="100%">
                <DivFlex width="1440px" height="100%" backgroundimage="linear-gradient(to right,  #023D69, #0055A5 30%,  #F5C766 80%); " justifycontent="center" alignitems="center" flexdirectionmob="column" heightmob="100%">
                    <DivFlex flexdirection="column" paddingleft="80px" paddingleftmob="0px" justifycontentmob="center" alignitemsmob="center">
                    <DivContainerText paddingtopmob="20px" justifycontentmob="center" alignitemsmob="center">
                        <Title color="#FFFFFF" fontsize="68px" fontweight="700" fontsizemob="50px" textalign="start"
                        paddingleftmob="20px" paddingrightmob="20px">
                        No fluxo da vida,<br/> 
                        toda hora você<br/> 
                        recebe e doa
                        </Title>
                    </DivContainerText>
                    <ContainerButton paddingbottommob="20px" justifycontentmob="center" alignitemsmob="center">
                        <Button borderradius="15px" border="none" margintop="40px" width="240px" height='54px' justifycontent="center" alignitems="center" fontsize="22px" color="#023D69"  onClick={function (): void {
                                    throw new Error("Function not implemented.");
                                } }>apoie o projeto</Button>
                    </ContainerButton>
                    </DivFlex>
                    <DivFlex paddingright="80px" paddingTotalmob="0" paddingTotal="20px 0 20px 0">
                        <DivFlexImage justifycontent="center" alignitems="start" alignitemsmob="center" paddingbottommob="20px">
                            <Img src={imageBanner} widthmob="90%"/>
                        </DivFlexImage>
                    </DivFlex>                    
                </DivFlex>
            </DivFlex>                                    
        </>
    );
}
export default Banner;