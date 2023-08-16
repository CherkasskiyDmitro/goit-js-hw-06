document.querySelector('body').style.backgroundColor = '#eaf1fad0';
const inputRangeRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');


const fontSizeControl = () => {
  textRef.style.fontSize = `${inputRangeRef.value}px`;
};
fontSizeControl()

inputRangeRef.addEventListener("input", fontSizeControl);



