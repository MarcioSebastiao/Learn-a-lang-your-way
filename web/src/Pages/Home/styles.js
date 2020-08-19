import styled from 'styled-components'

export const Warning = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    span {
        cursor: pointer;
        color: #f03d5b;
        :hover {
                color: #eb687e;
            }
        }
`;

export const HubContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-around;
`;

export const Edit = styled.div``;

export const Card = styled.div`
    position: relative;
    width: calc(100% - 30px);
    max-height: 150px;
    overflow: auto;
    min-width: 300px;
    margin: 10px 0 0 15px;
    border-bottom: 1px solid #576570;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;

    > span {
        color: #c9c9c9;
    }

    ul {
        margin: 20px;
        li {
            margin: 5px 0;
            list-style: none;
            font-style: italic;
            color: #c9c9c9;
        }
    }


    ::-webkit-scrollbar {
        display: none;
    }
    :hover > ${Edit} {
        display: block;
    }   

    ${Edit} {
        position: absolute;
        right: 0;
        bottom: 0;
        display: none;
        background-color: #333f49;
        border-radius: 20px;
        font-size: 20px;

        .confirm-remove {
            display: none;
            text-align: center;
            padding: 10px;
            font-size: 14px;
            background-color: #2f3942;
            border-radius: 10px;
            a {
                display: block;
                margin-top: 5px;
                cursor: pointer;
                text-decoration: none;
                color: #f03d5b;
                margin-right: 20px;
            }
        }

        svg {
            cursor: pointer;
            margin: 5px 10px;
        }
    }

    .definition {
        margin: 10px;
        span {
            font-size: 12px;
            font-style: italic;
            font-weight: bold;
        }
        p {
            margin-left: 10px;
            display: inline-block;
        }
    }

`;

