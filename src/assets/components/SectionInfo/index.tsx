import { DivContainerText, DivFlex, Title, Text, DivFlexImage, Img} from "../../../uiKit";

import prevVideoImage from "../../images/prevVideo.png"
import qrcode from "../../images/qr code.svg"
import { DivFlexPrev } from "./style";


function SectionInfo() {
    return(
        <>
            <DivFlex width="100%" alignitems="center" justifycontent="center">                            
                <DivFlexPrev width="1440px" height="100%" justifycontent="center" alignitems="center" backgroundColor="#FFFFFF" flexdirectionmob="column"
                alignitemsmob="center" justifycontentmob="center">
                    
                    <DivContainerText flexdirection="column" paddingTotal="80px">
                        <Title fontsize="68px" fontweight="400" color="#023D69" textalign="start" fontsizemob="58px">
                        Conheça o Grupo<br/> Pão com Ovo
                        </Title>
                        <Text fontsize="28px" fontweight="300" color="#000000" textalign="start" fontsizemob="25px">
                        O Pão com Ovo é um projeto social<br/> destinado a levar alento à pessoas<br/> em situação de rua, no Distrito <br/>Federal. Nasceu da vontade de  uma<br/> família manauara em fazer algo por<br/>  essas pessoas, muitas vezes invisíveis 
                        </Text>                 
                    </DivContainerText >

                    <DivFlex paddingTotalmob="0" paddingTotal="80px 80px 80px 0">
                        <DivFlexImage justifycontent="center" justifycontentmob="center" paddingTotalmob="10px">
                            <Img src={prevVideoImage} />
                        </DivFlexImage>   
                    </DivFlex>                    
                </DivFlexPrev>
            </DivFlex>

            <DivFlex width="100%" alignitems="center" justifycontent="center">
                <DivFlex width="1440px" height="100%" justifycontent="center" alignitems="center" backgroundColor="#FFFFFF">

                    <DivFlex width="100%" backgroundColor="#FFC13A" borderradius="78px" margin="80px" flexdirectionmob="column" borderradiusmob="0" justifycontent="center" alignitems="center" marginmog="0px" justifycontentmob="center" alignitemsmob="center">
                        

                        <DivFlexImage justifycontent="center" alignitems="end" paddingtop="100px" paddingbottom="100px" widthmob="100%"
                        paddingTotalmob="30px">
                            <Img src={qrcode} />
                        </DivFlexImage>

                        <DivContainerText flexdirection="column" alignitems="start" justifycontent="center"                         
                        
                        >
                            <Title fontsize="69px" fontweight="700" color="#023D69" textalign="flex-start" fontsizemob="66px">
                            Distribua <br/> solidariedade
                            </Title>
                            <Text fontsize="24px" fontweight="700" color="#023D69" textalign="flex-start" fontsizemob="30px">
                            Contribua com qualquer valor
                            </Text>                 
                        </DivContainerText >
                    </DivFlex>
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default SectionInfo;

