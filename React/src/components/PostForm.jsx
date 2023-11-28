import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { toast } from "react-toastify";
import { addPost } from "../redux/apiCalls";

export const PostForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleInputsChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    await addPost(inputs);
    
  };
  const handleCancel = () => {
    setInputs({});
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "20px",
      }}
    >
      <Button type="primary" icon={<PlusCircleOutlined />} onClick={showModal}>
        Add post
      </Button>
      <Modal
        title="Add post"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"Post"}
      >
        <Form
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 20 }}
          layout="horizontal"
          style={{ marginTop: "20px" }}
        >
          <Form.Item label="Title">
            <Input
              name="title"
              placeholder="Title"
              onChange={handleInputsChange}
              value={inputs.title || ""}
            />
          </Form.Item>
          <Form.Item label="Body">
            <TextArea
              rows={4}
              name="body"
              placeholder="Body"
              onChange={handleInputsChange}
              value={inputs.body || ""}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
