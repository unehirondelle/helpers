const stringToCamelCase = (str) => {
    let result = '';
    str.split(' ').forEach((word, i) => {
        const processed = word.replaceAll('.', '').toLowerCase();
        // const processed = word.replace(/\./g, '').toLowerCase(); // for Node.js since replaceAll don't work there
        if (word && word !== '\n\r') {
            result += (i === 0 ? processed : processed[0].toUpperCase() + processed.slice(1));
        }
    });
    return result;
};

export default stringToCamelCase;
