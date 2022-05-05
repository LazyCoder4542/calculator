var inputs = document.getElementById('input');

var button = Array.from(document.getElementsByClassName('button'));
button.map( button => {
    button.addEventListener('click', (i) => {
        console.log(i.target.innerText);
        console.log(i);
        switch (i.target.innerText) {
            case 'CLEAR':
                inputs.innerText = '';

                break;
            case '=':
                try {
                    inputs.innerText = eval(inputs.innerText);
                }   catch {
                    inputs.innerText = 'Error';
                };
                break;

            case '×':
                inputs.innerText += '*';
                break;          
            default:
                inputs.innerText += i.target.innerText;
        }
    });
});