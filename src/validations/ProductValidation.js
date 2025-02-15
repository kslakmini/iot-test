const Joi = require("joi");

const ProductInitialSchema = (data) => {
  const Schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.string().required(),
  }).unknown();
  return Schema.validate(data);
};

module.exports = {
  ProductInitialSchema,
};
