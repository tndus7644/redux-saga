import React from 'react';
import styled from 'styled-components';
import Photos from "./components/pages/photos";
import {GlobalStyle} from "./components/Styled/Common.Styled";

const App = () => {

    return(
        <Container>
            <GlobalStyle/>
            <Photos/>
        </Container>
    )
}

const Container = styled.div`

`;


export default App;