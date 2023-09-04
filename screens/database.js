import mblog from './mblog';

export const addYazi = (title, content) => {
    return new Promise((resolve, reject) => {
        mblog.transaction(tx => {
            tx.executeSql(
                'INSERT INTO yazilar (title, content) VALUES (?, ?)',
                [title, content],
                (_, result) => {
                    resolve(result);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
};
