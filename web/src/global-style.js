import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font: 400 14px Roboto, sans-serif;
        background-color: #333f49;
        -webkit-font-smoothing: antialiased;
        color: #ffffff;
    }

    .container {
        margin: 20px auto;
        padding: 20px;
        max-width: 960px;
        width: auto;
    }

    input,
    button,
    textarea {
    font: 400 18px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
        padding: 5px 10px;
    }
    input{
        ::placeholder {
            color: #c9c9c9;       
        }
        &[type = "text"] {
            margin-top: 10px;
            width: 100%;
            height: 40px;
            color: #ffffff;
            border: none;
            border-radius: 8px;
            padding: 0 24px;
            background-color: #576570;
        }
    }
    textarea {
            ::placeholder {
                color: #c9c9c9;       
            }
            margin-top: 10px;
            width: 100%;
            resize: vertical;
            min-height: 100px;
            max-height: 500px;
            color: #ffffff;
            border: none;
            border-radius: 8px;
            padding: 16px 24px;
            line-height: 24px;
            background-color: #576570;
        }
    
    form {
        position: relative;
        margin: 0 auto;
        max-width: 500px;
        button {
            position: absolute;
            right: -70px;
            bottom: 0;
        }
    }
    .arrowLeft {
        font-size: 30px;
        color: #e02041;
        cursor: pointer;
    }
`;