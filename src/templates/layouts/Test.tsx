import React, { useRef, useState } from "react";
// import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
// import { Button, Form, Input } from "antd";

// const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//     sm: { span: 4 },
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//     sm: { span: 20 },
//   },
// };
// const formItemLayoutWithOutLabel = {
//   wrapperCol: {
//     xs: { span: 24, offset: 0 },
//     sm: { span: 20, offset: 4 },
//   },
// };

export default function Test() {
//   const onFinish = (values: any) => {
//     console.log("Received values of form:", values);
//   };

  const [input, setInput] = useState("");
  const [propperties, setPropperties] = useState<any>([]);
  const [data,setData]=useState<any>([]);
  const [inputLabel,setInputLabel]=useState<any>();

  const arr: any = [];
 
  const createAnyState = ()=>{
    for (let index = 0; index < 3; index++) {
        arr.push('');
    }
    for (let index = 0; index < 3; index++) {
        arr[index]=useRef(null)
    }
  }



  const handlePropperties = () => {
    const newArray = [...propperties, input];
    setPropperties(newArray);
  };

//   const handleInputLabel = (a:any)=>{
//     const newArray = [...inputLabel, a];
//     setInputLabel(newArray);
//   }

  const handleSaveData =()=>{
    for (let index = 0; index < 3; index++) {
        console.log("username", arr[index].current.value);
    }
    
  }

  return (
    <div className="test">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handlePropperties}>Add Fill</button>
      <form>
        {propperties.map((pr: any,index:number) =>(<div key={index}>
           
            <label >{pr}</label>
            <input ref={arr[index]}/>
            
            </div>
        ))}
      </form>
      <button onClick={handleSaveData}>Save</button>
      {/* <Form
        name="dynamic_form_item"
        {...formItemLayoutWithOutLabel}
        onFinish={onFinish}
      >
        <Form.List
          name="names"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error("At least 2 passengers"));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  {...(index === 0
                    ? formItemLayout
                    : formItemLayoutWithOutLabel)}
                  label={index === 0 ? "Passengers" : ""}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message:
                          "Please input passenger's name or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                    <Input
                      placeholder="passenger name"
                      style={{ width: "60%" }}
                    />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: "60%" }}
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
                <Button
                  type="dashed"
                  onClick={() => {
                    add("The head item", 0);
                  }}
                  style={{ width: "60%", marginTop: "20px" }}
                  icon={<PlusOutlined />}
                >
                  Add field at head
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */}
    </div>
  );
}
