import React from 'react';
import Head from '../ui/Head';
import TopNav from '../ui/TopNav';
import Footer from '../ui/Footer';
import ApartRank from '../ui/ApartRank';
import ApartInfoHeader from '../ui/ApartInfoHeader'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
const { children, value, index, ...other } = props;

return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`full-width-tabpanel-${index}`}
    aria-labelledby={`full-width-tab-${index}`}
    {...other}
    >
    {value === index && (
        <Box p={3}>
        <Typography>{children}</Typography>
        </Box>
    )}
    </div>
);
}

TabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.any.isRequired,
value: PropTypes.any.isRequired,
};

function a11yProps(index) {
return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
};
}

const useStyles = makeStyles((theme) => ({
root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
},
}));

const data = [
    {
        name: '6월', "전국" : 3500, area1 : 4000, current: 2400, amt: 2400,
    },
    {
        name: '7월', "전국" : 3500, area1 : 3000, current: 1398, amt: 2210,
    },
    {
        name: '8월', "전국" : 3500, area1 : 2000, current: 9800, amt: 2290,
    },
    {
        name: '9월', "전국" : 3500, area1 : 2780, current: 3908, amt: 2000,
    },
    {
        name: '10월', "전국" : 3500, area1 : 1890, current: 4800, amt: 2181,
    },
    {
        name: '11월', "전국" : 3500, area1 : 2390, current: 3800, amt: 2500,
    },
];
function ApartInfoPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <>
            <Head isHome={false}/>
            <TopNav />
            <ApartInfoHeader apart={props.location.apart} />
            <ApartRank title={"전국 랭킹"} apart={props.location.apart}/>
            <ApartRank title={"해당 지역구 랭킹"} apart={props.location.apart}/>

            <div>
                급상승 랭킹
            </div>

            <div>
                <div>
                    전국 급상승 1위
                </div>
                <div>
                    지역내 급상승 1위
                </div>
            </div>
            <div>
                우리집 급상승 순위(상세 내용)
            </div>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="current" stroke="#8884d8" activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="전국" stroke="#82ca9d" />
                <Line type="monotone" dataKey="area1" stroke="#82ca9d" />
            </LineChart>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    >
                    <Tab label="전국" {...a11yProps(0)} />
                    <Tab label="지역" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        전국
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        지역
                    </TabPanel>
                </SwipeableViews>
            </div>
            <div>
                댓글 시스템
            </div>
            <Footer/>
        </>
    )
}

export default ApartInfoPage;