const httpStatus = require('http-status');
const { Diem } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a student
 * @param {Object} diemBody
 * @returns {Promise<Diem>}
 */
const createDiem = async (diemBody) => {
  return Diem.create(diemBody);
};

/**
 * Query for students
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryDiems = async (filter, options) => {
  const diems = await Diem.paginate(filter, options);
  return diems;
};

/**
 * Get student by id
 * @param {ObjectId} id
 * @returns {Promise<Diem>}
 */
const getDiemById = async (id) => {
  return Diem.findById(id);
};

/**
 * Get student by email
 * @param {string} email
 * @returns {Promise<Diem>}
 */
const getDiemByEmail = async (email) => {
  return Diem.findOne({ email });
};

/**
 * Update student by id
 * @param {ObjectId} diemId
 * @param {Object} updateBody
 * @returns {Promise<Diem>}
 */
const updateDiemById = async (diemId, updateBody) => {
  const diem = await getDiemById(diemId);
  Object.assign(diem, updateBody);
  await diem.save();
  return diem;
};

/**
 * Delete student by id
 * @param {ObjectId} diemId
 * @returns {Promise<Diem>}
 */
const deleteDiemById = async (diemId) => {
  console.log('thanh', diemId);
  const diem = await getDiemById(diemId);
  if (!diem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Diem not found');
  }
  await diem.remove();
  return diem;
};

module.exports = {
  createDiem,
  queryDiems,
  getDiemById,
  getDiemByEmail,
  updateDiemById,
  deleteDiemById,
};
