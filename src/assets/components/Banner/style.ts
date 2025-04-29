import styled from "styled-components";

export const MainContainer = styled.header`
    display: flex;
    width: 100%;
    height: 583px;
    justify-content: center;
    align-items: center;
`;

export const BannerContainer = styled.div`
    display: flex;
    width: 1440px;
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
