import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      />
      <ExpenseItem
        title={props.items[3].title}
        date={props.items[3].date}
        amount={props.items[3].amount}
      />
    </div>
  );
}

export default Expenses;

// import "./Expenses.css";
// import ExpenseItem from "./ExpenseItem";

// function Expenses(props) {
//   return (
//     <div className="expenses">
//       {props.items.map((expense) => (
//         <ExpenseItem
//           title={expense.title}
//           amount={expense.amount}
//           date={expense.date}
//         />
//       ))}
//     </div>
//   );
// }

// export default Expenses;
