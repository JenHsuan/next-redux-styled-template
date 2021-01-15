import Head from 'next/head';
import ReduxTester from '../components/ReduxTester';
import { wrapper } from "../components/store/store";

import {
  getUsers,
  getData
} from "../components/actions/action";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <ReduxTester/>
    </div>
  )
}

//const getStaticProps = wrapper.getStaticProps
export const getServerSideProps = wrapper.getServerSideProps(
  async({store, preview}) => {
    store.dispatch(getData());
    await store.dispatch(getUsers());
  }
);

