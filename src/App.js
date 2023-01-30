import React, { useEffect, useState } from "react";
import Chat from "./component/Chat";
import Sidebar from "./component/sidebar";
import Pusher from "pusher-js";
import { instance } from "./Http";
const App = () => {
  const [message, setmessage] = useState([]);
  useEffect(() => {
    instance.get("/message").then((res) => {
      setmessage(res.data);
    });
  }, []);
  useEffect(() => {
    var pusher = new Pusher("2532b9c7ccd17b2e056f", {
      cluster: "mt1",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      setmessage([...message, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [message]);

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat message={message}/>
      </div>
    </div>
  );
};

export default App;
