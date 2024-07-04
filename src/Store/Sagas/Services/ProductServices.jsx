export async function addRecord(payload){
   let responce = await fetch("/product", {
        method: "post",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      return await responce.json()
}
export async function getRecord(){
    let responce = await fetch("/product", {
      method: "get",
      headers: {
        "content-type": "application/json"
      }
    })
    return await responce.json()
}
export async function updateRecord(payload){
    let responce = await fetch("/product/"+payload.id, {
          method: "put",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(payload)
        })
        return await responce.json()
}
export async function deleteRecord(payload){
    let responce = await fetch("/product/" + payload.id, {
        method: "delete",
        headers: {
          "content-type": "application/json"
        }
      })
      return await responce.json()
}