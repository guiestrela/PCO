import styled from "styled-components";

interface MasterContainerInfoType {
    heightmob?: string
}

interface  MainContainerInfoType {
    backgroundimage?: string
    backgroundcolor?: string
    flexdirection?: string
    height?: string
    width?: string
    heightmob?: string
    borderradius?: string
    gap?: string
}

interface  TextContainerType {
    paddingleft?: string
    paddingright?: string
    heightmob?: string
    justifycontent?: string
    alignitems?: string
}

interface  ImagePrevContainerType {
    paddingleft?: string
    paddingright?: string 
    heightmob?: string   
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

interface TextInfoType {
    color?: string
    fontfamily?: string
    fontsize?: string
    fontweight?: string
}

interface ImageBannerType {
    width?: string
    height?: string
}

interface ImageBannerContainerType {
    width?: string
    height?: string
    alignitems?: string
    justifycontent?: string
}

export const MasterContainerInfo = styled.div<MasterContainerInfoType>`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;    
    justify-content: center;
    align-items: center; 
    padding-bottom: 80px;

    @media only screen and (max-width: 800px) {
        width: 800px;
        height: ${ props => props.heightmob ? props.heightmob : ''};
        flex-direction: column;
        padding-bottom: 0px;
    }

    @media only screen and (max-width: 600px) {
        width: 600px;
        height: ${ props => props.heightmob ? props.heightmob : ''};
    }
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
    border-radius: ${ props => props.borderradius ? props.borderradius : '0px'};
    gap: ${ props => props.gap ? props.gap : '0px'};
    
    @media only screen and (max-width: 800px) {
        width: 800px;
        height: ${ props => props.heightmob ? props.heightmob : ''};
        flex-direction: column;
    }

    @media only screen and (max-width: 600px) {
        width: 600px;
    }
`;

export const TextContainer = styled.div<TextContainerType>`
    display: flex;
    flex-direction: column;
    justify-content: ${ props => props.justifycontent ? props.justifycontent : 'center'};
    align-items: ${ props => props.alignitems ? props.alignitems : 'flex-start'};
    width: 100%;
    height: 673px;
    padding-left: ${ props => props.paddingleft ? props.paddingleft : ''};
    padding-right: ${ props => props.paddingright ? props.paddingright : ''};

    @media only screen and (max-width: 800px) {
        width: 800px;
        height: ${ props => props.heightmob ? props.heightmob : ''};
        align-items: center;
        text-align: center;
        padding-bottom: 90px;
    }

    @media only screen and (max-width: 600px) {
        width: 600px;        
    }
`;

export const TituloInfo = styled.h1<TituloInfoType>`
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.fontsize ? props.fontsize : '40px'};
    font-weight: ${props => props.fontweight ? props.fontweight : '600'};
    color: ${props => props.color ? props.color : ''};

    @media only screen and (max-width: 800px) {
        padding-bottom: 50px;
    }
`;

export const TextInfo = styled.p<TextInfoType>`
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.fontsize ? props.fontsize : '28px'};
    font-weight: ${props => props.fontweight ? props.fontweight : '300'};
    color: ${props => props.color ? props.color : '#000000'};        
`;

export const ImagePrevContainer = styled.div<ImagePrevContainerType>`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding-left: ${ props => props.paddingleft ? props.paddingleft : ''};
    padding-right: ${ props => props.paddingright ? props.paddingright : ''};

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        padding-left: 0px;
        padding-right: 0px; 
        width: 800px;
        height: ${ props => props.heightmob ? props.heightmob : ''}; 
        justify-content: start;        
    }
`;

export const ImagePrev = styled.img<ImagePrevType>`
    width: ${props => props.width ? props.width : ''};
    height: ${props => props.height ? props.height : ''};   
    
    @media only screen and (max-width: 600px) {
        width: 550px;        
    }
`;

export const ImageBannerContainer = styled.div<ImageBannerContainerType>`
    display: flex;
    justify-content: ${props => props.justifycontent ? props.justifycontent : 'center'};
    align-items: ${props => props.alignitems ? props.alignitems : 'center'};
    width: 1440px;     
    
    @media only screen and (max-width: 800px) {
        width: 800px;
        padding: 0px;          
    }

    @media only screen and (max-width: 600px) {
        width: 600px;                 
    }
`;

export const ImageBanner = styled.img<ImageBannerType>`
    width: ${props => props.width ? props.width : ''};
    height: ${props => props.height ? props.height : ''};     
    
    @media only screen and (max-width: 800px) {
        width: 800px;        
    }
    
    @media only screen and (max-width: 600px) {
        width: 600px;        
    }   
`;

