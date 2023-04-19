const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createDiem = {
  body: Joi.object().keys({
    studentCode: Joi.string().required(),
    monhocCode: Joi.string().optional(),
    diem: Joi.string().optional(),
  }),
};

const getDiems = {
  query: Joi.object().keys({
    studentCode: Joi.string(), 
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getDiem = {
  params: Joi.object().keys({
    studentCode: Joi.string().required(), 
  }),
};

const updateDiem = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
    diem: Joi.string().optional(),
    })
    .min(1),
};

const deleteDiem = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

module.exports = {
  createDiem,
  getDiems,
  getDiem,
  updateDiem,
  deleteDiem,
};
