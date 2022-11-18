// Naive String Search
// Return the frequency count of occurence of the word "dog" in "deladogomydog"
// function SHOULD return 2 since 'dog' occurs twice in the long string
// Algorithm should use a time complexity of O(n * m)
const long = 'deladogomydog';
const short = 'dog'
const naiveSearch = (long, short) => {
    let count = 0;    
    let j = 0;
    for (let i = 0; i < long.length - j; i++){
        for(j = 0; j <= short.length - 1; j++){    
            if(long[i + j] != short[j]){
                break;
            }
            if(j == short.length - 1){
                count++;
            }
        }
    }
    return count;
}
console.log(naiveSearch("deladogomydog", 'dog')); //2
console.log(naiveSearch("haehiaerhihhhellohills", 'hi')); //3