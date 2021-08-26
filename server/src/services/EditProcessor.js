import { Set, Color, Theme, Designer } from "../models/index.js"
import { SetColorway, SetDesigner, SetTheme, SetVendor } from "../models/index.js"

class EditProcessor {
    static arrayify(userString) {
        if (userString) {
            const array = userString.split(",")
            const trimmedArray = array.map( element => {
                return element.trim()
            })
            return trimmedArray
        } else {
            return userString
        }
    }

    static async processAttribute(attributeEntry, model) {
        let entry = await model.query().findOne({name: attributeEntry})
        
        if (!entry) {
            entry = await model.query().insertAndFetch({name: attributeEntry})
        }
        
        return entry
    }

    static async processDesigners(designer, setID) {
        const designerArray = this.arrayify(designer)
        const designerObjectArray = await Promise.all(designerArray.map( async (designer) => {
            return await this.processAttribute(designer, Designer)
        }))
        designerObjectArray.forEach( async (designerObject) => {
            await SetDesigner.query().insert({setID: setID, designerID: designerObject.id})
        })
    }

    static async processColors(color, setID) {
        const colorArray = this.arrayify(color)
        const colorObjectArray = await Promise.all(colorArray.map( async (color) => {
            return await this.processAttribute(color, Color)
        }))
        colorObjectArray.forEach( async (colorObject) => {
            await SetColorway.query().insert({setID: setID, colorID: colorObject.id})
        })
    }

    static async processThemes(theme, setID) {
        const themeArray = this.arrayify(theme)
        const themeObjectArray = await Promise.all(themeArray.map( async (theme) => {
            return await this.processAttribute(theme, Theme)
        }))
        themeObjectArray.forEach( async (themeObject) => {
            await SetTheme.query().insert({setID: setID, themeID: themeObject.id})
        })
    }
}

export default EditProcessor