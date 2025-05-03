import styled from "styled-components";

export const HeaderMainContainer = styled.header`
    display: flex;
    align-items: center;
    height: 185px;
    width: 100%;    
    justify-content: center;
    align-items: center;
`;

export const HeaderContainer = styled.div`
    display: flex;
    height: 129px;
    width: 1440px;
    align-items: center;   
    justify-content: space-between; 
    background-color: #FFFFFF;    
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    padding-left: 80px;    
`;

export const LogoHeader = styled.img`
    width: 235px;       
`;

export const SocialContainer = styled.div`
    display: flex;    
    flex-direction: row;    
    align-items: flex-end;  
    margin-right: 80px; 
    padding-top: 56px; 
`;

export const SocialIcon = styled.img`
    width: 57px;
    margin-left: 2px;
    cursor: pointer;
`;