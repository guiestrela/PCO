import styled from "styled-components";

interface FooterMainContainerType {
    backgroundcolor?: string;
    height?: string;
    width?: string;    
    flexdirection?:string;
    justifycontent?:string;
    alignitems?:string;
    flex?:string;
}

interface FooterContainerType {
    backgroundcolor?: string;
    height?: string;
    width?: string;
    flexdirection?:string;
    justifycontent?:string;
    alignitems?:string;
    flex?:string;
    paddingright?: string
    paddingleft?: string
    paddingtop?: string
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
    paddingtop?: string
}

interface SocialIconType {
    width?: string
    height?: string
    marginleft?: string
}

export const FooterMainContainer = styled.header<FooterMainContainerType>`
    display: flex;  
    flex: ${ props => props.flex ? props.flex : ''};    
    height: ${ props => props.height ? props.height : '335px'};
    width: ${ props => props.width ? props.width : '100%'};  
    align-items: ${ props => props.alignitems ? props.alignitems : 'center'}; 
    justify-content: ${ props => props.justifycontent ? props.justifycontent : 'center'};    
    flex-direction: ${ props => props.flexdirection ? props.flexdirection : 'row'};
    background-color: ${ props => props.backgroundcolor ? props.backgroundcolor : 'transparent'}; 
    
    @media only screen and (max-width: 800px) {
        width: 800px;                
    }

    @media only screen and (max-width: 600px) {
        width: 600px;                
    }

`;

export const FooterContainer = styled.div<FooterContainerType>`
    display: flex;
    flex: ${ props => props.flex ? props.flex : ''};
    height: ${ props => props.height ? props.height : ''};
    width: ${ props => props.width ? props.width : ''};
    align-items: ${ props => props.alignitems ? props.alignitems : 'center'};
    flex-direction: ${ props => props.flexdirection ? props.flexdirection : 'row'};   
    justify-content: ${ props => props.justifycontent ? props.justifycontent : 'center'};
    background-color: ${ props  => props.backgroundcolor ? props.backgroundcolor : 'transparent'}; 
    padding-right: ${ props => props.paddingright ? props.paddingright : ''};
    padding-left: ${ props => props.paddingleft ? props.paddingleft : ''};

`;

export const LogoContainer = styled.div`
    display: flex; 
`;

export const LogoFooter = styled.img`
    width: 235px; 
`;

export const SocialContainer = styled.div`
    display: flex;   
    padding-top: 20px;
    align-items: flex-start
`;

export const SocialIcon = styled.img<SocialIconType>`
    width: ${ props => props.width ? props.width : ''};   
    margin-left: ${ props => props.marginleft ? props.marginleft : ''};
    height: ${ props => props.height ? props.height : ''};
    cursor: pointer;
    
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
    padding-top: ${ props => props.paddingtop ? props.paddingtop : ''};
    
`;

