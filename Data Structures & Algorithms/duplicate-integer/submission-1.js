class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map= new Map()
        
        for(let i=0;i<nums.length; i+=1){
            if (map.has(nums[i])){
                return true
            }
            map.set(nums[i],i)
        }
        return false
    }
}
