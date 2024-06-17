export const isUrl = (url: string) => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

  return urlRegex.test(url);
};

export const reArrangeConversation = (
  messages: { role: string; content: string }[]
) => {
  const result = [];

  for (const message of messages) {
    if (message.content) {
      result.push(message);
    }
  }

  return result;
};
