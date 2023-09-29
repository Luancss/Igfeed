import { Header } from "./components/Header";
import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Luan Carlos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem inventore velit corrupti explicabo! Ex quam, voluptate ut atque."
          />
          <Post
            author="Souza da Silva"
            content="Corrupti explicabo! Ex quam, voluptate ut atque maxime eaque soluta laboriosam."
          />
        </main>
      </div>
    </>
  );
}

export default App;
