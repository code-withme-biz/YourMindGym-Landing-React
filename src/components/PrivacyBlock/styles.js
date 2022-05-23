import styled from 'styled-components';

export const MiddleBlock = styled.section`
  position: relative;
  padding: 4.5rem 0 3rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 3.5rem 0 3rem;
  }
`;

export const Content = styled.p`
  padding: 0rem 0 2rem;
`;

export const ContentWrapper = styled.div`
  max-width: 900px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ServiceLink = styled.p`
  color: rgba(2, 7, 62, 0.8);
  max-width: 170px;
  border-bottom: 1px solid rgba(2, 7, 62, 0.8);
  cursor: pointer;
  margin-top: 1rem;
  margin-left: 3rem;
  margin-bottom: 3rem;
  &:hover {
    border-bottom: 1px solid rgb(255, 130, 92);
    color: rgb(255, 130, 92);
  }
`;