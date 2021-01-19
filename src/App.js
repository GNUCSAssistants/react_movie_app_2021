const foodILike = [
  {
    name: "kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg",
  },
  {
    name: "pork",
    image:
      "https://cafedelites.com/wp-content/uploads/2018/05/Honey-Garlic-Pork-Chops-IMAGE-56.jpg",
  },
  {
    name: "ramen",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1200px-Shoyu_Ramen.jpg",
  },
];

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img height="100" src={picture} alt={name}></img>
    </div>
  );
};

function renderFood(dish){
  return <Food name={dish.name} picture={dish.image}/>
}

function App() {
  return (
    <div className="App">
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
