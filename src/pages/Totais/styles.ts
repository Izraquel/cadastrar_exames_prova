import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 30px auto 0;
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  h1 {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }
  .back {
    margin-right: 5px;
  }
  table {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
export const Tr = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
