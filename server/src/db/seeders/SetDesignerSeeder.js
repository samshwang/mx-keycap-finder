import { SetDesigner } from "../../models/index.js"

class SetDesignerSeeder {
  static async seed() {
    const setdesigners = [
      { setID: 1, designerID: 1 },
      { setID: 2, designerID: 2 },
      { setID: 3, designerID: 3 },
    ]

    for (const setdesigner of setdesigners) {
      const currentSetDesigner = await SetDesigner.query().findOne({ setID: setdesigner.setID, designerID: setdesigner.designerID })

      if (!currentSetDesigner) {
        await SetDesigner.query().insert(setdesigner)
      }
    }
  }
}

export default SetDesignerSeeder