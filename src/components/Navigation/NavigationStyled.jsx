import styled from '@emotion/styled';

export const NavigationStyled = styled.div`
     margin: 10px;

 .link {
     display: inline-block;
     text-decoration: none;
     padding: 8px;
     margin: 10px;
     font-weight: 500;
     color: rgb(38, 38, 36);
     font-size: 18px;
 }

 .active {
        display: inline-block;
            text-decoration: none;
            padding: 8px;
            margin: 10px;
            font-weight: 500;
            border-radius: 10%;
            font-size: 18px;
     color: rgb(38, 38, 36);
     background-color: rgb(114, 208, 252);
      }
      :hover:not(.active),
      :focus-visible:not(.active) {
        color: rgb(243, 247, 156);
      }
`

