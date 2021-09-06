const Category = require('./categories.model');
module.exports.createPosts = async function (blog) {
  return Category.create(blog);
}

module.exports.getPosts = async function () {
  return Category.find({});
}