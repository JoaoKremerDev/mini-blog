import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'

export function Comment({ content, deleteComment }) {

    function handleDeleteComment() {
        deleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/JoaoKremerDev.png" hasBorder={false} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João Kremer</strong>
                            <time title="11 de Maio às 8:13" dateTime="2022-05-11 8:13:30">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário" onClick={handleDeleteComment}>
                            <Trash />
                        </button>
                    </header>
                    <p className={styles.commentContentText}>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size="24" />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}