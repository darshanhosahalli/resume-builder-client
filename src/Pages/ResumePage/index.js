import React from 'react';
import Helmet from 'react-helmet';

import Projects from '../../containers/Projects';
import CardsContainer from '../../components/CardContainer';
import EditContext from '../../utils/EditContext';
import Container from '../../components/Container';
import DivWithBackground from '../../components/Background';
import Flex from '../../components/Flex';
import Column from '../../components/Column';
import Profile from '../../containers/Profile';
import SkillList from '../../containers/SkillList';
import ExperienceBoard from '../../containers/ExperienceBoard';
import Education from '../../containers/Education';
import Accomplishments from '../../containers/Accomplishments';
import ErrorBoundary from '../../components/ErrorBoundary';

const ResumePage = () => {
    return  <React.Fragment>
                <Helmet>
                    <title>Rèsume</title>
                    <meta
                        name="online application to create resume"
                        content="app to create resume"
                    />
                </Helmet>
                <div>
                    <DivWithBackground
                    centerAlign={false}
                    height={'auto'}
                    >
                        <Container>
                            <EditContext.Provider value={true}>
                                <CardsContainer>
                                    <Profile/>
                                </CardsContainer>
                            </EditContext.Provider>
                            <Flex>
                                <Column flexDirection={'column'}>
                                    <EditContext.Provider value={true}>
                                        <CardsContainer>
                                            <SkillList/>
                                        </CardsContainer>
                                    </EditContext.Provider>
                                    <EditContext.Provider value={true}>
                                        <ErrorBoundary>
                                            <CardsContainer>
                                                <Education/>
                                            </CardsContainer>
                                        </ErrorBoundary>
                                    </EditContext.Provider>
                                    <EditContext.Provider value={true}>
                                        <CardsContainer>
                                            <Accomplishments title={'Publications'}/>
                                        </CardsContainer>
                                    </EditContext.Provider>
                                </Column>
                                <Column flexDirection={'column'}> 
                                    <EditContext.Provider value={true}>
                                        <CardsContainer>
                                            <ExperienceBoard/>
                                        </CardsContainer>
                                    </EditContext.Provider>
                                    <EditContext.Provider value={true}>
                                        <CardsContainer>
                                            <Projects/>
                                        </CardsContainer>
                                    </EditContext.Provider>
                                    <EditContext.Provider value={true}>
                                        <CardsContainer>
                                            <Accomplishments title={'Accomplishments'}/>
                                        </CardsContainer>
                                    </EditContext.Provider>
                                    <EditContext.Provider value={true}>
                                        <CardsContainer>
                                            <Accomplishments title={'Interests'}/>
                                        </CardsContainer>
                                    </EditContext.Provider>
                                </Column>
                            </Flex>
                        </Container>
                    </DivWithBackground>
                </div>
            </React.Fragment>
};

export default ResumePage;