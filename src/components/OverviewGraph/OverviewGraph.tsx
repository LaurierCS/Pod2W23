import styles from "./OverviewGraph.module.css";
import { Container, Grid, Title, Text, Tabs, Stack, Button } from '@mantine/core';
import { useState, useEffect } from 'react';
import PieGraph from "./PieGraph/PieGraph";
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { app, db } from '../../scripts/firebase/config';
import intervalToDate from '../../tools/intervalToDate';

const OverviewGraph = () => {

  const data = [
    {
      "id": "elixir",
      "label": "elixir",
      "value": 152,
      "color": "hsl(300, 70%, 2%)"
    },
    {
      "id": "scala",
      "label": "scala",
      "value": 21,
      "color": "hsl(309, 70%, 50%)"
    },
    {
      "id": "css",
      "label": "css",
      "value": 262,
      "color": "hsl(117, 70%, 50%)"
    },
    {
      "id": "erlang",
      "label": "erlang",
      "value": 598,
      "color": "hsl(204, 70%, 50%)"
    },
    {
      "id": "haskell",
      "label": "haskell",
      "value": 142,
      "color": "hsl(59, 70%, 50%)"
    }
  ];

  interface PieData {
    id: string;
    label: string;
    value: number;
    color: string;
  }

  interface ExpenseData {
    name?: string;
    amount?: number;
    date?: string;
    category?: CategoryDetails;
    details?: ExpenseDataDetails;
  }

  interface CategoryDetails {
    name?: string;
    color?: string;
  }

  interface ExpenseDataDetails {
    recurring: boolean;
    interval: number;
    timePeriod: string;
  }

  const [activeTab, setActiveTab] = useState<string | null>('week');
  const [interval, setInterval] = useState<number>(7);

  useEffect(() => {
    const data: ExpenseData[] = [];
    const getExpenseData = async () => {
      const q = query(collection(db, "expenses"), 
      where("date", ">=", intervalToDate(interval)),
      where("date", "<=", intervalToDate(0)));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
        console.log(doc.id, " => ", doc.data());
    });
    };
    data.forEach((expense) => {});
    getExpenseData();
  }, [interval]);

  const [graphData, setGraphData] = useState<PieData[]>(data);

  let intervalMessage: string = `Last ${interval} days`;

  const handleIntervalChange = (value: string) => {
    setActiveTab(value);

    if (value === 'week') {
      setInterval(7);
    } else if (value === 'month') {
      setInterval(30);
    } else {
      setInterval(365);
    }

  }

  return(
    <Container className={styles.container}>
      <Container className={styles.nav}>
        <Title order={3}>Overview</Title>
        <Tabs styles={{ tab: {
            color: '#F8F9FA',
            '&[data-active]': { backgroundColor: '#2C2E33'},
            '&[data-active]:hover': { backgroundColor: '#2C2E33'},
            '&:hover': { backgroundColor: '#25262B'}
            } }}
          variant="pills" value={activeTab} onTabChange={handleIntervalChange}>
          <Tabs.List>
            <Tabs.Tab value="week">Week</Tabs.Tab>
            <Tabs.Tab value="month">Month</Tabs.Tab>
            <Tabs.Tab value="year">Year</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Container>
      <Container className={styles.overview}>
        <Container className={styles.graph}>
          <PieGraph data={graphData}></PieGraph>
        </Container>
        <Container className={styles.sideinfo}>
          <Stack className={styles.stack}>
            <Container className={styles.change}>
              <Title order={4}>Net Change</Title>
              <Text>{intervalMessage}</Text>
            </Container>
            <Container className={styles.income}>
              <Title order={4}>Income</Title>
            </Container>
            <Container className={styles.expenses}>
              <Title order={4}>Expenses</Title>
              <Text>{expenseAmount}</Text>
            </Container>
          </Stack>
        </Container>
      </Container>
    </Container>
  );
}

export default OverviewGraph;