import { Layout } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { PostForm } from "./components/PostForm";
import { PostsList } from "./components/PostsList";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <ToastContainer />
      <Content>
        <div
          style={{
            // background: "white",
            color: "black",
            padding: "20px",
          }}
        >
          <PostForm />
          <PostsList />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
