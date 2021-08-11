class TimeFormatConverter {
    static db2js(dbTime) {
        let rtn = ""
        for (let i = 0; i < 10; i++) {
            rtn += dbTime.charAt(i)
        }
        return rtn
    }
}

export default TimeFormatConverter