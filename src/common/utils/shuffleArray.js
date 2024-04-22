export function shuffleArray(sourceArr) {
    if (sourceArr) {
        const array = sourceArr.concat();
        const arrayLength = array.length;
        for (let i = arrayLength - 1; i >= 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
        return array;
    }
}