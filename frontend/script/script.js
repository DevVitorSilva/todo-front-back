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
            tasks.forEach((element, index) => {

                let taskElement = `
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <div class="accordion-header">
                            <input type="checkbox">
                            <label class="${element._id}">${element.task}</label>
                            <button onclick="editTask(this)" id="${element._id}" class="btn btn-primary collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                                editar
                            </button>
                        </div>
                        <div id="flush-collapse${index}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <textarea class="${element._id}" cols="30" rows="5"></textarea>
                                <button onclick="getOne(this)" id="${element._id}" class="btn btn-primary collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">Add edit</button>
                            </div>
                        </div>
                    </div>
                </div>

                `
                taskElements += taskElement;

            });

            document.querySelector('.allTasks').innerHTML = taskElements;

        })
        .catch((err) => {
            const h1 = document.getElementsByTagName('h1')[0]
            h1.innerHTML = '503 - Service Unavailable'
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
    const id = element.id
    const newTask = document.getElementsByClassName(id)[1].value
    const data = {
        id: id,
        task: newTask
    }
    const options = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    }
    const docTask = await fetch(`http://localhost:9000/api`, options)
        .then((doc) => {
            getAll()
            return doc.json()
        })
        .catch((err) => {
            console.log(err)
        });

}

function editTask(element){
    const id = element.id
    const classTask = document.getElementsByClassName(id)[0].textContent
    
    document.getElementsByClassName(id)[1].value = classTask
    
}

