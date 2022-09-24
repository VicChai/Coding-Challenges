// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function gordon(a){
    let vowel = 'EIOU'
    let caps = a.toUpperCase()
    let at = 'A'
    let stars = caps.split('').map(el=>vowel.includes(el)? el = '*' : at.includes(el) ? el = '@' : el)
    return stars.join('').split(' ').map(el=>el + '!!!!').join(' ')
    
    
  }