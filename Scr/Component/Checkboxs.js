import * as React from 'react';
import { Checkbox } from 'react-native-paper';

const Checkboxs = (props) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox 
      // status={"checked"}
      status={props?.check ? "checked" :"unchecked"}
     color="#f72585" 
      onPress={() => {
        // setChecked(!checked),
        props.selectFuns(props.testallergy,props?.check)
      }}
    />
  );
};

export default Checkboxs;