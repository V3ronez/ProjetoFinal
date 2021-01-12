module.exports = app => {
    const stat = app.mongoose.model('stat', {
        users: Number,
        categories: Number,
        articles: Number,
        createdAt: Date
    })

    const get = (req, res) => {
        stat.findOne({}, {}, { sort: { 'createdAt': -1 } })
            .then(stat => {
                const defautStat = {
                    users: 0,
                    categories: 0,
                    articles: 0,
                }
                res.json(stat || defautStat)
            })
    }
    return { stat, get }
}