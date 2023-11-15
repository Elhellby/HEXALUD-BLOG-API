const BlogSchema = require("../models/blogModel");
const customError = require("../handlers/customErrorHandler");
const baseResponse = require("../models/baseResponseModel");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

var response = null;
var httpCode = 200;

controller = {
  create: customError(async (req, res, next) => {
    const { title, author, content } = req.body;
    const blog = BlogSchema.build({title:title,author:author,content:content})
    await blog.save()
    response = new baseResponse(true, "Blog registrado.");
    res.status(httpCode).json(response);
  }),
  getAll: customError(async (req, res, next) => {
    const filter = req.query.filter || ""
    const blogos = await BlogSchema.findAll(
      {
        where: {
          [Op.or]:{
            title: { [Op.like]: `%${filter}%` },
            author: { [Op.like]: `%${filter}%` },
            content: { [Op.like]: `%${filter}%` },
          }
        },
      }
    );
    response = new baseResponse(true, "Blog encontrado.", blogos);
    res.status(httpCode).json(response);
  })
};

module.exports = controller;