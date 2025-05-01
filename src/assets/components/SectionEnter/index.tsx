import { MainContainerEnter, MasterContainerEnter, TextContainer, TextInfo, TituloInfo } from "./style";

function SectionEnter() {
    return (
        <>
            <MasterContainerEnter>
                <MainContainerEnter backgroundcolor="#023D69">
                    <TextContainer>
                        <TituloInfo fontsize="68px" fontweight="400" color="#FFFFFF">Você faz a diferença!</TituloInfo>
                        <TextInfo color="#FFFFFF" fontfamily="Poppins" fontsize="50px" fontweight="500">
                            Veja como sua doação é convertida<br/> em solidariedade
                        </TextInfo>
                    </TextContainer>
                </MainContainerEnter>
            </MasterContainerEnter>
        </>
    );
}
export default SectionEnter;