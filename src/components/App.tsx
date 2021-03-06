import * as React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { I18n } from 'react-polyglot';
import { BrowserRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserCircle, faTachometerAlt, faSearchDollar,
    faTools, faChartBar, faChartLine, faChartArea, faDownload, faUpload, faShieldAlt,
    faCommentAlt, faFlag, faPlus, faClock, faHandPointRight, faDollarSign,
    faRulerVertical, faRulerHorizontal, faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

library.add(
     faUserCircle, faTachometerAlt, faSearchDollar,
     faTools, faChartBar, faChartLine, faChartArea, faDownload, faUpload, faShieldAlt,
     faCommentAlt, faFlag, faPlus, faClock, faHandPointRight, faDollarSign,
     faRulerVertical, faRulerHorizontal, faQuestionCircle
);

const AppWrapper = styled.div`
  background: ${props => props.theme.colors.background};
  min-width: 100%;
  min-height: 100vh;
  max-width: 100%;
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  border: none;
  position: absolute;
  left: 0;
  top: 0;
`;

const locale = 'en';
import messages from 'langs/en';
import defaultTheme from 'themes/default';
import routes from 'routes/index';

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <I18n locale={locale} messages={messages}>
                <ThemeProvider theme={defaultTheme}>
                    <Router>
                        <AppWrapper>
                            {routes()}
                        </AppWrapper>
                    </Router>
                </ThemeProvider>
            </I18n>
        );
    }
}
