import './global.css'
import './styles.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import { Header } from './components/Header';

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/JoaoKremerDev.png',
            name: 'João Vitor Melo Kremer',
            role: 'Front-end Developer'
        },
        content: [
            { type: 'paragraph', content: 'Fala, pessoal!' },
            {
                type: 'paragraph', content: 'Este post é apenas um exemplo para que você possa ver como funciona a nossa plataforma!',
            },
            { type: 'link', content: 'siga aqui' }
        ],
        publishedAt: new Date('2024-04-04 20:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/JoaoKremerDev.png',
            name: 'Max Melo Kremer',
            role: 'Front-end Developer'
        },
        content: [
            { type: 'paragraph', content: 'Fala, pessoal!' },
            {
                type: 'paragraph', content: 'Este post é apenas um exemplo para que você possa ver como funciona a nossa plataforma!',
            },
            { type: 'link', content: 'siga aqui' }
        ],
        publishedAt: new Date('2024-04-04 20:00:00')
    },
]


export default function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <aside>
                    <Sidebar />
                </aside>
                <main>
                    {posts.map(post => (
                        <Post
                            key={post.id}
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    ))}
                </main>

            </div>

        </div>
    )
}