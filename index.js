function calculateAward(points) {
    if (points > 99) {
        return "First Place";
    }

    if (points > 49) {
        return "Second Place";
    }

    return "Participation Award";
}

const resultElement = document.getElementById("result");
if (resultElement) {
    resultElement.textContent = calculateAward(49);
}

