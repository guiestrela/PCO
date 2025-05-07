import { DivFlex, DivFlexLogo, Img } from "../../../uiKit";

import logo from "../../icons/logoHeader.svg";
import instagram from "../../icons/instagramHeader.svg";
import whatsapp from "../../icons/whatsappHeader.svg";
import facebook from "../../icons/fbHeader.svg";



function header() {
    return (
        <>
        <DivFlex width="100%" height="200px" alignitems="center" justifycontent="center">
            <DivFlex width="1440px" height="100%" backgroundColor="#FFFFFF" justifycontent="space-between" alignitems="center">

                <DivFlexLogo paddingleft="80px" justifycontent="center" alignitems="center" paddingTotalmob="0px">
                    <Img src={logo} widthmob="80%"/>
                </DivFlexLogo>

                <DivFlexLogo justifycontent="center" alignitems="center" paddingright="80px" paddingtop="70px" paddingTotalmob="0px">
                    <Img src={instagram} />
                    <Img src={whatsapp} />
                    <Img src={facebook} />
                </DivFlexLogo>
                
            </DivFlex>
        </DivFlex>
        </>
    );
}
export default header;