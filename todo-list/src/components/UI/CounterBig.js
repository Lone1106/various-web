import classes from "./CounterBig.module.css";

function CounterBig(props) {
	return <p className={classes.counter}>{props.amount} / 10</p>;
}

export default CounterBig;
