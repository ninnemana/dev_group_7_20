class StartFrom {
    constructor () {
        return (input, start) => {
            return input.slice(start + 1);
        };
    }
}

export default StartFrom;
