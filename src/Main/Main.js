import './Main.css'
import articles from '../data/articles.json'
function Main(){
    return (
        <main className="Main-site-main">
            {articles.map(item=><h2>{item.title}</h2>)}
        </main>
    );
}
export default Main;