const input = document.querySelector("input[name='str']");
const output = document.querySelector(".output");
const form = document.querySelector("form");
const clear = document.querySelector("input[type='reset']");

const newStr = (e) => {
	e.preventDefault();
	let str = input.value;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '#') {
			str = str.replace(/.#/, '');
			i = 0;
		}
	};
	createMsg(str);
	return false;
};
const createMsg = (msg) => {
	const outputWrap = document.createElement('div');
	const header = document.createElement('h2');
	header.textContent = msg;
	const btn = document.createElement('button');
	btn.innerText = 'Try Again';
	btn.addEventListener('click', reset);
	outputWrap.appendChild(header);
	outputWrap.appendChild(btn);
	output.appendChild(outputWrap);
};
const reset = () => {
	const target = output.querySelector('div');
	if (target) {
		output.removeChild(target);
		input.value = '';
	}
};
form.addEventListener('submit', (e)=>newStr(e));
clear.addEventListener('click', reset);
