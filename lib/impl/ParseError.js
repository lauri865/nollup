// @ts-check
class ParseError extends Error {
    /**
     * @param {string} file 
     * @param {Error} parent_error 
     */
    constructor (file, parent_error) {
        if (parent_error instanceof ParseError) {
            throw parent_error;
        }

        let filename = file.replace(process.cwd(), '');
        let details = parent_error instanceof TypeError? parent_error.stack : parent_error;
        let message = filename + '\n' + details;
        super(message);
        this.name = 'ParseError';
    }
}

module.exports = ParseError;