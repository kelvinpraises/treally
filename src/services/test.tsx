// // CustomerForm.tsx
// import Dexie from "dexie";
// import { useLiveQuery } from "dexie-react-hooks";
// import type { FC } from "react";
// import { useState } from "react";
// import database from "./contacts-db";

// export interface ICustomer {
//   id: number;
//   name: string;
//   dept: number;
// }

// const CustomerForm: FC = () => {
//   const createCustomer = async (event: any) => {
//     event.preventDefault();
//     const customer: ICustomer = {
//       name: event.target.name.value,
//       dept: Number(event.target.dept.value),
//       id: 0,
//     };
//     try {
//       // Add the new customer!
//       const id = await customerTable.add(customer);
//       console.info(`A new customer was created with id ${id}`);
//       event.target.reset();
//     } catch (error) {
//       console.error(`Failed to add ${customer}: ${error}`);
//     }
//   };

//   return (
//     <div>
//       <h1>Create customer</h1>
//       <form onSubmit={createCustomer}>
//         <label htmlFor="name">Name:</label>
//         <br />
//         <input type="text" id="name" name="name" />
//         <br />
//         <br />
//         <label htmlFor="dept">Dept:</label>
//         <br />
//         <input type="number" id="dept" name="dept" />
//         <br />
//         <br />
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// };

// const CustomersList: FC = () => {
//   const [lower, setLower] = useState(0);
//   const [upper, setUpper] = useState(10000);
//   useLiveQuery(
//     () => customerTable.where("dept").between(lower, upper).toArray(),
//     [lower, upper]
//   );

//   return (
//     <div>
//       <h1>Customers</h1>
//       lower:{" "}
//       <input
//         type="number"
//         value={lower}
//         onChange={(e) => setLower(Number(e.target.value))}
//       />{" "}
//       & upper:{" "}
//       <input
//         type="number"
//         value={upper}
//         onChange={(e) => setUpper(Number(e.target.value))}
//       />
//       <ul>
//         {customer?.map((customer) => (
//           <li key={customer.id}>
//             {customer.name}, {customer.dept}$
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export{}