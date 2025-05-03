import { FooterContainer, FooterMainContainer, LogoContainer, LogoFooter, SocialContainer, SocialIcon, TextContainer, TextInfo, TituloInfo } from "./style";

import logo from '../../icons/logoFooter.svg';
import facebook from '../../icons/fbFooter.svg';
import instagram from '../../icons/instagramFooter.svg';
import whatsapp from '../../icons/whatsappFooter.svg';


function Footer() {
    return (
        <FooterMainContainer height="335px" backgroundcolor="#FFFFFF">

            <FooterContainer backgroundcolor="#023D69" width="1440px" height="335px" justifycontent="space-between" paddingleft="80px">
                <FooterContainer flexdirection="column" alignitems="start">
                    <LogoContainer>                        
                        <LogoFooter src={logo}/>
                    </LogoContainer>
                    <TextContainer paddingtop="20px" alignitems="start">
                        <TituloInfo color="#FFFFFF" fontsize="28px" fontweight="500">
                        Nos acompanhe nas redes
                        </TituloInfo>
                    </TextContainer>
                    <SocialContainer>
                    <SocialIcon src={facebook} width="38px" height="38px"/>
                    <SocialIcon src={whatsapp} width="38px" height="38px" marginleft="10px"/>
                    <SocialIcon src={instagram} width="38px" height="38px" marginleft="10px"/>                    
                    </SocialContainer>            
                </FooterContainer>
                
                <FooterContainer flexdirection="column" paddingright="80px">
                    <TextContainer alignitems="end" gap="0">
                        <TituloInfo color="#FFFFFF" fontsize="28px" fontweight="500" textalign="end">
                        Razão Social
                        </TituloInfo>
                        <TextInfo color="#FFFFFF" fontsize="20px" fontweight="500" textalign="end">
                        Grupo Pão com Ovo
                        </TextInfo>
                    </TextContainer>
                    <TextContainer alignitems="end" gap="0"paddingtop="10px">
                        <TituloInfo color="#FFFFFF" fontsize="28px" fontweight="500" textalign="end">
                        CNPJ                        
                        </TituloInfo>
                        <TextInfo color="#FFFFFF" fontsize="20px" fontweight="500" textalign="end">
                        52.849.679/0001-91
                        </TextInfo>
                    </TextContainer>
                    <TextContainer alignitems="end" gap="0" paddingtop="10px">
                        <TituloInfo color="#FFFFFF" fontsize="28px" fontweight="500" textalign="end">
                        Endereço
                        </TituloInfo>
                        <TextInfo color="#FFFFFF" fontsize="20px" fontweight="500" textalign="end">
                        SHCE, Quadra 507, Bloco C, Comércio Local, Loja 37<br/>
                        Cruzeiro Novo-DF<br/>
                        CEP: 70.762-540
                        </TextInfo>
                    </TextContainer>
                </FooterContainer>             
            </FooterContainer>  
            
        </FooterMainContainer>
    );
}
export default Footer;