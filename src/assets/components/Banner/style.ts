import styled from "styled-components";

export const MainContainer = styled.header`
    display: flex;
    width: 100%;
    height: 583px;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 800px) {
        width: 100%;
        height: 900px;
        flex-direction: column;
    }

    @media only screen and (max-width: 400px) {
        width: 100%;
        height: 650px;
        flex-direction: column;
    }
`;

export const BannerContainer = styled.div`
    display: flex;
    width: 1440px;
    height: 583px;
    
    background-image: linear-gradient(to right,  #023D69, #0055A5 40%,  #F5C766); 
    
    @media only screen and (max-width: 800px) {
        width: 800px;
        height: 1600px;
        flex-direction: column;
    }
    
    @media only screen and (max-width: 400px) {
        width: 400px; 
        height: 1700px;        
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    width: 100%; 
    height: 533px; 
    
    justify-content: flex-end;

    @media only screen and (max-width: 800px) {
        justify-content: start;
        flex-direction: column;
        align-items: center;
    }

    @media only screen and (max-width: 800px) {
        width: 400px;
        height: 300px;
    }
`;

export const BannerImage = styled.img`
    align-items: flex-end; 
    height: 533px; 
    padding-right: 80px;   
    margin-top: 25px;
    
    @media only screen and (max-width: 800px) {
        padding-right: 0px;
        margin-top: 0px;
        padding-bottom: 50px;
        padding-top: 50px;
    }

    @media only screen and (max-width: 400px) {
        height: 350px;        
    }
`;

export const BannerTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 583px;
    padding-left: 80px;

    @media only screen and (max-width: 800px) {
        justify-content: center;
        align-items: center; 
        padding-left: 0px;
        padding-top: 50px;
    }

    @media only screen and (max-width: 400px) {
        width: 400px;
    }
`;

export const TextContainer = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 70px;
    font-weight: 700;
    color: #FFFFFF;

    @media only screen and (max-width: 400px) {
        font-size: 50px;
        font-weight: 500;        
    }

`;
