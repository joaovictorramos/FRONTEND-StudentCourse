document.getElementById('create-course-form').addEventListener('submit', function(e){
    e.preventDefault()
    const name = document.getElementById('nameCourse').value
    const description = document.getElementById('descriptionCourse').value

    const courseData = {name: name, description: description}
    createCourse(courseData)
})

function createCourse(courseData){
    fetch('http://localhost:8080/create-course', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(courseData)
    })
    .then(response =>{
        if(!response.ok){
            throw new Error('Failed to create course')

        }else{
            console.log(body)
        }
    })
    .catch(error =>{
        console.log(error)
    })
}