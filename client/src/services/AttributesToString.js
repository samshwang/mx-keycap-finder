
class AttributesToString {
    static designersToString(designerArray) {
        let rtn = ""
        designerArray.forEach( (element, index) => {
            rtn += element.name
            if (index < (designerArray.length-1)) {
                rtn += ", "
            }
        })

        return rtn
    }

    static colorsToString(colorsArray) {
        let rtn = ""
        colorsArray.forEach( (element, index) => {
            rtn += element.name
            if (index < (colorsArray.length-1)) {
                rtn += ", "
            }
        })

        return rtn
    }

    static themesToString(themesArray) {
        let rtn = ""
        themesArray.forEach( (element, index) => {
            rtn += element.name
            if (index < (themesArray.length-1)) {
                rtn += ", "
            }
        })

        return rtn
    }

}

export default AttributesToString
