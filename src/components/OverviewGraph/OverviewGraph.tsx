import styles from "./OverviewGraph.module.css";
import { Container, Title, Text, Tabs, Stack } from '@mantine/core';
import { useState, useEffect } from 'react';
import PieGraph from "./PieGraph/PieGraph";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../scripts/firebase/config';
import intervalToDate from '../../tools/intervalToDate';

const OverviewGraph = () => {

  const colors = ['#ffffff'];

  const data = [
    {
      "id": "",
      "label": "",
      "value": 0
    }
  ];

  interface PieProps {
    data: PieData[];
    colors: string[];
  }

  interface PieData {
    id: string;
    label: string;
    value: number;
  }

  interface ExpenseData {
    name: string;
    amount: number;
    date: string;
    category: CategoryDetails;
  }

  interface CategoryDetails {
    name: string;
    color: string;
  }

  interface Summary {
    title: string;
    net: number;
    income: number;
    expenses: number;
  }

  const [activeTab, setActiveTab] = useState<string | null>('week');
  const [interval, setInterval] = useState<number>(7);
  const [summary, setSummary] = useState<Summary>({title: `Last ${interval} Days`, net: 0, income: 0, expenses: 0});
  const [graphData, setGraphData] = useState<PieProps>({data: data, colors: colors});
  const [legendData, setLegendData] = useState<CategoryDetails[]>();

  useEffect(() => {

    const getExpenseData = async () => {

      const data: ExpenseData[] = [];
      const legendData: CategoryDetails[] = [];
      const categoryAmounts: PieData[] = [];
      const colors: string[] = [];
      let income: number = 0;
      let expenses: number = 0;

      const q = query(collection(db, "expenses"),
        where("date", ">=", intervalToDate(interval)),
        where("date", "<=", intervalToDate(0)));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });

      console.log(data);

      data.forEach((expense) => {
        if (!colors.includes(expense.category.color)) {
          colors.push(expense.category.color);
        }

        let i: number = categoryAmounts.findIndex(e => e.label === expense.category.name);
        if (i === -1) {
          categoryAmounts.push({id: expense.category.name.toLowerCase(), label: expense.category.name, value: (Math.round((expense.amount + Number.EPSILON) * 100) / 100)});
          legendData.push(expense.category);
        } else {
          categoryAmounts[i].value += (Math.round((expense.amount + Number.EPSILON) * 100) / 100);
          categoryAmounts[i].value = Math.round((categoryAmounts[i].value + Number.EPSILON) * 100) / 100;
        }

        expenses += expense.amount;

      });

      setLegendData(legendData);

      
      // ******************************
      // show to Ryan and Paul then delete
      console.log(legendData);

      setSummary({
        title: `Last ${interval} days:`,
        net: income - expenses,
        income: income,
        expenses: expenses
      });

      setGraphData(() => ({
        data: categoryAmounts,
        colors: colors
      }));
    };
    getExpenseData();
  }, [interval]);

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
            <Text className={styles.summaryTitle}>{summary.title}</Text>
            <Container className={styles.change}>
              <Title order={5}>Net Change</Title>
              <Text>${summary.net.toFixed(2)}</Text>
            </Container>
            <Container className={styles.income}>
              <Title order={5}>Income</Title>
              <Text>${summary.income.toFixed(2)}</Text>
            </Container>
            <Container className={styles.expenses}>
              <Title order={5}>Expenses</Title>
              <Text>${summary.expenses.toFixed(2)}</Text>
            </Container>
          </Stack>
        </Container>
      </Container>
    </Container>
  );
}

export default OverviewGraph;