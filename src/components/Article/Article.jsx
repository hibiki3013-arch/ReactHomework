import { posts } from '../../data/posts.js';
import styles from './Article.module.css';
import {useParams} from 'react-router-dom';


export default function Article() {

  const {id} = useParams();
  const post = posts.find((post) => post.id === Number(id));
  const [year, month, day] = post.createdAt.split('T')[0].split('-');
  const formattedDate = `${year}/${month}/${day}/`;

   return(
    <div>
    <img src="https://placehold.jp/800x400.png" alt="記事の画像" className={styles.Img}/>

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
      
    </div>  
);
}