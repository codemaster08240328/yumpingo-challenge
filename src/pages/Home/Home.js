import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../../components/Page'
import Card from '../../components/Card/Card'
import fetchUser from '../../services/fetchUser'
import TakeABeer from '../../components/TakeABeer'
import useAsyncFetch from '../../hooks/useAsyncFetch'
import UserCard from '../../pageComponents/userCard';

/**
 * The home page
 */
const Home = () => {
  const { isFetching, data, error } = useAsyncFetch(fetchUser);

  return (
    <Page>
      <Card title="⭐️ Welcome to your Yumpingo Tech Challenge">
        <p>
          Hi 👋 and welcome to your Yumpingo Technical Challenge.
        </p>
        <p>
          Yumpingo is a data-driven award-winning platform that helps restaurant leaders to take better decisions, faster, and with a
          complete certainty of how to optimize customer satisfaction across their business at location, shift, server and dish level.<br />
          Yumpingo is seen as a game-changer in the industry and we're happy you applied to be part of our big team.
        </p>
        <p>
          The tech challenge is designed to understand the candidate's knowledge of basic Javascript principles as well as the React
          ecosystem.<br />
          The challenge divides into 3 main tasks:
        </p>
      </Card>

      <Card title="TASK 1">
        <p>
          Have a look at the current page's code, you will notice the following data arrives from a (mocked) API and are saved in the
          current component's state.
        </p>

        <UserCard user={data} isFetching={isFetching} error={error} />

        <p className="font-semibold">
          Rewrite the <code>fetchUser()</code> function to fetch "real" data from the following url:&nbsp;
          <code>https://random-data-api.com/api/users/random_user</code><br />
          Then use a state manager to save and brought the data to the component.
        </p>
        <i className="text-sm">👉 Tip: (We have installed Redux and redux-thunks for you, but any other state manager will do) 👈</i>
      </Card>

      <Card title="TASK 2">
        <p>
          Write the body of the <code>fetchRestaurants()</code> function so that it fetches the list of available restaurants from
          the following url:&nbsp;
          <code>https://random-data-api.com/api/restaurant/random_restaurant?size=10</code><br />
        </p>
        <p>
          Then use the retrieved data to create the <Link to="/list">master/detail page</Link>
        </p>
        <i className="text-sm">
          👉 Tip: (You already have a state manager so you might want to use it to keep your restaurants data) 👈
        </i><br />
        <i className="text-sm">👉 Pro tip: (You might want to use the router to get the selected item id) 👈</i>
      </Card>

      <Card title="TASK 3">
        <p>Given the created <Link to="/list">master/detail page</Link>, give the user the possibility to edit the detail of your restaurants:</p>
        <p>Once the user changes an entry into the detail view, inform the store so that the change is reflected into the master view</p>
      </Card>

      <Card title="BONUS TASK">
        <p>Well it is a good practice... just test your components. <br />
          You don't need to test all of them, just show us you care about it.</p>
      </Card>

      <div className="my-12">
        <p>Thank you for your time, we know job interviews sometimes take time for this we tried to keep our challenge
          as small as possible. Hope you had fun.</p>
        <p>Please give us any feedback you like... </p>
        <TakeABeer />
      </div>
    </Page>
  )
}

export default React.memo(Home)
