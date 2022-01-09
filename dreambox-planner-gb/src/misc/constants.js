const POST_URL = "http://dreambox.1gb.ru/api/addtask.php";
const GET_URL = "http://dreambox.1gb.ru/api/tasks.php";
const DELETE_URL = "http://dreambox.1gb.ru/api/deletetask.php";
const UPDATE_URL = "http://dreambox.1gb.ru/api/updatetask.php";
const UDEMI_GET_COURSES =
  "https://www.udemy.com//api-2.0/courses/?page=1&page_size=6&price=price-free&ordering=highest-rated";

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
const TASK_WITH_GOALS = [
  {
    id: 1,
    title: "weight 1",
    text: "weight 1",
    deadline: null,
    status: "active",
    goal: "weight"
  },
  {
    id: 2,
    title: "weight 2",
    text: "weight 2",
    deadline: null,
    status: "active",
    goal: "weight"
  },
  {
    id: 3,
    title: "start-up1",
    text: "start-up1",
    deadline: null,
    status: "active",
    goal: "start-up"
  },
  {
    id: 4,
    title: "start-up2",
    text: "start-up2",
    deadline: null,
    status: "active",
    goal: "start-up"
  },

]
export { GET_URL, POST_URL, DELETE_URL, UPDATE_URL, UDEMI_GET_COURSES, GOALS, TASK_WITH_GOALS };
