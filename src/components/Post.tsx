import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/104950187?s=400&u=e809a92eca757b1a4b13696524612e9fb4154505&v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Luan Carlos</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de setembro de 2023" dateTime="2023-11-11">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galera 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉<a href="">jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  );
}
