import replyReactionHandler from '@socket/handler/reply-reaction-handler';
import eventName from '@constants/event-name';

const messageReactionEvent = (io, socket) => {
  socket.on(eventName.CREATE_REPLY_REACTION, (replyReaction) => replyReactionHandler.createReplyReaction(io, socket, replyReaction));
};

export default messageReactionEvent;
