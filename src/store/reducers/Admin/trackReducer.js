import * as types from "../../types";
const initialState = {
    tracks: [],
    track: {},
    error: null,
};
const trackReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TRACKS:
            return {
                ...state,
                tracks: action.payload,
            };
        case types.FETCH_TRACK:
            return {
                ...state,
                track: action.payload,
            };
        case types.TRACK_VALIDATE_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case types.DELETE_TRACK:
            return {
                ...state,
                tracks: {
                    ...state.tracks,
                    data: state.tracks.data.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        default:
            return state;
    }
};
export default trackReducer;
