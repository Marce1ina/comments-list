import { ACTION_TYPES } from "./actions";

export default function comments(state = [], action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_COMMENT:
            return [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                },
                ...state
            ];

        case ACTION_TYPES.REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);

        case ACTION_TYPES.EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return { ...comment, text: action.text };
                }
                return comment;
            });

        case ACTION_TYPES.THUMB_UP_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return { ...comment, votes: comment.votes + 1 };
                }
                return comment;
            });

        case ACTION_TYPES.THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return { ...comment, votes: comment.votes - 1 };
                }
                return comment;
            });

        default:
            return state;
    }
}
