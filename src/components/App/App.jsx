import React from "react";
import { Wrapper } from "./App.styles";
import { Form } from "../Form/Form";
import { Post } from "../Post/Post";

export const App = () => {
  return(
    <Wrapper>
      <Form />

      <h1>Posts</h1>

      <Post />
    </Wrapper>
  )
}