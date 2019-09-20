const checkboxes = ['checkbox1', "checkbox2"];
const radios = ['radio1', 'radio2', 'radio3'];


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
