import * as React from 'react'
import Select, { NativeChild, Option } from '@material/react-select';

export class TestTypeCheck extends React.Component<{}, {}> {
  render() {
    return <div>

      <Select>
        <Option value={-1} disabled/>
        {[ 1, 2, 3, 4, 5, 6 ].map( val => <Option value={val} key={val}>{val}</Option> )}
      </Select>

      <Select>
        <Option value={-1} disabled/>
        {/**/}
        {[ 1, 2, 3, 4, 5, 6 ].map( val => <Option value={val} key={val}>{val}</Option> )}
      </Select>

      <Select>
        <Option value={-1} disabled/>
        {Array.from( Array( 10 ).keys() ).map( val => <Option value={val} key={val}>{val}</Option> )}
      </Select>

      <Select>
        <Option value={-1} disabled/>
        {/**/}
        {Array.from( Array( 10 ).keys() ).map( val => <Option value={val} key={val}>{val}</Option> )}
      </Select>

      <Select>
        {Array( 10 ).fill( {} ).map( ( _, index ) =>
          <Option value={index}>{index}</Option> )}
        {/**/}
        {1 === 1 ? <Option value='-1'>someValue</Option> : null as NativeChild[]}
      </Select>

    </div>
  }
}