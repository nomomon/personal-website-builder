const russToEng: { [key: string]: string } = { а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh', з: 'z', и: 'i', й: 'j', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'c', ч: 'ch', ш: 'sh', щ: 'sch', ь: '\'', ы: 'y', ъ: '\'', э: 'e', ю: 'yu', я: 'ya' };

const textToUrl = (text: string) => {
    const textToUrl = text
        .toLowerCase()
        .split('')
        .map((letter) => {
            if (russToEng.hasOwnProperty(letter)) {
                return russToEng[letter];
            }
            return letter;
        })
        .join('')
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .replace(/ /g, '-');

    return textToUrl;
}

export default textToUrl;