import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vh;
    display: flex;
    justify-content: center;
`;

const Loader = () =>  <Container>
    <span role="img" aria-label="Loading">
        ⏰
    </span>
</Container>

export default Loader;