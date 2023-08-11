import styled from 'styled-components';
import backgroundImg from '../assets/background.png';

export const DivCard = styled.div`
    background-image: url(${backgroundImg});
    background-position: center;
    background-size: 1000px 740px;
    display: inline-block;
    justify-content: space-between;
    margin: 2%;
    border: 2px black solid;
    padding: 10px 20px 20px 20px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 1px 28px 66px -25px rgba(0,0,0,0.75);
    width: 190px;
    max-height: 500px;

    &:hover {
      box-shadow: 1px 28px 76px -25px #67a3e7;

    }
    
`
export const Img = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px -10px 10px -10px;
  border-radius: 15px;
  border: 2px black solid;
  

`
export const Title = styled.h2`
  display: inline-block;
  text-align: center;
  margin: 0 0 0 0;
  font-size: 16px;
  font-style: italic;
  color: #126b3a;
  // width: 140px;
  // height: 50px
  
`

export const Subtitle = styled.h3`
  display: inline-block;
  text-align: center;
  color: #126b3a;
  font-size: 14px;

`

export const TextRectangle = styled.div`
  display: flex;
  background-color: #8fc748;
  border-radius: 15px;
  justify-content: space-evenly;
  margin: 6px 0 0 0;
  border: 1px black solid;
  box-shadow: 1px 10px 52px -12px rgba(0,0,0,0.75);
`

export const Button = styled.button`
  display: inline-block;
  text-align: center;
  background-color: #b43641;
  color: white;
  border: 1px black solid;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  
  &:hover {
    background-color: #ed2638;
    
  }
`;

