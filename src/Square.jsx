import './Square.css';
const userDisplay =["x", "", "v", "", ""];
const pcDisplay =["x", "", "v", "s", ""];
const color = ["miss","empty", "hit","empty", "shipColor" ]

export default function Square(props) {
	return (<div class="square" id ={color[props.num+1]}> {props.mode === "user"? userDisplay[props.num+1] : pcDisplay[props.num+1] } </div>);
}