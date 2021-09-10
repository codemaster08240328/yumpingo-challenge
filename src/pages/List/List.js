import React from 'react'
import Page from '../../components/Page'
import Card from '../../components/Card'

const List = () => (
  <div className="flex relative h-full">
    <div className="overflow-scroll flex-1">
      <Page title="Master/Detail">
        <Card>
          <p><strong>TASK 2</strong>: here goes the list of available restaurants</p>

          <ul>
            <li>1. Fetch the data</li>
            <li>2. Write your table/list component to display the data</li>
            <li>3. Write the business logic of selecting an item and display its detail</li>
          </ul>
        </Card>
      </Page>
    </div>
    <aside className="flex-2 bg-white shadow max-w-sm w-full py-6 px-4 overflow-scroll">
      <p>
        <strong>TASK 2</strong>:
        You want to display the detail of the selected item here
      </p>
      <br />
      <p><strong>TASK 3</strong>: You want to enable the editing of a restaurant detail. <br />
        Edit doesn't need to persist, it's fine to see the old data if page is refreshed.</p>
    </aside>
  </div>
)

export default React.memo(List)
