document.getElementById('patch-course-form').addEventListener('submit', function(e){
    e.preventDefault()

    const nameParam = document.getElementById('name-param').value

    const namePatch = document.getElementById('name-for-patch').value
    const descriptionPatch = document.getElementById('description-for-patch').value

    const coursePatch = {id: null, name: namePatch, description: descriptionPatch}
    patchCourse(nameParam, coursePatch)
})

function patchCourse(nameParam, coursePatch){
    console.log(coursePatch)
    fetch(`http://localhost:8080/update-course-by-patch/${nameParam}`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(coursePatch)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update course by patch');
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