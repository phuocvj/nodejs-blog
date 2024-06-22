
class SiteController {

    // [GET] /news
    index(red, res) {
        res.render('home');
    }

    // [GET] /search
    search(red, res) {
        console.log(red.body);
        res.render(`search`);
    }
}

module.exports = new SiteController;