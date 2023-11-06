const BlogSchema = require("../models/blogModel");
const customError = require("../handlers/customErrorHandler");
const baseResponse = require("../models/baseResponseModel");
var response = null;
var httpCode = 200;
controller = {
  create: customError(async (req, res, next) => {

    console.log(req.body)

    const blog = new BlogSchema(req.body);

console.log(blog)

    await blog.save()


    response = new baseResponse(true, "Blog registrado.");

    res.status(httpCode).json(response);
  }),
  getAll: customError(async (req, res, next) => {
    const filter = req.query.filter || ""
    const blogos = await BlogSchema.find({
      $or: [
        { title: new RegExp(filter, 'i') },
        { author: new RegExp(filter, 'i') },
        { content: new RegExp(filter, 'i') }
      ]
    });
    response = new baseResponse(true, "Blog encontrado.", blogos);
    res.status(httpCode).json(response);
  })
};

module.exports = controller;