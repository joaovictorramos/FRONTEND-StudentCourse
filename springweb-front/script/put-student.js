document.getElementById('put-student-form').addEventListener('submit', function(e){
    e.preventDefault()

    const regParam = document.getElementById('registration-param').value

    const namePut = document.getElementById('name-for-put').value
    const registrationPut = document.getElementById('registration-for-put').value

    const studentPut = {id: null, name: namePut, registration: registrationPut}
    putStudent(regParam, studentPut)
})

function putStudent(regParam, studentPut){
    console.log(studentPut)
    fetch(`http://localhost:8080/update-student-by-put/${regParam}`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentPut)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update student by put');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error( error);
    });
}