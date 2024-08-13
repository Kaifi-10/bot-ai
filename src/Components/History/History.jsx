import { Typography, Box, Stack, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import ChatFilter from "./ChatFilter";
import ChatCard from "../ChatCard/ChatCard";
import AiChatCard from "../AiChatCard/AiChatCard";
import AiHistoryCard from "./AiHistoryCard";
import { format, isEqual, startOfDay, add } from 'date-fns'
import styles from './History.module.css'


const getInitialChats = () => {
  const savedChats = localStorage.getItem("savedChats");
  return savedChats ? JSON.parse(savedChats) : [];
};

export default function History() {
  const [chats, setChats] = useState(getInitialChats());
  const [filteredChats, setFilteredChats] = useState(chats);

  useEffect(() => {
    setFilteredChats(chats);
    
  }, [chats]);

  const formatDate = (date) => {
    const today = startOfDay(new Date())

    if (isEqual(date, today)) {
        return `Today's chats`
    }
    else if (isEqual(today, add(date, { days: 1 }))) {
        return `Yesterday's chats`
    }
    else {
        return format(date, 'do LLL yyyy')
    }
}

  return (
    <Box
      height={"100vh"}
      overflow={"hidden"}
      sx={{
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "10px",
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 8px rgba(0,0,0,0.1)",
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(151, 133, 186,0.4)",
          borderRadius: "8px",
        },
      }}
    >
      <Box p={{ xs: 2, md: 3 }}>
        <Typography variant="h2" textAlign={"center"} mb={3} marginTop={"25px"} className={styles.historyHeading}>
          Conversation History
        </Typography>
        <Box sx={{
            display:'flex',
            alignItems:'flex-start'
        }}
        width={{xs: 4, md: 3}}>
            {chats.length > 0 && (
            <ChatFilter allChats={chats} filterChats={setFilteredChats} />
            )}
        </Box>
       
        {chats.length === 0 && (
          <Typography
            textAlign={"center"}
            p={3}
            bgcolor={"white"}
            borderRadius={2}
          >
            No saved chats.
          </Typography>
        )}

        {chats.length > 0 && filteredChats.length === 0 && (
          <Typography
            textAlign={"center"}
            p={3}
            bgcolor={"white"}
            borderRadius={2}
          >
            No such chats.
          </Typography>
        )}

        {filteredChats.length > 0 && (
          <Stack
            spacing={4}
            divider={
              <Divider sx={{ borderColor: "primary.bg", opacity: 0.4 }} />
            }
          >
            {/* Highlight: Updated to match the new data structure */}
            {filteredChats.map((chat, chatIndex) => (
              <Box key={chat.id}>
                <Typography variant="h6">
                    {formatDate(chat.date)}
                </Typography>
                {chat.chatHistory.map((item) => (
                  // Highlight: Conditional rendering based on type
                  <Box key={item.id}>
                    {item.type === "Human" ? (
                    //   <ChatCard question={item.text} />
                    <AiHistoryCard 
                        type={item.type}
                        response={item.text} 
                        localFeedback={() => {}}  // Disabled for read-only
                        localRating={() => {}}    // Disabled for read-only
                        initialRating={item.rating}  // Updated
                        initialFeedback={item.feedback}  // Updated
                        id={item.id}
                        date = {chat.date}
                        time = {chat.time}
                      />
                    ) : (
                      <AiHistoryCard 
                        type={item.type}
                        response={item.text} 
                        localFeedback={() => {}}  // Disabled for read-only
                        localRating={() => {}}    // Disabled for read-only
                        initialRating={item.rating}  // Updated
                        initialFeedback={item.feedback}  // Updated
                        id={item.id}
                        date = {chat.date}
                        time = {chat.time}
                      />
                    )}
                    
                  </Box>
                ))}
              </Box>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
}