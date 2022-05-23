import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  border-radius: 8px;
  height: 45px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 150px;
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: 100%;
  border: none;

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.width ? '160px' : '100%')};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.width ? '140px' : '100%')};
  }

  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.width ? '130px' : '100%')};
  }
`;
