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
