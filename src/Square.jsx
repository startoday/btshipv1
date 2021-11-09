import './Square.css';
const display =["x", "", "v", "2", ""];
const color = ["miss","empty", "hit","empty", "shipColor" ]


export default function Square(props) {
	return (<div class="square" id ={color[props.num+1]}> {display[props.num+1]} </div>);
}