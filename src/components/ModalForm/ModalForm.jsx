import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCalendar } from "react-icons/ai";
import css from "./ModalForm.module.css";
const schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!")
    .min(2, "Name must be at least 2 characters")
    .max(30, "Too long characters!"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email")
    .matches(/^[^@]+@[^@]+\.[^@]+$/, "Email must be valid"),
  bookingDate: Yup.date()
    .required("Booking date is required")
    .min(new Date(), "Booking date cannot be in the past"),
  comment: Yup.string().max(500, "Too long characters!"),
});
const Form = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      bookingDate: new Date(),
      comment: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    try {
      handleSubmit(data);
      reset();
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.formTitle}>Book your campervan now</h2>
      <p className={css.formDescr}>
        Stay connected! We are always ready to help you.
      </p>
      <label className={css.label}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              className={css.formInput}
              type="text"
              {...field}
              placeholder="Name"
            />
          )}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </label>
      <label className={css.label}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              className={css.formInput}
              type="email"
              {...field}
              placeholder="Email"
            />
          )}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </label>
      <label className={css.label}>
        <Controller
          name="bookingDate"
          control={control}
          render={({ field }) => (
            <div className={css.datePickerWrapper}>
              <DatePicker
                className={css.formInput}
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                placeholderText="Booking date"
                dateFormat="dd/MM/yyyy"
              />
              <AiOutlineCalendar className={css.calendarIcon} />
            </div>
          )}
        />
        {errors.bookingDate && <span>{errors.bookingDate.message}</span>}
      </label>
      <label className={css.label}>
        <Controller
          name="comment"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <textarea
              className={css.formTextArea}
              {...field}
              placeholder="Comment"
            />
          )}
        />
      </label>
      <button className={css.formBtn} type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
