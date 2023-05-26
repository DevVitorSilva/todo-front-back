// const url = 'http://localhost:9000/api'

function getAll(){
    fetch('http://127.0.1.1:9000/api').
    then((res) => {
        return res.json()
    }).
    then((tasks) => {
        console.log(tasks)
    }).
    catch((err) => {
        console.log(err)
    })
}

getAll()