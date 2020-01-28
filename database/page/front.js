let cnt = 0;

function PlusCnt() {
    cnt = cnt + 1;
    return cnt;
}

function MinusCnt() {
    cnt =cnt - 1;
    return cnt;
}

function Create() {
    console.log('Create() 실행');
    PlusCnt();
    const CreateAuthor = document.getElementById('CreateAuthor').value;
    const CreateTitle = document.getElementById('CreateTitle').value;
    const CreateCost = document.getElementById('CreateCost').value;
    const CreateDate = new Date();
    console.log(CreateAuthor, CreateTitle, CreateCost);
    xhr = new XMLHttpRequest();
    xhr.open('POST', `/bookinform/${cnt}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        alert('입력');
    }
    xhr.send(JSON.stringify({ 
        'CreateAuthor': CreateAuthor, 
        'CreateTitle': CreateTitle, 
        'CreateCost': CreateCost,
        'CreateDate' : CreateDate 
    }));
}

function ReadAuthor() {
    console.log('ReadAuthor 실행');
    const ReadfindAuthor = document.getElementById('ReadfindAuthor').value;
    xhr = new XMLHttpRequest();
    xhr.open('GET', `/author?ReadfindAuthor=${ReadfindAuthor}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        alert(xhr.responseText);
    }
    xhr.send(JSON.stringify({'ReadfindAuthor':ReadfindAuthor}));
}

function Update() {
    console.log('Update 실행');
    const UpdateTitle = document.getElementById('UpdateTitle').value;
    const UpdateCost = document.getElementById('UpdateCost').value;
    xhr = new XMLHttpRequest();
    xhr.open('PUT', '/update', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        alert(xhr.responseText);
    }
    xhr.send(JSON.stringify({'UpdateTitle' : UpdateTitle, 'UpdateCost' : UpdateCost}));
}

function Delete() {
    console.log('Delete 실행');
    const DeleteTitle = document.getElementById('DeleteTitle').value;
    xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/delete', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        alert(`${xhr.responseText}를 삭제하였습니다.`);
    }
    xhr.send(JSON.stringify({'DeleteTitle' : DeleteTitle}));
}
