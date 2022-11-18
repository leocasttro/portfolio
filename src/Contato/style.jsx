import styled from 'styled-components';

export const AreaContato = styled.div`

  * {
      text-decoration: none;
      color: #fff;
    }

    h1 {
    color: #fff;
    font-size: 38px;
    margin-left: 860px;
    margin-bottom: 40px;
    font-weight: lighter;
  }

  @media screen and (max-width: 1366px) {
    h1 {
      color: #fff;
      font-size: 38px;
      margin-left: 570px;
      margin-bottom: 40px;
      font-weight: lighter;
    }
  }


  .containerContato {
    margin: 0 auto;
    display: flex;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.137);
    padding: 15px;
    max-width: 700px;
    height: 600px;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    backdrop-filter: blur(10px);
  }

  .buttomBack {
    color: #fff;
    display: inline-block;
    margin-left: 100px;
    font-size: 30px;
  }

  .itemsContato {
    font-size: 55px;
  }
  
  .itemContato, p {
    font-size: 25px;
  }

`;