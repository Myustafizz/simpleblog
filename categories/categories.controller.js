const categoryService = require('./categories.service');
module.exports.createPosts = async function(req, res, next) {
    const blog = req.body;
    const createdB = await categoryService.createPosts(blog);
    return res.json(createdB);
  }


  module.exports.getPosts = async function (req, res) {
    const categories = await categoryService.getPosts();
    return res.json(categories);
}
