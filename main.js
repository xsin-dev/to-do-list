document.body.className = 'flex justify-center bg-blue-300';
const parent = document.createElement('div');
parent.className =
    'w-[600px] min-h-[100px] bg-white mt-[200px] flex flex-col items-center';
document.body.append(parent);
const inputBox = document.createElement('div');
inputBox.className =
    'w-[600px] h-[50px] m-[20px] flex justify-around text-green-700 text-[20px]';
parent.append(inputBox);
const input = document.createElement('input');
input.className = 'w-[400px] h-[50px] bg-gray-300 pl-[20px]';
input.placeholder = 'Ruyxat kiriting:';
const addBtn = document.createElement('button');
addBtn.className =
    'w-[100px] h-[50px] bg-green-500 text-white font-[600]';
addBtn.innerText = "Qo'shish";
inputBox.append(input, addBtn);
const listBox = document.createElement('div');
listBox.className = 'm-[20px] w-[550px] flex flex-col gap-[10px]';
parent.append(listBox);

addBtn.addEventListener('click', () => {
    const newText = input.value.trim();
    if (newText !== '') {
        const list = document.createElement('div');
        list.className =
            'w-full min-h-[50px] bg-gray-300 p-[10px] flex items-center justify-between';

        const text = document.createElement('h1');
        text.innerText = newText;
        text.className = 'text-[18px] text-green-800';
        const editBtn = document.createElement('button');
        editBtn.innerText = 'Tahrirlash';
        editBtn.className = 'text-green-600 font-bold mr-[10px]';
        editBtn.addEventListener('click', () => {
            const newText = prompt('Yangi matn kiriting:', text.innerText);
            if (newText !== null && newText.trim() !== '') {
                text.innerText = newText;
            }
        });
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "O'chirish";
        deleteBtn.className = 'text-red-600 font-bold';
        deleteBtn.addEventListener('click', () => {
            list.remove();
        });
        const btnBox = document.createElement('div');
        btnBox.className = 'flex gap-[10px]';
        btnBox.append(editBtn, deleteBtn);
        list.append(text, btnBox);
        listBox.append(list);
        input.value = '';
    }
});
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});