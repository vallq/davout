import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "semantic-ui-css/semantic.min.css";
import DataStatistics from "./components/DataStatistics";
import DataTable from "./components/DataTable";
import { Grid } from "semantic-ui-react";

function App() {
  const [priceData, setPriceData] = useState([{}]);
  useEffect(() => {
    let interval = setInterval(() => {
      fetch("/pricedata")
        .then((res) => res.json())
        .then((data) => {
          setPriceData(data);
        });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [statisticData, setStatisticData] = useState([{}]);
  useEffect(() => {
    let interval = setInterval(() => {
      fetch("/statistics")
        .then((res) => res.json())
        .then((data) => {
          setStatisticData(data);
        });
    }, 5000);
    console.log(interval);
    return () => clearInterval(interval);
  }, []);

  const PriceDataPage = () => {
    return (
      <Grid columns={2}>
        <Grid.Row columns={2}>
          <Grid.Column>
            <DataTable data={priceData} />
          </Grid.Column>
          <Grid.Column>
            <DataStatistics data={statisticData} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  };

  const StatisticsPage = () => {
    return (
      <Grid columns={2}>
        <Grid.Row columns={2}>
          <Grid.Column>
            <p>Insert other tables here</p>
          </Grid.Column>
          <Grid.Column>
            <DataStatistics data={statisticData} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  };

  const Others = () => {
    return <p>This is a new page</p>;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={PriceDataPage} />
          <Route exact path="/stats" component={StatisticsPage} />
          <Route exact path="/others" component={Others} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
