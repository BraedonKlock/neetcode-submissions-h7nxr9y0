class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (freq[num] === undefined) {
                freq[num] = 1
            } else {
                freq[num] ++;
            }
        }

        const entries = Object.entries(freq);

        entries.sort(function (a,b) {
            return b[1] - a[1];
        });

        const result = [];
        for (let i = 0; i < k; i ++) {
            result.push(Number(entries[i][0]))
        }
        return result;
    }
}
