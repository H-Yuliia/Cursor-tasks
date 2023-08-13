function getRandomChinese(length) {
    const start = Date.now();

    return new Promise((resolve) => {
        let result = '';

        const generateCharacter = () => {
            const currentTime = Date.now();
            const diff = currentTime - start;

            if (diff >= length * 50) {
                resolve(result);
                return;
            }

            const randomCharCode = Math.floor(Math.random() * 20902) + 19968;
            result += String.fromCharCode(randomCharCode);

            setTimeout(generateCharacter, 50);
        };

        generateCharacter();
    });
}


getRandomChinese(4)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
