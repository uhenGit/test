const input = document.querySelector("input[name='str']");
const output = document.querySelector(".output");
const form = document.querySelector("form");
const clear = document.querySelector("input[type='reset']");

const isValid = (str) => {
	let mwArr = [];
	const model = { '(':')', '{':'}','[':']'};
	for (let i=0; i < str.length; i++) {
		if (str[i]==='(' || str[i]==='{' || str[i]==='[') {
			mwArr.push(str[i]);
		}
		else {
			let mwEnd = mwArr.pop();
			if (str[i] !== model[mwEnd]) {
				return false;
			};
		}
	}
	if (mwArr.length !== 0) {
		return false;
	};
	return true;
};
const createMsg = (msg, style) => {
	const outputWrap = document.createElement('div');
	const header = document.createElement('h2');
	header.textContent = msg;
	header.style.color = style;
	const btn = document.createElement('button');
	btn.innerText = 'Try Again';
	btn.addEventListener('click', reset);
	outputWrap.appendChild(header);
	outputWrap.appendChild(btn);
	output.appendChild(outputWrap);
};
const showRes = (e) => {
	e.preventDefault();
	let msg, style;
	if (isValid(input.value)) {
		msg = 'OK';
		style = 'rgb(0,255,0)';
	}
	else {
		msg = 'neok';
		style = 'rgb(255,0,0)';
	}
	createMsg(msg, style);
};

const reset = () => {
	const target = output.querySelector('div');
	if (target) {
		output.removeChild(target);
		input.value = '';
	}
};
form.addEventListener('submit', (e)=>showRes(e));
clear.addEventListener('click', reset);
