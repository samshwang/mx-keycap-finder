import { SetDesigner } from "../../models/index.js"

class SetDesignerSeeder {
  static async seed() {
    const setdesigners = [
      { setID: 1, designerID: 1 },
      { setID: 2, designerID: 2 },
      { setID: 3, designerID: 3 },
      { setID: 4, designerID: 4 },
      { setID: 5, designerID: 5 },
      { setID: 6, designerID: 1 },
      { setID: 7, designerID: 5 },
      { setID: 8, designerID: 5 },
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