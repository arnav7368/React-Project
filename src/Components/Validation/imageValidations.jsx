export default function imageValidation(event) {
    // { name, files }
    let { name, files } = event.target
    let size = []
    let type = []
    for (let index in files) {
        if (files[index]?.size > 1048576) {
            size = size.push(`Pic ${index + 1} size is larger than 1 MB`)
        }
        if (files[index].type==="" && files[index].type.split("/")[0]!=="pic") {
             type.push(`File ${parseInt(index)+1}  is not an Image`)
        }
    }
    return size.concat(type)
}