import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    contentStyle: css`
        height: 160px;
        width: 765px;
        color: #fff;
        line-height:160px;
        margin: 0 auto;
        margin-top:20px;
        text-align: center;
        background: #635E5D;
        border-radius:5px;
      `,
      imageStyle: css`
      height: 160px;
      width: 765px;
    `,
    cardContainer: css`
        width:770px;
        margin:0 auto
        `,
    textAlignLeft: css`
        text-align: left;
        margin-bottom:-15px;
    `,
    textAlignRight: css`
    text-align: right
`,
});