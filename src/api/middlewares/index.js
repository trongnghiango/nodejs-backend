module.exports = {
  /**
   * Middleware auth - viec dung return chi  khi nao dừng lại flow, còn nếu tiếp tục các bước tieps theo thi next()
   * @param {express.Request} req - Đối tượng yêu cầu
   * @param {express.Response} res - Đối tượng phản hồi
   * @param {function} next - Hàm tiếp theo để chuyển sang middleware hoặc route tiếp theo
   * @returns
   */
  isLogined: (req, res, next) => {
    if (!req.user) return new Error('Not User Login')
    return next()
  },
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async handleXXX(req, res, next) {
    if (!req.user) return new Error('Not User Login')
    return next()
  },
}
