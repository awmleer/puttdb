import {PuttClient} from '../../src/client/putt-client';
import {ObservableDocument, ObservableDocumentChange} from "../../src/common/observable-document";

require('source-map-support').install();

const putt = new PuttClient('http://localhost:3000');
putt.connect().then(() => {
  putt.subscribe('5af42dee0dcefe76670de405').then((od: ObservableDocument) => {
    // od.value['a'] = 1;
    console.log(od.json);
  });
});





// let od = new ObservableDocument({
//   temperature: 1,
//   count: {
//     a: 0,
//     b: 0
//   }
// });

// console.log(od.value);
//
// let subscription = od.changeSubject.subscribe((change:ObservableDocumentChange)=>{
//   console.log(change);
// });
//
// od.value['count']['b'] = 2;
// console.log(od.value);



