import { DivFlex, DivFlexLogo, Img } from "../../../uiKit";

import logo from '../../icons/logoFooter.svg';
import facebook from '../../icons/fbFooter.svg';
import instagram from '../../icons/instagramFooter.svg';
import whatsapp from '../../icons/whatsappFooter.svg';



function Footer() {
    return (
        <>
            <DivFlex width="100%" alignitems="center" justifycontent="center">
                <DivFlex width="1440px" height="100%" backgroundColor="#023D69" justifycontent="space-between" alignitems="center">
                    <DivFlex flexdirection="column" justifycontent="start" alignitems="center" paddingleft="80px">
                        <DivFlexLogo justifycontent="center" alignitems="center" paddingTotalmob="0px">
                        <Img src={logo}/>
                        </DivFlexLogo>
                        
                        <DivFlexLogo justifycontent="center" alignitems="center"  paddingtop="30px" paddingTotalmob="0px">
                        <Img src={instagram} />
                        <Img src={whatsapp} />
                        <Img src={facebook} />
                        </DivFlexLogo>
                    </DivFlex>
                

                </DivFlex>
            </DivFlex>
        </>
    );
}
export default Footer;