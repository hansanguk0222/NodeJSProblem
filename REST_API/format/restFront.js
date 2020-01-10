function putInform() {
    console.log('getInform 호출');
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', '/change', true); // 메소드와 주소 설정
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ 'name': name, 'age': age }));
};

function deleteInform() {
    console.log('deleteInform 호출');
    const erase = document.getElementById('erase').value;
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/delete', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ 'erase': erase }));
}
