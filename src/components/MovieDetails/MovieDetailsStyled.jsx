import styled from '@emotion/styled';

export const MovieDetailsStyled = styled.div`
//   display: flex;
  align-items: center;
//   border-radius: 4px;
//   text-decoration: none;
//   color: rgb(114, 208, 252);
//   &.active {
//     background-color: rgb(243, 247, 156);
//     color: (114, 208, 252);
//   }
//   :hover:not(.active),
//   :focus-visible:not(.active) {
//     color: rgb(243, 247, 156);
//   }
button{
  margin: 0px auto 10px 10px;
  background-color: rgb(114, 208, 252);
  border-color: rgb(114, 208, 252);
  color: rgb(38, 38, 36);
}
.card{
  display: flex;
    margin: 0px 10px 10px 10px;
}
img{
  margin-right: 10px;
}
.right{
display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  h2{
    color: rgb(114, 208, 252);
  }
  p{
    // color: rgb(243, 247, 156);
  }
  b{
    color: rgb(114, 208, 252);
  }
  .genres{
    display: flex;
    flex-direction: row;
    align-content: center;
  }
  .text{
    margin: 0px 5px 0px 5px;
  }
  .information{
    text-align: center;
    color: rgb(114, 208, 252);
  }
  ul{
    // display: flex;
    // flex-wrap: wrap;
    padding: 0px;
}
  li{
    list-style: none; 
    margin: 5px auto 0px 10px;
      // box-shadow: 1px 1px 1px rgb(114, 208, 252), 
      //     4px 4px 4px rgb(114, 208, 252), 
      //     1px 4px 6px rgb(114, 208, 252);
}


`

