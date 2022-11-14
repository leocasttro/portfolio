import styled from 'styled-components';

export const AreaCarousel = styled.div`

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

  .buttomBack {
    color: #fff;
    display: inline-block;
    margin-left: 100px;
    font-size: 30px;
  }

  .container {
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

  .inner {
    display: flex;
  }

  .carousel {
    cursor: grab;
    overflow: hidden;
  }

  .techs {
    font-size: 30px;
    margin-left: 850px;
    margin-top: 30px;
  }

  .techs svg {
    margin: 0 10px;
  }
`
