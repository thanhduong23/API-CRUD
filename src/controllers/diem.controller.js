const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { diemService } = require('../services');

const createDiem = catchAsync(async (req, res) => {
  const diem = await diemService.createDiem(req.body);
  res.status(httpStatus.CREATED).send(diem);
});

const getDiems = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await diemService.queryDiems(filter, options);
  res.send(result);
});

const getDiem = catchAsync(async (req, res) => {
  const diem = await diemService.getDiemById(req.params.id);
  if (!diem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Diem not found');
  }
  res.send(diem);
});

const updateDiem = catchAsync(async (req, res) => {
  const diem = await diemService.updateDiemById(req.params.id, req.body);
  res.send(diem);
});

const deleteDiem = catchAsync(async (req, res) => {
  await diemService.deleteDiemById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createDiem,
  getDiems,
  getDiem,
  updateDiem,
  deleteDiem,
};
