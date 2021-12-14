const PORT = 3000;

const sendData = async (data) => {
  await fetch(`https://ericjlie-hackreactor-checkout.herokuapp.com/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response);
}

export default sendData;