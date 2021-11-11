const stringToKebabCase = (str) => {
    return `/${str.toLowerCase().replaceAll(' ', '-')}`;
};

export default stringToKebabCase;
