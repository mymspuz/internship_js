let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

// Т.к. не желательно вносить изменения в структуру данных - мы будем хранить объект сообщения как ключ, а значение - дата.
// Когда будет удален сам объект - удалиться ключ, а значит и значение.
let dateReadMessages = new WeakSet();

dateReadMessages.set(messages[0], new Date(23, 2, 20));