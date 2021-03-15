'use strict';

module.exports = function(err, req, res, next) {

    let code, msg = []
    if(err.code && err.msg) code = err.code; msg.push(err.msg)

    if(err.name && err.name == 'SequelizeValidationError') {
        code = 404
        err.errors.forEach(element => {
            msg.push(element.message.split('.')[1])
        });
    }
    res.status(code).json({
        code: code,
        message: msg
    });
};
