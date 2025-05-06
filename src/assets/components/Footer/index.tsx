import { DivFlex, DivFlexLogo, Img } from "../../../uiKit";

import logo from '../../icons/logoFooter.svg';
import facebook from '../../icons/fbFooter.svg';
import instagram from '../../icons/instagramFooter.svg';
import whatsapp from '../../icons/whatsappFooter.svg';



function Footer() {
    return (
        <>
            <DivFlex width="100%" height="200px" alignitems="center" justifycontent="center">
                <DivFlex width="1440px" height="100%" backgroundColor="#023D69" justifycontent="space-between" alignitems="center">
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
export default Footer;