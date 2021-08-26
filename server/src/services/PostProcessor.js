import { Set, Color, Theme, Designer, Vendor } from "../models/index.js"
import { SetColorway, SetDesigner, SetTheme, SetVendor } from "../models/index.js"

class PostProcessor {
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

    static async postSet(inputObject) {
        const { name, profile, imageURLpath, link, releaseDate, salesFormat, round, status } = inputObject
        
        const newSetInput = {
            name: name,
            profile: profile,
            imageURLpath: imageURLpath,
            link: link,
            releaseDate: releaseDate,
            salesFormat: salesFormat,
            round: round,
            status: status
        }

        const newSetOutput = await Set.query().insertAndFetch(newSetInput)

        const { designer, color, theme, vendor } = inputObject
        
        //process designers
        const designerArray = this.arrayify(designer)
        const designerObjectArray = await Promise.all(designerArray.map( async (designer) => {
            return await this.processAttribute(designer, Designer)
        }))
        designerObjectArray.forEach( async (designerObject) => {
            await SetDesigner.query().insert({setID: newSetOutput.id, designerID: designerObject.id})
        })

        //process colors
        const colorArray = this.arrayify(color)
        const colorObjectArray = await Promise.all(colorArray.map(async (color) => {
            return await this.processAttribute(color, Color)
        }))
        colorObjectArray.forEach( async (colorObject) => {
            await SetColorway.query().insert({setID: newSetOutput.id, colorID: colorObject.id})
        })

        //process themes
        const themeArray = this.arrayify(theme)
        const themeObjectArray = await Promise.all(themeArray.map(async (theme) => {
            return await this.processAttribute(theme, Theme)
        }))
        themeObjectArray.forEach( async (themeObject) => {
            await SetTheme.query().insert({setID: newSetOutput.id, themeID: themeObject.id})
        })
        
        //process vendors
        const vendorObject = await this.processAttribute(vendor, Vendor)
        await SetVendor.query().insert({setID: newSetOutput.id, vendorID: vendorObject.id})

        return newSetOutput
    }
}

export default PostProcessor