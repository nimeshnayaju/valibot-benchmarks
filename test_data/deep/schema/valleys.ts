import { object, or, string, number } from "valleys";

export default object({
  a: object({
    b: object({
      c: object({
        d: object({
          e: object({
            f: object({
              g: object({
                h: object({
                  i: object({
                    j: object({
                      k: object({
                        l: object({
                          m: object({
                            n: object({
                              o: object({
                                p: object({
                                  q: object({
                                    r: object({
                                      s: object({
                                        t: object({
                                          u: object({
                                            v: object({
                                              w: object({
                                                x: object({
                                                  y: object({
                                                    z: or([string(), number()]),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    }),
  }),
});
