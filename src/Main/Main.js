import './Main.css'
import articles from '../data/articles.json'
function Main() {
    return (
        <main className="Main-site-main">
            {articles.map(item =>
                <section>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </section>
            )}
        </main>
    );
}
export default Main;