import styled from "styled-components";

import ellipse from "../../images/Ellipse.png"

interface DivFlexPrevType {    
    gap?: string
    margintop?: string
    alignitems?: string
    justifycontent?: string
    width?: string
    height?: string
    flex?: string
    flexdirection?: string
    paddingTotal?: string 
    paddingleft?: string
    paddingright?: string
    paddingtop?: string
    paddingbottom?: string   
    border?: string
    borderradius?: string
    maxwidth?: string
    backgroundColor?: string    
    backgroundrepeat?: string
    backgroundposition?: string


    ///Mobile
    justifycontentmob?: string
    alignitemsmob?: string
    heightmob?: string
    flexdirectionmob?: string
    paddingTotalmob?: string
    bordermob?: string
    borderradiusmob?: string
    margintopmob?: string
    gapmob?: string
    paddingleftmob?: string
    paddingrightmob?: string
    paddingtopmob?: string
    paddingbottommob?: string
}

export const DivFlexPrev = styled.div<DivFlexPrevType>`
    display: flex;
    height: ${props => props.height ? props.height : ""};
    width: ${props => props.width ? props.width : ""};    
    flex-direction: ${props => props.flexdirection ? props.flexdirection : ""};
    justify-content: ${props => props.justifycontent ? props.justifycontent : ""};
    align-items: ${props => props.alignitems ? props.alignitems : ""};
    padding: ${props => props.paddingTotal ? props.paddingTotal : ""};
    padding-left: ${props => props.paddingleft ? props.paddingleft : ""};
    padding-right: ${props => props.paddingright ? props.paddingright : ""};
    padding-top: ${props => props.paddingtop ? props.paddingtop : ""};
    padding-bottom: ${props => props.paddingbottom ? props.paddingbottom : ""};
    border: ${props => props.border ? props.border : ""};
    border-radius: ${props => props.borderradius ? props.borderradius : ""};
    gap: ${props => props.gap ? props.gap : ""};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};

    background-image: url(${ellipse});
    background-position:  right;
    background-repeat: no-repeat;
    background-size: contain;  
    

    @media only screen and (max-width: 580px) {
        height: ${props => props.heightmob ? props.heightmob : ""};    
        flex-direction: ${props => props.flexdirectionmob ? props.flexdirectionmob : ""};
        justify-content: ${props => props.justifycontentmob ? props.justifycontentmob : ""};
        align-items: ${props => props.alignitems ? props.alignitems : ""};
        padding: ${props => props.paddingTotalmob ? props.paddingTotalmob : ""};
        padding-left: ${props => props.paddingleftmob ? props.paddingleftmob : ""};
        padding-right: ${props => props.paddingrightmob ? props.paddingrightmob : ""};
        padding-top: ${props => props.paddingtopmob ? props.paddingtopmob : ""};
        padding-bottom: ${props => props.paddingbottommob ? props.paddingbottommob : ""};
        border: ${props => props.bordermob ? props.bordermob : ""};
        border-radius: ${props => props.borderradiusmob ? props.borderradiusmob : ""};
        gap: ${props => props.gapmob ? props.gapmob : ""};        
    }    
`;