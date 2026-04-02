class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {};

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];

            if (freqMap[num] === undefined) {
                freqMap[num] = 1
            } else {
                freqMap[num] ++
            }
        }

        const entries = Object.entries(freqMap);
        entries.sort(function (a, b) {
            return b[1] - a[1];
        });
    
        const result = []
        for (let i = 0; i < k; i++) {
            result.push(Number(entries[i][0]))
        }
        return result;
    }
}