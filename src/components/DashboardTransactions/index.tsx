import styles from "./index.module.css";
import { Container } from "@mantine/core";

import Header from "./Header/Header";
import Columns from "./Columns/Columns";
import Transactions from "./Transactions/Transactions";

export default function DashboardTransactions() {
  return (
    <Container id={styles.transactionsTab}>
      <Header></Header>

      <Columns></Columns>

      <Transactions></Transactions>

      <Transactions></Transactions>
    </Container>
  );
}
