class Solution {
    groupAnagrams(strs) {
        const map = new Map();   // ключ группы -> массив строк

        for (const str of strs) {
            const key=[...str].sort().join("")

            if(!map.has(key)){map.set(key,[])}
            map.get(key).push(str)
        }
    return[...map.values()]
    }
}