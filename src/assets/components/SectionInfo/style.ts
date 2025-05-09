import styled from "styled-components";
import ellipse from "../../images/Ellipse.png";

// Type definitions for better type safety
type FlexDirection = "row" | "column";
type JustifyContent = "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
type AlignItems = "flex-start" | "flex-end" | "center" | "stretch";
type BorderRadius = string;
type Color = string;

interface DivFlexPrevType {    
    gap?: string;
    margintop?: string;
    alignitems?: AlignItems;
    justifycontent?: JustifyContent;
    width?: string;
    height?: string;
    flex?: string;
    flexdirection?: FlexDirection;
    paddingTotal?: string;
    paddingleft?: string;
    paddingright?: string;
    paddingtop?: string;
    paddingbottom?: string;
    border?: string;
    borderradius?: BorderRadius;
    maxwidth?: string;
    backgroundColor?: Color;
    backgroundrepeat?: string;
    backgroundposition?: string;

    // Mobile props
    justifycontentmob?: JustifyContent;
    alignitemsmob?: AlignItems;
    heightmob?: string;
    flexdirectionmob?: FlexDirection;
    paddingTotalmob?: string;
    bordermob?: string;
    borderradiusmob?: BorderRadius;
    margintopmob?: string;
    gapmob?: string;
    paddingleftmob?: string;
    paddingrightmob?: string;
    paddingtopmob?: string;
    paddingbottommob?: string;
}

// Default values for common props
const defaultProps = {
    flexdirection: "row" as FlexDirection,
    justifycontent: "flex-start" as JustifyContent,
    alignitems: "stretch" as AlignItems,
    borderradius: "0" as BorderRadius,
};

export const DivFlexPrev = styled.div<DivFlexPrevType>`
    display: flex;
    height: ${props => props.height || "auto"};
    width: ${props => props.width || "100%"};
    flex-direction: ${props => props.flexdirection || defaultProps.flexdirection};
    justify-content: ${props => props.justifycontent || defaultProps.justifycontent};
    align-items: ${props => props.alignitems || defaultProps.alignitems};
    padding: ${props => props.paddingTotal || "0"};
    padding-left: ${props => props.paddingleft || "0"};
    padding-right: ${props => props.paddingright || "0"};
    padding-top: ${props => props.paddingtop || "0"};
    padding-bottom: ${props => props.paddingbottom || "0"};
    border: ${props => props.border || "none"};
    border-radius: ${props => props.borderradius || defaultProps.borderradius};
    gap: ${props => props.gap || "0"};
    background-color: ${props => props.backgroundColor || "transparent"};
    background-image: url(${ellipse});
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;

    @media only screen and (max-width: 580px) {
        height: ${props => props.heightmob || "auto"};
        flex-direction: ${props => props.flexdirectionmob || "column"};
        justify-content: ${props => props.justifycontentmob || "flex-start"};
        align-items: ${props => props.alignitemsmob || "stretch"};
        padding: ${props => props.paddingTotalmob || "0"};
        padding-left: ${props => props.paddingleftmob || "0"};
        padding-right: ${props => props.paddingrightmob || "0"};
        padding-top: ${props => props.paddingtopmob || "0"};
        padding-bottom: ${props => props.paddingbottommob || "0"};
        border: ${props => props.bordermob || "none"};
        border-radius: ${props => props.borderradiusmob || "0"};
        gap: ${props => props.gapmob || "0"};
    }
`;