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
    textalign?: string
}

interface ContainerButtonType {
    flex?: number
    paddingtop?: string
    paddingbottom?: string
    justifycontent?: string
    paddingleft?: string
    paddingright?: string
    flexdirection?: string
    gap?: string
    alignitems?: string
}

export const ContainerButton = styled.div<ContainerButtonType>`
    display: flex;
    flex: ${props => props.flex ? props.flex : ""};    
    justify-content: ${props => props.justifycontent ? props.justifycontent : ""};
    padding-left: ${props => props.paddingleft ? props.paddingleft : ""}; 
    padding-right: ${props => props.paddingright ? props.paddingright : ""};   
    padding-top: ${props => props.paddingtop ? props.paddingtop : ""};
    padding-bottom: ${props => props.paddingbottom ? props.paddingbottom : ""};
    flex-direction: ${props => props.flexdirection ? props.flexdirection : ""};
    gap: ${props => props.gap ? props.gap : ""};
    align-items: ${props => props.alignitems ? props.alignitems : ""};
`;

export const Button = styled.button<ButtonType>`
    display: flex;
    justify-content: center;
    align-items: center;
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
    text-align: ${props => props.textalign ? props.textalign : ""};
    cursor: pointer; 
    
    
`;


