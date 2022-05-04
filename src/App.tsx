import React from "react";
import "./App.css";
import { Modal, Input } from "antd";
import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <Modal visible={true}>
        <Input
          placeholder="
        未添加title时关闭按钮会和内容重合"
        />
      </Modal>
    </div>
  );
}

export default App;
