import MeetupList from "../components/meetups/MeetupList";

const dummyMeetups = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "some address, 5, some city",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "some address, 5, some city",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "some address, 5, some city",
    description: "This is a third meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={dummyMeetups} />;
};

export default HomePage;
