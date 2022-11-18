import styled from 'styled-components';

export const AreaMenu = styled.div`
  * {
    text-decoration: none;
    color: #fff;
  }

  .textCenter {
    color: #fff;
    font-family: Share Tech Mono;
    font-size: 38px;
    margin: 0 760px 50px;
    display: inline-block;
  }

  @media screen and (max-width: 1366px) {
    .textCenter {
      color: #fff;
      font-family: Share Tech Mono;
      font-size: 38px;
      margin: 0 480px 50px;
      display: inline-block;
    }
  }

  .textCenter p {
    margin: 0 110px;
    text-transform: capitalize;
  }

  .containerMenu {
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

  .item {
    height: 200px;
    width: 300px;
    font-size: 5em;
    text-align: center;
    cursor: pointer;
    font-family: Share Tech Mono;
    text-transform: capitalize;
    color: #fff;
    transition: all ease-in-out 0.5s;

  }

  .item:hover {
    transform: translateY(-10px);
  }

  p {
    font-size: 25px;
  }


`;
