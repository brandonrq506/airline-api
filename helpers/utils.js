export const capitalize = (sentence) => {
    const words = sentence.split(' ');
    const capitalizedWords = words.map((word) =>
        word.charAt(0).toUpperCase() + word.substring(1));
    return capitalizedWords.join(' ');
}