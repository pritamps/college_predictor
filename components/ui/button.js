import classes from "./button.module.css";

export default function Button(props) {
    return (
        <Link href={props.link} className={classes.btn}>
            {props.children}
        </Link>
    );
}
