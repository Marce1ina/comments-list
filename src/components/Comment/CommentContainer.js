import { connect } from "react-redux";
import Comment from "./Comment";
import { thumbUpComment, thumbDownComment, editComment, removeComment } from "../../redux/actions";

const mapDispatchToProps = dispatch => ({
    thumbUpComment: id => dispatch(thumbUpComment(id)),
    thumbDownComment: id => dispatch(thumbDownComment(id)),
    editComment: (text, id) => dispatch(editComment(text, id)),
    removeComment: id => dispatch(removeComment(id))
});

export default connect(
    null,
    mapDispatchToProps
)(Comment);
