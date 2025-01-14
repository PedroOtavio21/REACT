import styles from './styles.module.css'

// eslint-disable-next-line react/prop-types
export default function Profile({ avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl}){
    return (
        <div className={styles.container}>
            <img className={styles.img} src={avatar} alt={name} />
            <h2 className={styles.title}>{name}</h2>
            <div>{bio}</div>
            <div>{phone}</div>
            <div>{email}</div>
            <div className={styles.links}>
                <a href={githubUrl} target="_blank">GitHub</a>
                <a href={linkedinUrl} target="_blank">Linkedin</a>
                <a href={twitterUrl} target="_blank">Twitter</a>
            </div>
        </div>
    )
}