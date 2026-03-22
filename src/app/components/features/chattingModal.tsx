import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DiamondIcon from "@mui/icons-material/Diamond";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "../../../css/chat.scss";
import { SocketContext } from "../context/socket";
import { ChatGreetMsg, ChatInfoMsg, ChatMessage } from "../../types/other";
import { verifyMemberData } from "../../apiServices/verify";
import { RippleBadge } from "../../MaterialTheme/styled";
import { sweetErrorHandling, sweetFailureProvider } from "../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { Avatar, Box } from "@mui/material";
import { serverApi } from "../../lib/config";
import moment from "moment";

const NewMessage = (data: any) => {
  const isMine = data.new_message.mb_id === verifyMemberData?._id;
  if (isMine) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          gap: "8px",
          m: "6px 0",
        }}
      >
        <div className="msg_right">{data.new_message.msg}</div>
        <Avatar
          src={
            data.new_message.mb_image?.startsWith("http")
              ? data.new_message.mb_image
              : data.new_message.mb_image
                ? `${serverApi}/${data.new_message.mb_image}`
                : "/auth/default_user.svg"
          }
          sx={{ width: 28, height: 28 }}
        />
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          gap: "8px",
          m: "6px 0",
        }}
      >
        <Avatar
          src={
            data.new_message.mb_image?.startsWith("http")
              ? data.new_message.mb_image
              : data.new_message.mb_image
                ? `${serverApi}/${data.new_message.mb_image}`
                : "/auth/default_user.svg"
          }
          alt={data.new_message.mb_nick}
          sx={{ width: 28, height: 28 }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          <span
            style={{
              fontSize: "11px",
              color: "#B8A898",
              paddingLeft: "2px",
              fontFamily: "'Jost', sans-serif",
            }}
          >
            {data.new_message.mb_nick}
          </span>
          <div className="msg_left">{data.new_message.msg}</div>
        </Box>
      </Box>
    );
  }
};

const Chatting = () => {
  // ** INITIALIZATIONS ** //
  const socket = useContext(SocketContext);
  const [messageList, setMessagelist] = useState([]);
  const [onlineUser, setOnline] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [unreadCount, setUnreadCount] = useState(1);
  const textInput: any = useRef(null);
  useEffect(() => {
    socket.connect();
    console.log("PRINTED");
    socket?.on("connect", function () {
      console.log("CLIENT: connected");
    });
    socket?.on("newMsg", (new_message: ChatMessage) => {
      console.log("CLIENT: new message");
      messageList.push(
        // @ts-ignore
        <NewMessage new_message={new_message} key={messageList.length} />,
      );
      setMessagelist([...messageList]);
    });
    socket?.on("greetMsg", (msg: ChatGreetMsg) => {
      console.log("CLIENT: greet message");
      messageList.push(
        // @ts-ignore
        <Box
          key="greet"
          sx={{
            textAlign: "center",
            m: "12px 8px",
            background: "#EDE3D8",
            borderRadius: "10px",
            padding: "8px 14px",
            fontSize: "12px",
            color: "#8B6B4A",
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
          }}
        >
          {msg.text}, dear{" "}
          <span style={{ color: "#2C1810", fontWeight: 500 }}>
            {verifyMemberData?.mb_nick ?? "guest"}
          </span>
        </Box>,
      );
      setMessagelist([...messageList]);
    });

    socket?.on("infoMsg", (msg: ChatInfoMsg) => {
      console.log("CLIENT: info message");
      setOnline(msg.total);
    });
    return () => {
      socket.off("newMsg");
      socket.off("greetMsg");
      socket.off("infoMsg");
      socket.disconnect();
    };
  }, [socket]);

  // ** HANDLERS ** //
  const getInputMessageHandler = useCallback(
    (e: any) => {
      const text = e.target.value;
      setMessage(text);
    },
    [message],
  );

  const sendMessage = () => {
    try {
      if (!verifyMemberData) {
        textInput.current.value = "";
        sweetFailureProvider("Please login first", true);
        return false;
      }
      textInput.current.value = "";
      assert.ok(message, Definer.input_err3);
      const mb_image_url = verifyMemberData?.mb_image
        ? verifyMemberData.mb_image.startsWith("http")
          ? verifyMemberData.mb_image // allaqachon to'liq URL
          : `${serverApi}/${verifyMemberData.mb_image}` // faqat path kelsa qo'shadi
        : "/pictures/auth/default_user.svg";
      socket.emit("createMsg", {
        msg: message,
        mb_id: verifyMemberData?._id,
        mb_nick: verifyMemberData?.mb_nick,
        mb_image: mb_image_url,
      });
      setMessage("");
    } catch (err: any) {
      console.log("sendMessage, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setUnreadCount(0);
  };

  const getKeyHandler = (e: any) => {
    try {
      if (e.key === "Enter") {
        assert.ok(message, Definer.input_err3);
        sendMessage();
      }
    } catch (err: any) {
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="chat-widget-container">
      {isOpen && (
        <div className="simple-chat-container chat-open">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-left">
              <div className="chat-header-avatar">
                <DiamondIcon />
              </div>
              <div className="chat-header-info">
                <h3 className="chat-title">Nimora Chatting</h3>
                <p className="chat-status">
                  <span className="status-dot" />
                  Online{" "}
                  <RippleBadge
                    badgeContent={verifyMemberData ? onlineUser : 0}
                  />
                </p>
              </div>
            </div>
            <button className="chat-close-btn" onClick={handleToggleChat}>
              <CloseOutlinedIcon sx={{ fontSize: "18px" }} />
            </button>
          </div>
          {/* Messages */}
          <div className="chat-messages">
            <div className="chat-divider">
              {" "}
              <span className="time">{moment().format("MM-DD HH:MM")}</span>
            </div>
            {messageList}
          </div>
          {/* Input */}
          <div className="chat-input-area">
            <textarea
              ref={textInput}
              value={message}
              onChange={getInputMessageHandler}
              placeholder="Type message..."
              className="chat-textarea"
              onKeyDown={getKeyHandler}
            />
            <button onClick={sendMessage} className="chat-send-btn">
              <SendOutlinedIcon sx={{ fontSize: "16px" }} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        className={`chat-toggle-btn ${isOpen ? "open" : "closed"}`}
        onClick={handleToggleChat}
      >
        {isOpen ? (
          <CloseOutlinedIcon sx={{ fontSize: "22px" }} />
        ) : (
          <>
            <DiamondIcon sx={{ fontSize: "24px" }} />
            {unreadCount > 0 && (
              <span className="chat-badge">{unreadCount}</span>
            )}
          </>
        )}
      </button>
    </div>
  );
};

export default Chatting;
