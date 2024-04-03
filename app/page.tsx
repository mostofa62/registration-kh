"use client";
import Image from "next/image";
import {Formik, Form, Field, yupToFormErrors, validateYupSchema} from 'formik';
import userSchema from "@/app/validationschema/userSchema";
import SelectNonCreatableComponent from "@/app/components/SelectNonCreatableComponent";
import countries from "@/app/json/countries.json"

export default function Home() {


  const user={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    location:{label:'',value:''}
  }

  const handleFormSubmit = async(values:any)=>{
    alert(JSON.stringify(values))
    //alert(values)
  }

  return (
    <div className="w-full flex flex-wrap">
      
      <div className="w-full md:w-1/2 flex flex-col">
    {
      <div className="flex justify-center md:justify-start relative top-5 left-[44%]  ">
                <a href={""} className="bg-black text-white font-bold text-xl p-4">Logo</a>
      </div>
  }
      <div className="flex flex-col justify-center md:justify-start my-[8%]  md:pt-0 px-8 md:px-24 lg:px-32">
      <p className="text-center text-2xl">Join Us.</p> 
      <Formik
        initialValues={{ user }}
        /*validationSchema={userSchema}*/
        validateOnChange={false}
        validateOnBlur={false}
        validate={async (value) => {
          
          try {
            await validateYupSchema(value, userSchema, false, {'newentry':'1'});
          } catch (err) {
            console.log(err);
            return yupToFormErrors(err); //for rendering validation errors
          }
        
          return {};
        }}

        onSubmit={handleFormSubmit}

        render={({isValid, isSubmitting,values,errors, touched, setFieldValue, setFieldTouched})=>(
<Form className="flex flex-col pt-1 md:pt-1" >


<div className="flex flex-col pt-3">
  <label  className="text-md">First Name</label>
  <Field 
      className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 mt-0 leading-tight focus:outline-none focus:shadow-outline text-sm"
      name="user.firstName" placeholder="First Name" />
      {errors.user &&
                                        
                                        errors.user.firstName &&
                                        touched.user &&
                                        
                                        touched.user.firstName && ( 
                                            <span className="mt-1 text-sm font-semibold text-[#B45454]">
                                                {errors.user.firstName}
                                            </span>   
                                        )}
                        
                        
</div>


<div className="flex flex-col pt-3">
  <label  className="text-md">Last Name</label>
  <Field 
      className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 mt-0 leading-tight focus:outline-none focus:shadow-outline text-sm"
      name="user.lastName" placeholder="Last Name" />
      {errors.user &&
                                        
                                        errors.user.lastName &&
                                        touched.user &&
                                        
                                        touched.user.lastName && ( 
                                            <span className="mt-1 text-sm font-semibold text-[#B45454]">
                                                {errors.user.lastName}
                                            </span>   
                                        )}
                        
                        
</div>


<div className="flex flex-col pt-3">
  <label  className="text-md">Email</label>
  <Field
      className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 mt-0 leading-tight focus:outline-none focus:shadow-outline text-sm"
      name="user.email" placeholder="Email" />
      {errors.user &&
                                        
                                        errors.user.email &&
                                        touched.user &&
                                        
                                        touched.user.email && ( 
                                            <span className="mt-1 text-sm font-semibold text-[#B45454]">
                                                {errors.user.email}
                                            </span>   
                                        )}
                        
                        
</div>


<div className="flex flex-col pt-3">
  <label  className="text-md">Phone</label>
  <Field
      className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 mt-0 leading-tight focus:outline-none focus:shadow-outline text-sm"
      name="user.phone" placeholder="Phone" />
      {errors.user &&
                                        
                                        errors.user.phone &&
                                        touched.user &&
                                        
                                        touched.user.phone && ( 
                                            <span className="mt-1 text-sm font-semibold text-[#B45454]">
                                                {errors.user.phone}
                                            </span>   
                                        )}
                        
                        
</div>


<div className="flex flex-col pt-3">
  <label  className="text-md">Location</label>
  <SelectNonCreatableComponent defaultValueArray={{label:'',value:''}}
                                 placeholder="select your Location"
                                 isSearchable
                                 isClearable                                 
                                  name="user.location" options={countries}
                                  onParentChange={(value:any,label:any)=>{

                                  }}
                                  
                      />
       {errors.user &&
                                        
                                        errors.user.location &&
                                        touched.user &&
                                        
                                        touched.user.location && ( 
                                            <span className="mt-1 text-sm font-semibold text-[#B45454]">
                                                {errors.user.location.label}
                                            </span>   
                                        )}
                        
                        
</div>


<button 
 type="submit"
 disabled={isSubmitting}
 className="bg-black text-white font-bold text-md hover:bg-gray-700 p-2 mt-5">
  Register
</button>

</Form>


          )} 
          />
</div>
      </div>

      <div className="w-1/2 shadow-2xl">
            <Image className="object-cover w-full h-screen hidden md:block" width={1200} height={2500} src="https://source.unsplash.com/IXUM4cJynP0" alt="Background" />
      </div>

    </div>
  );
}
