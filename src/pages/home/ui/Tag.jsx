import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 15px;

    span {
        display: inline-block;
        padding: 5px 7px;
        margin-right: 4px;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        border-radius: 6px;

        margin-bottom: 5px;
            

        &:first-child {
            color: #33C2FF;
            background: #EDF8FF;
        }

        &:last-child {
            color: #FEC600;
            background: #FFF7DC;
            margin-right: 0;
        }
    }
`;

function Tag({tag}) {
    return (
        <Wrapper>
            {
                tag !== undefined ?
                tag.map((val, idx)=>{
                    return(
                        <span key={idx}>{val}</span>
                    )
                })
                : null
            }
        </Wrapper>
    )
}

export default Tag;