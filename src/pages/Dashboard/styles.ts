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
  a {
    text-decoration: none;
    color: #fff;
  }
  h1 {
    margin-bottom: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 90%;
    margin: 15px auto 0;
    padding: 20px;
    input {
      padding: 4px;
      margin-bottom: 10px;
    }
    h1 {
      margin-bottom: 10px;
    }
    table {
      width: 100%;
      max-width: 100%;
      padding: 20px;
    }
    input {
      padding: 4px;
      margin-bottom: 10px;
    }
    a {
      align-items: baseline;
      padding: 10px;
      padding: 8px 15px;
      border-radius: 5px;
      border: 0;
    }
    th {
      text-align: center;
    }
    td {
      text-align: center;
    }
  }
`;

export const ContainerTable = styled.table`
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
  table {
    width: 100%;
    max-width: 100%;
    padding: 20px;
  }
  input {
    padding: 4px;
    margin-bottom: 10px;
  }
  a {
    align-items: baseline;
    padding: 10px;
    padding: 8px 15px;
    border-radius: 5px;
    border: 0;
  }
  th {
    text-align: center;
  }
  td {
    text-align: center;
  }
  button {
    background: linear-gradient(45deg, #ff1493, #5a00e0);
    color: #fff;
    padding: 8px 15px;
    border-radius: 5px;
    border: 0;
    margin-left: 50px;
  }
  button:hover {
    background-color: #487eb0;
    transition: 1s;
  }
`;
export const Button = styled.button`
  background: linear-gradient(45deg, #ff1493, #5a00e0);
  color: #fff;
  padding: 8px 15px;
  border-radius: 5px;
  border: 0;
  margin-top: 5px;
`;
