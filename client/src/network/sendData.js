const PORT = 3000;

const sendData = async (data) => {
  await fetch(`http://localhost:80/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response);
}

export default sendData;