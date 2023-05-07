import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import style from "../Components/style.css";

export default function Axios() {
    const [post, setPost] = useState([]);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
  
    // get method
    useEffect(() => {
      const fetchData = async () => {
        await axios
          .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
          .then((res) => {
            console.log(res.data);
            setPost(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      fetchData();
    }, []);
  
   
    return (
        <>
        <table border={1} cellPadding="0" cellSpacing="0"  width="90%" >
          <thead> 
            <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
            </tr>
            </thead>
            <tbody> 
            {post.map(items => (
              <tr>
              <td>key={items.id}</td>
              <td>{items.title}</td>
              <td>{items.body}</td>
              </tr>
                ))}
              </tbody>
          </table>
        </>
      )}
 
