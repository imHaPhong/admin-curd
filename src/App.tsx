import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppContextProvider } from "./contexts";
import { routesConfig } from "./routes-config";
import "./styles/tailwind.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <AppContextProvider
      initNotification={{
        message: "This text is read from context.notification ",
      }}
    >
      <ToastContainer
        position="top-center"
        autoClose={300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="w-full ">
        <BrowserRouter>
          <Switch>
            {routesConfig.map(({ path, exact, component: Component }) => (
              <Route key={path} exact={exact} path={path} component={Component} />
            ))}
          </Switch>
        </BrowserRouter>
      </div>
    </AppContextProvider>
  );
}
