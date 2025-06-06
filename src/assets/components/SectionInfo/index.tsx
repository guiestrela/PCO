import { 
    DivContainerText, 
    DivFlex, 
    Title, 
    Text, 
    DivFlexImage, 
    Img} 
    from "../../../uiKit";
import { DivFlexPrev } from "./style";


import prevVideoImage from "../../images/prevVideo.png"
import qrcode from "../../images/qr code.svg"
import mapaDf from "../../images/mapaDf.png"
import quantidade from "../../images/quantidades.png"



function SectionInfo() {
    return(
        <>
            <DivFlex 
                width="100%" 
                alignitems="center" 
                justifycontent="center" >                            
                <DivFlexPrev 
                    width="1440px" 
                    justifycontent="center" 
                    alignitems="center" 
                    backgroundColor="#FFFFFF" 
                    flexdirectionmob="column" 
                    alignitemsmob="center" 
                    justifycontentmob="center">
                    <DivContainerText 
                        flexdirection="column" 
                        paddingleft="80px" 
                        paddingleftmob="0px">
                        <Title 
                            fontsize="68px" 
                            fontweight="400"    
                            color="#023D69" 
                            textalign="start" 
                            fontsizemob="58px" 
                            paddingbottommob="30px"
                            paddingleftmob="20px" 
                            paddingrightmob="20px">
                        Conheça o Grupo<br/> Pão com Ovo
                        </Title>
                        <Text 
                            fontsize="28px" 
                            fontweight="300" 
                            color="#000000" 
                            textalign="start" 
                            fontsizemob="25px"
                            paddingleftmob="20px" 
                            paddingrightmob="20px">
                            O Pão com Ovo é um projeto social<br/> destinado a levar alento à pessoas<br/> em situação de rua, no Distrito <br/>Federal. Nasceu da vontade de  uma<br/> família manauara em fazer algo por<br/>  essas pessoas, muitas vezes invisíveis 
                        </Text>                 
                    </DivContainerText >

                    <DivFlex 
                        paddingTotalmob="0" 
                        paddingTotal="80px 80px 80px 0">
                        <DivFlexImage 
                            justifycontent="center" 
                            justifycontentmob="center" 
                            paddingTotalmob="10px">
                            <Img src={prevVideoImage} />
                        </DivFlexImage>   
                    </DivFlex>                    
                </DivFlexPrev>
            </DivFlex>

            <DivFlex 
                width="100%" 
                alignitems="center" 
                justifycontent="center">
                <DivFlex 
                    width="1440px" 
                    height="100%" 
                    justifycontent="center" 
                    alignitems="center" 
                    backgroundColor="#FFFFFF">
                    <DivFlex 
                        width="100%" 
                        backgroundColor="#FFC13A" 
                        borderradius="78px" 
                        margin="80px" 
                        flexdirectionmob="column" 
                        borderradiusmob="0" 
                        justifycontent="center" 
                        alignitems="center" 
                        marginmog="0px" 
                        justifycontentmob="center" 
                        alignitemsmob="center">                      
                        <DivFlexImage 
                            justifycontent="center" 
                            alignitems="end" 
                            paddingtop="100px" 
                            paddingbottom="100px" 
                            widthmob="100%"
                            paddingTotalmob="30px">
                            <Img src={qrcode} />
                        </DivFlexImage>

                        <DivContainerText 
                            widthTotal="30%" 
                            flexdirection="column" 
                            alignitems="start" 
                            justifycontent="center" 
                            widthmob="100%" 
                            heightmob="100%" 
                            justifycontentmob="start"
                            alignitemsmob="center">
                            <Title 
                                fontsize="58px" 
                                fontweight="700" 
                                color="#023D69" 
                                textalign="flex-start" 
                                fontsizemob="50px"
                                paddingleftmob="20px" 
                                paddingrightmob="20px">
                                Distribua 
                                solidariedade
                            </Title>
                            <Text 
                                fontsize="24px" 
                                fontweight="700" 
                                color="#023D69" 
                                textalign="start" 
                                fontsizemob="30px"
                                paddingleftmob="20px" 
                                paddingrightmob="20px">
                                Contribua com qualquer valor
                            </Text>                 
                        </DivContainerText >
                    </DivFlex>
                </DivFlex>
            </DivFlex>

            <DivFlex 
                width="100%" 
                alignitems="center" 
                justifycontent="center">
                <DivFlex width="1440px" 
                    justifycontent="start" 
                    alignitems="center" 
                    backgroundColor="#FFF1D6" 
                    paddingTotal="80px 80px 30px 80px"
                    flexdirectionmob="column" 
                    justifycontentmob="center" 
                    alignitemsmob="center" 
                    paddingTotalmob="30px">
                    <DivFlexImage 
                        justifycontent="center"  
                        justifycontentmob="center" 
                        paddingright="15px" 
                        paddingTotalmob="0">  
                        <Img src={mapaDf} />
                    </DivFlexImage> 

                    <DivContainerText 
                        widthTotal="30%" 
                        flexdirection="column" 
                        alignitems="start" 
                        justifycontent="center" 
                        widthmob="100%" 
                        heightmob="100%" 
                        justifycontentmob="start" 
                        alignitemsmob="center">
                            <Title 
                                fontsize="58px" 
                                fontweight="700" 
                                color="#023D69" 
                                textalign="flex-start" 
                                fontsizemob="68px" 
                                paddingbottom="40px" 
                                paddingbottommob="30px"
                                paddingleftmob="20px" 
                                paddingrightmob="20px">
                                Como funciona a ação?
                            </Title>
                            <Text 
                                fontsize="28px" 
                                fontweight="300" 
                                color="#000000" 
                                textalign="start" 
                                fontsizemob="30px"
                                paddingleftmob="20px" 
                                paddingrightmob="20px">
                                As ações do Pão com Ovo ocorrem duas vezes por mês, sempre às sextas-feiras. Cada ação inclui duas rotas cuidadosamente planejadas com antecedência. Uma rota cobre as áreas de Taguatinga e Ceilândia, enquanto a outra se dirige ao Plano Piloto.
                            </Text>                 
                    </DivContainerText >  
                </DivFlex>
            </DivFlex>

            <DivFlex 
                width="100%" 
                alignitems="center" 
                justifycontent="center">
                <DivFlex 
                    width="1440px" 
                    justifycontent="center" 
                    alignitems="center" 
                    backgroundColor="#FFFFFF" 
                    paddingTotal="80px"
                    flexdirectionmob="column" 
                    justifycontentmob="center" 
                    alignitemsmob="center" 
                    paddingTotalmob="30px">
                    <DivFlexImage 
                        justifycontent="center"  
                        justifycontentmob="center">
                        <Img src={quantidade} />
                    </DivFlexImage>                       
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default SectionInfo;

