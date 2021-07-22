import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import StoryBook from "./components/storyBook/StoryBook";
import SignUp from "./components/signUp/SignUp";
import theme from "./common/theme";

import { Link } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Link to="/story-book">
          <h2>Story-book</h2>
        </Link>
        <Link to="/sign-up">
          <h2>Sign-up</h2>
        </Link>
        <Switch>
          <Route exact path="/story-book">
            <StoryBook />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
