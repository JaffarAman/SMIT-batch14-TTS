const Header = () => {
  //   const foo = (toggle) => {
  //     console.log("foo", toggle);
  //   };

  //   const foo2 = (event) => {
  //     console.log("hello", event.target);
  //   };

  const greet = (username, event) => {
    console.log("HELLO " + username);
    console.log("event", event.target);
  };

  const foo = (event) => {
    console.log("event" ,event.target)
  };
  return (
    <>
      <h1>Header</h1>
      <h1>HELLO WORLD</h1>
      {/* <button
        onClick={() => {
          foo("btn1");
        }}
      >
        CLICK 1
      </button> */}

      {/* <button onClick={foo}>CLICK 1</button>
      <button
        onClick={() => {
          foo("btn2");
        }}
      >
        CLICK 2
      </button> */}
      {/* 
      <button onClick={foo2}> EVENT BTN </button>

      <button onClick={(event) => foo2(event)}> EVENT BTN </button> */}

      {/* <button onClick={greet}>GREET</button> */}

      {/* Passing Arguments */}
      <button onClick={(event) => greet("Jaffar", event)}>GREET</button>
      <button onClick={foo}>Foo</button>
    </>
  );
};

export default Header;
