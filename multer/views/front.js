function findFile() {
    console.log('findFile 실행');
    const searchFile = document.getElementById('searchfile').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/search', true);
    xhr.send(JSON.stringify({'filename' : searchFile}));
}

function findID() {
    console.log('findID 실행');
    const ID = document.getElementById('ID').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/findID', true);
    xhr.send(JSON.stringify({'ID' : ID}));
    //여기다가 목록띄우기 추가, onload
}

function uploadFile() {
    console.log('uploadFile 실행');
    const uploadFile = document.getElementById('uploadFile').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/uploadFile', true);
    xhr.send();
}
