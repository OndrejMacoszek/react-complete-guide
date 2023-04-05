import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image={
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/BudapestMontage.jpg"
      }
      title={"A First Meetup"}
      address={"Some adress 123, 654 Some city"}
      decription={"The first meetup description"}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d6/BudapestMontage.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some adress 123, 654 Some city",
        description: "The first meetup description",
      },
    },
  };
}

export default MeetupDetails;
