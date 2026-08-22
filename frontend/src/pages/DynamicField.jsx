
import React from 'react'

const DynamicField = () => {


    return (
        <div className='container'>
            <h2>Dynamic Skills Form</h2>

            <form action="">

                <div>
                    <input type="text" placeholder='add skilss...' />

                    <button>❌</button>
                </div>

                <div className='btn.container'>
                    <button></button><button></button>
                </div>


            </form>
        </div>
    )
}

export default DynamicField














// import React, { useState } from "react";
// import { useForm, useFieldArray } from "react-hook-form";
// import "../styles/dynamicfield.scss"
// export default function SkillsForm() {
//   const [submittedSkills, setSubmittedSkills] = useState([]);

//   const {
//     register,
//     control,
//     handleSubmit,
//     reset,
//     formState: { errors }
//   } = useForm({
//     defaultValues: {
//       skills: [{ value: "" }]
//     }
//   });

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "skills"
//   });

//   const onSubmit = (data) => {
//     const skills = data.skills.map((item) => item.value);

//     setSubmittedSkills(skills);

//     console.log(data);

//     reset({
//       skills: [{ value: "" }]
//     });
//   };

//   return (
//     <div className="container">
//       <h2>Dynamic Skills Form</h2>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         {fields.map((field, index) => (
//           <div className="input-group" key={field.id}>
//             <div>
//               <input
//                 type="text"
//                 placeholder="Enter Skill"
//                 {...register(`skills.${index}.value`, {
//                   required: "Skill is required",
//                   minLength: {
//                     value: 2,
//                     message: "Minimum 2 characters required"
//                   }
//                 })}
//               />

//               {errors.skills?.[index]?.value && (
//                 <p className="error">
//                   {errors.skills[index].value.message}
//                 </p>
//               )}
//             </div>

//             <button
//               type="button"
//               className="remove-btn"
//               onClick={() => remove(index)}
//               disabled={fields.length === 1}
//             >
//               Remove
//             </button>
//           </div>
//         ))}

//         <div className="btn-container">
//           <button
//             type="button"
//             className="add-btn"
//             onClick={() => append({ value: "" })}
//           >
//             Add Skill
//           </button>

//           <button
//             type="submit"
//             className="submit-btn"
//           >
//             Submit
//           </button>
//         </div>
//       </form>

//       {submittedSkills.length > 0 && (
//         <div className="list-container">
//           <h3>Submitted Skills</h3>

//           <ul>
//             {submittedSkills.map((skill, index) => (
//               <li key={index}>
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }