function countHashtags(caption) {
    if (typeof caption !== "string") {
        return "Invalid"
    }
    // if(caption.length === 0) {
    //     return ""
    // }
    let arrCaption = caption.split(" ")
    let hashCaption = []
    let hashCount = 0
    for (let arr of arrCaption) {
        if (arr.startsWith("#") === true) {
            hashCaption.push(arr)
            hashCount++
        }
    }
    let longHashLength = 0
    let longHash;
    for (let hash of hashCaption) {
        if (hash.length > longHashLength) {
            longHashLength = hash.length
            longHash = hash
        }
    }

    let longCapWithOutHash = longHash !== undefined ? longHash.slice(1) : "";

    return {
        hashtagCount: hashCount,
        longestTag: longCapWithOutHash
    }
}

// const captionText = "Loving this weather today #sunny #vibes #weekend"
// const captionText = ["#fun"]
// const captionText = 123
// const captionText = "#ai #ml data science"
// const captionText = "No hashtags here"
const captionText = "#"


console.log(countHashtags(captionText))
