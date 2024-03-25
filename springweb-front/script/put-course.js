document.getElementById('put-course-form').addEventListener('submit', function(e){
    e.preventDefault()

    const nameParam = document.getElementById('name-param').value

    const namePut = document.getElementById('name-for-put').value
    const descriptionPut = document.getElementById('description-for-put').value

    const coursePut = {id: null, name: namePut, description: descriptionPut}
    putCourse(nameParam, coursePut)
})

function putCourse(nameParam, coursePut){
    console.log(coursePut)
    fetch(`http://localhost:8080/update-course-by-put/${nameParam}`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(coursePut)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update course by put');
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