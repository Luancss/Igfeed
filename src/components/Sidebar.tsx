import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1654375408506-d46c2b43308f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1930&q=80"
        alt=""
      />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/104950187?s=400&u=e809a92eca757b1a4b13696524612e9fb4154505&v=4" alt="" />
        <strong>Luan Carlos</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
