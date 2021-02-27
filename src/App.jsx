import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./components/Login";
import Dashboard from "./components/Admin/Dashboard";
import MessageList from "./components/Admin/Message/MessageList";
import MessageDetails from "./components/Admin/Message/MessageDetails";
import ProjectForm from "./components/Admin/Project/Forms/ProjectForm";
import PageWrapper from "./components/Admin/PageWrapper";

import "./App.css";
import ProjectPage from "./components/Admin/Project/ProjectList";

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Login} />
				<Route
					path="/dashboard"
					component={() => <PageWrapper children={<Dashboard />} />}
				/>
				<Route
					path="/projects"
					component={() => <PageWrapper children={<ProjectPage />} />}
				/>
				<Route
					path="/createProject"
					component={() => <PageWrapper children={<ProjectForm />} />}
				/>
				<Route
					path="/editProject/:id"
					component={() => <PageWrapper children={<ProjectForm />} />}
				/>
				<Route
					path="/messages"
					ccomponent={() => <PageWrapper children={<MessageList />} />}
				/>
				<Route
					path="/message/:id"
					component={() => <PageWrapper children={<MessageDetails />} />}
				/>
			</Switch>
		</div>
	);
};

export default App;
