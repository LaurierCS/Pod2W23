import styles from "./index.module.css";
import { Container } from "@mantine/core";

import Header from "./Header/Header";
import Information from "./Information/Information";
import Improvement from "./Improvement/Improvement";

export default function DashboardBalance() {
  return (
    <Container id={styles.balanceTab}>
      <Header></Header>
      <Information></Information>
      <Improvement></Improvement>
    </Container>
  );
}
