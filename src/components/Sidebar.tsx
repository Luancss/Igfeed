import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import {Avatar} from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1654375408506-d46c2b43308f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1930&q=80"
        alt=""
      />
      <div className={styles.profile}>
        <Avatar  src="https://github.com/Luancss.png"/>
        <strong>Luan Carlos</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        
        <a href="#"> <PencilLine size={20}/> Editar seu perfil</a>
      </footer>
    </aside>
  );
}
