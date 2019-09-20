/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { render } from 'react-dom'

import { Form, Field } from 'react-final-form'


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const checkboxes = ['checkbox1', "checkbox2"];
const radios = ['radio1', 'radio2', 'radio3'];
const colors = [
  {value: '#ff0000', label: '❤️ Red'},
  {value: '#00ff00', label: '💚 Green'},
  {value: '#0000ff', label: '💙 Blue'}
];

const mselection = [
  {value: 'chicken', label: '🐓 Chicken'},
  {value: 'ham', label: '🐷 Ham'},
  {value: 'mushrooms', label: '🍄 Mushrooms'},
  {value: 'cheese', label: '🧀 Cheese'},
  {value: 'tuna', label: '🐟 Tuna'},
  {value: 'pineapple', label: '🍍 Pineapple'},
];

const MyModel = () => (
  <div>
    <h1>React Final Form - Simple Example</h1>
    <Form
      onSubmit={onSubmit}
      initialValues={{ vradio: 'radio1', vcheckbox: 'checkbox1', employed: true }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label>Employed</label>
            <Field name="employed" component="input" type="checkbox" />
          </div>
          <div>
            <label>Favorite Color</label>
            <Field name="favoriteColor" component="select">
              <option />
              {
                colors.map(x=>(
                  <option value={x.value}>{x.label}</option>
                ))
              }

            </Field>
          </div>
          <div>
            <label>Toppings</label>
            <Field name="toppings" component="select" multiple>
              { mselection.map(x=>(
                <option value={x.value}>{x.label}</option>

              ))}
            </Field>
          </div>
          <div>
            <label>Checkbox Selection</label>
            <div>
              {checkboxes.map(x=>(
                <label>
                  <Field
                    name="vcheckbox"
                    component="input"
                    type="checkbox"
                    value={x}
                  />{x}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label>Radio Selection</label>
            { radios.map(x=>(
              <label>
                <Field
                  name="vradio"
                  component="input"
                  type="radio"
                  value={x}
                />{x}
              </label>

              ))}
          </div>
          <div>
            <label>Notes</label>
            <Field name="notes" component="textarea" placeholder="Notes" />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  </div>
)
export default MyModel;
