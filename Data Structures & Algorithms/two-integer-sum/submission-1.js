class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const map= new Map()
        for (let i=0; i<nums.length; i+=1){
            const searching= target-nums[i];

            if (map.has(searching)) {
                return[map.get(searching),i]
            }

            map.set(nums[i], i)
        }
    }
}
