import * as Yup from "yup";

export const formValues = {
  model: "",
  brand: "",
  frets: "",
  woodtype: "",
  description: "",
  price: "",
  available: "",
  shipping: false,
};

export const validation = () =>
  Yup.object({
    model: Yup.string().required("A model is required"),
    brand: Yup.string().required("A brand is required"),
    frets: Yup.number()
      .required("A fret # is required")
      .oneOf([20, 21, 22, 24], "Only 20, 21, 22, 24 frets allowed"),
    woodtype: Yup.string().required("A woodtype is required"),
    description: Yup.string().required("A description is required"),
    price: Yup.number()
      .required("A price is required.")
      .min(1, "Must be at least $1")
      .max(10000, "$10,000 is the maximum allowed"),
    available: Yup.number().required("Is this product in stock?"),
    shipping: Yup.boolean().required("Do we offer shipping?"),
  });
