export async function addRecord(payload){
   let responce = await fetch("/subcategory", {
        method: "post",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      return await responce.json()
}
export async function getRecord(){
    let responce = await fetch("/subcategory", {
      method: "get",
      headers: {
        "content-type": "application/json"
      }
    })
    return await responce.json()
}
export async function updateRecord(payload){
    let responce = await fetch("/subcategory/"+payload.id, {
          method: "put",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(payload)
        })
        return await responce.json()
}
export async function deleteRecord(payload){
    let responce = await fetch("/subcategory/" + payload.id, {
        method: "delete",
        headers: {
          "content-type": "application/json"
        }
      })
      return await responce.json()
}