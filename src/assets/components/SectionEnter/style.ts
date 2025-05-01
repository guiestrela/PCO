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
    background-color: ${ props  => props.backgroundcolor ? props.backgroundcolor : 'transparent'};
    background-repeat: no-repeat;
    background-image: url(${({ backgroundimage }) => backgroundimage}) ;
    background-position-x: 100%;    
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

