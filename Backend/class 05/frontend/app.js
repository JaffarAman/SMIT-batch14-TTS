const getApi = async () => {
  const data = await fetch(`http://localhost:5000/getuser`).then((res) =>
    res.json()
  );
  console.log("api calling", data);
};

getApi();
