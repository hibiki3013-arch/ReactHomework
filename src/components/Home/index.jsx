
import { posts } from '../../data/posts.js';
import styles from './Home.module.css';



export default function Home() {
    return(
<div className={styles.PostCardMain}>
    {posts.map((post) => {
      const [year, month, day] = post.createdAt.split('T')[0].split('-');
      const formattedDate = `${year}年${month}月${day}日`;
       return (
      <div key={post.id} className={styles.PostCard}>

      <div className={styles.PostCardBetween}> 
        <div className={styles.PostCardData}>{formattedDate}</div>

        <div className={styles.PostCardCategory}>
        {post.categories.map((category, index) => {
          return(
            <span key={index} className={styles.CategoryDetail}>{category}</span>
          )
        }
      )}
      </div>
      </div>

      <div className={styles.PostCardTitle}>
        APIで取得した{post.title}
      </div>

      <div className={styles.PostCardArticle} dangerouslySetInnerHTML={{ __html: post.content }} /></div>
            );
          })}
    </div>  
);
}