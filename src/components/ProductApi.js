export function fetchAllProduct(){
    return new Promise(async(resolve)=>{
        const response = await fetch("http://localhost:8000/products")
        const data = await response.json()
        resolve({data})
    })
}