import styled from 'styled-components/macro';

const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  width: 380px;
  height: auto;
  border: 1px solid #000000;
  border-radius: 10px;
  margin: 5px;
  :hover {
    box-shadow: 0 0 15px #ece400;
  }
  @media (max-width: 600px) {
    margin: 10px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 180px;
  height: 148px;
  img {
    width: 180px;
    border-top-left-radius: 9px;
    border-bottom-left-radius: 9px;
    @media (max-width: 600px) {
      width: 100%;
      border-top-right-radius: 9px;
      border-bottom-left-radius: 0;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  width: 198px;
  height: auto;
  padding: 5px;
  background-color: #ffffff;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const TextField = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 15px;
  font-style: italic;
  margin: 10px 0;
  justify-content: space-between;
`;

export { BoxWrapper, ImageWrapper, ContentWrapper, TextField };
