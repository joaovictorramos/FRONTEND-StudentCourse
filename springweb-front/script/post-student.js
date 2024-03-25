document.getElementById('create-student-form').addEventListener('submit', function(e){
    e.preventDefault()
    const name = document.getElementById('nameStudent').value
    const registration = document.getElementById('registrationStudent').value

    const studentData = {name: name, registration: registration}
    createStudent(studentData)
})

function createStudent(studentData){
    fetch('http://localhost:8080/create-student', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData)
    })
    .then(response =>{
        if(!response.ok){
            throw new Error('Failed to create student')

        }else{
            console.log(body)
        }
    })
    .catch(error =>{
        console.log(error)
    })
}