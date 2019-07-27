import { connect } from "react-redux";
import CommentsList from "./CommentsList";
import { addComment } from "../../redux/actions";

const mapStateToProps = state => ({
    comments: state.comments
});

const mapDispatchToProps = dispatch => ({
    addComment: text => dispatch(addComment(text))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsList);
