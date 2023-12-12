import React from "react";
import imgBot from "../../assets/images/chat.png";
import imgUser from "../../assets/images/man.png";
import { useState } from "react";
import { io } from "socket.io-client";
import { useEffect } from "react";
import moment from "moment";

const ChatBox = () => {
  const [value, setValue] = useState("");
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState([]);
  const [hide, setHide] = useState(false);

  const handleClick = (e) => {
    const contentButton = e.target.innerText;
    setValue(contentButton);
    setHide(true);
  };

  const handleValue = (e) => {
    const contentValue = e.target.value;
    setValue(contentValue);
  };

  const examples = [
    "Hành vi tảo hôn xử phạt như thế nào? ",
    "Hành vi tẩy xóa, sửa chữa làm sai lệch nội dung",
    "Các vi phạm về thủ tục đăng ký kết hôn",
    "Người không quen biết sử dụng giấy tờ của mình đăng ký kết hôn",
    "Các vi phạm chế độ hôn nhân một vợ, một chồng",
    "Các vi hành tảo hôn, tổ chức tảo hôn xử phạt gì ?",
  ];

  useEffect(() => {
    const s = io("http://127.0.0.1:5000/");
    s.on("bot-answer", (data) => {
      console.log(data);
      setMessages((state) => [
        ...state,
        { content: data, date: new Date(), isUser: false },
      ]);
    });
    setSocket(s);
    return () => {
      s.disconnect();
    };
  }, []);

  const handelSendMessage = (e) => {
    e.preventDefault();
    setMessages([
      ...messages,
      { content: value, date: new Date(), isUser: true },
    ]);
    setValue("");
    socket.emit("user-send-message", value);
    setHide(true);
  };
  return (
    <div>
      {/* message */}
      {hide ? (
        <div className="  pb-44 pt-10 containerWrap ">
          {messages.map((item, index) => (
            <div key={index} className="">
              <div
                className={`chat  ${item.isUser ? "chat-start" : "chat-end"}`}
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img alt="#" src={item.isUser ? imgUser : imgBot} />
                  </div>
                </div>
                <div
                  className="chat-bubble chat-bubble-info"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
                <div className="chat-footer">
                  {item.isUser ? "User " : "Bot "}
                  <time className="text-xs opacity-50">
                    {moment(item.date).format("'YYYY-MM-DD HH:mm'")}
                  </time>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {/* Câu hỏi gợi ý */}
          {!hide ? (
            <div className="text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 ">
              <h1 className="text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">
                Câu hỏi gợi ý
              </h1>
              {/* <div className="md:flex items-start text-center gap-3.5">
                <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                  {examples.map((item, index) => (
                    <ul
                      key={index}
                      className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto"
                    >
                      <button
                        onClick={() => setShow(!show)}
                        className="w-full bg-gray-50 p-3 rounded-md hover:bg-gray-200 "
                      >
                        {item}
                      </button>
                    </ul>
                  ))}
                </div>
              </div> */}
              <div className="grid grid-cols-3 gap-4  auto-cols-max">
                {examples.map((item, index) => (
                  <ul
                    key={index}
                    className="flex flex-col gap-3.5 w-full m-auto items-stretch"
                  >
                    <button
                      onClick={handleClick}
                      className="w-full bg-gray-50 p-5 rounded-md hover:bg-gray-200 border "
                    >
                      {item}
                    </button>
                  </ul>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      )}

      {/* Send message */}
      <div className="bg-gray-200 fixed bottom-0  w-full py-10 shadow-lg ">
        <form onSubmit={handelSendMessage} className="px-2 containerWrap flex">
          <input
            value={value}
            onChange={handleValue}
            className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
            type="text"
          />
          <button className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">
            Gửi
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
