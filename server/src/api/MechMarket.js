import fetch from "node-fetch"

class MechMarket {
    constructor(set) {
        this.setName = set;
    }

    getSetNameString() {
        return this.setName.replace(" ", "+")
    }

    async getPosts() {
        const url = `https://www.reddit.com/r/mechmarket/search.json?q="${this.getSetNameString()}"&restrict_sr="true"&sort="new"`
        console.log(url)

        let postsObjects = []

        const response = await fetch(url)
        const postData = await response.json()
        const postsData = postData.data.children

        postsData.forEach( (post) => {
            if (post.data.link_flair_text === "Selling") {
                postsObjects.push({
                    title: post.data.title,
                    author: post.data.author,
                    url: post.data.url,
                    createdUNIXepochTime: post.data.created_utc
                })
            }
        })

        return postsObjects
    }
}

export default MechMarket

// const test = new MechMarket("sa copper")
// const data = await test.getPosts()
// console.log(data)