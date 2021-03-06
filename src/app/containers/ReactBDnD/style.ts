import styled from 'styled-components/macro';

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  height: auto;
  justify-content: center;
  margin: 15px auto;
  box-shadow: 10px 10px 5px grey;
  border: 1px solid #000000;
  text-align: center;
  .title {
    font-family: 'Brush Script MT';
    font-size: 35px;
    font-weight: bold;
  }
  .list-area {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
  }
  @media (max-width: 650px) {
    width: 90%;
  }
`;

export { MainWrapper };
