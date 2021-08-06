import { Designer } from "../../models/index.js"

class DesignerSeeder {
  static async seed() {
    const designers = [
      { name: "olivia" },
      { name: "fatboycarney" },
      { name: "Rensuya" },
    ]

    for (const designer of designers) {
      const currentDesigner = await Designer.query().findOne({ name: designer.name })

      if (!currentDesigner) {
        await Designer.query().insert(designer)
      }
    }
  }
}

export default DesignerSeeder