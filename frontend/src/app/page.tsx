import styles from "./home.module.scss";
import Posts from "@/components/posts/Posts";
import { axiosApi } from "../../axiosApi";
import Works from "@/components/works/Works";
import Footer from "@/components/footer/Footer";
import About from "@/components/about/About";

const Home = async () => {
  const pages = ["Works", "Blog", "Contacts"];
  const data = await getData();

  return (
    <div className={styles.home_page}>
      <ul className={`${styles.navigation} container`}>
        {pages.map((page) => (
          <li className={styles.navigation_item}>{page}</li>
        ))}
      </ul>

      <div className={styles.main_content}>
        <section>
          <About />
        </section>
        <section className={styles.wrapper}>
          <div className={`${styles.posts} section`}>
            <Posts posts={data.posts} />
          </div>
        </section>
        <section>
          <div className={`${styles.works} section`}>
            <Works works={data.works} />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

const getData = async () => {
  const { data: posts } = await axiosApi("/posts");
  const { data: works } = await axiosApi("/works");

  return {
    posts,
    works,
  };
};

export default Home;
