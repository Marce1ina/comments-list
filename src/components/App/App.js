import React from "react";
import styles from "./App.module.scss";
import CommentsList from "../CommentsList/CommentsListContainer";

const App = () => {
    return (
        <div className={styles.app}>
            <CommentsList />
        </div>
    );
};

export default App;
