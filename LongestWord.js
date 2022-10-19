function longestWord(text) {
    // Code goes here
    let maxLength = 0
    let wordSplit = text.split(' ')
    let result = ''
    for(let i = 0;i<wordSplit.length; i++){
        if(wordSplit[i].length > maxLength){
            maxLength = wordSplit[i].length
            result = wordSplit[i]

        } 
    }
    return result    
}

function longestWord(text) {
    // Code goes here
    let wordSplit = text.split(' ')
    return wordSplit.reduce((acc,c)=>c.length < acc.length ? acc : c, '')
}

function longestWord(text) {
    // Code goes here
    let wordSplit = text.split(' ')
    return wordSplit.sort((a,b)=> b.length - a.length)[0] 
}
