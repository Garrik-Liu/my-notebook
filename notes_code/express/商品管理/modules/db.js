// 操作 MongoDB 数据库的模块

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


function _connectDb(dbUrl, callback) {
    MongoClient.connect(dbUrl, (err, db) => {
        if (err) {
            console.log(err);
        } else {
            callback(db);
        }
    });
}

// 增加
function dbAdd(dbUrl, targetDb, targetCol, obj, callback) {
    _connectDb(dbUrl, (db) => {
        const dbase = db.db(targetDb);
        dbase.collection(targetCol).insertOne(obj, (err, result) => {
            db.close();
            callback(err, result);
        })
    })
}

// 删减
function dbDelete(dbUrl, targetDb, targetCol, query, callback) {
    _connectDb(dbUrl, (db) => {
        const dbase = db.db(targetDb);
        dbase.collection(targetCol).remove(query, { justOne: true }, (err, data) => {
            db.close();
            callback(err, data);
        });
    })
}

// 改动
function dbUpdate(dbUrl, targetDb, targetCol, query, newData, callback) {
    _connectDb(dbUrl, (db) => {
        const dbase = db.db(targetDb);
        dbase.collection(targetCol).updateOne(query, { $set: newData }, (err, result) => {
            db.close();
            callback(err, result);
        });
    })
}

// 查找
function dbFind(dbUrl, targetDb, targetCol, query, callback) {
    _connectDb(dbUrl, (db) => {
        const dbase = db.db(targetDb);
        let result = dbase.collection(targetCol).find(query)

        result.toArray((err, data) => {
            db.close();
            callback(err, data);
        });
    })
}

module.exports = {
    find: dbFind,
    delete: dbDelete,
    add: dbAdd,
    update: dbUpdate,
    ObjectID: ObjectID,
}