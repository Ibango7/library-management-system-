import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    container: css`
        margin-top:10px;
    `,

    textStyle: css`
        color: green;
        list-style-type: none;
        display: inline-block;
        padding-right:20px;
      `,
      textStyleText: css`
      line-height: px;
      text-transform: uppercase;
      font-size: 20px;
      `,
      imageStyle: css `
        padding-bottom:0;
        width:50px; 
        height:80px;
      `
});
