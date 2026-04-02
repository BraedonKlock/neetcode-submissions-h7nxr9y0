class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /**[value, freq]
         *    0   , 1
         */
        const freqMap = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]

            if(freqMap[num] === undefined) {
                freqMap[num] = 1;
            } else {
                freqMap[num] ++;
            }
        }

        const entries = Object.entries(freqMap);
        // sort function swaps a with be if it returns a positive value
        entries.sort(function(a,b) {
            return b[1] - a[1];
        })

        const result = [];
        for (let j = 0; j < k; j++) {
            result.push(Number(entries[j][0]));
        }
        return result;
    }
}
