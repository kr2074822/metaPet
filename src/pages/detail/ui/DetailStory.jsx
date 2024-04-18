import styled from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 24px;
    font-size: 0;

    img {
        width: 100%;
        object-fit: cover;
    }
`;

function DetailStory({ image }) {
    return (
        <Wrapper>
            {
                image.map((v, i) => {
                    return (<img src={v} key={i} alt="storyImage" />)
                })
            }
        </Wrapper>
    )
}

export default DetailStory;