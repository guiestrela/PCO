import styled from "styled-components";

interface  MainContainerInfoType {
    backgroundimage?: string
    backgroundcolor?: string
    flexdirection?: string
    height?: string
    width?: string
}

interface  TextContainerType {
    paddingleft?: string
    paddingright?: string
}

interface  ImagePrevContainerType {
    paddingleft?: string
    paddingright?: string    
}

interface ImagePrevType {
    width?: string
    height?: string
}

interface TituloInfoType {
    color?: string
    fontfamily?: string
    fontsize?: string
    fontweight?: string
}

interface ImageBannerType {
    width?: string
    height?: string
}

export const MasterContainerInfo = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;    
    justify-content: center;
    align-items: center; 
    padding-bottom: 80px;
`;

export const MainContainerInfo = styled.div<MainContainerInfoType>`
    display: flex;
    width: 1440px;
    height: ${ props => props.height ? props.height : '1661px'}; 
    flex-direction: ${ props => props.flexdirection ? props.flexdirection : 'row'};
    align-items: center;
    background-color: ${ props  => props.backgroundcolor ? props.backgroundcolor : 'transparent'};
    background-repeat: no-repeat;
    background-image: url(${({ backgroundimage }) => backgroundimage}) ;
    background-position-x: 100%;
    
`;

export const TextContainer = styled.div<TextContainerType>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 673px;
    padding-left: ${ props => props.paddingleft ? props.paddingleft : ''};
    padding-right: ${ props => props.paddingright ? props.paddingright : ''};
`;

export const TituloInfo = styled.h1<TituloInfoType>`
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.fontsize ? props.fontsize : '40px'};
    font-weight: ${props => props.fontweight ? props.fontweight : '600'};
    color: ${props => props.color ? props.color : ''};
`;

export const TextInfo = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-weight: 300;
    color: #000000;
    
`;

export const ImagePrevContainer = styled.div<ImagePrevContainerType>`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding-left: ${ props => props.paddingleft ? props.paddingleft : ''};
    padding-right: ${ props => props.paddingright ? props.paddingright : ''};
`;

export const ImagePrev = styled.img<ImagePrevType>`
    width: ${props => props.width ? props.width : ''};
    height: ${props => props.height ? props.height : ''};    
`;

export const ImageBannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;    
    padding: 0 80px 0 80px;    
`;

export const ImageBanner = styled.img<ImageBannerType>`
    width: ${props => props.width ? props.width : ''};
    height: ${props => props.height ? props.height : ''};    
`;

