import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar  src="https://github.com/z.png" />
          <div className={styles.authorInfo}>
            <strong>ZoomLC</strong>
            <span>Dev Front-end</span>
          </div>
        </div>

        <time title="11 de setembro de 2023" dateTime="2023-11-11">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
       
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentario" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
     </article>
  );
}
