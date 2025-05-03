import styled from "styled-components";

interface  MainContainerEnterType {
    backgroundimage?: string
    backgroundcolor?: string
    width?: string
    height?: string
}

interface  TextContainerType {
    paddingleft?: string
    paddingright?: string
    paddingtop?: string
    alignitems?: string
    justifycontent?: string
    gap?: string
}

interface TituloInfoType {
    color?: string
    fontfamily?: string
    fontsize?: string
    fontweight?: string
    textalign?: string
}

interface TextInfoType {
    color?: string
    fontfamily?: string
    fontsize?: string
    fontweight?: string
    textalign?: string
}

interface ImageEnderType {
    width?: string
    height?: string
    marginleft?: string
}

interface ContainerImageType {
    gap?: string
    paddingbottom?: string
    paddingleft?: string
}

interface ContainerColumnType {
    flexdirection?: string
}

interface ContainerEnterType {
    backgroundcolor?: string
    height?: string
    width?: string
}

export const MasterContainerEnter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;    
    justify-content: center;
    align-items: center; 

    @media only screen and (max-width: 800px) {
        width: 800px;     
    }
`;

export const MainContainerEnter = styled.div<MainContainerEnterType>`
    display: flex;
    width: ${ props => props.width ? props.width : '1440px'};
    height: ${ props => props.height ? props.height : '1661px'}; 
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${ props  => props.backgroundcolor ? props.backgroundcolor : 'transparent'};
    
    @media only screen and (max-width: 800px) {
        width: 800px;     
    }
`;

export const ContainerEnter = styled.div<ContainerEnterType>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${ props => props.width ? props.width : '1302px'};
    height: ${ props => props.height ? props.height : '848px'};
    background-color: ${ props  => props.backgroundcolor ? props.backgroundcolor : 'transparent'};
`;

export const TextContainer = styled.div<TextContainerType>`
    display: flex;
    flex-direction: column;
    justify-content: ${ props => props.justifycontent ? props.justifycontent : 'center'};
    align-items: ${ props => props.alignitems ? props.alignitems : 'center'};
    padding-top: ${ props => props.paddingtop ? props.paddingtop : ''};
    padding-left: ${ props => props.paddingleft ? props.paddingleft : ''};
    padding-right: ${ props => props.paddingright ? props.paddingright : ''};
    gap: ${ props => props.gap ? props.gap : '20px'};
    width: 100%;
`;

export const TituloInfo = styled.h1<TituloInfoType>`
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.fontsize ? props.fontsize : '40px'};
    font-weight: ${props => props.fontweight ? props.fontweight : '600'};
    color: ${props => props.color ? props.color : ''};
    text-align: ${props => props.textalign ? props.textalign : 'center'};  
    
`;

export const TextInfo = styled.p<TextInfoType>`
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.fontsize ? props.fontsize : ''};
    font-weight: ${props => props.fontweight ? props.fontweight : ''};
    color: ${props => props.color ? props.color : ''};
    text-align: ${props => props.textalign ? props.textalign : 'center'};
`;

export const MainContainerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;     
`;

export const ContainerImage = styled.div<ContainerImageType>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    gap: ${ props => props.gap ? props.gap : ''};
    padding-bottom: ${ props => props.paddingbottom ? props.paddingbottom : ''};
    padding-left: ${ props => props.paddingleft ? props.paddingleft : ''};
    
`;

export const ImageEnder = styled.img<ImageEnderType>`
    width: ${props => props.width ? props.width : ''};
    height: ${props => props.height ? props.height : ''}; 
    margin-left: ${ props => props.marginleft ? props.marginleft : ''};;       
`;

export const ContainerColumn = styled.div<ContainerColumnType>`
    display: flex;
    justify-content: center;
    align-items: center;     
    flex-direction: ${ props => props.flexdirection ? props.flexdirection : ''};   
    width: 100%;
    height: 100%;
    gap: 20px;
`