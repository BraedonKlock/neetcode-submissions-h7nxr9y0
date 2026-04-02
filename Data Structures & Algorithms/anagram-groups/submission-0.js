class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
groupAnagrams(strs) {
    const res = {}; // key: signature string, value: array of anagrams

    for (let i = 0; i < strs.length; i++) {
      const s = strs[i];

      // 26 slots for letters 'a'..'z', all zeros initially
      const count = new Array(26).fill(0);

      // Count each letter in s
      for (let j = 0; j < s.length; j++) {
        const code = s.charCodeAt(j) - 97; // 97 is 'a'

        if (code >= 0 && code < 26) {
          count[code]++; // bump the bucket for this letter
        }
      }

      // Turn the 26 counts into a key
      const key = count.join(',');

      // Create a bucket if this signature hasn't been seen
      if (res[key] === undefined) {
        res[key] = [];
      }

      // Add the original string to its signature bucket
      res[key].push(s);
    }

    // Return just the arrays (buckets) of grouped anagrams
    return Object.values(res);
  }
}
