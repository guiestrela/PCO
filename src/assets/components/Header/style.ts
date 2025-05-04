import styled from "styled-components";

export const HeaderMainContainer = styled.header`
    display: flex;
    align-items: center;
    height: 185px;
    width: 1440;    
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 800px) {
        width: 800px;
    }

    @media screen and (max-width: 600px) {
        width: 600px;
    
    }
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
    justify-content: flex-start;
    align-items: center;
    padding-left: 80px;  
    
    @media only screen and (max-width: 800px) {
        margin-left: 0px;
    }

    @media screen and (max-width: 600px) {
        margin-left: 0px;
    
    }
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

    @media only screen and (max-width: 800px) {
        margin-right: 40px;       
    }

    @media screen and (max-width: 600px) {
        margin-right: 20px;     
    }
`;

export const SocialIcon = styled.img`
    width: 57px;
    margin-left: 2px;
    cursor: pointer;
`;