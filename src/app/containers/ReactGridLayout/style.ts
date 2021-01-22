import styled from 'styled-components/macro';

const ReactGridLayoutWrapper = styled.div`
  display: block;
  width: 90%;
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
    width: 100px;
    display: flex;
    justify-content: center;
    margin: 10px auto;
    border-radius: 5px;
    background-color: greenyellow;
    font-size: 16px;
    font-weight: bold;
    border: 2px solid black;
    outline: none;
    :active {
      transform: scale(0.9);
    }
  }
  .layout {
    margin-top: 10px;
    border-top: 5px solid black;
  }
`;

const BtnArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  height: auto;
  .btn {
    width: 200px;
    display: flex;
    margin: 5px 15px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    border: 2px solid black;
    cursor: pointer;
    :active {
      transform: scale(0.9);
    }
  }
  .add-box {
    background-color: deepskyblue;
  }
  .compact-type {
    background-color: aquamarine;
  }
  .number-cols {
    background-color: limegreen;
  }
  .row-height {
    background-color: gold;
  }
  .remove-boxes {
    background-color: red;
  }
`;

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
`;

const P = styled.p`
  margin: 0;
  width: 100%;
`;

export { ReactGridLayoutWrapper, BtnArea, BtnDiv, LayoutWrapper, P };
