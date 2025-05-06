import { ImageBanner, ImageBannerContainer, ImagePrev, ImagePrevContainer, MainContainerInfo, MasterContainerInfo, TextContainer, TextInfo, TituloInfo } from "./style";
import ImgBackCircle from "../../images/Ellipse.png";
import PrevVideo from "../../images/prevVideo.png";
import QrCode from "../../images/qr code.svg";
import MapaDf from "../../images/mapaDf.png";
import Quantidade from "../../images/quantidades.svg";



function SectionInfo() {
    return (
        <>
            <MasterContainerInfo>
                <MainContainerInfo backgroundimage={ImgBackCircle} height="673px" heightmob="700px"> 
                    <TextContainer paddingleft="80px">
                        <TituloInfo fontsize="68px" fontweight="400" color="#1B2F76" fontsizemob="62px">
                            Conheça o Grupo Pão com Ovo
                        </TituloInfo>
                        <TextInfo fontsizemob="20px"  fontweightmob='400' color="#1B2F76">
                        O Pão com Ovo é um projeto social destinado a levar alento à pessoas em situação de rua, no Distrito Federal. Nasceu da vontade de  uma família manauara em fazer algo por  essas pessoas, muitas vezes invisíveis
                        </TextInfo>                        
                    </TextContainer>
                    <ImagePrevContainer paddingright="80px" >
                        <ImagePrev src={PrevVideo} />
                    </ImagePrevContainer>
                </MainContainerInfo>                
            </MasterContainerInfo>

            <MasterContainerInfo>
                <MainContainerInfo height="551px">
                <MainContainerInfo height="551px" heightmob="800px" backgroundcolor="#FFC13A" borderradius="78px" gap="15px">
                        <ImageBannerContainer justifycontent="end"  alignitemsmob="center">
                            <ImageBanner src={QrCode} widthmog="300px"/>
                        </ImageBannerContainer>
                        <TextContainer heightmob="400px">
                            <TituloInfo fontsize="68px" fontweight="700" color="#1B2F76" fontsizemob="50px" fontweightmob="600">
                                Distribua<br/> 
                            solidarieade
                            </TituloInfo>
                            <TextInfo fontsizemob="25px" color="#1B2F76">
                            Contribua com qualquer valor
                            </TextInfo>
                        </TextContainer>
                </MainContainerInfo>
                </MainContainerInfo>
            </MasterContainerInfo>
                        
            <MasterContainerInfo heightmob="1000px">
                <MainContainerInfo backgroundcolor='#FFF1D6' height="673px" heightmob="1100px"> 
                    <ImagePrevContainer paddingleft="80px">
                        <ImagePrev src={MapaDf} width=""/>
                    </ImagePrevContainer>
                    <TextContainer paddingright="80px" paddingleft="15px">
                        <TituloInfo fontsize="68px" fontweight="700" color="#1B2F76">
                            Como Funciona a ação?
                        </TituloInfo>
                        <TextInfo>
                        As ações do Pão com Ovo ocorrem duas vezes por mês, sempre às sextas-feiras. Cada ação inclui duas rotas cuidadosamente planejadas com antecedência. Uma rota cobre as áreas de Taguatinga e Ceilândia, enquanto a outra se dirige ao Plano Piloto.
                        </TextInfo>
                    </TextContainer>
                </MainContainerInfo>                
            </MasterContainerInfo>  
                
            <MasterContainerInfo >
                <MainContainerInfo backgroundcolor="#FFFFFF" height="1289px" heightmob="425px">                                          
                    <ImageBannerContainer>
                        <ImageBanner src={Quantidade} />
                    </ImageBannerContainer>
                </MainContainerInfo>
            </MasterContainerInfo>       
        </>
    )
}
export default SectionInfo;