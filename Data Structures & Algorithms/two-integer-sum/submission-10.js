class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numSet = {};

        for (let i = 0; i < nums.length; i ++) {
            const num = nums[i]
            if(numSet[num] === undefined) {
                numSet[num] = i;
            }
        }

        for (let i = 0; i < nums.length; i ++) {
            const num = nums[i];

            const remainder = target - num;

            if (numSet[remainder] !== undefined & numSet[remainder] !== i) {
                return [i, numSet[remainder]]
            }
        }
        return [];
    }
}
