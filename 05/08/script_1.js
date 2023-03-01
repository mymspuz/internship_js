let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let isRead = new WeakSet(); // можно использовать WeakMap если предусмотреть, что могут быть одинаковые сообщения от того же пользователя

isRead.add(messages[0])

isRead.has(messages[0])