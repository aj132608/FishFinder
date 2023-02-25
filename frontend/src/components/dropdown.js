import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';


// normal usage
<Dropdown
  placeholder="Select a Season"
  className="dropdown-season"
  options={['Summer', 'Winter', 'Spring', 'Fall']}
  value="Summer"
  onChange={(value) => console.log('change!', value)}
  onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
  onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
  onOpen={() => console.log('open!')}
/>;

<Dropdown
    placeholder="Select a Weather Condition"
    className="dropdown-weather"
    options={['Sun', 'Rain', 'Wind']}
    value="Sun"
/>;

// use the Selection component with other components like popovers etc.
{/* <Selection
  options={['one', 'two', 'three']}
  value="one"
  onChange={(value) => console.log('change!', value)}
/>; */}
