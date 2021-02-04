import React,{useEffect} from 'react';
import styled from 'styled-components';
import PhotoList from "../../photos/PhotoList";
import {useSelector} from "react-redux";
import {photoActions} from "../../../redux/ActionCreators";
import {UNSPLASH_CLIENT_ID} from "../../../constants";

const Photos = () => {

    const {photos} = useSelector(state => state.photo);

    useEffect(() => {
        getPhotos();
    },[]);

    const getPhotos = () => {
        photoActions.getPhotos({
            per_page:18,
            client_id:UNSPLASH_CLIENT_ID
        })
    }

    return(
        <Container>
            <PhotoList photos={photos}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Photos;