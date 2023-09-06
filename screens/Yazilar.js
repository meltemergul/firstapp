import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'blog.db', location: 'default' });

// SQLite veritabanınızı oluştururken veya güncellerken "create table" sorgusunu çalıştırın.
const createTable = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS blog (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          content TEXT,
          image TEXT
        )`,
                [],
                () => {
                    resolve();
                },
                (error) => {
                    reject(error);
                }
            );
        });
    });
};

export const createBlogEntry = (title, content, image) => {
    return new Promise(async (resolve, reject) => {
        try {
            // SQLite veritabanınızı oluştururken "create table" sorgusunu çalıştırın.
            await createTable();

            db.transaction((tx) => {
                tx.executeSql(
                    'INSERT INTO blog (title, content, image) VALUES (?, ?, ?)',
                    [title, content, image],
                    (tx, results) => {
                        if (results.rowsAffected > 0) {
                            resolve(results.insertId);
                        } else {
                            reject('Ekleme başarısız oldu');
                        }
                    },
                    (error) => {
                        reject(error);
                    }
                );
            });
        } catch (error) {
            reject(error);
        }
    });
};
