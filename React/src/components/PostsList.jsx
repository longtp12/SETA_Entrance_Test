import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/apiCalls";
import { Card, Col, Row } from "antd";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts(dispatch);
  }, []);
  return (
    <div>
      <Row gutter={[32, 24]}>
        {posts.map((post) => (
          <Col key={post.id} span={6}>
            <Card hoverable={true} title={post.title} style={{ width: 290 }}>
              <p>{post.body}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
