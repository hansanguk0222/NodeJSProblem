function Create() {
    console.log('Create() 실행');
    const CreateAuthor = document.getElementById('CreateAuthor').value;
    const CreateTitle = document.getElementById('CreateTitle').value;
    const CreateCost = document.getElementById('CreateCost').value;
    console.log(CreateAuthor, CreateTitle, CreateCost);
    xhr = new XMLHttpRequest();
    xhr.open('POST', '/posts', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        alert('출력');
    }
    xhr.send(JSON.stringify({ 
        'CreateAuthor': CreateAuthor, 
        'CreateTitle': CreateTitle, 
        'CreateCost': CreateCost 
    }));
}

function ReadAuthor() {

}

function ReadTitle() {

}

function Update() {

}

function Delete() {

}
