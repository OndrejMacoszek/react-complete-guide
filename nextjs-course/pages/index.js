import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/BudapestMontage.jpg",
    address: "123",
    description: "this is a first meetup",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/BudapestMontage.jpg",
    address: "456",
    description: "this is a second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //useful when working with authentication etc.
//   //for data that changes very often(every second and revalidate cant help us) and we need access to req and res object, but is slower than static props, that is faster because it could be cached and reused instead of regenerated every time
//   //will run always on the server after the deplyment
//   //fetch data
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  //fetch data from API
  return {
    props: { meetups: DUMMY_MEETUPS },
    revalidate: 1,
  };
}

export default HomePage;
