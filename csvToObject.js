const csvToObject = (fileData) => {
    const arr = fileData.split('\n');
    const result = [];
    for (let i = 1; i < arr.length; i++) {
        const data = arr[i].split(',');
        result.push({
            "time": data[0].trim(),
            "dataPoint": data[1].trim()
        });
    }
    return result;
};

export default csvToObject;
