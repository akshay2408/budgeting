// @flow
import * as React from 'react';
import formatAmount from 'utils/formatAmount';
import type { Transaction } from 'modules/transactions';
import type { Categories } from 'modules/categories';
import { Link } from 'react-router-dom';
import styles from './style.scss';

type BudgetGridRowProps = {
  transaction: Transaction,
  categories: Categories,
};

const BudgetGridRow = ({ transaction, categories }: BudgetGridRowProps) => {
  const amount = formatAmount(transaction.value);
  const amountCls = amount.isNegative ? styles.neg : styles.pos;
  const { id, categoryId, description } = transaction;
  const category = categories[categoryId];

  return (
    <tr key={id}>
      <td>
        <Link to={`/items/${id}`}>
          <div className={styles.cellLabel}>Category</div>
          <div className={styles.cellContent}>{category}</div>
        </Link>
      </td>
      <td>
        <Link to={`/items/${id}`}>
          <div className={styles.cellLabel}>Description</div>
          <div className={styles.cellContent}>{description}</div>
        </Link>
      </td>
      <td>
        <Link to={`/items/${id}`} className={amountCls}>
          <div className={styles.cellLabel}>Amount</div>
          <div className={styles.cellContent}>{amount.text}</div>
        </Link>
      </td>
    </tr>
  );
  
};

export default BudgetGridRow;
