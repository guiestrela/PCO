import styled from "styled-components";

interface  MainContainerEnterType {
    backgroundimage?: string
    backgroundcolor?: string
    
}

interface  TextContainerType {
    paddingleft?: string
    paddingright?: string
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

interface ImageEnderType {
    width?: string
    height?: string
}

interface ContainerImageType {
    gap?: string
}

export const MasterContainerEnter = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;    
    justify-content: center;
    align-items: center; 
`;

export const MainContainerEnter = styled.div<MainContainerEnterType>`
    display: flex;
    width: 1440px;
    height: 1661px; 
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${ props  => props.backgroundcolor ? props.backgroundcolor : 'transparent'};       
`;

export const TextContainer = styled.div<TextContainerType>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 673px;
    padding-left: ${ props => props.paddingleft ? props.paddingleft : ''};
    padding-right: ${ props => props.paddingright ? props.paddingright : ''};
    gap: 20px;
`;

export const TituloInfo = styled.h1<TituloInfoType>`
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.fontsize ? props.fontsize : '40px'};
    font-weight: ${props => props.fontweight ? props.fontweight : '600'};
    color: ${props => props.color ? props.color : ''};
    text-align: center;

`;

export const TextInfo = styled.p<TextInfoType>`
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.fontsize ? props.fontsize : ''};
    font-weight: ${props => props.fontweight ? props.fontweight : ''};
    color: ${props => props.color ? props.color : ''};
    text-align: center;
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
`;

export const ImageEnder = styled.img<ImageEnderType>`
    width: ${props => props.width ? props.width : ''};
    height: ${props => props.height ? props.height : ''};        
`;

export const ContainerColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 100%;
    height: 100%;
    gap: 20px;
`