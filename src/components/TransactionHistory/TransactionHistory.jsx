import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>
            <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                    <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default TransactionHistory
