class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (freqMap[num] === undefined) {
                freqMap[num] = 1;
            } else {
                freqMap[num] ++;
            }
        }
            const entries = Object.entries(freqMap);

            entries.sort(function (a,b) {
                return b[1] - a[1];
            });

            const result = []
            for (let i = 0; i < k; i++) {
                const entry = entries[i][0];
                result.push(entry);
            }
            return result;
    }
}
