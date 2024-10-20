const usd_to_npr = 133;
const npr_to_usd = 1 / usd_to_npr;

function change1(usd) {
    return usd * usd_to_npr;
}

function change2(npr) {
    return npr * npr_to_usd;
}

module.exports = {
    change1,
    change2
};