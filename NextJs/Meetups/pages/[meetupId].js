import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../components/meetups/MeetupDetail";
import Head from "next/head";
import { Fragment } from "react";

const MeetupDetailsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        alt={props.meetupData.title}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://testAdmin123:testAdmin123@cluster0.hioqsee.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map((m) => ({ params: { meetupId: m._id.toString() } })),
  };
};

export const getStaticProps = async (context) => {
  const client = await MongoClient.connect(
    "mongodb+srv://testAdmin123:testAdmin123@cluster0.hioqsee.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(context.params.meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        ...selectedMeetup,
        _id: selectedMeetup._id.toString(),
      },
    },
  };
};

export default MeetupDetailsPage;
