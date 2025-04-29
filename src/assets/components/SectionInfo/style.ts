import styled from "styled-components";

interface ImageContainerInfoType {
    paddingtop?: string
}

export const MasterContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 673px;
    width: 100%;
    background-color: #FFFFFF;
    justify-content: center;
    align-items: center;              
`;
export const MainContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 1440px;
    height: 673px; 
    align-items: center;   
`;

export const ImageContainerInfo = styled.img<ImageContainerInfoType>`
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding-top: ${(props: ImageContainerInfoType) => props.paddingtop ? props.paddingtop : ""};            
`;