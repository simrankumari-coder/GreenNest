export const openDB = () => {
    return new Promise((resolve, reject) => {

        const request = indexedDB.open("GreenNestDB", 1)
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            db.createObjectStore("productImages", {
                ketPath: "id"
            })
        }

        request.onsuccess = (event) => {
            const db = event.target.result;
            console.log("DataBase opened successsfully", db)
        }
        request.onerror = (event) => {
            console.log("Database Error", event.target.error)
        }
    })
}