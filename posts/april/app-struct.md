---
title: "Meeting"
bio: "Continuing Work on Projects"
priority1: "Work on LAEP chatbot"
priority2: "Work on Next.js Static Blog Site"
priority3: "Learn how to use shadcn ui component library"
---

# App.jsx

## Header

### UI Context Vars

- isSidebarVisible, setIsSidebarVisible
- isDropdownVisible, setIsDropdownVisible

### Model Context Vars

- modelType, setModelType
- currentChatId, setCurrentChatId

### Message Context Vars

- msgList, setMsgList
- logList, setLogList

## Component Created in Header is SideBar

### UI Context Vars

- isSidebarVisible, setIsSidebarVisible

### Message Context Vars

- msgList, setMsgList
- logList, setLogList

## Component Created in Sidebar is ChatLog

### Message Context Vars

- msgList, setMsgList
- logList, setLogList

# ChatContainer

- msgList, setMsgList
- logList, setLogList
- isNewChat, setIsNewChat
- modelType

## Created State Vars

- msg, setMsg

## 2 Components created in ChatContainer

### ChatMessage

- msg

### ChatInput

- modelType
- msg, setMsg
- msgList, setMsgList
- logList, setLogList
- isNewChat
- messagesContainerRef
