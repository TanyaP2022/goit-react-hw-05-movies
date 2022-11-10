import styled from '@emotion/styled';

export const CastStyled = styled.div`
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

  ul{
    display: flex;
    flex-wrap: wrap;
    // padding: 0px;
}
  li{
    // list-style: none; 
    margin: 5px;
    width: 200px;
      box-shadow: 1px 1px 1px rgb(114, 208, 252), 
          4px 4px 4px rgb(114, 208, 252), 
          1px 4px 6px rgb(114, 208, 252);
}
img{
  width: 100%;
}

`

