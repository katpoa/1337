// Same - accepts two arrays, returns true if every value in arr 
// has corresponding value squared in the second array 
// the frequency of the values must be the same

// NAIVE solution
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

// same([1,2,3,2], [9,1,4,4])


// O(n) solution
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let freq1 = {}
    let freq2 = {}
    for(let val of arr1){
        freq1[val] = (freq1[val] || 0) + 1
    }
    for(let val of arr2){
        freq2[val] = (freq2[val] || 0) + 1        
    }
    console.log(freq1);
    console.log(freq2);
    for(let key in freq1){
        if(!(key ** 2 in freq2)){
            return false
        }
        if(freq2[key ** 2] !== freq1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])
