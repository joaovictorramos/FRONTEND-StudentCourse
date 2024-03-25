document.getElementById('patch-student-form').addEventListener('submit', function(e){
    e.preventDefault()

    const regParam = document.getElementById('registration-param').value

    const namePatch = document.getElementById('name-for-patch').value
    const registrationPatch = document.getElementById('registration-for-patch').value

    const studentPatch = {id: null, name: namePatch, registration: registrationPatch}
    console.log(studentPatch)
    patchStudent(regParam, studentPatch)
})

function patchStudent(regParam, studentPatch){
    console.log(studentPatch)
    fetch(`http://localhost:8080/update-student-by-patch/${regParam}`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentPatch)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update student by patch');
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