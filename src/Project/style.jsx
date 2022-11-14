import styled from 'styled-components';

export const AreaProject = styled.div`

  .item {
    min-width: 100%;
    min-height: 100%;
    padding: 15px;
    margin: 0 5px;
    text-align: center;
    color: #fff;
  }

  .item img{
    width: 310px;
    height: 280px;
    cursor: auto;
    border-radius: 10px;
    transition: all ease-in-out 0.5s;
    filter: brightness(50%)
  }
  

  .item img:hover {
    transform: translateY(-10px);
    filter: brightness(100%);
  }

`;

