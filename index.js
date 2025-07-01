/**
 * 反转字符串函数
 * @param {string} str 
 * @returns {string}
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

module.exports = reverseString;
