import React from 'react'
import {setModal, setAlert} from 'actions';
import {color, size, helper, grid} from 'utilities/types'
import Button from 'reusable/UI/Button'
import Tag from 'reusable/UI/Tag'
import Progress from 'reusable/UI/Progress'
import Card from 'reusable/UI/Card'
import Image from 'reusable/UI/Image'
import Grid from 'reusable/UI/Grid'
import {TEST} from 'utilities/modals'

const footer = [
  <a>Save</a>,
  <a>Edit</a>,
  <a>Delete</a>,
]

export default () =>
  <div>
    <Grid>
      <div>
        <Button
          className={helper.fullwidth}
          title="loading"
          color={color.warning}
          isLoading
        />
      </div>
      <div>
        <Button
          className={helper.fullwidth}
          title="inverted disabled"
          color={color.success}
          isInverted
          disabled
        />
      </div>
      <div>
        <Button
          className={helper.fullwidth}
          title="focused"
          color={color.info}
          isFocused
        />
      </div>
      <div>
        <Button
          className={helper.fullwidth}
          title="test modal"
          color={color.primary}
          onClick={_ => setModal({
            modal: TEST,
          })}
        />
      </div>
      <div>
        <Button
          className={helper.fullwidth}
          title="test alert"
          isOutlined
          color={color.danger}
          onClick={_ => setAlert({
            body: 'this is a strong error',
            modifier: color.danger,
          })}
        />
      </div>
    </Grid>
    <Grid>
      <div className={grid.threeQuarter}>
        I am 3/4
        <Tag
          className={helper.fullwidth}
          title="test click"
          color={color.danger}
          onClick={e => console.log(e)}
        />
      </div>
      <div>
        So I am 1/4
        <Tag
          className={helper.fullwidth}
          title="test click"
          color={color.primary}
        />
      </div>
    </Grid>
    <Grid>
      <div>
        <Progress
          value={200}
          max={1000}
          color={color.primary}
          size={size.small}
        />
      </div>
      <div>
        <Progress
          value={50}
          max={100}
          color={color.info}
        />
      </div>
      <div>
        <Progress
          value={400}
          max={1000}
          color={color.warning}
          size={size.large}
        />
      </div>
      <div>
        <Progress
          value={90}
          max={100}
          color={color.danger}
          size={size.large}
        />
      </div>
    </Grid>
    <Grid>
      <div>
        <Card
          img={
            <Image
              size="4by3"
              src="http://bulma.io/images/placeholders/1280x960.png"
            />
          }
          initialState
          headerTitle="coucou"
          footer={footer}
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
            <br />
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </Card>
      </div>
      <div>
        <Card>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
            <br />
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </Card>
      </div>
      <div>
        <Card
          img={
            <Image
              size="4by3"
              src="http://bulma.io/images/placeholders/1280x960.png"
            />
          }
          headerTitle="coucou"
          footer={footer}
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
            <br />
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </Card>
      </div>
      <div>
        <Card>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
            <br />
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </Card>
      </div>
    </Grid>
  </div>
