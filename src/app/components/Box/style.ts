import styled from 'styled-components/macro';

const BoxWrapper = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  width: 380px;
  height: 150px;
  border: 1px solid #000000;
  border-radius: 10px;
  margin: 5px;
  transition: all 0.2s ease-in-out;
  :hover {
    box-shadow: 0 0 15px #ece400;
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
  }
`;

const ContentWrapper = styled.div`
  width: 198px;
  height: auto;
  padding: 5px;
  background-color: #ffffff;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
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
