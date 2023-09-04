import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
        name: 'mblog.db',
        location: 'default',
    },
    () => { },
    error => {
        console.error('Error opening database:', error);
    }
);

// Tablo oluşturma işlemi
db.transaction(tx => {
    tx.executeSql(
        'CREATE TABLE IF NOT EXISTS yazilar (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT)',
        [],
        () => { },
        (_, error) => {
            console.error('Error creating table:', error);
        }
    );
});

export default db;
