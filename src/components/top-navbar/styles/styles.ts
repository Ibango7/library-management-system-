import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  navigation: css `
      background-color:blue;
      color:green;
  `,
        "navigation logo": css`
          display: inline-block;
        `,
        logo: css `
          
        `,
        logoImage: css`
         width:50px;
         height:50px;
        `,
        "navigation span": css
       ` text-decoration: none;
       color: #fff;
       margin-right: 20px;`,

        "navigation a:last-child" : css 
        ` margin-right: 0;`
});



