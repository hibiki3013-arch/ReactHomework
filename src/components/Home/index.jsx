import './Home.css';
import { posts } from '../../data/posts.js';



export default function Home() {
    return(
<div className="post-card-main">
    {posts.map((post) => {
      const [year, month, day] = post.createdAt.split('T')[0].split('-');
      const formattedDate = `${year}年${month}月${day}日`;
      const [first, second] = post.categories;
       return (
      <div key={post.id} className="post-card">

      <div className="post-card-between"> 
        <div className="post-card-data">{formattedDate}</div>

        <div className="post-card-category">
        <span className="category-detail">{first}</span>  
        {second && <span className="category-detail">{second}</span>}
        </div>
      </div>

      <div className="post-card-title">
        APIで取得した{post.title}
      </div>
      <div className="post-card-article">
        {post.content.replaceAll('<br/>', '\n')}
      </div>
              
    </div>
            );
          })}
    </div>  
    );
    }