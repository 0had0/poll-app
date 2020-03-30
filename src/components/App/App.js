import React, { useState, createContext, useReducer, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from "react-router-dom";
import Styled from "styled-components";

import HomePage from "../HomePage";
import CreatePage from "../CreatePage";
import PollPage from "../PollPage";
import Text from "../Text";
import Loading from "../Loading";

export const themeContext = createContext(null);

const Root = Styled.div`
  width:100%;
  @media (min-width: 500px) {
    width:500px;
  }
  minHeight:100vh;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  color:${props => props.color};
  gradien:${props => props.gradien};
`;

const Header = Styled.div`
  width:260px;
  height:270px;
  padding:8px;
  display:flex;
  justify-content:start;
  align-items:center;
`;

function App({ Firebase }) {
  const [state, ChangeTheme] = useReducer(
    state => ({
      background: state.background === "#000" ? "#fff" : "#000",
      gradien:
        state.background === "#000"
          ? "-webkit-linear-gradient(44.75deg, #FF0000 -0.41%, rgba(255, 184, 0, 0.986667) 99.99%)"
          : "-webkit-linear-gradient(44.75deg, #00FCFF -0.41%, rgba(0, 0, 255, 0.986667) 99.99%)",
      color: state.background === "#000" ? "#000" : "#fff",
      firstColor: state.background === "#fff" ? "#00FCFF" : "#ff0000",
      secondColor: state.background === "#fff" ? "#0000FF" : "#FFC700"
    }),
    {
      background: "#fff",
      gradien:
        "-webkit-linear-gradient(44.75deg, #FF0000 -0.41%, rgba(255, 184, 0, 0.986667) 99.99%)",
      color: "#000",
      firstColor: "#FF0000",
      secondColor: "#FFC700"
    }
  );
  const [question, setQuestion] = useState("");
  // eslint-disable-next-line
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handlePoll = async setLoading1 => {
    //Firebase Suff
    if (question === "") return;
    let id = await Firebase.addPoll(question);
    setLoading1(false);
    let url = window.location.href.split("/");
    url[4] = id;
    window.location.replace(url.join("/"));
  };

  useEffect(() => {
    async function getAuthUser() {
      await Firebase.signInAnonymous(setAuthUser, setLoading);
    }
    getAuthUser();
    ChangeTheme();
    document.body.style.backgroundColor = state.background;
    // eslint-disable-next-line
  }, []);

  async function handleVote(a) {
    let url = window.location.href.split("/");
    await Firebase.vote(url.pop(), a);
  }

  return (
    <themeContext.Provider value={{ state, ChangeTheme }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          minHeight: "100vh",
          background: state.background
        }}
      >
        <Root color={state.color} gradien={state.gradien}>
          <Header>
            <Text color={state.gradien} size="5em" weight="500">
              Poll
              <br />
              App
            </Text>
          </Header>
          <Router>
            {loading ? (
              <Loading color={state.firstColor} />
            ) : (
              <React.Fragment>
                <Route exact path="" component={HomePage} />
                <Switch>
                  <Route
                    path="/create"
                    render={() => (
                      <CreatePage
                        action={q => setQuestion(q)}
                        addPoll={setLoading => handlePoll(setLoading)}
                      />
                    )}
                  />
                  <Route
                    path="/:id"
                    render={() => {
                      return (
                        <PollPage
                          action={a => handleVote(a)}
                          getId={useParams}
                          Firebase={Firebase}
                        />
                      );
                    }}
                  />
                </Switch>
              </React.Fragment>
            )}
          </Router>
          <Text margin="10px" size="12px" weight="300">
            <a
              style={{ textDecoration: "none", color: state.color }}
              href="https://0had0.github.io/portfolio"
            >
              Hadi Houssainy @ 2020
            </a>
          </Text>
        </Root>
      </div>
    </themeContext.Provider>
  );
}

export default App;
