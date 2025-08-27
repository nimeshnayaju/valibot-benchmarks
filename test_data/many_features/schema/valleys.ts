import {
  object,
  string,
  number,
  array,
  or,
  constant,
  undefined_,
} from "valleys";

export default object({
  one: array(
    object({
      items: array(
        object({
          val: or([constant("hello"), constant("world"), undefined_()]),
          str: string({ minLength: 2, maxLength: 5 }),
          num: number({ min: 100, max: 200 }),
        })
      ),
    })
  ),
});
