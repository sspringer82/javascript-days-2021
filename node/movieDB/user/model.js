import sqlite from 'sqlite3';

const db = new sqlite.Database('./movie.db');

export function get(query = {}) {
  return new Promise((resolve, reject) => {
    const queryElements = [];
    if (query) {
      for (let key in query) {
        queryElements.push(`${key} = ?`);
      }
    }

    const queryString = `SELECT * FROM Users WHERE ${queryElements.join(
      ' AND ',
    )}`;

    db.get(queryString, Object.values(query), (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
