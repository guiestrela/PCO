import { 
    HeaderMainContainer, 
    HeaderContainer, 
    LogoContainer, 
    LogoHeader, 
    SocialContainer, 
    SocialIcon 
} 
from "./style";

import Logo from "../../icons/logoHeader.svg";
import Instagram from "../../icons/instagramHeader.svg";
import Whatsapp from "../../icons/whatsappHeader.svg";
import Facebook from "../../icons/fbHeader.svg";


function header() {
    return (
        <HeaderMainContainer>
            <HeaderContainer>
                <LogoContainer>
                    <LogoHeader src={Logo} alt="Logo" />
                </LogoContainer>
                <SocialContainer>
                    <SocialIcon src={Instagram} alt="instagram"/>
                    <SocialIcon src={Whatsapp} alt="whatsapp"/>
                    <SocialIcon src={Facebook} alt="Facebook"/>
                </SocialContainer>
            </HeaderContainer>
        </HeaderMainContainer>
    );
}
export default header;