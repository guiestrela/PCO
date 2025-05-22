import { 
    DivContainerText, 
    DivFlex, DivFlexLogo, 
    Img, 
    Text, 
    Title 
} from "../../../uiKit";

import logo from '../../icons/logoFooter.svg';
import facebook from '../../icons/fbFooter.svg';
import instagram from '../../icons/instagramFooter.svg';
import whatsapp from '../../icons/whatsappFooter.svg';



function Footer() {
    return (
        <>
            <DivFlex 
                width="100%" 
                alignitems="center" 
                justifycontent="center"
                backgroundimage="linear-gradient(to right,  #023D69, #0055A5 30%,  #F5C766 80%); ">                
                <DivFlex 
                    width="1440px" 
                    height="100%" 
                    backgroundColor="#023D69" 
                    justifycontent="space-between" 
                    alignitems="center" 
                    paddingTotal="0 80px" 
                    flexdirectionmob="column" 
                    paddingTotalmob="0 40px">
                    <DivFlex 
                        flexdirection="column" 
                        alignitems="start" 
                        justifycontent="center" 
                        paddingTotal="80px 0" 
                        paddingTotalmob="80px 20px">
                        <DivFlexLogo justifycontent="start" alignitems="center">
                            <Img src={logo}/>
                        </DivFlexLogo>
                        <DivContainerText 
                            justifycontent="start" 
                            alignitems="start" 
                            flexdirection="column" 
                            paddingtop="30px">
                            <Text 
                                fontsize="20px" 
                                fontweight="500" 
                                color="#FFFFFF"
                                fontfamily="Poppins">
                                Nos acompanhe nas redes
                            </Text>
                        </DivContainerText> 
                        <DivFlexLogo 
                            justifycontent="start" 
                            alignitems="center" 
                            paddingtop="30px" 
                            gapmob="20px" 
                            gap="20px">
                            <Img src={instagram} />
                            <Img src={whatsapp} />
                            <Img src={facebook} />
                        </DivFlexLogo>
                    </DivFlex>
                    <DivFlex 
                        flexdirection="column" 
                        alignitems="end" 
                        justifycontent="center"
                        paddingTotalmob="0 20px">
                        <DivContainerText 
                            flexdirection="column" 
                            paddingtop="30px">
                            <Title 
                                fontsize="28px" 
                                fontweight="700" 
                                color="#FFFFFF" textalign="end">
                            Razão Social
                            </Title>
                            <Text 
                                fontsize="20px" 
                                fontweight="500" 
                                color="#FFFFFF" 
                                textalign="end">
                            Grupo Pão com Ovo                            
                            </Text>
                        </DivContainerText> 
                        <DivContainerText 
                            flexdirection="column" 
                            paddingtop="20px">
                            <Title 
                                fontsize="28px" 
                                fontweight="700" 
                                color="#FFFFFF" 
                                textalign="end">
                            CNPJ
                            </Title>
                            <Text 
                                fontsize="20px" 
                                fontweight="500" 
                                color="#FFFFFF" 
                                textalign="end">
                            52.849.679/0001-91                            
                            </Text>
                        </DivContainerText>
                        <DivContainerText 
                            flexdirection="column" 
                            paddingtop="20px">
                            <Title 
                                fontsize="28px" 
                                fontweight="700" 
                                color="#FFFFFF" 
                                textalign="end">
                                Endereço
                            </Title>
                            <Text 
                                fontsize="20px" 
                                fontweight="500" 
                                color="#FFFFFF" 
                                textalign="end">
                                SHCE, Quadra 507, Bloco C, Comércio Local, Loja 37                            
                            </Text>
                            <Text 
                                fontsize="20px" 
                                fontweight="500" 
                                color="#FFFFFF" 
                                textalign="end">
                                Cruzeiro Novo-DF                           
                            </Text>
                            <Text 
                                fontsize="20px" 
                                fontweight="500" 
                                color="#FFFFFF" 
                                textalign="end">
                                CEP: 70.762-540                           
                            </Text>
                        </DivContainerText>                                          
                    </DivFlex>
                </DivFlex>
            </DivFlex>
        </>
    );
}
export default Footer;