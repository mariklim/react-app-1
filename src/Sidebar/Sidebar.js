import './Sidebar.css'
import articles from '../data/articles.json'
function Sidebar() {
    return (
        <header className="Sidebar-site-sidebar">
            <div>
                <nav>
                    <ul>
                    {articles.map(link=>
                        <li>
                            <a href={link.href}>{link.title}</a>
                        </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Sidebar;