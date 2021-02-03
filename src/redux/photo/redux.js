const initialState = {
    photos: []
}

export const Action = {
    Types: {
        GET_PHOTOS: 'GET_PHOTOS',
        UPDATE_STATE:'UPDATE_STATE'
    },
    Creators: {
        updateState:(props) => ({
            type:Action.Types.UPDATE_STATE,
            props
        }),
        getPhotos: (data) => ({
            type: Action.Types.GET_PHOTOS,
            data
        })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:{
            return state
        }
        case Action.Types.UPDATE_STATE:{
            return{
                ...state,
                ...action.props
            }
        }
    }
}

export default reducer;