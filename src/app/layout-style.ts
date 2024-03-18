import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    layoutStyle: css
        `border-radius: 0;;
        overflow: hidden;
        width: 100%;
        max-width: 100%;`,

    headerStyle: css
       ` text-align: right;
        background-color: #635E5D;`,
    footerStyle: css 
        `text-align: center;
        color: #fff;
        background-color: #635E5D;`,
    
    contentStyle: css
       ` text-align: center;
        height: 90%;
        line-height: 120px;
        color: #000;
        background-color: #fff;
        height:150vh;`,

    siderStyle: css
       ` background-color:#635E5D;
         color: #ffff;
       `

});
