// catchAsync
// const catchAsync = (fn) => (req, res, next) => {
//   Promise.resolve(fn(req, res, next)).catch((err) => next(err))
// }

const catchAsync = (fn) => (req, res, next) => fn(req, res, next).catch(next)

module.exports = catchAsync
