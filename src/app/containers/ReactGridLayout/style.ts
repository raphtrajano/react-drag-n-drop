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
  .btn {
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 20px;
    border-radius: 5px;
    background-color: aqua;
    font-size: 15px;
    font-weight: bold;
    border: 2px solid black;
    outline: none;
  }
  .layout {
    margin-top: 10px;
    border-top: 5px solid black;
  }
`;

export { ReactGridLayoutWrapper };
