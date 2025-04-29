import styled from "styled-components";

interface ButtonType {
    border?: string
    borderradius?: string
    padding?: string
    backgroundColor?: string
    fontfamily?: string
    fontsize?: string
    color?: string
    widthtotal?: string
    heighttotal?: string
    maxwidth?: string
    margintop?: string
    alignitems?: string
}

interface ContainerButtonType {
    flex?: number
    paddingtop?: string
    justifycontent?: string
    paddingleft?: string
    paddingright?: string
}

export const MainContainer = styled.header`
    display: flex;
    width: 100%;
    height: 583px;
`;

export const BannerContainer = styled.div`
    display: flex;
    width: 100%;
    height: 583px;
    background-image: linear-gradient(to right,  #023D69, #0055A5 40%,  #F5C766);   
`;

export const ImageContainer = styled.div`
    display: flex;
    width: 100%;     
    justify-content: flex-end;
`;

export const BannerImage = styled.img`
    align-items: flex-end; 
    height: 533px; 
    padding-right: 80px;   
    margin-top: 25px;
`;

export const BannerTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 583px;
    padding-left: 80px;
`;

export const TextContainer = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 70px;
    font-weight: 700;
    color: #FFFFFF;
`;

export const MainContainerButton = styled.div`
    display: flex;
    flex: 2;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;     
    width: 100%;
    height: 180px;        
`;

export const ContainerButton = styled.div<ContainerButtonType>`
    display: flex;
    flex: ${props => props.flex ? props.flex : ""};
    flex-direction: row;
    justify-content: ${props => props.justifycontent ? props.justifycontent : ""};
    padding-left: ${props => props.paddingleft ? props.paddingleft : ""}; 
    padding-right: ${props => props.paddingright ? props.paddingright : ""};   
    padding-top: ${props => props.paddingtop ? props.paddingtop : ""};
`;

export const Button = styled.button<ButtonType>`
    border: ${props => props.border ? props.border : ""};
    border-radius: ${props => props.borderradius ? props.borderradius : ""};
    padding: ${props => props.padding ? props.padding : ""};
    width: ${props => props.widthtotal ? props.widthtotal : ""};
    height: ${props => props.heighttotal ? props.heighttotal : ""};
    max-width: ${props => props.maxwidth ? props.maxwidth : ""};
    margin-top: ${props => props.margintop ? props.margintop : ""};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
    font-family: ${props => props.fontfamily ? props.fontfamily : ""};
    font-size: ${props => props.fontsize ? props.fontsize : ""};
    color: ${props => props.color ? props.color : ""};
    align-items:${props => props.alignitems ? props.alignitems : ""};
    cursor: pointer;
`;

