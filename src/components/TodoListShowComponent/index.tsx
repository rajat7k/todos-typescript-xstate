import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { HeadingBoldSpan, HomePageBtn, HomePageSubHeading, TodoListContainer } from '../HomeStyleComponents'

const TodoListShowComponent:React.FC=()=>{
    return (
        <TodoListContainer>
            <HomePageSubHeading> <HeadingBoldSpan>My</HeadingBoldSpan> Tasks </HomePageSubHeading>
            <Tabs>
                <TabList>
                    <Tab>All Todos</Tab>
                    <Tab>Active</Tab>
                    <Tab>Completed</Tab>
                </TabList>
                <TabPanel>
                   
                </TabPanel>
                <TabPanel>
                    
                </TabPanel>
                <TabPanel>
                   
                </TabPanel>
            </Tabs>

            <HomePageBtn>Save</HomePageBtn>

        </TodoListContainer>
    )
}

export default TodoListShowComponent