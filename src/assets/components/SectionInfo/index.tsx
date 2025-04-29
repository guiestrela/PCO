import { ImageContainerInfo, MainContainerInfo, MasterContainerInfo } from "./style";

import ImageBannerVideo from "../../images/conheça.png";
import ImageBannerQrCode from "../../images/qr code.svg";
import ImageBannerMapa from "../../images/mapaBanner.png";
import ImageBannerQuantidades from "../../images/quantidades.svg";

function SectionInfo() {
    return (
        <>
            <MasterContainerInfo>
                <MainContainerInfo>
                    <ImageContainerInfo paddingtop="30px" src={ImageBannerVideo} alt="Banner" />
                    <ImageContainerInfo paddingtop="38px" src={ImageBannerQrCode} alt="Banner" />
                    <ImageContainerInfo paddingtop="200px" src={ImageBannerMapa} alt="Banner" />
                    <ImageContainerInfo paddingtop="200px" src={ImageBannerQuantidades} alt="Banner" />
                </MainContainerInfo>
            </MasterContainerInfo>
        </>
    )
}
export default SectionInfo;