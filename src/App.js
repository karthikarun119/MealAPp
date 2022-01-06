import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';


import SearchMealByName from './components/SearchMeal/SearchMealByName';
import MealCategory from './components/MealCategory/MealCategory';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="Container">
     <h1> Meal App</h1>
     <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Search Meal By Name" value="1" />
            <Tab label="List All Categories" value="2" />
          </TabList>
        </AppBar>
        <TabPanel value="1"><SearchMealByName/></TabPanel>
        <TabPanel value="2"><MealCategory/></TabPanel>
      </TabContext>
    </div>
    </div>
  );
}

export default App;
