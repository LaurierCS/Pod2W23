import styles from "./index.module.css";
import { Container } from "@mantine/core";

import Header from "./Header/Header";
import Columns from "./Columns/Columns";
import Transactions from "./Transactions/Transactions";

export default function DashboardTransactions() {
  return (
    <Container id={styles.transactionsTab}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
        rel="stylesheet"
      />

      <Header></Header>

      <Columns></Columns>

      <Transactions></Transactions>

      <Transactions></Transactions>
    </Container>
  );
}
