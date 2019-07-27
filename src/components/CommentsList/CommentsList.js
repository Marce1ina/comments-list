import React from "react";
import Comment from "../Comment/CommentContainer";
import styles from "./CommentsList.module.scss";

const CommentsList = ({ comments, addComment }) => (
    <ul className={styles.commentsList}>
        {comments.map(comment => (
            <Comment key={comment.id} {...comment} />
        ))}

        <button className={styles.button} onClick={() => addComment(prompt("Your comment:"))}>
            Add comment
        </button>
    </ul>
);

export default CommentsList;
