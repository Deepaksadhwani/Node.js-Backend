/*   zod is used to validation of data type make skip the process of type checking and conditional
statement of logic,   it checks the validation for us    */

// zod super helpful to show error response to user on ui

// if client  does not send anything in body it gives array like this =>  {"response":{"success":false,"error":{"issues":[{"code":"invalid_type","expected":"array","received":"undefined","path":[],"message":"Required"}],"name":"ZodError"}}}

const express = require("express");
const app = express();
const zod = require("zod");

const schema = zod.array(zod.number());


//allow us to parse body data of req of post method
app.use(express.json());

app.post("/healthy-checkup", (req, res) => {
  const kidney = req.body.kidneys;
  const response = schema.safeParse(kidney);

  if (response.success) {
    res.status(200).send(`length of kidney is ${response.data.length}.`);
    return;
  }
  res.status(411).send({
    response,
  });
});

app.listen(3000);



// example of zod with object with vanilla javascript

/* validation check for
{
email: string => email
password: at least 8 letters
}

in zod we can achieve this
*/
//  just example

const z = require("zod");

function validate(obj) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

const response = schema.safeParse(obj);
console.log(response);

}

validate({
  email: "deepak@gmail.com",
  password: "sjeofjosifjoie",
});
