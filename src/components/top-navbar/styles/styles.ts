import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  navigation: css
        `padding: 0 10px;`,

        "navigation span": css
       ` text-decoration: none;
       color: #fff;
       margin-right: 20px;`,

        "navigation a:last-child" : css 
        ` margin-right: 0;`
});



