import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const openDatabase = () => {
    const database = SQLite.openDatabase({ name: 'mblog.db', location: 'default' });
    return database;
};

export const createTables = () => {
    const db = openDatabase();
    db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, image TEXT)'
        );
    });
};

export const insertPost = (title, content, image) => {
    const db = openDatabase();
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO posts (title, content, image) VALUES (?, ?, ?)',
                [title, content, image],
                (_, results) => {
                    resolve(results.insertId);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
};

export const fetchPosts = () => {
    const db = openDatabase();
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM posts',
                [],
                (_, { rows }) => {
                    const posts = [];
                    for (let i = 0; i < rows.length; i++) {
                        const { id, title, content, image } = rows.item(i);
                        posts.push({ id, title, content, image });
                    }
                    resolve(posts);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
};
