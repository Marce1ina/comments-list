import React from "react";
import styles from "./Comment.module.scss";

const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment }) => (
    <li className={styles.comment}>
        <div className={styles.text}>{text}</div>
        <div className={styles.votes}>votes: {votes}</div>
        <button className={styles.button} onClick={() => thumbUpComment(id)}>
            Thumb up
        </button>
        <button className={styles.button} onClick={() => thumbDownComment(id)}>
            Thumb down
        </button>
        <button className={styles.button} onClick={() => editComment(prompt("Enter new comment text"), id)}>
            Edit
        </button>
        <button className={styles.button} onClick={() => removeComment(id)}>
            Remove comment
        </button>
    </li>
);

export default Comment;
