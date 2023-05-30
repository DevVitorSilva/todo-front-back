"use strict"

document.addEventListener('DOMContentLoaded', () => {
    getAll();
});

function getAll() {
    fetch('http://localhost:9000/api', { mode: 'cors' })
        .then((res) => {
            return res.json()
        })
        .then((tasks) => {

            let taskElements = '';
            tasks.forEach(element => {
                let taskElement = `
                    <div>
                        <input type="checkbox">
                        <label>${element.task}</label>
                        <button onclick="getOne(this)" id="${element._id}">Edit</button>
                        <button>Delete</button>
                    </div>
                `
                taskElements += taskElement;
            });

            document.querySelector('.allTasks').innerHTML = taskElements;

        })
        .catch((err) => {
            console.log(err)
        });
}

function addTask() {
    const taskContent = document.querySelector('#taskContent').value;

    const taskObj = {
        task: taskContent
    }

    const options = {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(taskObj)
    }

    fetch('http://localhost:9000/api', options)
        .then(() => {
            getAll();
            document.querySelector('#taskContent').value = '';
        })
        .catch((err) => {
            console.log(err);
        });

}

async function getOne(element) {
    const id = element.id;
    const label = element.parentElement.children[1].textContent;
    
    const docTask = await fetch(`http://localhost:9000/api/${id}`)
        .then((doc) => {
            return doc.json()
        })
        .catch((err) => {
            console.log(err)
        });

    console.log(label)
    console.log(docTask)
}

// function teste(element) {
//     const input = document.createElement('input')
//     const button = document.createElement('input')


//     element.appendChild(button)
//     element.appendChild(input)
// }