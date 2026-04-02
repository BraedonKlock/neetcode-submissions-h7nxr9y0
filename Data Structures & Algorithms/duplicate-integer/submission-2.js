class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set(nums)
        if (seen.size === nums.length) {
            return false;
        }
        return true;
    }
}
