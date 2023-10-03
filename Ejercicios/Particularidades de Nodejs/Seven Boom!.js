function sevenBoom(arr) {
    for (const numero of arr) {
        const numeroString = numero.toString();
        if (numeroString.includes("7")) {
            return "Boom!";
        }
    }
    return "there is no 7 in the array";
}
