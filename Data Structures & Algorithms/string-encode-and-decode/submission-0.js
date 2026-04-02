class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    // Format: <len>#<str><len>#<str>...
    // Works even if strings contain '#' because we rely on length.
    let out = "";
    for (const s of strs) {
      out += s.length + "#" + s;
    }
    return out;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const res = [];
    let i = 0;

    while (i < str.length) {
      // 1) Read the length (digits) up to '#'
      let j = i;
      while (str[j] !== "#") j++;

      const len = parseInt(str.slice(i, j), 10);

      // 2) Read next `len` characters as the string
      const start = j + 1;
      const end = start + len;
      res.push(str.slice(start, end));

      // 3) Move pointer
      i = end;
    }

    return res;
  }
}
