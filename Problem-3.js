function finalScore(omr) {
    if (typeof omr !== "object" || Array.isArray(omr) === true ||  omr === null || (omr.right + omr.wrong + omr.skip) !== 100) {
        return "Invalid";
    }
    let score = omr.right - (omr.wrong * 0.5);
    return Math.round(score);
}

console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
