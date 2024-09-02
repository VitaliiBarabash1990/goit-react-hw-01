import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr className={s.row}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.body}>
        {items.map((item) => {
          return (
            <tr className={s.item_row} key={item.id}>
              <td className={s.item_col}>{item.type}</td>
              <td className={s.item_col}>{item.amount}</td>
              <td className={s.item_col}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
