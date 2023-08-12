import styled from 'styled-components';
import texture from '../assets/texture.png'

export const ButtonTexture = styled.button`
    font-family: 'IBM Plex Sans', sans-serif;   
    background-image: url(${texture});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 90px;
    border: none;
    cursor: pointer;
`



