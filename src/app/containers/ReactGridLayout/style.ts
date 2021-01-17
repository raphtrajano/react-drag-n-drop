import styled from 'styled-components/macro';

const ReactGridLayoutWrapper = styled.div`
  display: block;
  width: 1200px;
  height: auto;
  margin: 15px auto auto auto;
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
    padding: 2px;
    justify-content: flex-start;
    margin-left: 8.5px;
  }
`;

export { ReactGridLayoutWrapper };