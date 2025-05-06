import styled from "styled-components";

export const MasterContainerButton = styled.div`
    display: flex;
    align-items: center;
    height: 185px;
    width: 100%;
    background-color: #FFFFFF;
    justify-content: center;
    align-items: center;  
    
    @media only screen and (max-width: 800px) {
        
        height: 300px;   
    }

    @media only screen and (max-width: 450px) {
        
        height: 300px;   
    }
`;

export const MainContainerButton = styled.div`
    display: flex;
    width: 1440px;
    height: 180px; 
    align-items: center;

    @media only screen and (max-width: 800px) {
        width: 100%;
        height: 250px;
        flex-direction: column;        
        justify-content: center;
    }

    @media only screen and (max-width: 450px) {
        width: 100%;     
    }
`;

