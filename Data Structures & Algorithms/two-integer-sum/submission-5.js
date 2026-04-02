class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = {};

        for (let i = 0; i < nums.length; i ++) {
            let num = nums[i];
            numMap[num] = i
        }

        for (let i = 0; i < nums.length; i ++) {
            let num = nums[i];

            const remainder = target - num;

            if (numMap[remainder] !== undefined && numMap[remainder] !== i) 
            return [i, numMap[remainder]];
        }
        return [];
    }
}
