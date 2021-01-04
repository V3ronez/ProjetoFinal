//utilizando consign
module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)

}

//sem consign
// const user = require('../api/user')

// module.exports = app => {
//     app.route('/users')
//         .post(user.save)