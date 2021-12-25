const POST_URL = "http://dreambox.1gb.ru/api/addtask.php";
const GET_URL = "http://dreambox.1gb.ru/api/tasks.php";
const DELETE_URL = "http://dreambox.1gb.ru/api/deletetask.php";
const UPDATE_URL = "http://dreambox.1gb.ru/api/updatetask.php";
const UDEMI_GET_COURSES =
  "https://www.udemy.com//api-2.0/courses/?page=1&page_size=3&price=price-free&ordering=highest-rated";

const GOALS = [
  {
    title: "start-up",
    text: "launch my own start-up in one year and get the first paying customer",
    deadline: "2022-10-31",
  },
  {
    title: "weight",
    text: "be strong - lift 100kg",
    deadline: "2022-10-31",
  },
];

export { GET_URL, POST_URL, DELETE_URL, UPDATE_URL, UDEMI_GET_COURSES, GOALS };
