import React, { useCallback } from 'react';
import styles from './Authors.module.css';

const AUTHORS = {
  positiveko: {
    name: 'positiveko',
    title: 'Front End Engineer',
    url: 'https://github.com/positiveko',
    image_url: 'https://github.com/positiveko.png',
  },
  saengmotmi: {
    name: 'saengmotmi',
    title: 'Front End Engineer',
    url: 'https://github.com/saengmotmi',
    image_url: 'https://github.com/saengmotmi.png',
  },
  Jtree03: {
    name: 'Jtree03',
    title: 'Software Engineer',
    url: 'https://github.com/jtree03',
    image_url: 'https://github.com/jtree03.png',
  },
  yongsk0066: {
    name: 'yongsk0066',
    title: 'Front End Engineer',
    url: 'https://github.com/yongsk0066',
    image_url: 'https://github.com/yongsk0066.png',
  },
} as const;

type TAuthor = keyof typeof AUTHORS;

interface IAuthors {
  bookLeader: TAuthor;
  authors?: TAuthor[];
}

export default function Authors({
  bookLeader,
  authors,
}: IAuthors): JSX.Element {
  const Author = ({ author }: { author: TAuthor }): JSX.Element => {
    const authorInfo = AUTHORS[author];

    return (
      <div className={styles.author}>
        <a
          href={authorInfo.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.avatar__link}
        >
          <img
            src={authorInfo.image_url}
            alt={author}
            className={styles.avatar__photo}
          />
        </a>
        <div className={styles.avatar__info}>
          <span className={styles.bold}>
            {authorInfo.name} {author === bookLeader && ` 🏆`}
          </span>
          <span>{authorInfo.title}</span>
        </div>
      </div>
    );
  };

  const renderAuthors = useCallback((): JSX.Element => {
    return (
      <div className={styles.authors}>
        {AUTHORS[bookLeader] && <Author author={bookLeader} />}
        {authors &&
          authors.map((author) => {
            if (AUTHORS[author]) {
              return <Author author={author} key={author} />;
            }
          })}
      </div>
    );
  }, [bookLeader, authors]);

  return (
    <section>
      <span className={styles.title}>written by</span>
      {renderAuthors()}
    </section>
  );
}
