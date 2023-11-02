import axios from "axios";
import jsonp from "jsonp";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

const AddData = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();


const onSubmit = async (data) => {
  try {
      let response = await fetch('https://1gr4t93t41.execute-api.us-east-2.amazonaws.com/dev/wiki', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ wikiTitle: data.wikiTitle })
      });

      let responseData = await response.json();

      console.log(responseData);
      if (response.ok) {

        navigate('/data', { state: { searchData: responseData.data.query.search[0] } });
     
       
    } else {
        // Handle unsuccessful response here
        console.error('Error:', response.status);
    }
      
  } catch (error) {

      console.error(error);
  }
};

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        // border: "solid red 1px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "700px",
          height: "300px",
          border: "solid black",
          padding: "5px",
          borderRadius: "15px",
        }}
      >
        <h1 style={{ margin: "0px", fontFamily: "math" }}>Update References</h1>
        <hr style={{ margin: "0", borderColor: "#e5d8d8" }} />
        <h3 style={{ marginLeft: "30px", fontFamily: "monospace" }}>
          This form will analyze articles on Wikipedia and update references on
          our page.
        </h3>
        <form
          style={{
            padding: "5px",
            marginLeft: "20px",
            fontFamily: "sans-serif",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label htmlFor="wikiTitle" style={{ width: "185px" }}>
              Page title (in Wikipedia):
            </label>
            <input
              id="wikiTitle"
              required
              style={{ width: "440px", height: "18px" }}
              {...register("wikiTitle")}
            />
          </div>
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label htmlFor="ourWikiTitle" style={{ width: "185px" }}>
              Page title (our wiki):
            </label>
            <input
              id="ourWikiTitle"
              style={{ width: "440px", height: "18px" }}
              {...register("ourWikiTitle")}
            />
          </div>
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label htmlFor="section" style={{ width: "185px" }}>
              Section:
            </label>
            <input
              id="section"
              type="number"
              placeholder="0"
              style={{ width: "220px", height: "18px" }}
              {...register("section")}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="checkbox" style={{ width: "185px" }}></label>
            <input id="checkbox" type="checkbox" {...register("checkbox")} />
            <label>Append</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

    </div>
  );
};

export default AddData;
