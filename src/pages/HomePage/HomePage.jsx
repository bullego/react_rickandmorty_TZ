import React, { useState } from 'react';
//material-ui
import { AppBar, Tabs, Tab } from '@material-ui/core';
//Components
import { Characters } from '../../components/Characters';
import { Episodes } from '../../components/Episodes';
import { Locations } from '../../components/Locations';
import { WatchList } from '../../components/WatchList';
//styles
import stl from './HomePage.module.css';

const HomePage = () => {
	const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

	return (
		<div className={stl.homepage}>
			<AppBar color='primary'>
				<Tabs value={selectedTab} onChange={handleChange} variant="fullWidth">
					<Tab label='Characters'/>
					<Tab label='Episodes'/>
					<Tab label='Locations'/>
					<Tab label='WatchList'/>
				</Tabs>
			</AppBar>

			<TabPanel value={selectedTab} index={0}> <Characters/> </TabPanel>
			<TabPanel value={selectedTab} index={1}> <Episodes/> </TabPanel>
			<TabPanel value={selectedTab} index={2}> <Locations/> </TabPanel>
			<TabPanel value={selectedTab} index={3}> <WatchList/> </TabPanel>
		</div>
	);
};

const TabPanel = ({children, value, index}) => {
	return (
		<div>
			{ value === index && (<h2>{children}</h2>) }
		</div>
	)
}

export { HomePage };