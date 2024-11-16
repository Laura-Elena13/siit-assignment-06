const apiUrl = `https://demo-api.siit.ro/api/students`;

function getStudentsList(){
    const requestUrl = `${apiUrl}`
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => console.log(data))
}

function getStudent(studentName){
    const requestUrl = `${apiUrl}/${studentName}`
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => console.log(data))
}

function addStudent(student) {
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        method: 'POST',
        body: JSON.stringify(student)
    }

    const requestUrl = `${apiUrl}`
    fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
}

function updateStudent(studentName, student) {
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        method: 'PUT',
        body: JSON.stringify(student),
    }

    const requestUrl = `${apiUrl}/${studentName}`
    fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
}

function deleteStudent(studentName){
    const requestOptions = {
        method: 'DELETE'
    }

    const requestUrl = `${apiUrl}/${studentName}`
    fetch(requestUrl, requestOptions)  
}

//const newStudent = {
    //name: `Laura-Elena`,
    //email: `catslover@catslover.com`,
    //phone: `0733 777 777`
//}
//addStudent(newStudent);

getStudentsList();

getStudent(9);

//const updStudent = {
    //name: `Laura-Elena D`,
    //email: `loveforcats@loveforcats.com` 
//}
//updateStudent(9, updStudent);

//deleteStudent(9);
