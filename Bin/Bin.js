function OldYear(year){
    const now = new Date();
    const curreantYear = now.getFullYear();
    return curreantYear - year;
}

console.log(OldYear(2004));

052