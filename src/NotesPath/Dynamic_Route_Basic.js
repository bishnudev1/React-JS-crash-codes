import {BrowserRouter as Router, Link} from 'react-router-dom';

function DynamicRoutes() {

  let users = [
    {id:1, name:'Bishnudev', email:'Bishnudevkhutia@gmail.com'},
    {id:2, name:'Esita', email:'Esitamaity@gmail.com'},
    {id:3, name:'Sayantika', email:'Sayantikakhanra@gmail.com'},
    {id:4, name:'Debasmita', email:'Debasmitamaity@gmail.com'},
    {id:5, name:'Sastik', email:'Sastikkumardas@gmail.com'}
  ]

  //By normal href method

//   return (
//     <div className="App">
//         {
//           users.map((item)=>
//           <>
//             <a href={"/user/"+item.id}><h3>{item.name}</h3></a>
//           </>)
//         }
//     </div>
//   );
// }

  //By router dom method

return (
  <div className="App">
      {
        users.map((item)=>
        <>
        <Router>
          <Link to={"/user/"+item.id}><h3>{item.name}</h3></Link>
          </Router>
        </>)
      }
  </div>
);
}

export default DynamicRoutes;
