import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'


export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([1, 2])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    }).format(publishedAt);


    function handleCreateNewComment() {
        event.preventDefault();
        console.log(event)

        setComments([...comments, newCommentText]);
        setNewCommentText(''); //

    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    function deleteComment(comment) {
        setComments(comment);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime="2022-05-11 8:13:30">{publishedDateFormatted}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href="#">#{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe seu feedback</strong>
                <textarea className={styles.text} name="comment" onChange={handleNewCommentChange} value={newCommentText} />
                <footer>
                    <button type="submit" className={styles.submit}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => (
                    <Comment key={comment.id} content={comment} deleteComment={deleteComment} />
                ))}
            </div>

        </article>
    )
}