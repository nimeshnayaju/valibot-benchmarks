import * as z from "zod";

export default z.object({
  one: z.array(
    z.object({
      items: z.array(
        z.object({
          val: z.union([z.literal("hello"), z.literal("world")]).optional(),
          str: z.string().min(2).max(5),
          num: z.number().min(100).max(200),
        })
      ),
    })
  ),
});
