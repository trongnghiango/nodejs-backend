/**
 * @typedef {Object} User
 * @property {string} id - ID của người dùng.
 * @property {string} name - Tên của người dùng.
 * @property {number|undefined} age - Tuổi của người dùng, có thể là số, null hoặc undefined.
 */

/**
 * Tạo một đối tượng người dùng.
 *
 * @function
 * @param {string} id - ID của người dùng.
 * @param {string} name - Tên của người dùng.
 * @param {number|undefined} [age] - Tuổi của người dùng, có thể không được cung cấp.
 * @returns {User} - Đối tượng người dùng.
 * @throws {Error} - Nếu tham số không hợp lệ.
 * @example
 * // Ví dụ sử dụng
 * const user1 = createUser('1', 'Alice', 30);
 * const user2 = createUser('2', 'Bob');
 * console.log(user1); // Kết quả: { id: '1', name: 'Alice', age: 30 }
 * console.log(user2); // Kết quả: { id: '2', name: 'Bob', age: undefined }
 */
function createUser(id, name, age) {
  if (
    typeof id !== 'string' ||
    typeof name !== 'string' ||
    (age !== undefined && typeof age !== 'number')
  ) {
    throw new Error('Invalid input types.')
  }

  /** @type {User} */
  const user = {
    id,
    name,
    age, // Nếu age là null, sẽ gán là undefined
  } // Biến local dạng object để lưu thông tin người dùng

  return user // Trả về đối tượng người dùng
}

/**
 * Tính toán trung bình của một mảng số.
 *
 * @function
 * @param {number[]} numbers - Mảng các số để tính toán trung bình.
 * @returns {number} - Trung bình của các số trong mảng.
 * @throws {Error} - Nếu mảng rỗng hoặc không phải là mảng số.
 * @example
 * // Ví dụ sử dụng
 * const avg = calculateAverage([1, 2, 3, 4, 5]);
 * console.log(avg); // Kết quả: 3
 * @async
 */
async function calculateAverage(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('Input must be a non-empty array of numbers.')
  }
  const total = numbers.reduce((acc, num) => acc + num, 0)
  return total / numbers.length
}

/**
 * Tính toán trung bình của một danh sách số.
 *
 * @function
 * @param {...number} numbers - Danh sách các số để tính toán trung bình.
 * @returns {number} - Trung bình của các số được cung cấp.
 * @throws {Error} - Nếu không có số nào được cung cấp.
 * @example
 * // Ví dụ sử dụng
 * const avg = calculateAverage(1, 2, 3, 4, 5);
 * console.log(avg); // Kết quả: 3
 * @async
 */
async function calculateAverageV2(...numbers) {
  if (numbers.length === 0) {
    throw new Error('At least one number must be provided.')
  }
  const total = numbers.reduce((acc, num) => acc + num, 0)
  return total / numbers.length
}

module.exports = { createUser, calculateAverage, calculateAverageV2 }
