import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    filterBy: "Inbox",
    inbox: [
      {
        id: "761e9fe2-41b6-1100-0000-20e0eca624c6",
        sent: "8:00 am",
        sender: "Ewan McGregor",
        from: "mhallatt0@walmart.com",
        subject: "Office Assistant IV",
        body:
          "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
        date: "3/31/2017",
        isRead: false,
        avatar:
          "https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1",

        attachments: [
          {
            file: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
            name: "ut_nulla_sed.jpeg",
          },
        ],
      },
      {
        id: "761e9fe2-41b6-0000-0000-20e0ecayy00",
        sent: "8:00 am",
        sender: "Keanu Reeves",
        from: "nmulbery1@seattletimes.com",
        subject: "Technical Writer",
        body:
          "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet",
        date: "11/17/2016",
        isRead: true,
        avatar: "https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1",
        attachments: [
          {
            file: "http://dummyimage.com/250x250.jpg/dddddd/000000",
            name: "sodales_scelerisque_mauris.jpeg",
          },
          {
            file: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
            name: "ut_nulla_sed.jpeg",
          },
        ],
      },
    ],
    deleted: [],
    spam: [],
    currentItem: {
      id: "",
      sender: "",
      isRead: "",
      from: "",
      subject: "",
      body: "",
      date: "",
      avatar: "",
      attachments: [],
    },
  },
  reducers: {
    setFilterBy(state, action) {
      state.filterBy = action.payload;
    },
    setCurrentItem(state, action) {
      const {
        id,
        sender,
        isRead,
        from,
        subject,
        body,
        date,
        avatar,
        attachments,
      } = action.payload;
      state.currentItem.id = id;
      state.currentItem.sender = sender;
      state.currentItem.isRead = isRead;
      state.currentItem.from = from;
      state.currentItem.subject = subject;
      state.currentItem.body = body;
      state.currentItem.date = date;
      state.currentItem.avatar = avatar;
      state.currentItem.attachments = attachments;
    },
    sendToDeleted(state, action) {
      state.deleted.push(
        state.inbox.find((mail) => mail.id === action.payload)
      );
      state.inbox = state.inbox.filter((mail) => mail.id !== action.payload);
    },
    sendToSpam(state, action) {
      state.spam.push(state.inbox.find((mail) => mail.id === action.payload));
      state.inbox = state.inbox.filter((mail) => mail.id !== action.payload);
    },
    clearCurrent(state) {
      state.currentItem.id = "";
      state.currentItem.sender = "";
      state.currentItem.isRead = "";
      state.currentItem.from = "";
      state.currentItem.subject = "";
      state.currentItem.body = "";
      state.currentItem.date = "";
      state.currentItem.avatar = "";
      state.currentItem.attachments = [];
    },
    toggleRead(state, action) {
      const { id, change } = action.payload;
      let mail = state.inbox.findIndex((mail) => mail.id === id);
      if (mail >= 0) {
        state.inbox[mail].isRead = !change ? true : false;
      } else {
        mail = state.spam.findIndex((mail) => mail.id === id);
        if (mail >= 0) {
          state.spam[mail].isRead = !change ? true : false;
        } else {
          mail = state.deleted.findIndex((mail) => mail.id === id);
          if (mail >= 0) {
            state.deleted[mail].isRead = !change ? true : false;
          }
        }
      }
    },
    newEmail(state, action) {
      const {
        id,
        sent,
        sender,
        from,
        subject,
        body,
        date,
        isRead,
        avatar,
        attachments,
      } = action.payload;

      state.inbox.unshift({
        id: id,
        sent: sent,
        sender: sender,
        from: from,
        subject: subject,
        body: body,
        date: date,
        isRead: isRead,
        avatar: avatar,
        attachments: attachments,
      });
    },
  },
});

export default mailSlice.reducer;

export const {
  setFilterBy,
  setCurrentItem,
  sendToDeleted,
  sendToSpam,
  clearCurrent,
  toggleRead,
  newEmail,
} = mailSlice.actions;
