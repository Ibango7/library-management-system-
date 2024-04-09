import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    pollContainer: css
        `background-color:#635E5D;
        padding: 10px;
        border-radius: 5px;
        width:200px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      `,
      radioOption: css `margin-bottom: 10px;`,
      submitButton: css 
        `background-color: #007bff;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;`,
      
    //   submitButton:hover: css `background-color: #0056b3;` 
});
