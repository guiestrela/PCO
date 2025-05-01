import { ImageBanner, ImageBannerContainer, ImagePrev, ImagePrevContainer, MainContainerInfo, MasterContainerInfo, TextContainer, TextInfo, TituloInfo } from "./style";
import ImgBackCircle from "../../images/Ellipse.png";
import PrevVideo from "../../images/prevVideo.png";
import QrCode from "../../images/qr code.svg";
import MapaDf from "../../images/mapaDf.png";


function SectionInfo() {
    return (
        <>
            <MasterContainerInfo>
                <MainContainerInfo backgroundimage={ImgBackCircle}> 
                    <TextContainer paddingleft="80px">
                        <TituloInfo fontsize="68px" fontweight="400" color="#1B2F76">
                            Conheça o Grupo Pão com Ovo
                        </TituloInfo>
                        <TextInfo>
                        O Pão com Ovo é um projeto social destinado a levar alento à pessoas em situação de rua, no Distrito Federal. Nasceu da vontade de  uma família manauara em fazer algo por  essas pessoas, muitas vezes invisíveis
                        </TextInfo>
                    </TextContainer>
                    <ImagePrevContainer paddingright="80px">
                        <ImagePrev src={PrevVideo} />
                    </ImagePrevContainer>
                </MainContainerInfo>                
            </MasterContainerInfo>
            
            <MasterContainerInfo>
                <MainContainerInfo>
                    <ImageBannerContainer>
                        <ImageBanner src={QrCode}/>
                    </ImageBannerContainer>                    
                </MainContainerInfo>
            </MasterContainerInfo>

            <MasterContainerInfo>
                <MainContainerInfo backgroundcolor='#FFF1D6'> 
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
        </>
    )
}
export default SectionInfo;