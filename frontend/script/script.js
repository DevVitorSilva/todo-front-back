"use strict"

function getAll(){
    fetch('http://localhost:9000/api', {mode: 'cors'}).
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