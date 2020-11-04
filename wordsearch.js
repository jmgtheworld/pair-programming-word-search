const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

 
    for (let line of horizontalJoin) {
        let rev = line.split("").reverse().join("");
        if (rev.includes(word)) return true;
        // console.log(rev);
    }
    return false;
}


module.exports = wordSearch
