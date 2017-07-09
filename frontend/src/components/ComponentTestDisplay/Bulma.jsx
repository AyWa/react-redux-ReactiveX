import React from 'react'
import {setModal, setAlert} from 'actions';
import {color, size, helper, grid} from 'utilities/types'
import Button from 'reusable/UI/Button'
import Tag from 'reusable/UI/Tag'
import Progress from 'reusable/UI/Progress'
import Card from 'reusable/UI/Card'
import Image from 'reusable/UI/Image'
import Grid, {Column} from 'reusable/UI/Grid'
import Hero from 'reusable/Layout/Hero'
import Section from 'reusable/Layout/Section'
import Title from 'reusable/UI/Title'
import {TEST} from 'utilities/modals'

const footer = [
  <a>Save</a>,
  <a>Edit</a>,
  <a>Delete</a>,
]

export default () =>
  <div>
    <Hero isFluid color={color.primary}>
      <Title>
        <h1>
          Bulma
        </h1>
      </Title>
      <Title isSubtitle>
        <h2>
          Test component
        </h2>
      </Title>
    </Hero>
    <Section>
      <Grid>
        <Column>
          <Button
            className={helper.fullwidth}
            title="loading"
            color={color.warning}
            isLoading
          />
        </Column>
        <Column>
          <Button
            className={helper.fullwidth}
            title="inverted disabled"
            color={color.success}
            isInverted
            disabled
          />
        </Column>
        <Column>
          <Button
            className={helper.fullwidth}
            title="focused"
            color={color.info}
            isFocused
          />
        </Column>
        <Column>
          <Button
            className={helper.fullwidth}
            title="test modal"
            color={color.primary}
            onClick={_ => setModal({
              modal: TEST,
            })}
          />
        </Column>
        <Column>
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
        </Column>
      </Grid>
      <Grid>
        <Column className={grid.threeQuarter}>
          I am 3/4
          <Tag
            className={helper.fullwidth}
            title="test click"
            color={color.danger}
          />
        </Column>
        <Column>
          So I am 1/4
          <Tag
            className={helper.fullwidth}
            title="test click"
            color={color.primary}
          />
        </Column>
      </Grid>
      <Grid>
        <Column>
          <Progress
            value={200}
            max={1000}
            color={color.primary}
            size={size.small}
          />
        </Column>
        <Column>
          <Progress
            value={50}
            max={100}
            color={color.info}
          />
        </Column>
        <Column>
          <Progress
            value={400}
            max={1000}
            color={color.warning}
            size={size.large}
          />
        </Column>
        <Column>
          <Progress
            value={90}
            max={100}
            color={color.danger}
            size={size.large}
          />
        </Column>
      </Grid>
      <Grid>
        <Column>
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
        </Column>
        <Column>
          <Card>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
              <br />
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </Card>
        </Column>
        <Column>
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
        </Column>
        <Column>
          <Card>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
              <br />
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </Card>
        </Column>
      </Grid>
    </Section>
  </div>
