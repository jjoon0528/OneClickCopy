function copyInputText(targetID) {

    const inputElement = document.getElementById(targetID);
    const textToCopy = inputElement.value;

    // 만약 입력창이 비어있다면 경고를 줍니다. (조건문 맛보기)
    if (textToCopy === "") {    
        alert("내용을 입력해주세요!");
        return; // 함수를 여기서 종료합니다.
    }

    // 클립보드에 복사합니다.
    navigator.clipboard.writeText(textToCopy)
    
}