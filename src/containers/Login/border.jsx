import styled from 'styled-components';

export default (rgba, inset) => (
  styled.div`
  position: relative;

  height: ${400 + (inset * 2)}px;
  width: ${450 + (inset * 2)}px;
  margin: 0 auto;
  top: 15%;
  background-image: url("assets/sun-icon.svg");
  background-repeat: no-repeat;
  background-origin: content-box;

  padding: 0 25px;
  
`);
export const rgba = (r, g, b, a) => (`${r},${g}, ${b}, ${a}`);
